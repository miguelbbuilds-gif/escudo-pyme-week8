import { DemoProvider, useDemo } from './demo/DemoState'
import { Shell } from './components/Shell'
import { Landing } from './screens/Landing'
import { Setup } from './screens/Setup'
import { Dashboard } from './screens/Dashboard'

function ScreenRouter() {
  const { screen } = useDemo()

  if (screen === 'landing') {
    return (
      <Shell showNav={false}>
        <Landing />
      </Shell>
    )
  }

  if (screen === 'setup') {
    return (
      <Shell>
        <Setup />
      </Shell>
    )
  }

  return (
    <Shell>
      <Dashboard />
    </Shell>
  )
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
