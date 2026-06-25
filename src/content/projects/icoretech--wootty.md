---
repo: "icoretech/wootty"
name: "wootty"
description: "🖥️ Flawless browser terminal for real operators"
url: "https://github.com/icoretech/wootty"
homepage: "https://github.com/icoretech/wootty"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
topics: ["pty", "react", "terminal", "web-terminal", "websocket", "browser-terminal", "devops", "go", "xtermjs", "docker"]
stars: 25
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-19T13:30:40Z"
lastCommitAt: "2026-06-25T01:32:46Z"
lastReleaseAt: "2026-03-03T21:04:51Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 39
maintainers: ["renovate[bot]", "masterkain", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1161752242/dafc5408-4439-41bd-9138-91d407176fc2"
---

</p>

<h1 align="center">WooTTY</h1>

  </a>
  </a>
  </a>
</p>

WooTTY is a clean-slate browser terminal designed for one non-negotiable outcome: a terminal experience that stays reliable under real pressure (resize storms, reconnects, long output, and unstable networks).

## Why WooTTY

- Terminal-first UI: maximum viewport, compact status bar, floating controls.
- Reconnect-safe sessions: resume by `sessionId`, replay buffered output.
- Tab-safe defaults: each browser tab starts its own live session unless the operator explicitly resumes one.
- Explicit multi-session actions: `Resume` for controllable sessions, `Watch` for sessions already controlled elsewhere (read-only).
- Resize fidelity: client and PTY stay in sync during rapid window changes.
- Operational defaults: high scrollback, keyboard-first controls, low-friction deployment.
- Deployment flexibility: minimal image by default, plus `-openssh` image variant for SSH workflows.
- Modern stack: Go 1.26+, Node 24+, React 19 + compiler, xterm.js.

## Table of Contents

- [Quick Start](#quick-start)
- [Run with Docker](#run-with-docker)
- [Kubernetes Deployments](#kubernetes-deployments)
- [Run from…
