---
repo: "talos-hq/clud"
name: "clud"
description: "Claude & Codex CLI but with safety 3rd and God Mode always."
readmeQualityOk: true
url: "https://github.com/talos-hq/clud"
homepage: "https://talos-hq.github.io/clud/"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [73, 25]
topics: ["ai-agent", "claude", "cli", "codex", "developer-tools", "llm", "rust", "claude-code", "deepseek", "talos-hq"]
stars: 17
forks: 1
openIssues: 145
closedIssues: 1027
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-09-14T02:55:47Z"
lastCommitAt: "2026-11-25T12:17:51Z"
lastReleaseAt: "2026-08-09T20:55:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 97
undervaluedScore: 68
maintainers: ["zackees", "clud-refresh[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a44ab7e0f41fc7591540a19e4db66034f42a2b4dabdf8ea8cd7fa2f3dba44698/talos-hq/clud"
---

**Claude &amp; Codex CLI with safety 3rd and God Mode always: Claude, Codex and DeepSeek on the Claude Code harness.**

```bash
curl -fsSL https://raw.githubusercontent.com/talos-hq/clud/main/install.sh | sh
```

# clud

**A luxury agentic experience with Claude, Codex and DeepSeek, by running them all on Claude Code.**

- Fixes the Windows performance problem with zombie git/bash processes.
- Runs Codex and DeepSeek models inside the Claude Code terminal.

The name `clud` is simply a shorter, easier-to-type version of `claude`.

Using Hermes Agent? Start with [Hermes integration](#hermes-integration) for MCP setup and model gateway discovery.

## Run Codex on the Claude harness

```bash
clud --codex --harness claude
```

See [Codex through Claude Code](#codex-through-claude-code-experimental).

## Solve one issue, all the way to a merged PR

```bash
clud do https://github.com/<owner>/<repo>/issues/<N>
```

See [`clud do`](#clud-do-url-or-goal--implement-to-a-merged-pr).

## Grind down your issue list

```bash
clud grind
```
