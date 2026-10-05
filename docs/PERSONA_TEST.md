# Persona test — SYNTHETIC (not a real interview)

**This is a synthetic persona walkthrough of ESCUDO PyME.**  
María is a fictional clinic owner used to judge usability. No real person was interviewed. No real-user quotes.

**Persona (SYNTHETIC):**  
María, 49. Owner/manager of a fictional two-location dental clinic in Mexico City. Not a cybersecurity expert. External IT provider, no internal security team. Cares about keeping the clinics running, protecting patient/business information, and knowing what to do without jargon. May abandon software if she thinks she could break something.

**Date:** 4 Oct 2026  
**Viewport:** 390×844 (phone-first)

## Screens / flow reviewed

1. Landing  
2. Onboarding (Datos de tu PyME)  
3. Prioridades actuales  
4. Action detail — RECOMENDADO → PENDIENTE DE VERIFICACIÓN → VERIFICADO POR HUMANO  
5. Simulated incident  
6. Incident form  
7. AI analysis  
8. Response tasks  
9. Human review  
10. Notification draft  
11. Timeline  

## Confusion found before the change

On production (https://escudo-pyme-week8.vercel.app, before this copy change), after **Marcar como hecha** the badge became **PENDIENTE DE VERIFICACIÓN** and the primary button was **Verificación humana / proveedor de TI**. That button immediately set **VERIFICADO POR HUMANO**.

For this synthetic persona, it was unclear that:

- the action is waiting for the IT provider (or another responsible person);
- ESCUDO PyME / AI does not verify the action;
- the button only simulates human confirmation in the demo.

## Change made

On the action detail screen:

- **PENDIENTE DE VERIFICACIÓN** now explains, in everyday Spanish, that a person (the proveedor de TI) must confirm, that ESCUDO PyME and the IA cannot verify it, and that the demo button only simulates that confirmation.
- The button label is **Simular confirmación del proveedor de TI**.
- The three states remain: RECOMENDADO, PENDIENTE DE VERIFICACIÓN, VERIFICADO POR HUMANO.

## Post-fix synthetic persona result

Repeated the action-detail walkthrough on local production preview (`npm run build` + `vite preview`, 390×844).

Observed on **PENDIENTE DE VERIFICACIÓN**:

- Text: “Pendiente de verificación significa… ahora falta que una persona la confirme… el proveedor de TI… no la app.”
- Text: “ESCUDO PyME y la IA no pueden verificar esta acción.”
- Text: “El botón de abajo solo simula esa confirmación humana en la demo.”
- Button: **Simular confirmación del proveedor de TI** (old label gone).
- Tapping it still reaches **VERIFICADO POR HUMANO**, with copy that a person *simulated* confirmation.

The original confusion is addressed in the synthetic walkthrough: who waits, who confirms, that AI does not verify, and that the button is a demo simulation. Remaining unrelated jargon (MFA, ransomware) was not part of this fix.

No real-user quotes. No real interview.

## Fix

Applied in `src/screens/ActionDetail.tsx`.

## Commit

`fix: clarify human verification for sme users`

## Redeploy URL

Recorded after production verification.
