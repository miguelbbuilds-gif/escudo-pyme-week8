import { COORDINATOR } from '../data/framework'
import { useDemo } from '../demo/DemoState'

export function NotificationDraft() {
  const { incident, go, approveNotification } = useDemo()

  if (!incident) {
    return (
      <section className="stack">
        <p>No hay un incidente simulado.</p>
        <button type="button" className="btn secondary" onClick={() => go('incident')}>
          Ir a simulación
        </button>
      </section>
    )
  }

  return (
    <section className="stack">
      <p className="ai-label">Borrador generado con asistencia de IA</p>
      <p className="note">Salida simulada de IA. No se envió ningún mensaje real.</p>
      <h1>Borrador de notificación</h1>
      <article className="card">
        <strong>¿Qué ocurrió?</strong>
        <p className="muted">
          Detectamos una interrupción en el sistema de gestión de la clínica y
          problemas de acceso en varias cuentas, junto con un correo sospechoso.
          Esto es un escenario de demo, no un incidente real.
        </p>
      </article>
      <article className="card">
        <strong>¿Qué información podría estar involucrada?</strong>
        <p className="muted">
          Podría estar involucrada información de trabajo de la clínica. Aún no
          sabemos si alguien accedió a datos. No se incluyen datos reales de
          pacientes en este mensaje.
        </p>
      </article>
      <article className="card">
        <strong>¿Qué está haciendo la organización?</strong>
        <p className="muted">
          {COORDINATOR.name}, {COORDINATOR.role}, coordina la revisión con el
          proveedor de TI para confirmar el alcance, preservar evidencia y
          proteger las cuentas afectadas.
        </p>
      </article>
      <article className="card">
        <strong>¿Qué puede hacer la persona afectada?</strong>
        <p className="muted">
          No envíe contraseñas por correo o WhatsApp. Si le piden datos de
          acceso, deténgase y confirme por un canal conocido con la clínica o el
          proveedor de TI.
        </p>
      </article>
      <p className="note">
        Estado: {incident.notificationApproved ? 'Aprobado' : 'Pendiente de aprobación humana'}
      </p>
      {!incident.notificationApproved && (
        <button
          type="button"
          className="btn primary"
          disabled={!incident.humanReviewApproved}
          onClick={approveNotification}
        >
          Aprobar borrador (revisión humana)
        </button>
      )}
      <button
        type="button"
        className="btn secondary"
        disabled={!incident.notificationApproved}
        onClick={() => go('timeline')}
      >
        Ver línea de tiempo
      </button>
    </section>
  )
}
