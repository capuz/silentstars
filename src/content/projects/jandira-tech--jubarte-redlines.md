---
repo: "jandira-tech/jubarte-redlines"
name: "jubarte-redlines"
description: "Word-faithful DOCX redlines and rendering without Word: a Rust engine with a Mac app, in-browser wasm, and Python and Node bindings. Scored against Microsoft Word."
readmeQualityOk: true
url: "https://github.com/jandira-tech/jubarte-redlines"
homepage: "https://jubarte.pro"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["cli", "document-comparison", "docx", "docx-to-pdf", "legal-tech", "microsoft-word", "ooxml", "pdf", "python", "redline"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 8
createdAt: "2026-07-24T16:42:57Z"
lastCommitAt: "2026-10-16T08:27:29Z"
lastReleaseAt: "2026-10-11T17:42:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 56
maintainers: ["arthrod"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff96449fe45cb0ed0d3e14702ea6b8b7b1f80e99fd799c02a11e0b57cac39a06/jandira-tech/jubarte-redlines"
---

> **See every page side by side: [jandira-tech.github.io/neurotic_docx_bench](https://jandira-tech.github.io/neurotic_docx_bench/)**  
> jubarte vs Microsoft Word, docxide-pdf, LibreOffice, PyMuPDF Pro, MiniPdf, rdocx and office2pdf on 808 documents, DOCX to PDF, scored per page.

# jubarte

**Word-faithful DOCX redlines and rendering, without Word.**

Compare two Word documents into native tracked changes, inspect or resolve
changes programmatically, apply validated edit plans, and render DOCX to PDF
or PNG — from Rust, Python, Node/browser, or the CLI.

Jubarte is an in-process DOCX engine for applications that need Microsoft
Word-style review workflows without automating Microsoft Word or LibreOffice.

- **Compare DOCX → tracked DOCX** with native insertions, deletions, moves and
  formatting changes.
- **List, accept or reject changes** globally or selectively by change ID,
  author and kind.
- **Render DOCX → PDF / PNG** with an independent Word-oriented layout engine.
- **Inspect and edit documents safely** using paragraph IDs, source hashes and
  atomic JSON edit plans.
- **Use the same core engine everywhere**: Rust, CLI, Python and WebAssembly
  for Node/browser.
- **Keep…
