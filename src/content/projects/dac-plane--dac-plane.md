---
repo: "dac-plane/dac-plane"
name: "dac-plane"
description: "An Open Source Control Plane for Delegated Agent Work"
readmeQualityOk: true
url: "https://github.com/dac-plane/dac-plane"
language: "Go"
languages: ["Go"]
languagePcts: [93]
stars: 5
forks: 0
openIssues: 7
closedIssues: 41
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-10-12T21:35:58Z"
lastCommitAt: "2026-11-03T11:15:29Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 53
maintainers: ["AssahBismarkabah"]
openGraphImageUrl: "https://opengraph.githubassets.com/6410a94d401732f4fea4b43a01f6811d32da868f405d16d5cd5506e3ff3deab5/dac-plane/dac-plane"
---

# dac-plane

`dac-plane` is a provider-neutral control plane for delegated agent work. It owns the durable product
lifecycle—tasks, attempts, attention, decisions, budgets, artifacts, audit, result revisions and
reviews—while agent runtimes and execution environments remain replaceable integrations.

The repository implements the lifecycle through an authenticated Surface API, the adapter-initiated
ControlFrame transport, PostgreSQL persistence, fenced workers and deterministic provider simulators.
The control plane is packaged as a non-root distroless image with an explicit migration step and a
reference Compose stack. No production provider is qualified yet. The reviewed implementation baseline is in
[`docs/architecture/`](https://github.com/dac-plane/dac-plane/blob/HEAD/docs/architecture/README.md). The earlier candidate research, experiments and
TypeScript/PostgreSQL prototypes are retained under [`architecture-explore/`](https://github.com/dac-plane/dac-plane/blob/HEAD/architecture-explore/README.md)
as evidence, not as the active product implementation.

The first milestone culminates in the
[contract-freeze…
