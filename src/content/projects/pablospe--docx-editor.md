---
repo: "pablospe/docx-editor"
name: "docx-editor"
description: "Python library for Word document track changes and comments, without requiring Microsoft Word."
readmeQualityOk: true
url: "https://github.com/pablospe/docx-editor"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 38
forks: 11
openIssues: 0
closedIssues: 7
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-01-23T22:21:45Z"
lastCommitAt: "2026-08-28T15:36:10Z"
lastReleaseAt: "2026-05-20T06:54:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 40
maintainers: ["pablospe", "snowmays"]
openGraphImageUrl: "https://opengraph.githubassets.com/da289e930339ba04372b3ef2e9bc4ad18f642a40271084e12dded6add0264b16/pablospe/docx-editor"
---

# docx-editor

Pure Python library for Word document track changes and comments, without requiring Microsoft Word.

> **Note:** The PyPI package is named `docx-editor` because `docx-edit` was too similar to an existing package.

- **Github repository**: <https://github.com/pablospe/docx-editor/>
- **Documentation**: <https://pablospe.github.io/docx-editor/>

## Features

- **Hash-Anchored Paragraph References**: `list_paragraphs()` returns stable, hash-based paragraph IDs for safe, unambiguous targeting
- **Paragraph Location**: `get_paragraph_location(ref)` reports whether a paragraph lives in the body or inside a table cell — with `w:gridSpan`-aware logical column, row, table index, and nesting depth. `list_paragraph_locations()` returns `(ref, location)` for every paragraph in one batch pass, avoiding a per-paragraph table rescan
- **Batch Editing**: Atomic `batch_edit()` with upfront hash validation across all operations
- **Paragraph Rewrite**: `rewrite_paragraph()` with automatic word-level diffing — specify desired text, get fine-grained tracked changes
- **Track Changes**: Replace, delete, and insert text with revision tracking
- **Cross-Boundary Editing**: Find and…
