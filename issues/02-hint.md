# booking-v3 date hint contradicts day-first tenant interpretation

33 unique reports, across Copper Studio (es-ES), Alder Physio (de-DE) and Pale Harbour (pt-PT), received 2026-04-17 through 2026-09-22. These are a separate cause from the parser issue and are already inside #4471's 412 reports.

booking-v3 prints MM/DD/YYYY; users follow the hint, while the form reads their dates day first. R-41230, Copper Studio, form: 6 January became 1 June. The same tenant through app/email can instead hit the shared parser fault.

Fix the displayed hint and interpretation together. Test all three tenant locales through form and compare app/email. Classify using tenant locale, form and channel; intake tags can disagree.

Evidence: DATE_HINT and causeOf in src/lib/kb/causes.ts; tenant JSON directory; reports-4471.json. Counts use unique report IDs, not raw export rows. Export snapshot: 2026-10-04.
