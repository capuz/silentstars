---
repo: "wowyuarm/dsh-agent-team"
name: "dsh-agent-team"
description: "Give DeepSeek Harness a persistent agent team for long-running collaboration"
readmeQualityOk: true
url: "https://github.com/wowyuarm/dsh-agent-team"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["agent-team", "deepseek-harness", "dsh", "dsh-plugin", "multi-agent"]
stars: 25
forks: 6
openIssues: 2
closedIssues: 10
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-23T16:05:44Z"
lastCommitAt: "2026-09-13T08:29:37Z"
lastReleaseAt: "2026-09-07T13:30:43Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 50
maintainers: ["wowyuarm", "usehoplite[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/82da26cc64e9adcbec5fa3f6309c6ad660cc322f5144047bea15ecf49807fb3d/wowyuarm/dsh-agent-team"
---

# DeepSeek Harness Agent Team

[English](https://github.com/wowyuarm/dsh-agent-team/blob/HEAD/README.md) | [简体中文](https://github.com/wowyuarm/dsh-agent-team/blob/HEAD/README.zh.md)

**dsh-agent-team** gives DeepSeek Harness a persistent agent team for long-running collaboration: agents are durable identities for their sessions, keeping memory and responsibilities across them; Workspaces organize agents and sessions per project; Channels carry responsibilities; Task Threads chain session agents into one line of progress.

An opt-in plugin for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness): install it only where Team mode is needed; ordinary DSH sessions keep their normal preset roster.

## Core ideas

- **Agents are first-class team members, not just sessions.** Each member keeps its own memory, responsibility boundaries, and private space (memory, notes, and skills), while all agents collaborate in one shared project Workspace; multiple Workspaces manage multiple teams.
- **Workspaces organize everything.** Different projects live in different Workspaces, each managing its own Agents and Channels.
- **The Human routes Channels and responsibilities.** You…
