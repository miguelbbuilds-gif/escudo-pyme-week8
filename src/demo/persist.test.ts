import { describe, expect, it } from 'vitest'
import { INITIAL_ACTIONS } from '../data/framework'
import {
  DEMO_STORAGE_KEY,
  loadDemoSnapshot,
  markActionCompleteInList,
  parseDemoSnapshot,
  saveDemoSnapshot,
} from './persist'

describe('demo action persistence', () => {
  it('keeps Pendiente de verificación after a serialize/reload round-trip', () => {
    const afterMark = markActionCompleteInList(INITIAL_ACTIONS, 'mfa')
    expect(afterMark[0]?.status).toBe('pendiente_verificacion')

    const raw = JSON.stringify({
      version: 1,
      screen: 'dashboard',
      sme: {
        name: 'Clínica Sonrisa CDMX',
        industry: 'Clínica dental',
        employees: '15–30',
        location: 'Ciudad de México',
        systems: [],
      },
      actions: afterMark,
      selectedActionId: null,
      incident: null,
    })

    const restored = parseDemoSnapshot(raw)
    expect(restored?.actions.find((action) => action.id === 'mfa')?.status).toBe(
      'pendiente_verificacion',
    )
    expect(
      restored?.actions.every((action) =>
        action.id === 'mfa'
          ? action.status === 'pendiente_verificacion'
          : action.status === 'recomendado',
      ),
    ).toBe(true)
  })

  it('does not reset a pending action to Recomendado when reading sessionStorage', () => {
    const store: Record<string, string> = {}
    const storage = {
      getItem: (key: string) => store[key] ?? null,
      setItem: (key: string, value: string) => {
        store[key] = value
      },
    }

    const pending = markActionCompleteInList(INITIAL_ACTIONS, 'mfa')
    saveDemoSnapshot(storage, {
      version: 1,
      screen: 'dashboard',
      sme: {
        name: 'Clínica Sonrisa CDMX',
        industry: 'Clínica dental',
        employees: '15–30',
        location: 'Ciudad de México',
        systems: [],
      },
      actions: pending,
      selectedActionId: 'mfa',
      incident: null,
    })

    expect(store[DEMO_STORAGE_KEY]).toBeTruthy()
    const loaded = loadDemoSnapshot(storage)
    expect(loaded?.screen).toBe('dashboard')
    expect(loaded?.actions[0]?.status).toBe('pendiente_verificacion')
    expect(loaded?.actions[0]?.status).not.toBe('recomendado')
  })
})
