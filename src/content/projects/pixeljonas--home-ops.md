---
repo: "PixelJonas/home-ops"
name: "home-ops"
description: "The new shiny GitOps repo for my cluster"
readmeQualityOk: true
url: "https://github.com/PixelJonas/home-ops"
language: "Python"
languages: ["Python", "Shell", "Go Template"]
languagePcts: [34, 29, 21]
stars: 8
forks: 3
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-10-01T11:53:10Z"
lastCommitAt: "2026-11-03T11:14:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 71
maintainers: ["PixelJonas", "janz-renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ef2d4b2368e9b036216d1fa829246500f7e8889e48dc158b41c2cbb4ea05a7d2/PixelJonas/home-ops"
---

# Open Tasks

- [Vehicle cost pipeline (map #5) — continuation & open tasks](https://github.com/PixelJonas/home-ops/blob/HEAD/docs/superpowers/plans/2026-09-15-vehicle-cost-pipeline-continuation.md) — handover doc for a fresh agent picking up remaining work (Multivan backfill tail, Zappi charging costs, trip-enricher).

# Troubleshooting

## LVM Operator

There are specific limitations how the LVM Operator will pick up drives. Please read https://github.com/openshift/lvm-operator?tab=readme-ov-file#known-limitations

Ideally you want to perform a thorough wipe of all disks before adding them
