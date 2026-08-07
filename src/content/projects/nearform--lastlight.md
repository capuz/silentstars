---
repo: "nearform/lastlight"
name: "lastlight"
description: "Self-hostable, MIT Licensed, Enterprise AI Software Factory"
readmeQualityOk: true
url: "https://github.com/nearform/lastlight"
homepage: "https://lastlight.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["agent", "ai", "coding", "harness"]
stars: 19
forks: 6
openIssues: 35
closedIssues: 91
watchers: 0
contributors: 381
recentReleases: 9
createdAt: "2026-04-04T05:20:57Z"
lastCommitAt: "2026-08-07T05:15:59Z"
lastReleaseAt: "2026-06-28T14:28:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 55
maintainers: ["cliftonc", "robinbowes", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a831c4cca8db58418c48e035b4ae47e90f2dd97c17208d24d9a75084617682db/nearform/lastlight"
discussionCount: 0
---

</p>

<h1 align="center">Last Light</h1>

  <strong>GitHub Repository Maintenance Agent</strong><br/>
</p>

An AI agent that maintains GitHub repositories: triaging issues, reviewing PRs, monitoring repo health, and building features through an Architect → Executor → Reviewer development cycle.

Built on [agentic-pi](https://github.com/nearform/lastlight/tree/main/packages/agentic-pi) (workflow phases) and [`@earendil-works/pi-ai`](https://www.npmjs.com/package/@earendil-works/pi-ai) (in-process chat) with a lightweight TypeScript harness for webhook ingestion, cron scheduling, and process management. Provider-agnostic — point `LASTLIGHT_MODEL` at any `provider/model` pi-ai supports (defaults to `anthropic/claude-sonnet-4-6`).

## Monorepo layout

This repository is a **pnpm + Turborepo** workspace. The harness/server internals
now live under `apps/server/` (formerly the repo root). At a glance:

```
apps/
  server/   lastlight-core  — the harness + server (src, config, workflows,
                               skills, agent-context, deploy, dashboard, spec, …)
  www/      lastlight-www     — the Astro marketing/docs site → lastlight.dev
  evals/    lastlight-evals   — the eval…
