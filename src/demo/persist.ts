import { INITIAL_ACTIONS } from '../data/framework'
import type {
  ActionStatus,
  IncidentCase,
  Screen,
  SecurityAction,
  SmeProfile,
} from '../types'

export const DEMO_STORAGE_KEY = 'escudo-pyme-demo-v1'

export type DemoSnapshot = {
  version: 1
  screen: Screen
  sme: SmeProfile
  actions: SecurityAction[]
  selectedActionId: string | null
  incident: IncidentCase | null
}

const SCREENS: Screen[] = [
  'landing',
  'setup',
  'dashboard',
  'action',
  'incident',
  'incident-form',
  'analysis',
  'tasks',
  'review',
  'notification',
  'timeline',
]

const STATUSES: ActionStatus[] = [
  'recomendado',
  'pendiente_verificacion',
  'verificado_humano',
]

export function markActionCompleteInList(
  actions: SecurityAction[],
  id: string,
): SecurityAction[] {
  return actions.map((action) =>
    action.id === id && action.status === 'recomendado'
      ? { ...action, status: 'pendiente_verificacion' }
      : action,
  )
}

export function mergePersistedActionStatuses(
  initial: SecurityAction[],
  persisted: SecurityAction[],
): SecurityAction[] {
  return initial.map((action) => {
    const saved = persisted.find((item) => item.id === action.id)
    if (!saved || !STATUSES.includes(saved.status)) {
      return action
    }
    return { ...action, status: saved.status }
  })
}

function isScreen(value: unknown): value is Screen {
  return typeof value === 'string' && SCREENS.includes(value as Screen)
}

function isSnapshot(value: unknown): value is DemoSnapshot {
  if (!value || typeof value !== 'object') return false
  const snap = value as DemoSnapshot
  return (
    snap.version === 1 &&
    isScreen(snap.screen) &&
    Array.isArray(snap.actions) &&
    snap.sme !== undefined
  )
}

export function parseDemoSnapshot(raw: string | null): DemoSnapshot | null {
  if (!raw) return null
  try {
    const parsed: unknown = JSON.parse(raw)
    if (!isSnapshot(parsed)) return null
    return {
      ...parsed,
      actions: mergePersistedActionStatuses(INITIAL_ACTIONS, parsed.actions),
    }
  } catch {
    return null
  }
}

export function loadDemoSnapshot(
  storage: Pick<Storage, 'getItem'> | null,
): DemoSnapshot | null {
  if (!storage) return null
  try {
    return parseDemoSnapshot(storage.getItem(DEMO_STORAGE_KEY))
  } catch {
    return null
  }
}

export function saveDemoSnapshot(
  storage: Pick<Storage, 'setItem'> | null,
  snapshot: DemoSnapshot,
): void {
  if (!storage) return
  try {
    storage.setItem(DEMO_STORAGE_KEY, JSON.stringify(snapshot))
  } catch {
    // Private mode or quota: keep the in-memory demo working.
  }
}
