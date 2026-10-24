---
repo: "BeOnAuto/runtime"
name: "runtime"
description: "The playbook runtime for business automation: composable primitives, with every step recorded on one ledger."
readmeQualityOk: true
url: "https://github.com/BeOnAuto/runtime"
homepage: "https://on.auto"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["agentic-workflows", "ai-agents", "business-automation", "docker", "ledger", "llm", "nodejs", "runtime", "self-hosted", "source-available"]
stars: 113
forks: 13
openIssues: 1
closedIssues: 3
watchers: 2
contributors: 7
recentReleases: 10
createdAt: "2025-06-15T05:11:21Z"
lastCommitAt: "2026-10-24T08:07:29Z"
lastReleaseAt: "2026-10-20T03:55:07Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 95
undervaluedScore: 51
maintainers: ["rami-hatoum", "beonautobot[bot]", "SamHatoum"]
openGraphImageUrl: "https://opengraph.githubassets.com/3444ef9574afe5c016f69788fa85ef28912cba13e03621c7cab57a0aff5c2d44/BeOnAuto/runtime"
---

# Auto Runtime

**Describe how you want the work done.** Auto builds a working playbook you can test, change and run again. You decide when it runs and what it is allowed to do.

A playbook contains one **brain**, its reusable function collection, and **workflows** that coordinate those functions. Functions can also run directly. Each function or workflow call produces a **run** with its result and the versions used. Connections provide authorized access to external services.

Your agent builds and directs the work. **Auto Runtime** stores and executes it; [**Auto Studio**](https://studio.on.auto) lets you inspect and manage it.

## Get started

Start Auto Runtime on your computer with `npx @on.auto/runtime`. It needs Node.js 26.10 or later on macOS or Linux, and listens on `http://localhost:5555` in local mode, where every request on your computer acts as you, with no sign-in; `PUBLIC_URL=http://localhost:5555` signs you in through the Auto identity service instead. Every release is also the image `docker.on.auto/onauto/runtime`, from Docker Hub; see [Run with Docker](https://github.com/BeOnAuto/runtime/blob/HEAD/docs/self-host/docker.md) and the [self-hosting…
