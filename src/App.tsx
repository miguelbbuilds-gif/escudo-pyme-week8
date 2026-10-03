import { DemoProvider, useDemo } from './demo/DemoState'
import { Shell } from './components/Shell'
import { Landing } from './screens/Landing'
import { Setup } from './screens/Setup'
import { Dashboard } from './screens/Dashboard'
import { ActionDetail } from './screens/ActionDetail'
import { IncidentSim } from './screens/IncidentSim'
import { IncidentForm } from './screens/IncidentForm'
import { Analysis } from './screens/Analysis'

function ScreenRouter() {
  const { screen } = useDemo()

  const content =
    screen === 'landing' ? (
      <Landing />
    ) : screen === 'setup' ? (
      <Setup />
    ) : screen === 'action' ? (
      <ActionDetail />
    ) : screen === 'incident' ? (
      <IncidentSim />
    ) : screen === 'incident-form' ? (
      <IncidentForm />
    ) : screen === 'analysis' ? (
      <Analysis />
    ) : (
      <Dashboard />
    )

  return <Shell showNav={screen !== 'landing'}>{content}</Shell>
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
