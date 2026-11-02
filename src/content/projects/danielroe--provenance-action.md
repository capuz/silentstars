---
repo: "danielroe/provenance-action"
name: "provenance-action"
description: "Fail CI when dependencies in your lockfile lose npm provenance or trusted publisher status"
readmeQualityOk: true
url: "https://github.com/danielroe/provenance-action"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["github-actions", "provenance", "security", "trusted-publishing"]
stars: 308
forks: 6
openIssues: 3
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-09-16T11:08:14Z"
lastCommitAt: "2026-11-02T13:38:24Z"
lastReleaseAt: "2026-07-21T15:52:09Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 87
undervaluedScore: 29
maintainers: ["renovate[bot]", "danielroe"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3ebe61fcde502d9a9e3397d1193a2f8cc515e40cc7966294d031550dedf2f75/danielroe/provenance-action"
fundingLinks: ["GITHUB:https://github.com/danielroe"]
---

# `danielroe/provenance-action`

Fail CI when dependencies in your lockfile lose npm provenance, trusted publisher or staged publishing status.

> [!WARNING]
> This action is under active development and is only one tool to assist in securing your dependencies.

> [!NOTE]
> **pnpm users:** As of [pnpm v10.21](https://github.com/pnpm/pnpm/releases/tag/v10.21.0), pnpm now has built-in support for `trustPolicy` in `.npmrc`, which provides native enforcement of provenance checks. If you're using pnpm v10.21 or later, you may not need this action. See the [pnpm documentation](https://pnpm.io/blog/releases/10.21#trust-policy) for more details.

## ✨ Features
- supports `pnpm-lock.yaml`, `package-lock.json`, `yarn.lock` (v1 and v2+), `bun.lock`
- handles transitives by comparing resolved versions
- inline GitHub annotations at the lockfile line
- JSON output and optional hard‑fail (default: on)
- pure TypeScript, Node 24+

👉 See it in action: [danielroe/provenance-action-test](https://github.com/danielroe/provenance-action-test)

## 🚀 Quick start
```yaml
name: ci
on:
  pull_request:
    branches:
      - main
    paths:
      # Trigger a run only on PRs that change the lockfile
      #…
