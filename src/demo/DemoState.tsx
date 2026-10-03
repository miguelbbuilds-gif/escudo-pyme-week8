import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  DEFAULT_SME,
  INITIAL_ACTIONS,
} from '../data/framework'
import type {
  ActionStatus,
  IncidentCase,
  IncidentFormData,
  Screen,
  SecurityAction,
  SmeProfile,
} from '../types'

type DemoContextValue = {
  screen: Screen
  go: (screen: Screen) => void
  sme: SmeProfile
  setSme: (sme: SmeProfile) => void
  actions: SecurityAction[]
  selectedActionId: string | null
  openAction: (id: string) => void
  markActionComplete: (id: string) => void
  verifyActionByHuman: (id: string) => void
  incident: IncidentCase | null
  startIncident: () => void
  submitIncident: (form: IncidentFormData) => void
  recordTasksViewed: () => void
  approveHumanReview: () => void
  approveNotification: () => void
  closeCase: () => void
}

const DemoContext = createContext<DemoContextValue | null>(null)

function nowIso() {
  return new Date().toISOString()
}

export function DemoProvider({ children }: { children: ReactNode }) {
  const [screen, setScreen] = useState<Screen>('landing')
  const [sme, setSme] = useState<SmeProfile>(DEFAULT_SME)
  const [actions, setActions] = useState<SecurityAction[]>(INITIAL_ACTIONS)
  const [selectedActionId, setSelectedActionId] = useState<string | null>(null)
  const [incident, setIncident] = useState<IncidentCase | null>(null)

  const go = useCallback((next: Screen) => setScreen(next), [])

  const openAction = useCallback((id: string) => {
    setSelectedActionId(id)
    setScreen('action')
  }, [])

  const markActionComplete = useCallback((id: string) => {
    setActions((current) =>
      current.map((action) =>
        action.id === id && action.status === 'recomendado'
          ? { ...action, status: 'pendiente_verificacion' as ActionStatus }
          : action,
      ),
    )
  }, [])

  const verifyActionByHuman = useCallback((id: string) => {
    setActions((current) =>
      current.map((action) =>
        action.id === id && action.status === 'pendiente_verificacion'
          ? { ...action, status: 'verificado_humano' as ActionStatus }
          : action,
      ),
    )
  }, [])

  const startIncident = useCallback(() => {
    setScreen('incident')
  }, [])

  const submitIncident = useCallback((form: IncidentFormData) => {
    const createdAt = nowIso()
    setIncident({
      form,
      createdAt,
      analysisAt: createdAt,
      tasksAt: null,
      reviewAt: null,
      notificationAt: null,
      closedAt: null,
      humanReviewApproved: false,
      notificationApproved: false,
      closed: false,
    })
    setScreen('analysis')
  }, [])

  const recordTasksViewed = useCallback(() => {
    setIncident((current) =>
      current && !current.tasksAt ? { ...current, tasksAt: nowIso() } : current,
    )
  }, [])

  const approveHumanReview = useCallback(() => {
    setIncident((current) =>
      current
        ? {
            ...current,
            humanReviewApproved: true,
            reviewAt: current.reviewAt ?? nowIso(),
          }
        : current,
    )
  }, [])

  const approveNotification = useCallback(() => {
    setIncident((current) =>
      current
        ? {
            ...current,
            notificationApproved: true,
            notificationAt: current.notificationAt ?? nowIso(),
          }
        : current,
    )
  }, [])

  const closeCase = useCallback(() => {
    setIncident((current) =>
      current && current.notificationApproved
        ? {
            ...current,
            closed: true,
            closedAt: current.closedAt ?? nowIso(),
          }
        : current,
    )
  }, [])

  const value = useMemo(
    () => ({
      screen,
      go,
      sme,
      setSme,
      actions,
      selectedActionId,
      openAction,
      markActionComplete,
      verifyActionByHuman,
      incident,
      startIncident,
      submitIncident,
      recordTasksViewed,
      approveHumanReview,
      approveNotification,
      closeCase,
    }),
    [
      screen,
      go,
      sme,
      actions,
      selectedActionId,
      openAction,
      markActionComplete,
      verifyActionByHuman,
      incident,
      startIncident,
      submitIncident,
      recordTasksViewed,
      approveHumanReview,
      approveNotification,
      closeCase,
    ],
  )

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>
}

export function useDemo() {
  const ctx = useContext(DemoContext)
  if (!ctx) {
    throw new Error('useDemo debe usarse dentro de DemoProvider')
  }
  return ctx
}
