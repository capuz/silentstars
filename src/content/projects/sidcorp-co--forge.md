---
repo: "SidCorp-co/forge"
name: "forge"
description: "Self-hosted lifecycle platform for software powered by Claude Code. Configurable pipelines, devices you control, no credentials on the server. Apache-2.0."
readmeQualityOk: true
url: "https://github.com/SidCorp-co/forge"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [67, 29]
topics: ["agent-orchestration", "ai-agents", "claude", "claude-code", "local-first", "mcp", "mcp-server", "nextjs", "self-hosted", "tauri"]
stars: 5
forks: 1
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-04-19T07:37:56Z"
lastCommitAt: "2026-07-20T06:30:49Z"
lastReleaseAt: "2026-04-25T17:52:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 50
maintainers: ["chuongld20", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0d3b17596fe1a425ee477f285b0169b33b9ef805357a97ede0880d7e6750627/SidCorp-co/forge"
discussionCount: 0
---

# Forge

> The open-source AI-powered software lifecycle platform. Manage software from
> build through maintain — powered by Claude Code on devices you control.

**Status:** alpha — not production-ready. Expect breaking changes across `v0.x`.

## What it is

Forge is an open-source **AI-powered software lifecycle platform**. You keep
using `claude` on your own machine with your own Claude Pro/Max subscription.
Forge adds the layer around it: a web dashboard to manage projects from build
through maintenance, a configurable pipeline that routes issues through stages,
and a full audit trail of every job. The server never holds your Claude
credentials.

- **Devices pair into your account.** Your laptop, desktop, or CI box runs the
  Forge agent, which spawns `claude` locally. The server never holds Claude
  credentials.
- **Issues flow in from anywhere.** GitHub webhooks, Sentry alerts, Stripe
  events, your own API — point a webhook at Forge, it becomes an issue.
- **A configurable pipeline routes work.** Default flow: triage → clarify →
  plan → code → review → test → release. Per stage: auto-run or human gate.
  Shorten, extend, or replace it per project.
- **Every job is…
