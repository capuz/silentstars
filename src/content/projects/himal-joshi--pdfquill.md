---
repo: "Himal-Joshi/PDFQuill"
name: "PDFQuill"
description: "A free PDF tool => merge, split, compress, convert, rotate, watermark, protect, and more."
url: "https://github.com/Himal-Joshi/PDFQuill"
homepage: "https://pdfquill.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-09T11:24:11Z"
lastCommitAt: "2026-07-03T06:25:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 51
maintainers: ["Himal-Joshi", "google-labs-jules[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2343eddcab66448d36305c7aea2ca13cd9865cb2a2e9c1f39462a5711f9fae5b/Himal-Joshi/PDFQuill"
---

# PDFQuill

PDFQuill is a modern, privacy-first web application for everyday PDF processing. The entire application is built as a **100% client-side** React/Vite Single Page Application (SPA). All PDF processing is handled securely inside your web browser using cutting-edge WebAssembly (WASM) ports of `qpdf`, `Tesseract.js`, `pdf-lib`, and `jszip`—no files are ever uploaded to a backend server!

## Features

- **100% Private Processing:** Files never leave your browser.
- **Authentication & Rate Limiting:** Google Sign-In via Firebase. Anonymous users are limited to 2 PDF operations per day. Logged-in users are granted 10 operations per day.
- **Advanced OCR (Optical Character Recognition):** 
  - **Make Searchable:** Convert scanned documents into selectable PDFs using Tesseract WASM.
  - **Extract Text:** Extract raw text from image-based PDFs with multi-language support.
- **HTML to PDF:** Convert raw HTML code or upload HTML files to render them directly into formatted PDF documents.
- **Security Tools (QPDF WASM):** 
  - **Flatten PDF:** Strip interactive forms and metadata to create a flat, uneditable PDF.
  - **Lock/Unlock PDF:** Add or remove password protection from PDFs.…
