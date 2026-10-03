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
            className={screen === 'dashboard' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => go('dashboard')}
          >
            Prioridades
          </button>
        </nav>
      )}
    </div>
  )
}
