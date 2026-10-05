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
        {action.status === 'recomendado' && (
          <p className="muted">
            Todavía no está hecha. Pide a tu proveedor de TI que la complete.
            ESCUDO PyME y la IA no la verifican por ti.
          </p>
        )}
        {action.status === 'pendiente_verificacion' && (
          <>
            <p className="muted">
              Pendiente de verificación significa: ya la marcaste como hecha, y
              ahora falta que una persona la confirme. En la clínica, eso lo
              hace el proveedor de TI (o quien sea responsable), no la app.
            </p>
            <p className="muted">
              ESCUDO PyME y la IA no pueden verificar esta acción. El botón de
              abajo solo simula esa confirmación humana en la demo. No llama a
              tu proveedor ni comprueba que el trabajo se hizo.
            </p>
          </>
        )}
        {action.status === 'verificado_humano' && (
          <p className="muted">
            En esta demo, una persona simuló la confirmación. Eso no significa
            que la clínica esté segura; solo que este paso quedó marcado como
            confirmado.
          </p>
        )}
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
          Simular confirmación del proveedor de TI
        </button>
      )}
    </section>
  )
}
