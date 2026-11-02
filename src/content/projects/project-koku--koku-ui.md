---
repo: "project-koku/koku-ui"
name: "koku-ui"
description: "Koku UI"
readmeQualityOk: true
url: "https://github.com/project-koku/koku-ui"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["koku", "patternfly", "ui", "cost-estimation", "cost-control", "hacktoberfest"]
stars: 28
forks: 59
openIssues: 0
closedIssues: 0
watchers: 12
contributors: 38
recentReleases: 0
createdAt: "2018-04-04T09:56:20Z"
lastCommitAt: "2026-11-02T15:16:57Z"
lastReleaseAt: "2021-11-15T16:54:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 62
maintainers: ["dlabrecq", "dependabot[bot]", "red-hat-konflux[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee8be72f4352db331ddb229c6b2abd8e07f3784959b884562f3f2e305b875ca8/project-koku/koku-ui"
---

# Koku UI Monorepo

Monorepo for Cost Management related user interfaces

Submit issues in [Jira].

## Getting started

After cloning, initialize git submodules (required for the on-prem RBAC remote and other vendored deps):

```bash
git submodule update --init --recursive
```

Then install dependencies from the repo root: `npm ci`.

For RBAC submodule pin and bump steps, see [rbac-ui-onprem README](https://github.com/project-koku/koku-ui/blob/HEAD/apps/rbac-ui-onprem/README.md).

For the vendored Sources UI, see [sources-ui-onprem README](https://github.com/project-koku/koku-ui/blob/HEAD/apps/sources-ui-onprem/README.md).

For specific instructions look at app's README. Available apps:
- [koku-ui-hccm][koku-ui-hccm-readme]
- [koku-ui-onprem][koku-ui-onprem-readme]
- [koku-ui-ros][koku-ui-ros-readme]

Quick starts:

- [Start koku and load sample cost data (experimental)][koku-quick-start] (`scripts/onprem/quick-start-koku.sh`)

[build-badge]: https://github.com/project-koku/koku-ui/actions/workflows/ci.yml/badge.svg?branch=main
[codecov-badge]: https://codecov.io/gh/project-koku/koku-ui/graph/badge.svg?token=1hjFIy1cRe
[Jira]: https://redhat.atlassian.net/projects/COST/…
