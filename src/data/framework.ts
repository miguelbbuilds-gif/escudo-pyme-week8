import type { SecurityAction, SmeProfile } from '../types'

export const SYNTHETIC_LABEL = 'Demo con datos sintéticos'

export const DEFAULT_SME: SmeProfile = {
  name: 'Clínica Sonrisa CDMX',
  industry: 'Clínica dental',
  employees: '15–30',
  location: 'Ciudad de México',
  systems: [
    'Correo electrónico',
    'Archivos en la nube',
    'Sistema de gestión clínica',
  ],
}

export const SYSTEM_OPTIONS = [
  'Correo electrónico',
  'Archivos en la nube',
  'Sistema de gestión clínica',
] as const

export const EMPLOYEE_OPTIONS = ['1–14', '15–30', '31–50'] as const

export const INITIAL_ACTIONS: SecurityAction[] = [
  {
    id: 'mfa',
    title: 'Activar autenticación multifactor',
    why: 'Si una contraseña se filtra, un segundo factor reduce el riesgo de que alguien entre a las cuentas de la clínica.',
    what: 'Pide a tu proveedor de TI que active MFA en el correo y en el sistema de gestión clínica para todo el personal.',
    owner: 'Proveedor de TI',
    status: 'recomendado',
  },
  {
    id: 'backups',
    title: 'Configurar respaldos automáticos',
    why: 'Sin respaldos recientes, un fallo o un incidente puede dejar la clínica sin agenda, expedientes de trabajo y archivos.',
    what: 'Confirma que los respaldos del sistema clínico y de archivos en la nube se ejecutan solos y que alguien puede restaurarlos.',
    owner: 'Proveedor de TI',
    status: 'recomendado',
  },
  {
    id: 'access-review',
    title: 'Revisar accesos de usuarios',
    why: 'Cuentas de personal que ya no trabaja en la clínica o con más permisos de los necesarios aumentan el daño si hay un incidente.',
    what: 'Revisa juntos, con tu proveedor de TI, quién tiene acceso al correo, a la nube y al sistema clínico.',
    owner: 'Dueña o gerente + proveedor de TI',
    status: 'recomendado',
  },
]

export const COORDINATOR = {
  name: 'Laura Méndez',
  role: 'Coordinadora de respuesta a incidentes',
}

export const PRIORITY_RESPONSE_ACTION =
  'Confirmar alcance del incidente con proveedor de TI'

export const RESPONSE_OWNER = 'Proveedor de TI'

export const SYNTHETIC_DEADLINE = '15 oct 2026, 18:00 (plazo sintético de demo)'

export const SIMULATED_INCIDENT_SCENARIO =
  'El sistema de gestión de la clínica dejó de funcionar y varios empleados no pueden acceder a sus cuentas. También se recibió un correo sospechoso.'

export const KNOWN_FACTS = [
  'El sistema de gestión de la clínica no está disponible.',
  'Varias cuentas del personal están afectadas.',
  'Se recibió un correo sospechoso.',
]

export const UNKNOWN_FACTS = [
  'Si alguien accedió a datos.',
  'Si las credenciales fueron comprometidas.',
  'Si hay ransomware presente.',
]

export const RECOMMENDED_NEXT_STEPS = [
  'Aislar equipos afectados si es seguro hacerlo.',
  'Preservar evidencia disponible.',
  'Pedir al proveedor de TI verificar las cuentas afectadas.',
  'Determinar si información sensible pudo quedar expuesta.',
]
