---
repo: "starslingdev/hpc-sandbox-benchmarks"
name: "hpc-sandbox-benchmarks"
description: "Compare sandbox providers with real high-performance developer and CI/CD tasks"
readmeQualityOk: true
url: "https://github.com/starslingdev/hpc-sandbox-benchmarks"
homepage: "https://starsling.dev/blog/beyond-cold-starts-benchmarking-sandboxes-for-real-workloads"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 20
forks: 7
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 13
recentReleases: 0
createdAt: "2026-06-11T17:53:11Z"
lastCommitAt: "2026-08-05T06:06:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 52
maintainers: ["dbworku", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7bd2981aec60d9f61067ac4d84f79f9dc255b235f24bd5603576a7de255d0552/starslingdev/hpc-sandbox-benchmarks"
---

# High-Performance Sandbox Benchmarks

**Compare top sandbox providers on the same target hardware shape for real developer and CI/CD workloads.**

[Leaderboard](https://github.com/starslingdev/hpc-sandbox-benchmarks/blob/HEAD/LEADERBOARD.md) · [Methodology](https://github.com/starslingdev/hpc-sandbox-benchmarks/blob/HEAD/docs/methodology.md) · [Dataset](https://github.com/starslingdev/hpc-sandbox-benchmarks/blob/HEAD/data/dataset/) · [Architecture](https://github.com/starslingdev/hpc-sandbox-benchmarks/blob/HEAD/docs/architecture.md) · [Contributing](https://github.com/starslingdev/hpc-sandbox-benchmarks/blob/HEAD/CONTRIBUTING.md)

4 vCPU · 8 GiB RAM · 40 GB disk

</div>

## Why real-world workflows?

We measure the end-to-end time that developers and agents actually experience when using a sandbox to complete software engineering tasks. Going from a ticket to a PR is a multi-phase workflow - clone a repo, install dependencies, lint, build, test, etc. 
 
A sandbox provider can top a creation time or CPU performance chart and still lose badly on:
- dependency installation is thousands of small, random file writes, and a network-attached
or bandwidth-capped disk turns that into the…
