---
repo: "lavinhoque33/omp-deck"
name: "omp-deck"
description: "Native desktop app (Linux + Windows) for the omp coding agent: persistent session tabs, split view, agents dashboard, session tree, git review, and a phone companion over a self-hosted end-to-end encrypted relay."
readmeQualityOk: true
url: "https://github.com/lavinhoque33/omp-deck"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
stars: 8
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-22T02:59:59Z"
lastCommitAt: "2026-11-06T13:20:27Z"
lastReleaseAt: "2026-10-22T20:05:13Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 70
undervaluedScore: 60
maintainers: ["lavinhoque33"]
openGraphImageUrl: "https://opengraph.githubassets.com/03bfab66acf5c7405a7920e2f1702d9ba52865b5ecdb44bb3ef761d4f1d200d0/lavinhoque33/omp-deck"
---

# OmpDeck

A native desktop home for omp — persistent coding sessions, parallel agents, and a phone companion.

OmpDeck is a native Rust / egui desktop app for [`omp`](https://github.com/can1357/oh-my-pi) (oh-my-pi),
the coding-agent TUI, with a project sidebar and session tabs that show omp as a native chat view (the default)
or as a fully interactive terminal.
Sessions run outside the app in a dedicated tmux server or OmpDeck's own session host, so closing a tab
or the whole app leaves omp running.
It runs on Linux and Windows 10 (1809+) / 11, with arm64 builds on a best-effort basis.
A shipped phone companion lets you work with the same sessions through a self-hosted, end-to-end encrypted relay.

**Status:** A young project (first release: October 22, 2026), developed and used daily on Fedora KDE Plasma
(Wayland). Windows runtime is verified in GitHub Actions CI; macOS is not supported.
[Bug reports are welcome](https://github.com/lavinhoque33/omp-deck/issues).

## Screenshots

### Phone companion

Sessions, chat, terminal and agents on your phone — see [Mobile companion](#mobile-companion) for setup.

## Features

- **Session sidebar**: Browse persisted sessions by project and…
