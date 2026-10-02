---
repo: "jandira-tech/jubarte-redlines"
name: "jubarte-redlines"
description: "Lossless DOCX redline engine for Rust (Word-mode compare)"
readmeQualityOk: true
url: "https://github.com/jandira-tech/jubarte-redlines"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-07-24T16:42:57Z"
lastCommitAt: "2026-10-02T10:00:01Z"
lastReleaseAt: "2026-09-30T23:13:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 53
maintainers: ["arthrod", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5045e80c22f7099161723132c5c6fd2969ee240975b996bc0bfebcdb15531e9/jandira-tech/jubarte-redlines"
---

> **See every page side by side: [jandira-tech.github.io/neurotic_docx_bench](https://jandira-tech.github.io/neurotic_docx_bench/)**  
> jubarte vs Microsoft Word, docxide-pdf, LibreOffice, PyMuPDF Pro, MiniPdf, rdocx and office2pdf on 808 documents, DOCX to PDF, scored per page.

SPDX-License-Identifier: AGPL-3.0-only
-->

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
- **Use the same core engine everywhere**: Rust, CLI, Python…
