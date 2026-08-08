---
repo: "jainal09/envdrift"
name: "envdrift"
description: "Prevent environment variable drift with Pydantic schema validation, pre-commit hooks, and dotenvx encryption"
readmeQualityOk: true
url: "https://github.com/jainal09/envdrift"
homepage: "https://jainal09.github.io/envdrift/"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 10
forks: 2
openIssues: 2
closedIssues: 160
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-12-09T07:18:53Z"
lastCommitAt: "2026-08-08T04:34:36Z"
lastReleaseAt: "2026-02-21T08:18:22Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 62
maintainers: ["jainal09", "renovate[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/be66228bfab538b5a9878142b4698d1c75c398c011f357e2fb65a8777626b45f/jainal09/envdrift"
discussionCount: 1
---

</p>

# envdrift

Sync environment variables across your team. No more "it works on my machine."

> **Status: stable.** envdrift v11 marks the first release the project considers
> production-ready: core features are covered by integration tests against real backends in
> CI (LocalStack, HashiCorp Vault, Lowkey Vault emulating Azure) and the real encryption
> binaries, every bug fix ships a regression test, and changes pass a reliability-first
> review gate. See the
> [changelog](https://github.com/jainal09/envdrift/blob/main/CHANGELOG.md) for history.

## The Problem

- New developer joins → spends half a day hunting for the right `.env` values
- Someone updates a secret → nobody else knows until production breaks
- "Can you send me the latest API keys?" in Slack → security nightmare

**Paid SaaS solutions exist, but do you really want your production secrets on someone else's infrastructure?**

## The Solution

envdrift is an **open-source** CLI that encrypts `.env` files and syncs them using **your existing cloud vault** and git.
No hosted service, no additional servers, no third-party trust.

- **Your infrastructure** — Works with all major cloud providers: Azure Key Vault,…
