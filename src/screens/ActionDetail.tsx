import { StatusBadge } from '../components/StatusBadge'
import { useDemo } from '../demo/DemoState'

export function ActionDetail() {
  const {
    actions,
    selectedActionId,
    markActionComplete,
    verifyActionByHuman,
    go,
  } = useDemo()
  const action = actions.find((item) => item.id === selectedActionId)

  if (!action) {
    return (
      <section className="stack">
        <p>No hay una acción seleccionada.</p>
        <button type="button" className="btn secondary" onClick={() => go('dashboard')}>
          Volver a prioridades
        </button>
      </section>
    )
  }

  return (
    <section className="stack">
      <button type="button" className="btn secondary" onClick={() => go('dashboard')}>
        Volver
      </button>
      <StatusBadge status={action.status} />
      <h1>{action.title}</h1>
      <article className="card">
        <strong>¿Por qué importa?</strong>
        <p className="muted">{action.why}</p>
      </article>
      <article className="card">
        <strong>¿Qué debes hacer?</strong>
        <p className="muted">{action.what}</p>
      </article>
      <article className="card">
        <strong>Responsable</strong>
        <p className="muted">{action.owner}</p>
      </article>
      <article className="card">
        <strong>Estado actual</strong>
        <p className="muted">
          La IA no puede marcar esta acción como verificada. Solo una persona
          (dueña, gerente o proveedor de TI) puede confirmarla.
        </p>
      </article>
      {action.status === 'recomendado' && (
        <button
          type="button"
          className="btn primary"
          onClick={() => markActionComplete(action.id)}
        >
          Marcar como hecha
        </button>
      )}
      {action.status === 'pendiente_verificacion' && (
        <button
          type="button"
          className="btn primary"
          onClick={() => verifyActionByHuman(action.id)}
        >
          Verificación humana / proveedor de TI
        </button>
      )}
      {action.status === 'verificado_humano' && (
        <p className="note">
          Verificado por una persona. Esto no significa que la clínica esté
          segura; solo que esta acción fue confirmada.
        </p>
      )}
    </section>
  )
}
