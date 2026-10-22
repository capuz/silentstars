---
repo: "n-air-app/n-air-app"
name: "n-air-app"
description: "N Air (forked from streamlabs-obs)"
originalDescription: "N Air (forked from streamlabs-obs)"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/n-air-app/n-air-app"
homepage: "https://n-air-app.nicovideo.jp/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
stars: 150
forks: 29
openIssues: 93
closedIssues: 298
watchers: 7
contributors: 39
recentReleases: 0
createdAt: "2018-08-06T04:03:09Z"
lastCommitAt: "2026-10-22T08:52:04Z"
lastReleaseAt: "2018-10-23T04:06:15Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 94
undervaluedScore: 45
maintainers: ["koizuka", "asaday", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/529b860254f5c8265f76b19ed46310b696365938580045ff71f052822146511c/n-air-app/n-air-app"
---

# N Air

N Air is a high-quality streaming software based on Streamlabs OBS, with many features built in that are useful for live broadcasting. It has been reborn with more convenience than NLE (Niconico Live Encoder).

## System Requirements

- A GPU compatible with DirectX 10.1
- Windows 11 or later (64-bit version)
- Memory: 8GB or more
- CPU: Equivalent to Core i5 4th generation
- An internet connection is required.

## Installation

<https://n-air-app.nicovideo.jp/>

## Build Instructions

### Node.js

Node is required to install npm packages and run various scripts.

Node.js 24.14.0 or later, but less than 25, is required: <https://nodejs.org/>

The exact version is pinned in `.node-version` at the repository root. If you use a version manager that supports `.node-version`, such as [fnm](https://github.com/Schniz/fnm) or [nvm](https://github.com/nvm-sh/nvm), it will switch automatically just by `cd`-ing into the directory (requires a setting equivalent to `--use-on-cd`).

### pnpm

To use the correct version of each node module, you need to use the pnpm package manager.

It is installed automatically if Corepack is enabled.
For manual installation methods, see here:…
