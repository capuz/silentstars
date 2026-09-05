---
repo: "sanirudh17/herdr-agent-handoff"
name: "herdr-agent-handoff"
description: "Herdr plugin that hands an in-progress agent session to a fresh session of another installed coding agent, carrying the complete session inside the prompt - no summary, no truncated transcript, no follow-up prompt to write."
readmeQualityOk: true
url: "https://github.com/sanirudh17/herdr-agent-handoff"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["agent-handoff", "claude-code", "codex", "coding-agents", "developer-tools", "herdr", "herdr-plugin", "terminal"]
stars: 15
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 2
createdAt: "2026-07-26T15:28:45Z"
lastCommitAt: "2026-09-05T07:49:15Z"
lastReleaseAt: "2026-08-14T15:51:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 38
maintainers: ["sanirudh17", "discountry", "anirudhsk-official"]
openGraphImageUrl: "https://opengraph.githubassets.com/f02c68c0fce271c8b5c6730140ff6f2e4e9c07de757abace4fc27de975d03fff/sanirudh17/herdr-agent-handoff"
---

# Agent Handoff

Hand an in-progress task from the agent in your active pane to a **fresh session of another installed
agent**, carrying the complete source session with it. No summary, no truncated transcript, no
follow-up prompt to write.

- **`prefix+a`** — the new agent opens in a split beside the source
- **`prefix+shift+a`** — the new agent opens in a new tab in the same workspace

The source pane is never closed, interrupted, modified, or sent input.

The supplier list is computed by scanning `PATH` **and validating launchers** — an npm
shim whose `node_modules` target was deleted by an uninstall is not "installed" — so
leftover launcher files from an uninstalled package never appear in the picker.

```
  installed (5)        not installed (16)             5 / 21 available

 pi in w5:p1 · 112 lines  →  new tab in workspace 5

  ▸ Codex            codex
    pi               pi
    Antigravity CLI  agy
    Cline            cline
    opencode         opencode

  ↑↓ select · tab section                     ⏎ hand off   esc cancel
```

## Install

```bash
herdr plugin install sanirudh17/herdr-agent-handoff
herdr plugin action invoke agent-handoff.setup-keys
```

`setup-keys`…
