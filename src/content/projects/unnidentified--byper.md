---
repo: "Unnidentified/byper"
name: "byper"
description: "macOS true charge bypass & battery toolkit for Apple Silicon"
readmeQualityOk: true
url: "https://github.com/Unnidentified/byper"
homepage: "https://byper.org"
language: "Swift"
languages: ["Swift", "C"]
languagePcts: [63, 25]
stars: 20
forks: 0
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-05T00:03:43Z"
lastCommitAt: "2026-11-11T11:19:34Z"
lastReleaseAt: "2026-11-10T22:52:14Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 77
undervaluedScore: 41
maintainers: ["Unnidentified", "mistral-vibe"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b4892aca8bceb3ad25b8936cf481d3db3ceb637e58d8b77c657225292b15156/Unnidentified/byper"
---

# <img src="https://github.com/Unnidentified/byper/blob/main/assets/icon.png?raw=true" width="85" height="85" align="absmiddle" alt="byper icon" /> byper

Charge bypass and a battery toolkit for Apple Silicon Macs (macOS 11+).

When you enable bypass, your battery is held at whatever level you want. Your computer, from this point forward, only sucks energy from the charger, meaning effective power draw from the battery is 0mA. You can choose between using the menu-bar app or the CLI utility from the terminal, which is much lighter on resources.

You don't need local tools, you can just click on Actions > [Build](#building) and you'll get a `.pkg` and a `.dmg` inside a `.zip`

---

### Table of Contents

- [Building](#building)
- [Components](#components)
- [CLI Commands](#cli-commands)
- [How bypass works](#how-bypass-works)
- [Requirements](#requirements)
- [How to Install](#how-to-install)
- [How to Uninstall](#how-to-uninstall)
- [Project layout](#project-layout)
- [Credits](#credits)

## Building

1. Fork the repo.
1. In your forked repo, open the actions tab and run the Build workflow.
2. Leave `version` empty unless you want a specific label.
3. Tick `release` to publish a…
