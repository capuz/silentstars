---
repo: "AMD-AGI/PrimusClaw"
name: "PrimusClaw"
description: "LLM agent orchestration on Kubernetes: autonomous coding-agent sessions in per-session sandboxes."
readmeQualityOk: true
url: "https://github.com/AMD-AGI/PrimusClaw"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["agent", "golang", "kubernetes", "llm", "python", "sandbox", "typescript"]
stars: 5
forks: 0
openIssues: 6
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 5
createdAt: "2026-08-28T11:19:31Z"
lastCommitAt: "2026-11-07T09:29:55Z"
lastReleaseAt: "2026-11-07T08:21:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 47
maintainers: ["zoroyihan7"]
openGraphImageUrl: "https://opengraph.githubassets.com/a251c852f2067d40d2b55c95346331d7bce2a50cecfd55c09950969582cc4f79/AMD-AGI/PrimusClaw"
---

# PrimusClaw

PrimusClaw is an LLM agent orchestration system: an API / Brain / Hands service
triad that runs autonomous coding-agent sessions inside per-session sandboxes,
backed by NATS JetStream, PostgreSQL, and S3-compatible object storage.

The agent harness is called **Claw** and lives under [`claw/`](https://github.com/AMD-AGI/PrimusClaw/blob/HEAD/claw), an
npm-workspaces monorepo. The repository also carries the components Claw runs
against — see [Repository layout](#repository-layout).

## Prerequisites

Claw delegates authentication and sandbox workload placement to **SaFE**
(AMD's Secure Agent Fabric/Environment platform, published separately as
[AMD-AGI/Primus-SaFE](https://github.com/AMD-AGI/Primus-SaFE)). Everywhere this
README says "SaFE sandbox", that is the system meant. `SAFE_API_URL` is
**required for any production deployment**, and the API fails closed without it.

You do not need SaFE to evaluate the project:

| What you want to do | What you need |
|---|---|
| Exercise the tool-execution layer end to end | Node 26. Run `make demo` — no cluster, GPU, LLM key, or network egress |
| Run api / brain / hands locally | Node 26, PostgreSQL, NATS, S3-compatible…
