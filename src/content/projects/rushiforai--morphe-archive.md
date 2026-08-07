---
repo: "rushiforai/morphe-archive"
name: "morphe-archive"
description: "An auto-generated, continuously updated index of every GitHub or GitLab repository that publishes a Morphe (.mpp) patch bundle."
readmeQualityOk: true
url: "https://github.com/rushiforai/morphe-archive"
homepage: "https://rushiforai.github.io/morphe-archive"
language: "Smali"
languages: ["Smali"]
languagePcts: [97]
stars: 10
forks: 0
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-24T01:45:14Z"
lastCommitAt: "2026-08-07T05:15:11Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 54
maintainers: ["github-actions[bot]", "rushiranpise", "rushiforai"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0fdb94d3e108e7c8f980812f1d0e479183a406eacf9203ff09a218de57cbf83/rushiforai/morphe-archive"
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
