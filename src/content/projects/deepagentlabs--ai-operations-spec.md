---
repo: "DeepAgentLabs/ai-operations-spec"
name: "ai-operations-spec"
description: "AI Operations Specifications"
readmeQualityOk: true
url: "https://github.com/DeepAgentLabs/ai-operations-spec"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 91
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 9
createdAt: "2026-07-16T00:58:53Z"
lastCommitAt: "2026-11-03T19:05:40Z"
lastReleaseAt: "2026-11-03T18:43:50Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 89
undervaluedScore: 32
maintainers: ["pramodbn27"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c397eb5d52f571073b5695629b8011502b42c3d5f34be64b8527edd6f6fe24e/DeepAgentLabs/ai-operations-spec"
---

# AI Operations Specification

## Release sequencing

The final specification-readiness roadmap phase uses **v0.7**, with implementation guidance already shipped in repository v0.7.0;
remaining review/readiness work can use further minor releases. **v1.0 is reserved for one coordinated DeepAgentLabs
ecosystem release**, after the shared readiness and compatibility gates pass.
Completing this minor milestone does not independently declare stable APIs or
AIOS conformance. Existing acceptance criteria remain required. See the
[ecosystem release policy](https://github.com/DeepAgentLabs/.github/blob/main/profile/RELEASE_POLICY.md).

The **AI Operations Specification (AIOS)** is a vendor-neutral contract for describing what happens when an AI or agentic system runs.

It gives instrumentation, observability, evaluation, safety, and reliability tools a shared vocabulary and portable JSON artifacts for Runs, Steps, model interactions, tool calls, retrieval, memory, evaluations, signals, and incidents.

This repository defines the contract. It does **not** run agents, collect telemetry, host dashboards, or provide an SDK.
It also does **not** own the primary end-user CLI for conformance…
