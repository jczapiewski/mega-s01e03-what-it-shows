# Shared parser reads day-first tenant dates month first

379 unique reports are classified as parser by causes.ts, across 11 tenants, received 2026-04-01 through 2026-10-04. This includes five unresolved one-day/timing reports, not five additional reports; 374 remain after separating those for investigation.

R-41200: Harbour Dental, en-GB, app: intended 7 April, invitation says 4 July. The shared parser reads month first. Use tenant locale and channel/form, not meta.intakeTag or browser locale. booking-v3 form submissions belong to the separate hint issue.

Fix: use explicit date semantics across app/email/booking-v2; test ambiguous dates and day > 12. Keep the five desk-note reports open for separate investigation rather than assuming this fix resolves them.

Evidence: src/lib/kb/causes.ts, locales.ts, reports-4471.json, and the rendered review page. Counts deduplicate IDs before filtering mergedInto === 4471. Export snapshot: 2026-10-04. Reports still arrive; a queued fix is not proof of resolution.
