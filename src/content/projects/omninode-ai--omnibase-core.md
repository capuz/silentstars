---
repo: "OmniNode-ai/omnibase_core"
name: "omnibase_core"
description: "ONEX Core Framework - Base classes and essential implementations for the ONEX ecosystem"
readmeQualityOk: true
url: "https://github.com/OmniNode-ai/omnibase_core"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 10
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2025-08-28T18:42:01Z"
lastCommitAt: "2026-09-01T08:39:51Z"
lastReleaseAt: "2026-02-27T15:30:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 69
maintainers: ["jonahgabriel", "dependabot[bot]", "Patel230"]
openGraphImageUrl: "https://opengraph.githubassets.com/dc87ed90dd6a86d90dccb356efb075dbb452cb8e015add107ecda3d5e4bdeca6/OmniNode-ai/omnibase_core"
discussionCount: 1
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/assets/brand/omninode-inline-white.png">
    <source media="(prefers-color-scheme: light)" srcset="docs/assets/brand/omninode-inline-full-color.svg">
  </picture>
</p>

# omnibase_core

`omnibase_core` is the ONEX (OmniNode eXecution) platform kernel. It owns node execution, contracts,
core models, validation tooling, and the canonical architecture vocabulary used
by downstream OmniNode repos.

> **Badge note:** this tracks the PR-triggered `ci.yml` run (`event=pull_request`), not the push-triggered run on `dev`. The push/schedule-triggered run is permanently red by design: its Contract Compliance Check job fails closed on every non-PR event because its DoD checks are PR-scoped and correctly refuse to vacuously pass outside PR context. That is an intentional, documented tradeoff, not a regression — see the `contract-compliance` job comment in `.github/workflows/ci.yml` for the rationale.

## Who Uses It

Use this repo when you need to:

- Use ONEX core types, nodes, contracts, and validation tools.
- Build a contract-driven EFFECT, COMPUTE, REDUCER, or ORCHESTRATOR node.
- Extend Core internals such as…
