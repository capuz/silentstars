---
repo: "confighub/cub-scout"
name: "cub-scout"
description: "Explore and map GitOps in your clusters"
readmeQualityOk: true
url: "https://github.com/confighub/cub-scout"
language: "Go"
languages: ["Go"]
languagePcts: [91]
stars: 14
forks: 0
openIssues: 31
closedIssues: 282
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-01-17T16:19:31Z"
lastCommitAt: "2026-09-26T08:47:08Z"
lastReleaseAt: "2026-02-02T15:53:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 53
maintainers: ["monadic", "bgrant0607"]
openGraphImageUrl: "https://opengraph.githubassets.com/60fbf144e2e751c5431a829507966572b4c7f3f2c49c368cca3a19a1d155ec9d/confighub/cub-scout"
---

# cub-scout

**A read-only Kubernetes and GitOps explorer for people, scripts, and AI agents.**

[v2.12.1 release](https://github.com/confighub/cub-scout/releases/tag/v2.12.1)
| [Start here](https://github.com/confighub/cub-scout/blob/HEAD/docs/getting-started/start-here.md)
| [Is this image deployed?](https://github.com/confighub/cub-scout/blob/HEAD/docs/howto/is-this-image-deployed.md)
| [Command guide](https://github.com/confighub/cub-scout/blob/HEAD/CLI-GUIDE.md)

## Why this exists

"Is this deployed?" usually means several questions: did the controller consume
the right revision, did the objects reach the cluster, and is the application
ready? Those answers live in different resources and tools.

cub-scout brings that evidence together without taking over delivery. Start from
a live cluster, follow ownership and source chains, inspect failures, and compare
against supplied or ConfigHub-managed configuration. Missing evidence stays
visible; a healthy Pod is not proof that the intended release was delivered.

## What you get

- **Tracing and ownership map:** explore resources across Argo CD, Flux, Helm, Sveltos,
  Modelplane, Crossplane, kro, ConfigHub, and native Kubernetes.…
