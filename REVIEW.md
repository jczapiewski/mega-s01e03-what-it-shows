# S01E03 review

Public repository: https://github.com/jczapiewski/mega-s01e03-what-it-shows

Two accepted tickets: parser (379 reports) and hint (33 reports). The five unusual reports are included in the parser count. The overlapping investigation issue was closed after course review; it is not a third confirmed cause.

Engineering update: #4471 closed 2026-10-05. Parser fixed (`fix(dates): parse dd/mm for eu locales`); hint not fixed because booking-v3 was retired. These outcomes are recorded separately in the signed review page.

Run npm ci, npm run analyze, and npm run build. Rendered HTML is in rendered/kb/. The renderer compiles the actual SVX and Svelte components. Signature: course-issued ticket in page frontmatter; desk reference computed by RenderStamp. Source data is the 2026-10-04 snapshot.
