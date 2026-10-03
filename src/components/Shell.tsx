import type { ReactNode } from 'react'
import { SYNTHETIC_LABEL } from '../data/framework'
import { useDemo } from '../demo/DemoState'

export function Shell({
  children,
  showNav = true,
}: {
  children: ReactNode
  showNav?: boolean
}) {
  const { screen, go } = useDemo()
  const incidentActive = [
    'incident',
    'incident-form',
    'analysis',
    'tasks',
    'review',
    'notification',
  ].includes(screen)

  return (
    <div className="phone-frame">
      <header className="topbar">
        <button type="button" className="brand" onClick={() => go('landing')}>
          ESCUDO PyME
        </button>
        <span className="pill">{SYNTHETIC_LABEL}</span>
      </header>
      <main className="screen">{children}</main>
      {showNav && screen !== 'landing' && (
        <nav className="bottom-nav" aria-label="Navegación de demo">
          <button
            type="button"
            className={screen === 'setup' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => go('setup')}
          >
            Empresa
          </button>
          <button
            type="button"
            className={
              screen === 'dashboard' || screen === 'action'
                ? 'nav-btn active'
                : 'nav-btn'
            }
            onClick={() => go('dashboard')}
          >
            Prioridades
          </button>
          <button
            type="button"
            className={incidentActive ? 'nav-btn active' : 'nav-btn'}
            onClick={() => go('incident')}
          >
            Incidente
          </button>
          <button
            type="button"
            className={screen === 'timeline' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => go('timeline')}
          >
            Línea de tiempo
          </button>
        </nav>
      )}
    </div>
  )
}
