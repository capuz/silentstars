---
repo: "tellang/triflux"
name: "triflux"
description: "CLI-first multi-model orchestrator — routes tasks to Codex, Gemini, and Claude"
readmeQualityOk: true
url: "https://github.com/tellang/triflux"
homepage: "https://www.npmjs.com/package/triflux"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [92]
topics: ["ai-routing", "claude-code", "claude-plugin", "cli-orchestrator", "codex-cli", "developer-tools", "gemini-cli", "multi-model", "task-automation", "terminal"]
stars: 7
forks: 2
openIssues: 27
closedIssues: 175
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-18T13:20:05Z"
lastCommitAt: "2026-07-23T06:16:07Z"
lastReleaseAt: "2026-04-05T16:37:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 96
undervaluedScore: 59
maintainers: ["tellang"]
openGraphImageUrl: "https://opengraph.githubassets.com/daa1a9e1a05d2fc2462d7cddd00850b14c3b6e26fee70b8fb1fc429252df01b7/tellang/triflux"
---

[English](https://github.com/tellang/triflux/blob/HEAD/README.md) | [한국어](https://github.com/tellang/triflux/blob/HEAD/README.ko.md)

  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/assets/logo-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="docs/assets/logo-light.svg">
  </picture>
</p>

<h3 align="center">CLI-first multi-model orchestration for Claude Code, Codex, and Antigravity</h3>

  One front door for routing work, coordinating agents, running local/remote teams,<br>
  and keeping Codex/Antigravity/Claude execution behind auditable guards.
</p>

  <sub>11 compatibility aliases are deprecated</sub>
</p>

</p>

</p>

---

## What is triflux?

triflux is a **Claude Code plugin + npm CLI** for routing AI coding work across
Claude, Codex, and Antigravity without letting ad-hoc shell commands or stale skill
aliases become the control plane.

The current design is intentionally simpler than the old README implied:

- **`/tfx-auto` is the canonical Claude Code skill front door.** Use flags to
  express quick/deep/consensus/parallel/retry behavior.
- **`tfx` is the shell CLI.** Use it for setup, diagnostics, hub lifecycle,
  MCP sync,…
