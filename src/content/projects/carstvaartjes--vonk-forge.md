---
repo: "CarstVaartjes/vonk-forge"
name: "vonk-forge"
description: "Local-first control plane for installing and operating AI workloads on DGX Spark clusters"
readmeQualityOk: true
url: "https://github.com/CarstVaartjes/vonk-forge"
homepage: "https://vonkforge.ai"
language: "Python"
languages: ["Python"]
languagePcts: [73]
stars: 5
forks: 2
openIssues: 6
closedIssues: 11
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-01T12:39:17Z"
lastCommitAt: "2026-09-24T08:41:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 60
maintainers: ["CarstVaartjes"]
openGraphImageUrl: "https://opengraph.githubassets.com/5cb4df310cfe04e938928854f0c1d2eb9c2cd6a9683b7c443f197e83af34fa15/CarstVaartjes/vonk-forge"
---

# Vonk Forge

**Local AI. One private control plane.**

Vonk Forge is an open-source control plane for NVIDIA DGX Spark. Run the
controller on any local computer with Docker Compose—including your laptop—then
use one private Web interface or the `vonkctl` CLI to discover model recipes,
preview changes, and operate one Spark or a fleet.

[Install Vonk Forge](https://vonkforge.ai/install) ·
[See how it works](https://vonkforge.ai/architecture) ·
[Browse recipes](https://vonkforge.ai/recipes) ·
[Read the operator docs](https://github.com/CarstVaartjes/vonk-forge/blob/HEAD/docs/README.md)

> The screenshot is produced by the repository's fixture-backed browser
> acceptance suite. It contains no live fleet data.

## What it gives you

- **One place to operate local AI.** Fleet, Library, Activity, and reusable
  fleet profiles share one controller and one source of truth.
- **Cache-backed profiles.** Profile choices and apply admission come from the
  trusted local NAS/Controller cache, which resolves exact model and
  recipe-image identities.
- **A safer change path.** See compatibility, placement, downloads, memory,
  and the exact planned change before you apply it.
- **Reproducible…
