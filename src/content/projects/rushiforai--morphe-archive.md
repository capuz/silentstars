---
repo: "rushiforai/morphe-archive"
name: "morphe-archive"
description: "An auto-generated, continuously updated index of every GitHub or GitLab repository that publishes a Morphe (.mpp) patch bundle."
readmeQualityOk: true
url: "https://github.com/rushiforai/morphe-archive"
homepage: "https://rushiforai.github.io/morphe-archive"
language: "Java"
languages: ["Java", "Smali"]
languagePcts: [48, 28]
stars: 38
forks: 6
openIssues: 1
closedIssues: 6
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-06-24T01:45:14Z"
lastCommitAt: "2026-11-13T05:42:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 42
maintainers: ["github-actions[bot]", "rushiranpise", "rushiforai"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a3c2802d5248fe71b67c803b0804b9b3f006eae27aa2d3ef2eb93ae95ca825d/rushiforai/morphe-archive"
---

# Morphe Patch Source Repositories

An auto-generated, continuously updated index of every GitHub or GitLab repository that publishes a [Morphe](https://morphe.software) (`.mpp`) patch bundle.

 

---

## How this list is built

This repo list is kept in [`repos.txt`](https://github.com/rushiforai/morphe-archive/blob/HEAD/repos.txt) and assembled from three sources:

1. **Registry scan** - crawling [`Jman-Github/ReVanced-Patch-Bundles`](https://github.com/Jman-Github/ReVanced-Patch-Bundles) and extracting the source repo behind every bundle that passes the Morphe (`.mpp`) filter.
2. **GitHub-wide search** - scanning all of GitHub for `patches-bundle.json` files and verifying each candidate bundle JSON has an actual `.mpp` reference.
3. **Manual additions** - anything listed in [`custom_repos.txt`](https://github.com/rushiforai/morphe-archive/blob/HEAD/custom_repos.txt).

Repos are never silently removed when a source goes quiet - add an entry to [`ignore_repos.txt`](https://github.com/rushiforai/morphe-archive/blob/HEAD/ignore_repos.txt) to intentionally drop one.

README and settings output include only repos whose `patches-bundle.json` is reachable and contains a real `.mpp`…
