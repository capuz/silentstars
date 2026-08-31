---
repo: "developer0hye/office2pdf"
name: "office2pdf"
description: "Pure-Rust library and CLI for converting DOCX, XLSX, and PPTX files to PDF.  No LibreOffice, no Chromium, no Docker — just a single binary powered by Typst."
readmeQualityOk: true
url: "https://github.com/developer0hye/office2pdf"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["docx", "msoffice", "office2pdf", "pptx", "xlsx"]
stars: 108
forks: 14
openIssues: 47
closedIssues: 612
watchers: 3
contributors: 6
recentReleases: 4
createdAt: "2026-02-26T05:32:53Z"
lastCommitAt: "2026-08-31T10:01:23Z"
lastReleaseAt: "2026-07-23T13:49:07Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 37
maintainers: ["developer0hye"]
openGraphImageUrl: "https://opengraph.githubassets.com/969fa1e2114b46b5186c69a819a0d79904960199186679256ada8ef28cf0b6dc/developer0hye/office2pdf"
---

# office2pdf

Pure-Rust library and CLI for converting DOCX, XLSX, and PPTX files to PDF.

No LibreOffice, no Chromium, no Docker — just a single binary powered by [Typst](https://github.com/typst/typst).

## Features

- **DOCX** — paragraphs, inline formatting (bold/italic/underline/color), tables, images, drawing shapes, ordered/nested lists, syntax-highlighted code, headers/footers, page setup
- **PPTX** — slides, text boxes, shapes, tables (with theme-based table styles), images, slide masters, speaker notes, gradient backgrounds, shadow/reflection effects
- **XLSX** — sheets (hidden ones skipped, as Excel does), chartsheets (one page-sized chart each), cell formatting, merged cells, column widths, row heights, Excel tables (built-in style banding, header/foot rules, bold header), conditional formatting (DataBar, IconSet, and formula rules)
- **PDF/A-2b** — archival-compliant output via `--pdf-a`
- **Embedded font extraction** — fonts embedded in PPTX/DOCX are automatically extracted, deobfuscated, and used during conversion
- **macOS Office font auto-discovery** — PowerPoint/Word/Excel bundled fonts are searched automatically; mutable per-user Office cloud caches require an…
