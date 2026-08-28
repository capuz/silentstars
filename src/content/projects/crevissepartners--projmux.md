---
repo: "crevissepartners/projmux"
name: "projmux"
description: "A tmux-native workspace for multi-agent AI development across Claude Code, Codex, and   Antigravity."
readmeQualityOk: true
url: "https://github.com/crevissepartners/projmux"
homepage: "https://github.com/crevissepartners/projmux#readme"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["ai-agents", "claude-code", "codex", "developer-tools", "terminal", "tmux", "antigravity", "antigravity-cli", "claude-cli", "codex-cli"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-04-22T16:51:06Z"
lastCommitAt: "2026-08-28T15:30:23Z"
lastReleaseAt: "2026-05-08T05:10:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 55
maintainers: ["es5h"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f96d6b605e1c9505613526eb277e748c214f2216e2e3028d049331750b3c2e7/crevissepartners/projmux"
---

# projmux

</p>

  <strong>A tmux-native workspace for multi-agent AI development.</strong>
  <br>
  <em>Managed Claude Code, Codex, and Antigravity panes with hook-driven attention and agent-aware session resume.</em>
</p>

</p>

```sh
npm install -g projmux
projmux shell
```

  <br>
  <em>Resume an existing AI session, keep working in another project, then return through grouped notifications when the agent needs approval.</em>
</p>

## Why

Six tmux windows. Each one is running Claude Code, Codex, or Antigravity on a
different repo. Three are idle. One is waiting on a permission prompt. One
crashed an hour ago and you have no idea which.

projmux manages Claude Code, Codex, and Antigravity hook integrations, including
Antigravity's hook/statusline wiring, shows live per-pane state in the tmux
status bar, and lets one keystroke take you to the pane that actually needs
you. It also remembers each agent's resume id, so after a reboot every pane
comes back as the *same* conversation — not a fresh one.

## Requirements

- [Node.js](https://nodejs.org/) and npm, for the main install path.
- [tmux](https://github.com/tmux/tmux/wiki/Installing) **3.4 or newer**.

Run `projmux doctor`…
