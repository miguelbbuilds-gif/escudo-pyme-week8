export type Screen =
  | 'landing'
  | 'setup'
  | 'dashboard'
  | 'action'
  | 'incident'
  | 'incident-form'
  | 'analysis'
  | 'tasks'
  | 'review'
  | 'notification'
  | 'timeline'

export type ActionStatus =
  | 'recomendado'
  | 'pendiente_verificacion'
  | 'verificado_humano'

export type SecurityAction = {
  id: string
  title: string
  why: string
  what: string
  owner: string
  status: ActionStatus
}

export type SmeProfile = {
  name: string
  industry: string
  employees: string
  location: string
  systems: string[]
}

export type IncidentFormData = {
  whatHappened: string
  whenNoticed: string
  systemsAffected: string
  informationInvolved: string
}

export type IncidentCase = {
  form: IncidentFormData
  createdAt: string
  analysisAt: string | null
  tasksAt: string | null
  reviewAt: string | null
  notificationAt: string | null
  closedAt: string | null
  humanReviewApproved: boolean
  notificationApproved: boolean
  closed: boolean
}
