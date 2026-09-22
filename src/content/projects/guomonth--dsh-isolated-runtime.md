---
repo: "GuoMonth/dsh-isolated-runtime"
name: "dsh-isolated-runtime"
description: "Kubernetes-native isolated runtime for DeepSeek Harness (DSH): one tenant, one Pod, with strong isolation, resumable sessions, and pluggable runtime images."
readmeQualityOk: true
url: "https://github.com/GuoMonth/dsh-isolated-runtime"
language: "Go"
languages: ["Go", "Shell"]
languagePcts: [49, 24]
topics: ["agent-runtime", "ai-agents", "dsh", "multi-tenant", "saas-infrastructure", "tenant-isolation", "dsh-isolated"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 39
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-08-17T13:38:56Z"
lastCommitAt: "2026-09-22T08:44:43Z"
lastReleaseAt: "2026-09-20T12:00:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 62
maintainers: ["GuoMonth", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3a968f6dc4680303fe7f1d52bbee0ff6593a9b797cfb3e87a39b7f23b8ad724a/GuoMonth/dsh-isolated-runtime"
---

# dsh-isolated-runtime

Kubernetes Cell lifecycle and isolation for native DeepSeek Harness. The [multi-tenant platform](https://github.com/GuoMonth/dsh-multi-tenant/blob/main/README.md) owns OIDC, membership, user protocols and sessions; this repository owns Cell resources, images, exact-instance validation and the restricted internal Connector. DSH owns its native Web and tools.

[中文](https://github.com/GuoMonth/dsh-isolated-runtime/blob/HEAD/README.zh-CN.md)

**Current scope: Cell MVP alpha.** The fixed two-user OIDC + Cell flow and real-model file operations passed [integration regression](https://github.com/GuoMonth/dsh-multi-tenant/blob/4ba252765bccb41314c0bdc6b11bcf60cc0b33ef/docs/evidence/cell-regression-2026-09-20.md). The exact tested Linux/amd64 Cell/Operator images are public in [v0.3.0-alpha.1](https://github.com/GuoMonth/dsh-isolated-runtime/releases/tag/v0.3.0-alpha.1), with the same immutable digests; the platform has its own npm release. The current `main` source now includes fixed-template `cell-mvp-v1`, which passed the 2026-09-22 internal candidate run ([report](https://github.com/GuoMonth/dsh-multi-tenant/blob/main/docs/evidence/cell-mvp-2026-09-22.md)). This…
