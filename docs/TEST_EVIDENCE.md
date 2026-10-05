# Mechanical Test

Date:  
4 Oct 2026

Environment:  
Production Vercel. Automated browser, Microsoft Edge via Playwright.

Production deployment tested:  
https://escudo-pyme-week8.vercel.app

Viewport:  
390×844 (phone frame / bottom nav measured at approximately 356px wide)

Live URL:  
https://escudo-pyme-week8.vercel.app

Steps tested:

1. Opened the production app at approximately 390px viewport (nav bar ~356px).
2. Started the demo and opened Prioridades actuales.
3. Inspected the bottom navigation: Empresa, Prioridades, Incidente, Línea de tiempo.

Reproduction steps:

1. Open https://escudo-pyme-week8.vercel.app at ~390px width so the in-app nav is ~356px.
2. Complete onboarding to the dashboard.
3. Look at the bottom navigation.

Expected behavior:  
All four items stay in one aligned row, same height, usable touch targets.

Actual behavior:  
A 3-column grid left “Línea de tiempo” on a second row. That button was taller (~50px vs ~35px) and the nav bar grew to ~118px.

Affected screens:  
Any screen with the bottom nav (dashboard / Prioridades actuales first observed).

## Real bug found

Bottom navigation does not fit in one row at approximately 356px nav width. “Línea de tiempo” wraps onto a second row.

Evidence:

- Viewport: 390×844
- Phone frame width: ~358px
- Nav box: x=17, y≈685, width=356, height=118
- Buttons: Empresa (29,698, 105×35), Prioridades (142,698, 105×35), Incidente (256,698, 105×35), Línea de tiempo (29,741, 105×50)
- Screenshot from production dashboard before the fix

Status: reproduced before fix

## Fix

Commit:  
`ccb5148` — fix: keep bottom navigation aligned on mobile

Local preview retest (before deploy):  
Passed. Vite preview after `npm run build`.

- Viewport 390×844, nav width 356px: one row, y=749 for all four buttons, height 44px, nav height 65px (was 118px).
- Viewport 356×844: one row, all four buttons y=749, height 44px.

Redeploy URL:  
Public production: https://escudo-pyme-week8.vercel.app  
Deployment (this verification): https://escudo-pyme-week8-hru5qvldx-miguel-d52d.vercel.app  
Inspect: https://vercel.com/miguel-d52d/escudo-pyme-week8/Dnkn9v8gdbQTFZtQ7nsKxC1TbLt2  
Served CSS: `/assets/index-47Z4j8ya.css`

Retest result:  
Passed on production at viewport 356×844. Nav 322×65, one row, all four buttons y=749, 71×44. Labels still Empresa, Prioridades, Incidente, Línea de tiempo. Clicks: Empresa → Datos de tu PyME; Prioridades → Prioridades actuales; Incidente → Incidente simulado; Línea de tiempo → Aún no hay un caso simulado. Original wrap-to-second-row bug did not reproduce.

# Persona Test

Persona:  
Screenshots tested:  
Confusions:  
Worst confusion:  
Fix:  
Commit:  
Redeploy URL:
