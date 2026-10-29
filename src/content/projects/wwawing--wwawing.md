---
repo: "WWAWing/WWAWing"
name: "WWAWing"
description: "a World Wide Adventure Implementation in JavaScript"
originalDescription: "a World Wide Adventure Implementation in JavaScript"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/WWAWing/WWAWing"
homepage: "https://wwawing.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["typescript", "wwa"]
stars: 47
forks: 10
openIssues: 49
closedIssues: 121
watchers: 4
contributors: 20
recentReleases: 0
createdAt: "2015-05-10T09:16:36Z"
lastCommitAt: "2026-10-29T12:25:22Z"
lastReleaseAt: "2015-11-02T10:27:16Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 55
maintainers: ["matsuyuki-a", "dependabot[bot]", "aokashi"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/35364591/6bc85500-37ed-11eb-8f0f-2d66d61b6ea1"
discussionCount: 16
---

# WWA Wing
This is a TypeScript / JavaScript implementation of the internet RPG "[World Wide Adventure](http://wwajp.com/)".

This repository is managed by multiple npm packages located under the `packages` directory, and operations spanning multiple packages are automated by a pnpm workspace.

## Preparation
- Git and **Git LFS** are required. (They are not needed for normal development, but are required if you want to generate wwa-server.)
  - You must run `git lfs install` at least once. For details, see the [Git LFS Wiki "Installation"](https://github.com/git-lfs/git-lfs/wiki/Installation).

Apart from this, if you use [mise-en-place](https://mise.jdx.dev/) (hereafter, mise), the tools required for development are provided without any further preparation.

The following steps prepare the necessary tools if you do not use mise.
1. Install the version of [Node.js](https://nodejs.org/ja/download) specified in [`.node-version`](https://github.com/WWAWing/WWAWing/blob/HEAD/.node-version).
2. Following the installation instructions at [pnpm](https://pnpm.io/ja/installation), install pnpm.
  - The pnpm version actually used is determined by the `packageManager` field in…
