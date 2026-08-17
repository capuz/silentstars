---
repo: "almide/almide"
name: "almide"
description: "A statically-typed programming language optimized for LLM code generation. Compiles to Rust and WebAssembly."
readmeQualityOk: true
url: "https://github.com/almide/almide"
homepage: "https://almide.github.io/docs/"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["code-generation", "compiler", "llm", "programming-language", "rust", "webassembly", "statically-typed"]
stars: 28
forks: 3
openIssues: 64
closedIssues: 536
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-07T10:48:58Z"
lastCommitAt: "2026-08-17T04:20:08Z"
lastReleaseAt: "2026-03-10T13:50:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 44
maintainers: ["O6lvl4", "atzurody"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf55d26d10dc0fce91ec7311cad28e63ef2f547393e725f950e2011680a66d6f/almide/almide"
---

</p>

</p>

</p>

## What is Almide?

Almide is a statically-typed language optimized for AI-generated code. It compiles to native binaries (via Rust) and WebAssembly.

The core metric is **modification survival rate** — how often code still compiles and passes tests after a series of AI-driven modifications. The language achieves this through unambiguous syntax, actionable compiler diagnostics, and a standard library that covers common patterns out of the box.

The flywheel: LLMs write Almide reliably → more code is produced → training data grows → LLMs write it better → the ecosystem expands.

### MSR Scorecard

Measured by [almide-dojo](https://github.com/almide/almide-dojo) across 30 tasks (basic / intermediate / advanced):

| Model | Pass Rate | 1-Shot Rate |
|---|---|---|
| Claude Sonnet 4.6 | **100%** (30/30) | 47% |
| Llama 3.3 70B | 61% (17/28) | 33% |

## Quick Start

**[Try it in your browser →](https://almide.github.io/playground/)** — No installation required.

### Install (macOS / Linux)

```bash
curl -fsSL https://raw.githubusercontent.com/almide/almide/main/tools/install.sh | sh
```

### Install (Windows)

```powershell
irm…
