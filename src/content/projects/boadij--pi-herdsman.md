---
repo: "boadij/pi-herdsman"
name: "pi-herdsman"
description: "Asynchronous Pi subagents and agent fleet orchestration for parallel coding agents with nested delegation, background work, and supervision in herdr."
readmeQualityOk: true
url: "https://github.com/boadij/pi-herdsman"
homepage: "https://pi.dev/packages/pi-herdsman"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["ai-agents", "delegation", "herdr", "multi-agent", "pi", "pi-coding-agent", "pi-extension", "pi-herdsman", "agent-orchestration", "coding-agents"]
stars: 202
forks: 18
openIssues: 15
closedIssues: 157
watchers: 2
contributors: 5
recentReleases: 10
createdAt: "2026-09-07T10:28:10Z"
lastCommitAt: "2026-10-23T08:47:27Z"
lastReleaseAt: "2026-09-11T21:57:57Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 34
maintainers: ["boadij", "github-actions[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/87f7f6053548b1ee14bcb421ba394cd7375549848a38c34e6f81286ed3f0982f/boadij/pi-herdsman"
discussionCount: 3
---

# Pi Herdsman 🐏

Pi Herdsman lets your AI coding assistant delegate tasks to other assistants
running in the background, while you continue using your main conversation.
Start with one Agent, or coordinate independent work across a larger project.

[Pi](https://github.com/earendil-works/pi) runs the coding assistants,
[herdr](https://github.com/herdrdev/herdr)
manages their terminal sessions and workspaces, and Herdsman coordinates their
work.

## Demo

_Advanced orchestration: a live Manager → Lead → Agent workflow._

## What Pi Herdsman gives you

- **Background Agents.** Delegate bounded work without blocking the Lead conversation.
- **Parallel and nested delegation.** Run independent work concurrently and let explicitly enabled Agents delegate their own bounded subtasks.
- **Project orchestration.** A Manager coordinates durable branch-based work across independent Leads and their Agent trees.
- **Direct supervision.** Chief, Manager, Lead, and Agent responsibilities stay explicit instead of collapsing into one global controller.
- **Peer communication.** Leads can exchange messages locally; Managers can also collaborate across connected machines.
- **Owned usage…
