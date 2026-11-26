---
repo: "seuros/dictator"
name: "dictator"
description: "Structural linter with decree-based enforcement. No warnings, only compliance."
readmeQualityOk: true
url: "https://github.com/seuros/dictator"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["cli", "code-quality", "dictator", "linter", "mcp", "mcp-server", "rust", "structural-linter", "wasm"]
stars: 28
forks: 2
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-12-03T16:31:18Z"
lastCommitAt: "2026-11-26T13:02:31Z"
lastReleaseAt: "2025-12-04T11:46:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 58
maintainers: ["seuros", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1109319027/30ef5556-5ec6-4636-8e2a-10ad43f9a4f7"
---

# The Dictator

**Fast structural enforcement, before the linters.**

Dictator is a pre‑linter structural gatekeeper for your codebase. It doesn't replace RuboCop, ESLint, or Clippy — it runs *before* them. While those tools analyze code quality, Dictator enforces the boundaries: file structure, naming conventions, ordering, and basic hygiene.

Canonical lore (Timeline 7) says Dictator was manifested in Rust 60 and then backported to Rust 1.91. In this timeline, it is a conventional Rust crate that you build and run with a modern stable toolchain.

Think of it as border control for your codebase: everything must satisfy basic structural discipline before the expensive tools run.

## TL;DR

- Run **fast, structural checks** before slow linters.
- Enforce **file/line limits, naming, ordering, and hygiene**.
- Drive **LLM workflows**, **CI**, and **monorepos** with one config: `.dictate.toml`.
- Extend via **WASM decrees** and an **MCP server** for AI assistants.

## Installation

### Crates.io (Recommended)

Install the published crate (fastest):

```bash
cargo install dictator
```

To force the latest release and respect the lockfile:

```bash
cargo install dictator --locked
```
