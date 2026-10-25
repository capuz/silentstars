---
repo: "Rick1330/ibex-harness"
name: "ibex-harness"
description: "Production-grade AI agent memory and context management platform (monorepo)"
readmeQualityOk: true
url: "https://github.com/Rick1330/ibex-harness"
homepage: "https://ibexharness.com"
language: "Python"
languages: ["Python", "Go"]
languagePcts: [29, 28]
topics: ["agent-memory", "ai-agents", "context-assembly", "directives", "drift-detection", "persistent-memory"]
stars: 55
forks: 2
openIssues: 36
closedIssues: 248
watchers: 0
contributors: 6
recentReleases: 8
createdAt: "2026-05-30T09:34:41Z"
lastCommitAt: "2026-10-25T09:01:13Z"
lastReleaseAt: "2026-10-04T15:49:42Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 43
maintainers: ["Rick1330", "dependabot[bot]", "ibex-harness-benchmark[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/92292178d03e2b625bc2a7ee354b950dacd3a542de780c70b7b9e6b2d59ff5ba/Rick1330/ibex-harness"
discussionCount: 0
---

## Current status

Phases **0–3.5 are shipped**. **Phase 4 is in progress**: Track P operator readiness is the prerequisite for redesigned Track D capability slices. The current repository contains mounted, tenant-scoped, read-only **4.D.1 context/overview** and **4.D.2 metadata-only trace list/detail** surfaces. These are **mounted-but-provisional**, not proof of production identity, deployment, hosted acceptance, full management APIs, raw provenance, replay, or operator actions.

See the [status ledger](https://ibexharness.com/docs/architecture/status-and-evidence), [published benchmarks](https://ibexharness.com/benchmarks), [service inventory](https://github.com/Rick1330/ibex-harness/blob/HEAD/services/README.md), [package inventory](https://github.com/Rick1330/ibex-harness/blob/HEAD/packages/README.md), and [operator architecture boundary](https://github.com/Rick1330/ibex-harness/blob/HEAD/engineering/OPERATOR_PLATFORM_ARCHITECTURE.md).

## Quick start

Prerequisites are Docker Compose v2 or Podman Compose, GNU Make, and the versions defined in [`infra/tool-versions.conf`](https://github.com/Rick1330/ibex-harness/blob/HEAD/infra/tool-versions.conf). See…
