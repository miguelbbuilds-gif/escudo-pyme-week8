import { SYNTHETIC_LABEL } from '../data/framework'
import { useDemo } from '../demo/DemoState'

export function Landing() {
  const { go } = useDemo()

  return (
    <section className="stack">
      <p className="eyebrow">Puente de preparación a respuesta</p>
      <h1>Ciberseguridad clara para tu PyME.</h1>
      <p className="lede">
        Identifica qué proteger primero, verifica acciones importantes y sabe
        qué hacer si ocurre un incidente.
      </p>
      <p className="note">
        Esta demo no dice que tu organización esté segura. Muestra qué sigue,
        quién es responsable y qué aún requiere verificación humana.
      </p>
      <button type="button" className="btn primary" onClick={() => go('setup')}>
        Comenzar demo
      </button>
      <p className="label-block">{SYNTHETIC_LABEL}</p>
    </section>
  )
}
