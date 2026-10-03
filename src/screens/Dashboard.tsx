import { StatusBadge } from '../components/StatusBadge'
import { useDemo } from '../demo/DemoState'

export function Dashboard() {
  const { sme, actions, openAction } = useDemo()

  return (
    <section className="stack">
      <p className="eyebrow">{sme.name}</p>
      <h1>Prioridades actuales</h1>
      <p className="note">
        No hay un puntaje de seguridad. Estas acciones son las siguientes a
        verificar, no una prueba de que la clínica esté protegida.
      </p>
      <ul className="card-list">
        {actions.map((action) => (
          <li key={action.id}>
            <button
              type="button"
              className="card-btn"
              onClick={() => openAction(action.id)}
            >
              <StatusBadge status={action.status} />
              <strong>{action.title}</strong>
              <span className="muted">Responsable: {action.owner}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
