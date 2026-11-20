---
repo: "Abillify/atf"
name: "atf"
description: "Self-hosted AI orchestration with policy, approvals, PII controls, audit evidence, retrieval, and governed MCP tools"
readmeQualityOk: true
url: "https://github.com/Abillify/atf"
homepage: "https://aiperator.dev"
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
recentReleases: 10
createdAt: "2026-08-31T20:59:05Z"
lastCommitAt: "2026-11-20T11:57:08Z"
lastReleaseAt: "2026-10-24T10:03:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 56
maintainers: ["artur-krueger"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bb3dc9746ac89e3400b16aa954eef632340a43a4956661e9c99c0565d00767d/Abillify/atf"
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

> **Project status:** ATF is at `0.28.0`: complete enough to evaluate the local service wiring
> end to end, but still pre-1.0. Governed capabilities require explicit configuration and
> verification for each deployment. Contract packages already carry compatibility guarantees;
> flow fields, environment variables, and HTTP routes may still change with documented
> migrations. See [docs/STABILITY.md](https://github.com/Abillify/atf/blob/HEAD/docs/STABILITY.md) for what is covered from 1.0.0.
