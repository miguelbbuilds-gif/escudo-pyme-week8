# Mechanical Test

Date:  
4 Oct 2026

Environment:  
Production Vercel. Automated browser at viewport 390×844 (Microsoft Edge via Playwright). Live URL below.

Live URL:  
https://escudo-pyme-week8.vercel.app

Steps tested:

1. Opened the production app at approximately 390px width.
2. Started the demo (Comenzar demo → Ver prioridades).
3. Opened the first security priority: Activar autenticación multifactor (status RECOMENDADO).
4. Marked it complete (Marcar como hecha). Status became PENDIENTE DE VERIFICACIÓN.
5. Returned to the dashboard. The same action still showed PENDIENTE DE VERIFICACIÓN.
6. Refreshed the page.
7. Checked whether the action stayed pending or returned to RECOMENDADO.

## Real bug found

After refresh, the app returned to the landing screen and discarded in-memory demo state.

Re-entering the demo (Comenzar demo → Ver prioridades) showed Activar autenticación multifactor as RECOMENDADO again. PENDIENTE DE VERIFICACIÓN was gone.

Evidence:

- Viewport: 390×844
- Before refresh, first dashboard card: PENDIENTE DE VERIFICACIÓN / Activar autenticación multifactor
- After refresh, H1: Ciberseguridad clara para tu PyME.
- After starting the demo again, first dashboard card: RECOMENDADO / Activar autenticación multifactor
- FIRST_CARD_IS_RECOMENDADO=true
- FIRST_CARD_IS_PENDIENTE=false

Root cause: action statuses live only in React useState. A full page refresh recreates INITIAL_ACTIONS, so completed work is lost.

## Fix

Commit:  
`1fbe45c` — fix: persist demo action verification state across refresh

Redeploy URL:  
Public production: https://escudo-pyme-week8.vercel.app  
Deployment: https://escudo-pyme-week8-nk6c8pkx4-miguel-d52d.vercel.app  
Inspect: https://vercel.com/miguel-d52d/escudo-pyme-week8/AeUoTuWdrwHu6F5sAD1kWte4cyWv

Retest result:  
Passed on 4 Oct 2026 at 390×844 against https://escudo-pyme-week8.vercel.app (asset `index-BCAUZph_.js`). After marking Activar autenticación multifactor as complete and refreshing, the dashboard stayed on Prioridades actuales and the action remained PENDIENTE DE VERIFICACIÓN. It did not return to RECOMENDADO. The unique deployment URL is protected by Vercel Authentication and was not used for the public retest.

# Persona Test

Persona:  
Screenshots tested:  
Confusions:  
Worst confusion:  
Fix:  
Commit:  
Redeploy URL:
