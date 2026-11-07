---
repo: "jaisrajms/jaiscloud"
name: "jaiscloud"
description: "JaisCloud is a local multi-cloud emulator written in Go. It speaks native AWS wire protocols (Query/XML and JSON/Target) so any AWS SDK can point at it without modification."
readmeQualityOk: true
url: "https://github.com/jaisrajms/jaiscloud"
language: "Go"
languages: ["Go"]
languagePcts: [92]
stars: 18
forks: 1
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 2
createdAt: "2026-04-09T08:07:41Z"
lastCommitAt: "2026-11-07T16:11:48Z"
lastReleaseAt: "2026-10-27T17:00:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 45
maintainers: ["aamerik"]
openGraphImageUrl: "https://opengraph.githubassets.com/18886a6e99a0bd90d5afc33703b262e65890abf10f6063582cba676989b1d395/jaisrajms/jaiscloud"
discussionCount: 0
---

# JaisCloud

> **Early Development Notice**
> JaisCloud is under active development. While core services are functional and tested, some operations may have incomplete implementations, behavioural differences from the real cloud APIs, or known bugs. If you encounter an issue, please [open a GitHub issue](https://github.com/jaisrajms/jaiscloud/issues) with a minimal reproduction — your report directly shapes what gets fixed next.

**JaisCloud — free, open-source cloud emulators for developers and CI. One self-contained binary per cloud. Runs anywhere: laptop, CI, or Kubernetes.**

JaisCloud emulates real cloud APIs so you can test cloud applications locally without touching real cloud infrastructure. It implements the exact wire protocols — no SDK shims, no proxy rewrites — so your existing code works against JaisCloud unmodified. AWS is the reference implementation, a drop-in LocalStack alternative with zero runtime dependencies; GCP ships from `v0.1.1` (REST and gRPC, official Google clients); Azure is in the pipeline.

**One binary per cloud.** Each binary is fully self-contained. There is no `--cloud` flag. This page covers the AWS binary — the GCP binary has its own guide,…
