---
repo: "uber/submitqueue"
name: "submitqueue"
description: "SubmitQueue is a high-performance speculative merge queue that keeps your trunk consistently green at scale."
readmeQualityOk: true
url: "https://github.com/uber/submitqueue"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["distributed-systems", "golang", "merge-queue", "speculation", "uber"]
stars: 10
forks: 5
openIssues: 7
closedIssues: 9
watchers: 0
contributors: 24
recentReleases: 1
createdAt: "2026-01-12T20:08:22Z"
lastCommitAt: "2026-07-30T06:04:15Z"
lastReleaseAt: "2026-07-13T21:23:06Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 55
maintainers: ["behinddwalls", "sbalabanov-zz", "mnoah1"]
openGraphImageUrl: "https://opengraph.githubassets.com/c972eed3e3dd871c1e1598c0ffa83aaf582fdbe3255b1b6dc8f8b9510820e1a1/uber/submitqueue"
---

# SubmitQueue

SubmitQueue is a high-performance speculative merge queue that keeps your trunk consistently green at scale. Rather than validating changes one at a time, SubmitQueue speculatively rebases and validates multiple changes in parallel against predicted future states of HEAD. When validations pass, changes land automatically. When they fail, SubmitQueue isolates the offending change and retries the rest — all without human intervention.

Designed for large monorepos and fast-moving teams where concurrent changes can introduce subtle conflicts and destabilize builds.

## Repository layout

Cross-domain Go code (errors, metrics, consumer framework, HTTP helpers, shared entities, shared extension contracts) lives under [`platform/`](https://github.com/uber/submitqueue/blob/HEAD/platform/README.md). Each product domain has its own tree (`submitqueue/`, `stovepipe/`, …) and grows into `gateway/`, `orchestrator/`, `entity/`, `extension/`, and domain-local `core/` — though a domain may start smaller (Stovepipe is currently a single Ping-only service with just `controller/`). See [CLAUDE.md](https://github.com/uber/submitqueue/blob/HEAD/CLAUDE.md) for conventions and import…
