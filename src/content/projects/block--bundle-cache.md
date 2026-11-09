---
repo: "block/bundle-cache"
name: "bundle-cache"
description: "A commandline tool that packs and restores your Gradle cache in CI builds"
readmeQualityOk: true
url: "https://github.com/block/bundle-cache"
language: "Go"
languages: ["Go"]
languagePcts: [94]
stars: 21
forks: 3
openIssues: 4
closedIssues: 1
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2026-03-03T20:19:19Z"
lastCommitAt: "2026-11-09T03:30:49Z"
lastReleaseAt: "2026-03-12T14:00:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 74
undervaluedScore: 16
maintainers: ["renovate[bot]", "joshfriend", "staktrace"]
openGraphImageUrl: "https://opengraph.githubassets.com/fdf870a5a1b19c5f9e6ba519ad7f61814482b1b364f086dfe3756f044da7c172/block/bundle-cache"
---

# Bundle Cache Tool

A CLI tool for saving and restoring Gradle build cache bundles, with a ready-to-use GitHub Action.

Bundles are stored keyed by commit SHA, so `restore` doesn't need to know
exactly which commit produced a given bundle. Instead, it walks local git
history and tries each commit SHA in order, newest first, until it finds a
bundle that exists. By default it walks from a given ref (default: `HEAD`);
when restoring for a branch or pull request, it first resolves the merge-base
of `HEAD` and the base ref, then walks from that common ancestor. This lets a
feature branch restore a bundle compatible with its base without needing to
know the SHA in advance.

The history walk counts distinct author-change boundaries rather than raw
commit count, so a long run of commits by the same author only consumes one
step of the search budget. The default search depth is 20 such boundaries.

## GitHub Action

The easiest way to use gradle-cache in CI is with the GitHub Action. It stores
cache bundles in the GitHub Actions cache (no S3 required) and handles
restore/save automatically. Place the action **before** your Gradle build step:

```yaml
jobs:
  build:
    runs-on:…
