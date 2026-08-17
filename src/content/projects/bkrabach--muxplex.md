---
repo: "bkrabach/muxplex"
name: "muxplex"
description: "Web-based tmux session dashboard — access all your tmux sessions from any browser or mobile device"
readmeQualityOk: true
url: "https://github.com/bkrabach/muxplex"
homepage: "https://github.com/bkrabach/muxplex"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [62, 33]
stars: 8
forks: 8
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 11
recentReleases: 8
createdAt: "2026-03-28T09:52:00Z"
lastCommitAt: "2026-08-17T04:19:57Z"
lastReleaseAt: "2026-08-02T22:56:21Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "fork_magnet"]
healthScore: 93
undervaluedScore: 76
maintainers: ["microsoft-amplifier", "bkrabach"]
openGraphImageUrl: "https://opengraph.githubassets.com/67f75840a7fdaa868243d47fd6b6846f7d5793041fa54180108453a2fed354e2/bkrabach/muxplex"
---

# muxplex

**Web-based tmux session dashboard — access, monitor, and manage all your tmux sessions from any browser on any device.**

---

## Features

### Dashboard

- **Live session grid** — preview tiles with ANSI-colored terminal snapshots, auto-refreshed
- **Two view modes** — Auto (scrollable grid) and Fit (all sessions fill the viewport)
- **Hover preview** — full-size overlay of session content on tile hover
- **Activity indicators** — bell notification badges on tiles; amber favicon dot + `(N)` count in browser tab title when sessions have unseen activity
- **Session creation** — `+` button with device selector dropdown when multi-device is enabled; custom command template support
- **Session deletion** — `×` button with custom command template support
- **Mobile-friendly** — responsive layout, PWA-capable for home-screen install

### Terminal

- **Full interactive terminal** — powered by xterm.js + ttyd
- **Native clipboard** — Ctrl+Shift+C to copy, Cmd+V (macOS) / Ctrl+Shift+V (Linux) to paste
- **Mouse select auto-copy** — selecting text copies to system clipboard on release
- **OSC 52 tmux clipboard bridge** — tmux copy mode selections go to system clipboard
-…
