import type { ActionStatus } from '../types'

const LABELS: Record<ActionStatus, string> = {
  recomendado: 'RECOMENDADO',
  pendiente_verificacion: 'PENDIENTE DE VERIFICACIÓN',
  verificado_humano: 'VERIFICADO POR HUMANO',
}

export function StatusBadge({ status }: { status: ActionStatus }) {
  return <span className={`status status-${status}`}>{LABELS[status]}</span>
}
