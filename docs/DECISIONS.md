# ESCUDO PyME — Decisions

## DECISION 1

Synthetic data only.

Reason:  
The prototype does not require real SME or victim data.

## DECISION 2

AI cannot verify itself.

Reason:  
AI recommendations are not proof that an action was completed.

## DECISION 3

No universal security score.

Reason:  
A single score creates false certainty.

## DECISION 4

Local demo state first.

Reason:  
Persistence adds security complexity that this working slice does not require.

## DECISION 5

Transparent simulated AI fallback.

Reason:  
The demo must remain functional without pretending a real LLM ran.

## DECISION 6

Zod validates SME setup and the incident form.

Reason:  
Every form must be validated before the demo advances, without collecting secrets.

## DECISION 7

Analysis and notification drafts come from local structured data, not a live model.

Reason:  
There is no LLM API in this working slice, so the UI must stay labeled as simulated.

## DECISION 8

Phone-first layout is a 390px frame; desktop centers that frame.

Reason:  
The packet asks for approximately 390px first while still working on desktop.

---

## Session close — Week 8

- Mechanical test completed.
- Real mobile navigation bug fixed.
- Synthetic persona test completed.
- Human-verification language clarified.
- Final product verified in production: https://escudo-pyme-week8.vercel.app (bundle `index-Co0rI2Go.js` includes “Simular confirmación del proveedor de TI”).

These are session outcomes, not new product claims. Persona evidence is synthetic only.

---

## Tomorrow's First Move

Week 8 mechanical and synthetic persona work is closed. Remaining optional items: add `docs/mockups/escudo-pyme-mockup.png` when available, and commit `.vercel` in `.gitignore` if desired.
