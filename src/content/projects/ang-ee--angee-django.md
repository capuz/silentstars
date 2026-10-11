---
repo: "ang-ee/angee-django"
name: "angee-django"
description: "Developer framework and base addons for building Django + React applications on the Angee platform."
readmeQualityOk: true
url: "https://github.com/ang-ee/angee-django"
homepage: "https://angee.ai"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [54, 45]
topics: ["agent-native", "agpl", "django", "framework", "graphql", "python", "react", "typescript"]
stars: 10
forks: 10
openIssues: 31
closedIssues: 10
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-01T14:25:12Z"
lastCommitAt: "2026-10-11T10:14:46Z"
lastReleaseAt: "2026-07-02T14:24:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure", "fork_magnet"]
healthScore: 84
undervaluedScore: 58
maintainers: ["ayushin"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed99f38f43fa4a03b49a58ab03047d1e783fa61862df9d8f018eed6ba4d0d026/ang-ee/angee-django"
---

# angee-django

**Developer framework and base addons for building Django + React applications
on the [Angee platform](https://angee.ai).**

> **For developers, not end users.** This repository is the framework source for
> teams building Angee applications and addons. If you want a product to use,
> start with a product-specific distribution built on Angee.

> **Public alpha / active refactor.** Angee is being opened while major addon,
> API, and UI surfaces are still moving. Use it for exploration and feedback,
> not production. Roadmap and compatibility guarantees are still in progress.

## What is this?

`angee-django` is the **framework**, the **base addons** that ship with it, and
the first and default **Host** for Angee — a platform for building
**agent-native applications** that humans and agents operate together.

Angee comes in two halves:

- **The operator** — a Go control plane (repo
  [`ang-ee/angee-operator`](https://github.com/ang-ee/angee-operator)) that pulls source
  repositories and composes them into **Workspaces** (Sources and/or agentic
  configuration) and **Stacks** (dev or prod), running them on docker-compose or
  process-compose.
- **This repository** —…
