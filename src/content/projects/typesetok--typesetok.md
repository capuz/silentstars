---
repo: "TypesetOK/typesetok"
name: "typesetok"
description: "Modern open-source desktop publishing and typesetting software for precise document layout and professional typography."
readmeQualityOk: true
url: "https://github.com/TypesetOK/typesetok"
homepage: "https://typesetok.github.io/website/"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [52, 31]
topics: ["document-editor", "dtp", "html", "rust", "typesetting", "typography"]
stars: 15
forks: 7
openIssues: 0
closedIssues: 12
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-09-30T10:39:22Z"
lastCommitAt: "2026-11-26T23:38:15Z"
lastReleaseAt: "2026-10-31T17:48:07Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 64
maintainers: ["Amlaach", "YSmauas", "tsoolgee"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e3cde5529536019f1f2f62c4446dd4f14bd3bb19a5b753fcc7513dd7f17df5e/TypesetOK/typesetok"
---

---

**TypesetOK (TOK)** is a Desktop Publishing (DTP) application built from the ground up for advanced Hebrew typography, bidirectional text (`Bidi` / `RTL`), synchronized multi-stream typesetting (live *Tzurat HaDaf*, *Mikraot Gedolot*, Talmud / *Shas*, *Responsa* / *Shu"t*, and academic editions), and end-to-end deterministic generation of print-ready files (`ISO 15930-1:2001 PDF/X-1a:2001`).

---

## 1. Architecture Overview

The project is organized as a Monorepo that strictly separates the Rust typesetting and document core from the TypeScript presentation and interaction layers. For a complete file-by-file directory index and explanation of every file in the repository, see [`docs/PROJECT_FILES.md`](https://github.com/TypesetOK/typesetok/blob/HEAD/docs/PROJECT_FILES.md).
