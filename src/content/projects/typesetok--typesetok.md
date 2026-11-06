---
repo: "TypesetOK/typesetok"
name: "typesetok"
description: "Modern open-source desktop publishing and typesetting software for precise document layout and professional typography."
originalDescription: "Modern open-source desktop publishing and typesetting software for precise document layout and professional typography."
descriptionLang: "he"
readmeQualityOk: true
url: "https://github.com/TypesetOK/typesetok"
homepage: "https://typesetok.github.io/website/"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [50, 32]
topics: ["document-editor", "dtp", "html", "rust", "typesetting", "typography"]
stars: 8
forks: 6
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-09-30T10:39:22Z"
lastCommitAt: "2026-11-06T11:22:53Z"
lastReleaseAt: "2026-10-31T17:48:07Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "fork_magnet"]
healthScore: 100
undervaluedScore: 76
maintainers: ["Amlaach", "YSmauas"]
openGraphImageUrl: "https://opengraph.githubassets.com/163831bd3eaff393ecc2ee5e5493933ebe6aeef95ff478317ee322f950631b36/TypesetOK/typesetok"
---

---

**TypesetOK (TOK)** is a desktop publishing (DTP) program built from the ground up for advanced Hebrew typography, bidirectional text (`Bidi` / `RTL`), synchronized multi-flow layout (a live "page form", large Bible editions, the Talmud (Shas), responsa and research books), and deterministic end-to-end production of standard print files (`ISO 15930-1:2001 PDF/X-1a:2001`).

---

## 1. Architecture Overview

The project is organized as a monorepo that strictly separates the core layout and document engine in Rust from the display and interaction layers in TypeScript:

### End-to-End Deterministic Data Flow

```text
[UI / Story Editor / SpreadCanvas (TypeScript)]
       │
       ▼  (JSON Document Snapshot / Incremental Edit)
[tok-cli (Rust Binary Bridge)]
       │
       ├──► [tok-core]      Canonical Document Model (TDM), B-Tree Rope, ULID, Hebrew Normalizer
       ├──► [tok-typeset]   Unicode Bidi (UAX #9) + rustybuzz OpenType + Knuth-Plass + Cassowary + Co-Pagination
       │
       ▼
[PageLayoutBox Geometry Tree (in DTP Points / pt)]
       │
       ├──────────────────────────────────────────────────────────┐
       ▼…
