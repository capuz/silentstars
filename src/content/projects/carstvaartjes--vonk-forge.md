---
repo: "CarstVaartjes/vonk-forge"
name: "vonk-forge"
description: "Local-first control plane for installing and operating AI workloads on DGX Spark clusters"
readmeQualityOk: true
url: "https://github.com/CarstVaartjes/vonk-forge"
homepage: "https://vonkforge.ai"
language: "Python"
languages: ["Python"]
languagePcts: [77]
stars: 5
forks: 2
openIssues: 2
closedIssues: 15
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-08-01T12:39:17Z"
lastCommitAt: "2026-10-10T10:04:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 64
maintainers: ["CarstVaartjes"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d76035a8d60465c653c92a461afd5571967e1f82ec0f53e86c11bd0b50bba0e/CarstVaartjes/vonk-forge"
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
- **One profile for the fleet.** Reviews include every current enrolled,
  non-revoked Spark and show unassigned Sparks as idle. A membership…
