---
repo: "dev-camo/project-lucid"
name: "project-lucid"
description: "An in-progress reconstruction of Sonic Dream Team for macOS, Windows, and Linux. You must supply your own macOS game bundle. Game assets are not included."
readmeQualityOk: true
url: "https://github.com/dev-camo/project-lucid"
homepage: "https://github.com/dev-camo/project-lucid"
language: "C#"
languages: ["C#"]
languagePcts: [92]
stars: 18
forks: 1
openIssues: 20
closedIssues: 85
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-10-05T19:20:37Z"
lastCommitAt: "2026-10-25T08:39:57Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 47
maintainers: ["dev-camo", "github-actions[bot]", "KyleO6"]
openGraphImageUrl: "https://opengraph.githubassets.com/8acc9c65a43cff3d3d57f5fc6ea4efabf695d29bacedbef1e8c3a7ef61405b35/dev-camo/project-lucid"
discussionCount: 0
---

# Project Lucid

An in-progress reconstruction of Sonic Dream Team for macOS, Windows, and Linux.
You must supply your own macOS game bundle. Game assets are not included.

**Current status:** extraction tooling has been exercised with release 1.10.1.
The original game is not yet playable from this project.

## Getting started

Install Python 3.9 or newer and Unity 2022.3.54f1. Place `SonicDreamTeam.app` inside `input/`, then run
these commands from the project folder:

```sh
python3 tools/lucid.py doctor
python3 tools/lucid.py inspect --input input/SonicDreamTeam.app
python3 tools/lucid.py bootstrap
python3 tools/lucid.py recover-code --input input/SonicDreamTeam.app
python3 tools/lucid.py native-schema --input input/SonicDreamTeam.app
python3 tools/lucid.py extract-assets --input input/SonicDreamTeam.app
python3 tools/lucid.py prepare
```

The tools keep your supplied bundle unchanged. Downloads and generated files
are stored locally and are not part of the repository.

Use Unity **2022.3.54f1** to open this project. Follow the current
[setup and recovery guide](https://github.com/dev-camo/project-lucid/blob/HEAD/docs/setup.md) for prerequisites and troubleshooting.

## Building…
