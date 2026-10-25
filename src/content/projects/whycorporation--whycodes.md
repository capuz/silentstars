---
repo: "whycorporation/whycodes"
name: "whycodes"
description: "A fast, provider-independent coding agent for the terminal, written in Rust."
readmeQualityOk: true
url: "https://github.com/whycorporation/whycodes"
homepage: "https://why.codes"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["agent", "cli", "llm", "rust", "tui", "ai-agent", "ai-coding-agent", "coding-assistant", "multi-provider"]
stars: 22
forks: 2
openIssues: 1
closedIssues: 74
watchers: 0
contributors: 7
recentReleases: 10
createdAt: "2026-07-09T20:50:07Z"
lastCommitAt: "2026-10-25T09:01:19Z"
lastReleaseAt: "2026-09-17T09:25:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 54
maintainers: ["mrnasil", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/11071975a89528ff079764c5d91d8b81f24af0d7d73dff2c27488899f51dcf57/whycorporation/whycodes"
---

English · <a href="README.zh-CN.md">简体中文</a> · <a href="README.ru.md">Русский</a> · <a href="README.es.md">Español</a>

**A fast, provider-independent coding agent for the terminal, written in Rust.**

WhyCodes reads, writes and edits files, runs commands, searches the workspace
and drives an LLM through multi-turn tool use — in a full-screen TUI or as a
machine-readable one-shot CLI. It focuses on a small native footprint, an
idle-efficient TUI, and a workflow that is not tied to any single model
provider.

## Why WhyCodes

- **Starts instantly.** `whycodes --version` returns in 1.4 ms on Linux.
- **Costs nothing while idle.** The TUI paints only when something changes:
  an idle session draws 0 frames per second.
- **Stays small.** Ten idle sessions share 41.9 MB, about 3.1 MB for each
  extra one; a resumed 3000-message session holds 34.7 MB.
- **Works with the model you choose.** Hosted APIs, a local model server, or
  any OpenAI-compatible endpoint — switch per run or mid-session.

Measured on one machine; method and caveats under [Performance](#performance).

## Highlights

- **One native binary.** Nothing else to install: search runs in-process, and
  on Windows commands…
