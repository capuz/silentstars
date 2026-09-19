---
repo: "orbi-build/orbi"
name: "orbi"
description: "Orbi — the factory that builds and operates AI software factories. GitHub Issues in, releases and runnable system out"
readmeQualityOk: true
url: "https://github.com/orbi-build/orbi"
homepage: "https://orbi.build"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai-agent", "autonomous-agents", "ci-cd", "coding-agent", "devops", "fair-code", "github-automation", "python", "self-hosted", "software-delivery"]
stars: 180
forks: 19
openIssues: 34
closedIssues: 605
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-24T16:08:33Z"
lastCommitAt: "2026-09-19T01:22:12Z"
lastReleaseAt: "2026-09-08T16:26:31Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 99
undervaluedScore: 36
maintainers: ["xqliu"]
openGraphImageUrl: "https://opengraph.githubassets.com/88d031c249edd4e43d5fea245283f089a8c9b31c3126dd96d68cb3866070d183/orbi-build/orbi"
discussionCount: 13
---

English | [简体中文](https://github.com/orbi-build/orbi/blob/HEAD/README.zh-CN.md)

# Orbi

**GitHub Issues in, tagged releases out.**

Orbi claims an Issue from GitHub Issues, develops it in an isolated worktree, runs an independent review session, merges only the reviewed head, and lets a release Issue freeze the SHA and publish the tag. GitHub Issues are the only state store—no database, queue, or daemon.

**Ledger:** [414 merged PRs](https://github.com/orbi-build/orbi/pulls?q=is:merged) · [537 closed Issues](https://github.com/orbi-build/orbi/issues?q=is:closed) · [36 tagged releases](https://github.com/orbi-build/orbi/releases) 

**Inspect one loop:** [Issue #835](https://github.com/orbi-build/orbi/issues/835) → [PR #843](https://github.com/orbi-build/orbi/pull/843) → [Release v0.5.4](https://github.com/orbi-build/orbi/releases/tag/v0.5.4)

Website <https://orbi.build> ｜ Documentation <https://docs.orbi.build/> ｜ [Discussions](https://github.com/orbi-build/orbi/discussions) ｜ Docker [GHCR](https://ghcr.io/orbi-build/orbi) · [Docker Hub](https://hub.docker.com/r/orbibuild/orbi)

## Quick start

```bash
git clone https://github.com/orbi-build/orbi.git && cd orbi
uv tool install…
