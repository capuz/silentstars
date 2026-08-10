---
repo: "Open330/muxa"
name: "muxa"
description: "Agent CLI observability and orchestration layer for tmux"
readmeQualityOk: true
url: "https://github.com/Open330/muxa"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 26
forks: 1
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-24T07:46:01Z"
lastCommitAt: "2026-08-10T05:05:38Z"
lastReleaseAt: "2026-05-02T08:55:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 42
maintainers: ["jiunbae"]
openGraphImageUrl: "https://opengraph.githubassets.com/de3cf7583de75f2e8ea7eb8770a793bca989ff67673d76053c2542a82b78c6f7/Open330/muxa"
---

**Agent CLI observability & orchestration layer for tmux.**

See which agents are working, waiting, idle, or blocked from your tmux
status line, a live TUI, desktop notifications, and local reports.

**English** · [한국어](https://github.com/Open330/muxa/blob/HEAD/README.ko.md)

</div>

---

`muxa` is a small daemon and CLI for observing — and now driving — AI
coding agents running inside terminal multiplexer panes. It reads agent
state from existing hook/event systems (Claude Code, OpenAI Codex, Google
Gemini CLI), falls back to screen-manifest detection for hook-less agents,
and correlates it all with multiplexer panes and sessions. Through `muxa
mcp` a coding agent can also orchestrate the others — inspect state, send
prompts, wait for changes.

It does not fork the multiplexer or modify agent binaries. tmux and
[herdr](https://herdr.dev) are full backends and can be observed at the
same time; zellij has a CLI baseline. See the Hosts table below.

  <br />
  <sub><code>muxa watch</code> — the fleet, the inspector, the swarm view, and <code>muxa attend</code>.</sub>
</div>

> [!IMPORTANT]
> Beta. Event ingest, the daemon, CLI, live TUI, desktop notifications,
> stats, and reports…
