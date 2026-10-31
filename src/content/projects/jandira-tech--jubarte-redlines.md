---
repo: "jandira-tech/jubarte-redlines"
name: "jubarte-redlines"
description: "Word-faithful DOCX redlines and rendering without Word: a Rust engine with a Mac app, in-browser wasm, and Python and Node bindings. Scored against Microsoft Word."
readmeQualityOk: true
url: "https://github.com/jandira-tech/jubarte-redlines"
homepage: "https://jubarte.pro"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["cli", "document-comparison", "docx", "docx-to-pdf", "legal-tech", "microsoft-word", "ooxml", "pdf", "python", "redline"]
stars: 7
forks: 0
openIssues: 532
closedIssues: 427
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-07-24T16:42:57Z"
lastCommitAt: "2026-10-31T15:58:23Z"
lastReleaseAt: "2026-10-25T10:51:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 55
maintainers: ["arthrod", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a767cbafdbdfd5954d7f3bcbf25e9f79c4a51a67dfbf56c0f36711d5c5e65de/jandira-tech/jubarte-redlines"
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
