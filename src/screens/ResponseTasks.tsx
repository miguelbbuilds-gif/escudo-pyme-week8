import { COORDINATOR, PRIORITY_RESPONSE_ACTION, RESPONSE_OWNER, SYNTHETIC_DEADLINE } from '../data/framework'
import { useDemo } from '../demo/DemoState'
import { useEffect } from 'react'

export function ResponseTasks() {
  const { incident, go, recordTasksViewed } = useDemo()

  useEffect(() => {
    recordTasksViewed()
  }, [recordTasksViewed])

  if (!incident) {
    return (
      <section className="stack">
        <p>Primero registra el incidente simulado.</p>
        <button type="button" className="btn secondary" onClick={() => go('incident')}>
          Ir a simulación
        </button>
      </section>
    )
  }

  return (
    <section className="stack">
      <p className="sim-banner">SIMULACIÓN</p>
      <h1>Tareas de respuesta</h1>
      <article className="card">
        <strong>Coordinadora</strong>
        <p>{COORDINATOR.name}</p>
        <p className="muted">{COORDINATOR.role}</p>
      </article>
      <article className="card">
        <strong>Acción prioritaria</strong>
        <p>{PRIORITY_RESPONSE_ACTION}</p>
      </article>
      <article className="card">
        <strong>Responsable</strong>
        <p>{RESPONSE_OWNER}</p>
      </article>
      <article className="card">
        <strong>Plazo</strong>
        <p>{SYNTHETIC_DEADLINE}</p>
      </article>
      <button type="button" className="btn primary" onClick={() => go('review')}>
        Ir a revisión humana
      </button>
    </section>
  )
}
