# Investigate five one-day or timing reports hidden in parser bucket

5 unique reports: R-41202, R-41209, R-41236, R-41344, R-41620. They remain included in the parser classifier's 379, so do not add them to 412 again. A nonoverlapping investigation partition is 374 parser / 33 hint / 5 unresolved.

The bodies describe May 12 vs May 11, June dates one day off, an invite preceding its booking, Lisbon Tuesday vs Toronto Monday, and October 6 Tuesday showing Monday. The tenant-based classifier does not inspect these bodies and does not prove their root cause. R-41236 may be a separate timing fault; do not assume all five share one cause.

Investigate original event and send timestamps, timezone offsets, date-only conversions, scheduler logs and reproduction across zones. A timezone boundary error is plausible but unconfirmed. The latest report on 2026-10-04 shows this is still reaching the desk. Preserve IDs and split further if reproduction reveals distinct causes.

Evidence: src/lib/data/desk-notes.json and the five report bodies in reports-4471.json.
