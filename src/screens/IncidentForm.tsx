import { FormEvent, useState } from 'react'
import { SIMULATED_INCIDENT_SCENARIO } from '../data/framework'
import { useDemo } from '../demo/DemoState'
import { firstZodError, incidentFormSchema } from '../validation'

const DEFAULT_FORM = {
  whatHappened: SIMULATED_INCIDENT_SCENARIO,
  whenNoticed: 'Hoy, 09:40 (hora sintética de demo)',
  systemsAffected:
    'Sistema de gestión clínica, correo electrónico y cuentas de personal',
  informationInvolved:
    'Posible información de pacientes y cuentas de trabajo. No se incluyen datos reales.',
}

export function IncidentForm() {
  const { submitIncident } = useDemo()
  const [whatHappened, setWhatHappened] = useState(DEFAULT_FORM.whatHappened)
  const [whenNoticed, setWhenNoticed] = useState(DEFAULT_FORM.whenNoticed)
  const [systemsAffected, setSystemsAffected] = useState(
    DEFAULT_FORM.systemsAffected,
  )
  const [informationInvolved, setInformationInvolved] = useState(
    DEFAULT_FORM.informationInvolved,
  )
  const [error, setError] = useState<string | null>(null)

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    const parsed = incidentFormSchema.safeParse({
      whatHappened,
      whenNoticed,
      systemsAffected,
      informationInvolved,
    })
    if (!parsed.success) {
      setError(firstZodError(parsed.error))
      return
    }
    setError(null)
    submitIncident(parsed.data)
  }

  return (
    <section className="stack">
      <p className="sim-banner">SIMULACIÓN</p>
      <h1>Formulario de incidente</h1>
      <p className="warn-box">
        No ingreses contraseñas, llaves privadas ni información real de
        pacientes.
      </p>
      <form className="stack" onSubmit={onSubmit}>
        <label>
          ¿Qué ocurrió?
          <textarea
            value={whatHappened}
            onChange={(e) => setWhatHappened(e.target.value)}
          />
        </label>
        <label>
          ¿Cuándo lo notaste?
          <input
            value={whenNoticed}
            onChange={(e) => setWhenNoticed(e.target.value)}
          />
        </label>
        <label>
          ¿Qué sistemas están afectados?
          <textarea
            value={systemsAffected}
            onChange={(e) => setSystemsAffected(e.target.value)}
          />
        </label>
        <label>
          ¿Qué tipo de información podría estar involucrada?
          <textarea
            value={informationInvolved}
            onChange={(e) => setInformationInvolved(e.target.value)}
          />
        </label>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="btn primary">
          Analizar incidente
        </button>
      </form>
    </section>
  )
}
