---
repo: "Parcha-ai/agentrun"
name: "agentrun"
description: "The Agentrun Workflow DSL"
readmeQualityOk: true
url: "https://github.com/Parcha-ai/agentrun"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [50, 46]
stars: 433
forks: 34
openIssues: 10
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-09-23T00:27:34Z"
lastCommitAt: "2026-11-08T10:31:21Z"
lastReleaseAt: "2026-11-06T21:01:15Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 22
maintainers: ["claudio-michel[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6a46430053885ad3095e638588a1d7092764db9c50f4091de481fd399a3a2f2/Parcha-ai/agentrun"
---

# AgentRun

**AgentRun is an open platform to manage your agents.**

Create an agent, change it, and run it. Every change is a revision you can go back to, and every run names the
revision it ran, so you can open any run of any agent and see what it did. Host it yourself with AgentRun Server, on
your machine or your own server, or with us when hosted AgentRun opens.

1. **The platform.** Your agents, each one's revisions, and every run, behind one API (`/v2`) and one page. You run
   it yourself today; hosted by us is coming. An agent runs on pi, the default, or names Claude (the Claude Agent SDK) or
   Codex as its harness; `GET /v2/capabilities` says which of them the server runs.
2. **[AgentRun Server](https://github.com/Parcha-ai/agentrun/blob/HEAD/packages/serve/README.md).** The part you host: one container, `ghcr.io/parcha-ai/agentrun-server`,
   that serves the `/v2` API and the page and keeps everything in one data directory. Apache-2.0.
3. **[Building blocks](#building-blocks).** The open packages underneath, each usable on its own in your pi agent:
   `@parcha/agentrun-dsl` and `@parcha/agentrun-jev` (typed workflows and the decisions in them),
   `@parcha/agentrun-pi`…
