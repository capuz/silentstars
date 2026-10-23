---
repo: "Abillify/atf"
name: "atf"
description: "Self-hosted AI orchestration with policy, approvals, PII controls, audit evidence, retrieval, and governed MCP tools"
readmeQualityOk: true
url: "https://github.com/Abillify/atf"
homepage: "https://github.com/Abillify/atf#readme"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai-governance", "ai-orchestration", "audit", "bun", "human-in-the-loop", "llmops", "mcp", "pgvector", "pii", "rag"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 7
recentReleases: 8
createdAt: "2026-08-31T20:59:05Z"
lastCommitAt: "2026-10-23T09:32:20Z"
lastReleaseAt: "2026-09-14T10:02:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 56
maintainers: ["artur-krueger"]
openGraphImageUrl: "https://opengraph.githubassets.com/a28e76b049944ce06fd0728d5da5178e9c795fc7bd317681a4199d4f7c09f610/Abillify/atf"
discussionCount: 0
---

---

ATF is a platform for building and operating AI assistants and agents on your own
infrastructure, where the interesting problem is not calling a model but everything around it:
keeping personal data out of a provider's hands, requiring a human to approve consequential
actions, proving to a regulator what happened, and knowing what it cost.

Seven applications, connected by explicit versioned contracts and open protocols. Each one is
deployable on its own. Five of them run as server services; the Extract Outpost runs on your
side — as a Docker daemon or a desktop app — and mirrors local folders and cloud storage into
the platform.

> **Project status:** ATF is at `0.19.2`: complete enough to evaluate the local service wiring
> end to end, but still pre-1.0. Governed capabilities require explicit configuration and
> verification for each deployment. Contract packages already carry compatibility guarantees;
> flow fields, environment variables, and HTTP routes may still change with documented
> migrations. See the [changelog](https://github.com/Abillify/atf/blob/HEAD/CHANGELOG.md) for the exact stability boundary.

ATF grew out of production engineering for regulated…
