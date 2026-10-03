import { useDemo } from '../demo/DemoState'

function formatSynthetic(iso: string | null) {
  if (!iso) return 'Pendiente'
  const date = new Date(iso)
  return `${date.toLocaleString('es-MX')} (marca de tiempo sintética de demo)`
}

export function Timeline() {
  const { incident, go, closeCase } = useDemo()

  if (!incident) {
    return (
      <section className="stack">
        <p>Aún no hay un caso simulado.</p>
        <button type="button" className="btn secondary" onClick={() => go('incident')}>
          Ir a simulación
        </button>
      </section>
    )
  }

  const items = [
    { label: 'Incidente detectado', at: incident.createdAt, done: true },
    { label: 'Análisis generado', at: incident.analysisAt, done: Boolean(incident.analysisAt) },
    { label: 'Tareas asignadas', at: incident.tasksAt, done: Boolean(incident.tasksAt) },
    { label: 'Revisión humana', at: incident.reviewAt, done: incident.humanReviewApproved },
    {
      label: 'Notificación aprobada',
      at: incident.notificationAt,
      done: incident.notificationApproved,
    },
    { label: 'Caso cerrado', at: incident.closedAt, done: incident.closed },
  ]

  return (
    <section className="stack">
      <h1>Línea de tiempo del caso</h1>
      <p className="note">
        Marcas de tiempo sintéticas de esta sesión de demo. No hay envío real de
        notificaciones.
      </p>
      <ol className="timeline">
        {items.map((item) => (
          <li key={item.label} className={item.done ? '' : 'pending'}>
            <strong>{item.label}</strong>
            <p className="muted">{formatSynthetic(item.at)}</p>
          </li>
        ))}
      </ol>
      {!incident.closed && (
        <button
          type="button"
          className="btn primary"
          disabled={!incident.notificationApproved}
          onClick={closeCase}
        >
          Cerrar caso simulado
        </button>
      )}
      {incident.closed && (
        <p className="note">
          Caso simulado cerrado. Esto no certifica seguridad ni cumplimiento.
        </p>
      )}
    </section>
  )
}
