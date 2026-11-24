---
repo: "beatreichenbach/houdini-megascans"
name: "houdini-megascans"
description: "Bridge for Quixel Megascans and Houdini"
readmeQualityOk: true
url: "https://github.com/beatreichenbach/houdini-megascans"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-09-17T03:59:23Z"
lastCommitAt: "2026-11-24T01:54:27Z"
lastReleaseAt: "2026-09-18T01:28:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 36
maintainers: ["beatreichenbach"]
openGraphImageUrl: "https://opengraph.githubassets.com/245aeeb1feb33ba90dfeaca2e664688dd2336d01ec9bc6405b44345882b0ae6a/beatreichenbach/houdini-megascans"
---

# Houdini Megascans

A Quixel Bridge plugin for SideFX Houdini Solaris to import Megascans assets directly into the stage.

This integration runs a local server that listens for exports from [Quixel Bridge](https://quixel.com/bridge) and
automatically imports them as Components into Solaris.

## Installation

Megascans is installed as a Houdini Package.

1. Go to the [Releases](https://github.com/beatreichenbach/houdini-megascans/releases) page and download the latest `megascans-{version}.zip`.
2. Navigate to your Houdini user preferences folder: `$HOME/houdini‹X›.‹Y›`
3. If you don't have a folder named `packages` in that directory, create it.
4. Extract the contents of the `.zip` file into the `packages` folder.
5. Restart Houdini. Verify the installation in the [Package Browser](https://www.sidefx.com/docs/houdini/ref/windows/package_browser.html).

**Example Folder Structure:**
```text
├── houdini21.0
    ├── packages/
        ├── megascans.json
        └── /megascans
            └── (HDA files)
```
