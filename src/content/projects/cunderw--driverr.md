---
repo: "cunderw/driverr"
name: "driverr"
description: "A free, native iOS and iPadOS SSH client built around herdr"
readmeQualityOk: true
url: "https://github.com/cunderw/driverr"
homepage: "https://cunderw.dev/projects/driverr/"
language: "Swift"
languages: ["Swift"]
languagePcts: [99]
topics: ["herdr", "ios", "ipados", "ssh", "ssh-client", "swift", "swiftui", "terminal"]
stars: 5
forks: 0
openIssues: 7
closedIssues: 29
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-10-13T14:06:11Z"
lastCommitAt: "2026-11-04T02:57:11Z"
lastReleaseAt: "2026-11-03T19:55:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 95
undervaluedScore: 51
maintainers: ["cunderw"]
openGraphImageUrl: "https://opengraph.githubassets.com/489e4a28eea5ed2be8a22eade005cb42e3e4b8a813b00a0d7b43fa0a54e3498d/cunderw/driverr"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/cunderw"]
---

# Driverr

A free, native iOS and iPadOS SSH client built around
[herdr](https://github.com/herdrdev/herdr) — the terminal workspace manager that keeps
coding agents running in persistent background terminals. Driverr is an independent
project. It is not affiliated with or endorsed by the herdr project, Anthropic, OpenAI,
Google or Apple.

Most terminal apps treat herdr as one more TUI to render. Driverr treats it as what it is:
a remote object model. Workspaces, tabs, panes and agents are real SwiftUI screens driven
by herdr's newline-delimited JSON, and the terminal is one view among several rather than
the only one.

The specific thing Driverr does better than a general-purpose SSH client is tell you, on a
phone, that an agent is **waiting on you** — and let you answer it without reading a
terminal.

| Blocked agents, first | Answer without a terminal |
| --- | --- |
| <img src="docs/app-store-assets/raw/iphone-max/needs-you.png" alt="The host screen, with a Needs You section that lists two blocked panes above the session tree" width="300"> | <img src="docs/app-store-assets/raw/iphone-max/chat.png" alt="The chat for a blocked pane. The agent asks a question, then waits for…
