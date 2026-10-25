---
repo: "xiaoyu-work/claw-os"
name: "claw-os"
description: "The world’s first agent-native operating system from the future"
readmeQualityOk: true
url: "https://github.com/xiaoyu-work/claw-os"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["agent", "ai", "linux", "os"]
stars: 12
forks: 1
openIssues: 2
closedIssues: 62
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-03-14T20:12:24Z"
lastCommitAt: "2026-10-25T22:11:50Z"
lastReleaseAt: "2026-08-23T06:33:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 56
maintainers: ["xiaoyu-work"]
openGraphImageUrl: "https://opengraph.githubassets.com/93c7b705aee4b647825a311b19b915f2d3fb4f05211de598fa7b66b25c3707c4/xiaoyu-work/claw-os"
discussionCount: 0
---

# Claw OS

> **Claw OS is under active development; its architecture, APIs, and behavior may change significantly.**

## Why Claw OS is agent-native

Agent-native is the whole bet: the next operating system is one where the
assistant is not a tab you open but the layer the system runs through. Here
that means:

- **The AI is part of the system, not an app on top of it.** It runs as a
  privileged system service, not in a sandbox, so you can just ask the things
  an app could never reach — *"why is my network so slow?"*, *"why did that app
  just crash?"*, *"why can't I get online?"*, *"what's eating my disk?"* — and
  it actually looks at your processes, logs, network, and resources to answer.
- **It understands every app.** The agent can inspect which apps are installed
  and used, what permissions they have, what resources they can access, their
  activity and history, their logs, and the evidence behind a crash. It can
  connect that app context with the rest of the system instead of diagnosing
  each app in isolation.
- **One agent across every app.** Instead of a separate, siloed assistant inside
  each app, a single agent spans the whole machine — it can drive several apps…
