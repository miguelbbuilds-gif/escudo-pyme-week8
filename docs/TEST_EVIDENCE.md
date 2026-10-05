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
Redeploy URL:  
Retest result:

# Persona Test

Persona:  
Screenshots tested:  
Confusions:  
Worst confusion:  
Fix:  
Commit:  
Redeploy URL:
