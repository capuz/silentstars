---
repo: "unarbos/arbos"
name: "arbos"
description: "Arbos is a coding agent for one project. Talk to Main, watch workers, keep the work in one place."
readmeQualityOk: true
url: "https://github.com/unarbos/arbos"
homepage: "https://arbos.life"
language: "Rust"
languages: ["Rust"]
languagePcts: [72]
topics: ["agents", "ai-agents", "coding-agent", "cursor", "desktop-app", "full-duplex", "gpui", "ios", "llm", "multi-agent"]
stars: 30
forks: 8
openIssues: 96
closedIssues: 3
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-03-18T14:07:18Z"
lastCommitAt: "2026-10-17T07:58:13Z"
lastReleaseAt: "2026-06-13T23:27:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 81
undervaluedScore: 38
maintainers: ["cursoragent", "unarbos"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7716f4dff10f231fd389f91ac46254d5c0ecc7a99cc9f044e789642b4bef6b7/unarbos/arbos"
---

&nbsp;·&nbsp;
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;

Arbos is a messenger for working with AI agents. You talk to a project agent in a chat — on the Mac, on the iPhone, or from a terminal — and it does the work on your own cloud computer: it answers, acts in a few tool calls, or hands bigger jobs to subagents that run in the background and report back in prose. Every user has **one** machine; every project is a workspace on it with its own folder, agent sessions, memory and history. Provider keys never leave the relay.

Use it hosted at [arbos.life](https://arbos.life) (sign in with GitHub), or [run the whole thing yourself](https://github.com/unarbos/arbos/blob/HEAD/docs/self-host.md).

## What is in this repository

| Path | What |
| --- | --- |
| `crates/arbos-mac` | The Mac app (GPUI): project rail, tabs, chat transcript, composer with voice and attachments, approval cards, Settings, machine status, in-app updates, Send feedback. Also builds on Linux. |
| `apps/ios/Arbos` | The iPhone app (SwiftUI): the same chats over the relay, home with machine status, people chats, attach sheet, voice memos, notifications. |
| `crates/arbos-relay` | The one service outside the machines: sign-in,…
