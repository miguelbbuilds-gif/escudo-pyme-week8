import { useDemo } from '../demo/DemoState'

const BLOCKED = [
  'pagar un rescate',
  'contactar a quien atacó',
  'borrar evidencia',
  'decidir que no hace falta notificar',
  'declarar cumplimiento',
  'cerrar un incidente serio',
]

export function HumanReview() {
  const { incident, go, approveHumanReview } = useDemo()

  if (!incident) {
    return (
      <section className="stack">
        <p>No hay un caso simulado para revisar.</p>
        <button type="button" className="btn secondary" onClick={() => go('incident')}>
          Ir a simulación
        </button>
      </section>
    )
  }

  return (
    <section className="stack">
      <h1>Revisión humana requerida</h1>
      <p className="lede">
        Las decisiones de alto impacto no pueden ser aprobadas automáticamente
        por la IA.
      </p>
      <article className="card">
        <strong>La IA no puede, por sí sola:</strong>
        <ul>
          {BLOCKED.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
      <p className="note">
        Esta aprobación es sintética: representa a Laura Méndez como
        coordinadora humana. La IA no puede aprobarse a sí misma.
      </p>
      {incident.humanReviewApproved ? (
        <p className="note">Revisión humana registrada. Continúa al borrador de notificación.</p>
      ) : (
        <button type="button" className="btn primary" onClick={approveHumanReview}>
          Registrar revisión humana (Laura Méndez)
        </button>
      )}
      <button
        type="button"
        className="btn secondary"
        disabled={!incident.humanReviewApproved}
        onClick={() => go('notification')}
      >
        Ir al borrador de notificación
      </button>
    </section>
  )
}
