---
repo: "developer0hye/office2pdf"
name: "office2pdf"
description: "Pure-Rust library and CLI for converting DOCX, XLSX, and PPTX files to PDF.  No LibreOffice, no Chromium, no Docker — just a single binary powered by Typst."
readmeQualityOk: true
url: "https://github.com/developer0hye/office2pdf"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["docx", "msoffice", "office2pdf", "pptx", "xlsx"]
stars: 108
forks: 14
openIssues: 46
closedIssues: 582
watchers: 3
contributors: 6
recentReleases: 5
createdAt: "2026-02-26T05:32:53Z"
lastCommitAt: "2026-08-29T17:29:05Z"
lastReleaseAt: "2026-07-23T13:49:07Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 37
maintainers: ["developer0hye"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6872dc0b1699b3449642e76a1c2f45c6946e6e1a635f82dde99eedd38d11004/developer0hye/office2pdf"
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
- **macOS Office font auto-discovery** — PowerPoint/Word/Excel bundled fonts and Office cloud font caches are searched automatically
- **WASM** — runs in…
