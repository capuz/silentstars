---
repo: "almide/almide"
name: "almide"
description: "A functional programming language optimized for LLM code generation. Compiles to Rust and WebAssembly."
readmeQualityOk: true
url: "https://github.com/almide/almide"
homepage: "https://almide.github.io/playground/"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["code-generation", "compiler", "llm", "programming-language", "rust", "functional-programming", "webassembly"]
stars: 18
forks: 1
openIssues: 32
closedIssues: 146
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-07T10:48:58Z"
lastCommitAt: "2026-07-12T06:16:55Z"
lastReleaseAt: "2026-03-10T13:50:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 47
maintainers: ["O6lvl4"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b31f654e5c0e6ac097891de9e07de97d5213f43a5d21c0583239578061aaa72/almide/almide"
---

</p>

<h1 align="center">Almide</h1>

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
