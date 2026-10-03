import { useState, type FormEvent } from 'react'
import {
  DEFAULT_SME,
  EMPLOYEE_OPTIONS,
  SYNTHETIC_LABEL,
  SYSTEM_OPTIONS,
} from '../data/framework'
import { useDemo } from '../demo/DemoState'
import { firstZodError, smeSetupSchema } from '../validation'

export function Setup() {
  const { sme, setSme, go } = useDemo()
  const [name, setName] = useState(sme.name)
  const [industry, setIndustry] = useState(sme.industry)
  const [employees, setEmployees] = useState(sme.employees)
  const [location, setLocation] = useState(sme.location)
  const [systems, setSystems] = useState<string[]>(sme.systems)
  const [error, setError] = useState<string | null>(null)

  function toggleSystem(system: string) {
    setSystems((current) =>
      current.includes(system)
        ? current.filter((item) => item !== system)
        : [...current, system],
    )
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    const parsed = smeSetupSchema.safeParse({
      name,
      industry,
      employees,
      location,
      systems,
    })
    if (!parsed.success) {
      setError(firstZodError(parsed.error))
      return
    }
    setError(null)
    setSme(parsed.data)
    go('dashboard')
  }

  return (
    <section className="stack">
      <h1>Datos de tu PyME</h1>
      <p className="label-block">{SYNTHETIC_LABEL}</p>
      <p className="note">
        Valores iniciales sintéticos: {DEFAULT_SME.name}. Puedes ajustarlos, pero
        no uses datos reales de pacientes ni secretos.
      </p>
      <form className="stack" onSubmit={onSubmit}>
        <label>
          Nombre de la empresa
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Giro
          <input value={industry} onChange={(e) => setIndustry(e.target.value)} />
        </label>
        <label>
          Personas
          <select
            value={employees}
            onChange={(e) => setEmployees(e.target.value)}
          >
            {EMPLOYEE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label>
          Ubicación
          <input value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
        <fieldset>
          <legend>Sistemas</legend>
          {SYSTEM_OPTIONS.map((system) => (
            <label key={system} className="check">
              <input
                type="checkbox"
                checked={systems.includes(system)}
                onChange={() => toggleSystem(system)}
              />
              {system}
            </label>
          ))}
        </fieldset>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="btn primary">
          Ver prioridades
        </button>
      </form>
    </section>
  )
}
