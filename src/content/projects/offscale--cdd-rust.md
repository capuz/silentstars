---
repo: "offscale/cdd-rust"
name: "cdd-rust"
description: "OpenAPI ↔ Rust (actix, diesel)"
url: "https://github.com/offscale/cdd-rust"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 8
contributors: 1
recentReleases: 3
createdAt: "2019-03-03T23:55:05Z"
lastCommitAt: "2026-06-25T01:20:23Z"
lastReleaseAt: "2026-06-12T08:14:23Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 86
undervaluedScore: 62
maintainers: ["SamuelMarks"]
openGraphImageUrl: "https://opengraph.githubassets.com/955c4bc433de9351a1ff88803a35f43c08e40e28bd9f0da57d292630fbf55515/offscale/cdd-rust"
---

cdd-rust
============

**Compiler Driven Development (CDD)** is a development approach designed to eradicate the disconnect between: API specifications; server implementations; client SDKs; and command-line tooling.

Unlike traditional code generators—that treat outputs as disposable or read-only—CDD provides a **complete, standalone compiler** for each supported language. These compilers are fully CST-aware (Concreate Syntax Tree is a whitespace+comment aware Abstract Syntax Tree), allowing true bidirectional synchronization between existing hand-edited source code and OpenAPI specifications.

---

## 🏗️ The Standalone Compiler Architecture

Traditional tools use naïve templating—if you regenerate, your custom code is overwritten. 

The CDD ecosystem is fundamentally different. It utilizes language-specific, standalone compilers capable of full AST parsing, semantic diffing, and surgical patching.

**The Core Guarantee:** Every part of the generated codebase is fully editable. 
You are encouraged to open the generated routing files, model definitions, and CLI structures, and directly inject your business logic. 

- **When your specification changes**, the CDD compiler reads your…
