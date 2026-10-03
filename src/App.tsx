import { DemoProvider, useDemo } from './demo/DemoState'
import { Shell } from './components/Shell'
import { Landing } from './screens/Landing'
import { Setup } from './screens/Setup'
import { Dashboard } from './screens/Dashboard'
import { ActionDetail } from './screens/ActionDetail'
import { IncidentSim } from './screens/IncidentSim'
import { IncidentForm } from './screens/IncidentForm'
import { Analysis } from './screens/Analysis'
import { ResponseTasks } from './screens/ResponseTasks'
import { HumanReview } from './screens/HumanReview'
import { NotificationDraft } from './screens/NotificationDraft'
import { Timeline } from './screens/Timeline'
import type { Screen } from './types'
import type { ReactNode } from 'react'

function renderScreen(screen: Screen): ReactNode {
  switch (screen) {
    case 'landing':
      return <Landing />
    case 'setup':
      return <Setup />
    case 'action':
      return <ActionDetail />
    case 'incident':
      return <IncidentSim />
    case 'incident-form':
      return <IncidentForm />
    case 'analysis':
      return <Analysis />
    case 'tasks':
      return <ResponseTasks />
    case 'review':
      return <HumanReview />
    case 'notification':
      return <NotificationDraft />
    case 'timeline':
      return <Timeline />
    default:
      return <Dashboard />
  }
}

function ScreenRouter() {
  const { screen } = useDemo()
  return <Shell showNav={screen !== 'landing'}>{renderScreen(screen)}</Shell>
}

export default function App() {
  return (
    <div className="app-bg">
      <DemoProvider>
        <ScreenRouter />
      </DemoProvider>
    </div>
  )
}
