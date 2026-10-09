---
repo: "vokako/tmux-mobile"
name: "tmux-mobile"
description: "Remotely monitor and control your coding agents from your phone. Connect to tmux sessions over WebSocket."
readmeQualityOk: true
url: "https://github.com/vokako/tmux-mobile"
homepage: "https://tmm.voka.cc/swarm/"
language: "TypeScript"
languages: ["TypeScript", "Rust", "Svelte"]
languagePcts: [39, 38, 21]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-02-27T17:41:04Z"
lastCommitAt: "2026-10-09T10:44:46Z"
lastReleaseAt: "2026-06-25T06:48:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 63
maintainers: ["vokako"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e451c4fae1fef233ffc54103f397ace5302857b727505eb0d59dd34da0c3d46/vokako/tmux-mobile"
---

---

You run Kiro CLI, Claude Code, Codex, Grok, OMP or Kimi Code inside tmux.
tmux-mobile connects those real sessions to your phone or desktop, gives every
project a chat room shared by you and your agents, and lets agents spawn, brief
and review one another.

## Design philosophy

**A shell, not an engine.** tmux owns processes and sessions. Each agent CLI
owns its intelligence and its harness. MCP servers and skills own the tools.
tmux-mobile owns only four things:

| We own | What it is |
|---|---|
| **Connection** | WebSocket JSON-RPC, token auth, optional end-to-end encryption, several servers |
| **Room** | A chat room and a task board per project; agent status derived from what agents do |
| **Identity** | Agent and team definitions, each agent spawned into its own isolated home |
| **Window** | A complete phone UI and a complete desktop UI |

Everything else follows from that boundary:

- **The real CLI in a real pane.** No protocol wrapper and no modified harness.
  We reach a CLI only through its documented doors: environment, config files,
  hooks and launch flags. A person can take over any session at any time.
- **No central node.** Sessions live in tmux. If our…
