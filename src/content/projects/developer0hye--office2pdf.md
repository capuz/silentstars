---
repo: "developer0hye/office2pdf"
name: "office2pdf"
description: "Pure-Rust library and CLI for converting DOCX, XLSX, and PPTX files to PDF.  No LibreOffice, no Chromium, no Docker — just a single binary powered by Typst."
readmeQualityOk: true
url: "https://github.com/developer0hye/office2pdf"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 89
forks: 11
openIssues: 59
closedIssues: 262
watchers: 2
contributors: 5
recentReleases: 5
createdAt: "2026-02-26T05:32:53Z"
lastCommitAt: "2026-08-05T06:08:41Z"
lastReleaseAt: "2026-07-23T13:49:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 37
maintainers: ["developer0hye"]
openGraphImageUrl: "https://opengraph.githubassets.com/909a48ecfbb768b4e1f521864cee04429ade245c9647aa68b9aef38bf9d559c6/developer0hye/office2pdf"
---

# office2pdf

Pure-Rust library and CLI for converting DOCX, XLSX, and PPTX files to PDF.

No LibreOffice, no Chromium, no Docker — just a single binary powered by [Typst](https://github.com/typst/typst).

## Features

- **DOCX** — paragraphs, inline formatting (bold/italic/underline/color), tables, images, drawing shapes, ordered/nested lists, syntax-highlighted code, headers/footers, page setup
- **PPTX** — slides, text boxes, shapes, tables (with theme-based table styles), images, slide masters, speaker notes, gradient backgrounds, shadow/reflection effects
- **XLSX** — sheets, cell formatting, merged cells, column widths, row heights, conditional formatting (DataBar, IconSet)
- **PDF/A-2b** — archival-compliant output via `--pdf-a`
- **Embedded font extraction** — fonts embedded in PPTX/DOCX are automatically extracted, deobfuscated, and used during conversion
- **macOS Office font auto-discovery** — PowerPoint/Word/Excel bundled fonts and Office cloud font caches are searched automatically
- **WASM** — runs in browsers and Node.js via WebAssembly (optional `wasm` feature)
- **Zero external dependencies** — runs as a standalone executable

## Installation

### Library

```toml…
