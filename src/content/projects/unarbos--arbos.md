---
repo: "unarbos/arbos"
name: "arbos"
description: "Arbos is a coding agent for one project. Talk to Main, watch workers, keep the work in one place."
readmeQualityOk: true
url: "https://github.com/unarbos/arbos"
homepage: "https://arbos.life"
language: "Rust"
languages: ["Rust"]
languagePcts: [71]
topics: ["agents", "ai-agents", "coding-agent", "cursor", "desktop-app", "full-duplex", "gpui", "ios", "llm", "multi-agent"]
stars: 31
forks: 9
openIssues: 1
closedIssues: 243
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-03-18T14:07:18Z"
lastCommitAt: "2026-10-20T08:48:53Z"
lastReleaseAt: "2026-06-13T23:27:59Z"
status: "thriving"
tags: []
healthScore: 100
undervaluedScore: 50
maintainers: ["cursoragent", "unarbos"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc4e1a52390f11d5b6d13fdc2e697ce2660a28f22199e9c06d61c09b165000a7/unarbos/arbos"
---

&nbsp;·&nbsp;
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;

Arbos is a messenger for working with AI agents. You talk to a project agent in a chat — on the Mac, on the iPhone, or from a terminal — and it does the work on your own cloud computer: it answers, acts in a few tool calls, or hands bigger jobs to subagents that run in the background and report back in prose. Every user has **one** machine; every project is a workspace on it with its own folder, agent sessions, memory and history. Provider keys never leave the relay.

Use it hosted at [arbos.life](https://arbos.life) (sign in with GitHub), or [run the whole thing yourself](https://github.com/unarbos/arbos/blob/HEAD/docs/self-host.md).

## What is in this repository

| Path | What |
| --- | --- |
| `crates/arbos-mac` | The Mac app (GPUI): agent and people list, chat with tabs, composer with voice and attachments, calls, approval cards, profile pages, Settings (Apple-style groups), machine status, in-app updates, Send feedback. Also builds on Linux. |
| `apps/ios/Arbos` | The iPhone app (SwiftUI): one chat per agent over the relay, home with machine status, people chats and groups, calls, profile pages, attach sheet, voice memos,…
