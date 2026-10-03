import { simulateIncidentAnalysis } from '../data/simulatedAi'
import { useDemo } from '../demo/DemoState'

export function Analysis() {
  const { incident, go } = useDemo()

  if (!incident) {
    return (
      <section className="stack">
        <p>No hay un incidente simulado abierto.</p>
        <button type="button" className="btn secondary" onClick={() => go('incident')}>
          Ir a simulación
        </button>
      </section>
    )
  }

  const analysis = simulateIncidentAnalysis(incident.form)

  return (
    <section className="stack">
      <p className="ai-label">{analysis.label}</p>
      <p className="note">Salida simulada de IA. No se llamó a un modelo real.</p>
      <h1>Análisis del incidente</h1>
      <article className="card">
        <strong>LO QUE SABEMOS</strong>
        <ul>
          {analysis.known.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
      <article className="card">
        <strong>LO QUE NO SABEMOS</strong>
        <ul>
          {analysis.unknown.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="muted">
          La incertidumbre no se convierte en hecho. Este análisis no afirma que
          hubo acceso a datos, ransomware o compromiso de credenciales.
        </p>
      </article>
      <article className="card">
        <strong>SIGUIENTES PASOS RECOMENDADOS</strong>
        <ol>
          {analysis.nextSteps.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </article>
    </section>
  )
}
