import { SIMULATED_INCIDENT_SCENARIO } from '../data/framework'
import { useDemo } from '../demo/DemoState'

export function IncidentSim() {
  const { go } = useDemo()

  return (
    <section className="stack">
      <p className="sim-banner">SIMULACIÓN</p>
      <h1>Incidente simulado</h1>
      <p className="lede">{SIMULATED_INCIDENT_SCENARIO}</p>
      <p className="note">
        Esto no es un incidente real. La clínica, las personas y los hechos son
        sintéticos.
      </p>
      <button
        type="button"
        className="btn primary"
        onClick={() => go('incident-form')}
      >
        Abrir formulario
      </button>
      <button type="button" className="btn secondary" onClick={() => go('dashboard')}>
        Volver a prioridades
      </button>
    </section>
  )
}
