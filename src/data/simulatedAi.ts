import {
  KNOWN_FACTS,
  RECOMMENDED_NEXT_STEPS,
  UNKNOWN_FACTS,
} from './framework'
import type { IncidentFormData } from '../types'

export const SIMULATED_AI_LABEL = 'SALIDA SIMULADA DE IA'
export const SIMULATED_AI_NOTE =
  'Salida simulada de IA. No se llamó a un modelo real.'

export function simulateIncidentAnalysis(_form: IncidentFormData) {
  return {
    label: SIMULATED_AI_LABEL,
    known: KNOWN_FACTS,
    unknown: UNKNOWN_FACTS,
    nextSteps: RECOMMENDED_NEXT_STEPS,
  }
}
