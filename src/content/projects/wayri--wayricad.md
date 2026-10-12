---
repo: "wayri/WayriCAD"
name: "WayriCAD"
description: "19 independently installable KiCad plugins for guided project and PCB imports, native assembly variant management, BOMs, constraints, PI/SI, thermal screening, impedance and manufacturing checks. Install through KiCad PCM; GUI and CLI workflows with reviewed changes and backups."
readmeQualityOk: true
url: "https://github.com/wayri/WayriCAD"
homepage: "https://github.com/wayri/WayriCAD#readme"
language: "Python"
languages: ["Python"]
languagePcts: [88]
topics: ["bom", "eda", "electronics", "impedance", "kicad", "kicad-pcm", "kicad-plugin", "pcb", "pcb-design", "power-integrity"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-23T00:26:43Z"
lastCommitAt: "2026-10-12T11:15:30Z"
lastReleaseAt: "2026-10-03T17:13:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 68
maintainers: ["wayri"]
openGraphImageUrl: "https://opengraph.githubassets.com/79cbd64d8567f1cee8c5f0f6948bb44b90145a7198366812a2a5280799b4c8a2/wayri/WayriCAD"
discussionCount: 0
---

# WayriCAD

**PCB design, analysis and project review in KiCad.** Choose from 19 independently
installable plugins. Processing runs locally after setup. KiCad 10 is the validated target.

## Start here

| What you need | Where to go |
|---|---|
| Install the tools | [Quick steps](#install-and-open) · [Installation guide](https://github.com/wayri/WayriCAD/blob/HEAD/docs/INSTALLATION.md) |
| Run your first analysis | [Getting started](#getting-started) |
| Download or update | [Release 3.6.16](https://github.com/wayri/WayriCAD/releases/tag/v3.6.16) · [Release notes](https://github.com/wayri/WayriCAD/blob/HEAD/docs/RELEASE_NOTES_3.6.16.md) |
| Choose a tool | [All 19 plugins](#all-19-plugins) |
| See the interfaces | [Screenshots](#plugin-previews) |
| Find detailed instructions | [Full user guide](https://github.com/wayri/WayriCAD/blob/HEAD/docs/USER_GUIDE.md) |
| Resolve a problem | [Help and upgrades](#help-and-upgrades) |
| Automate or contribute | [Development](#automation-and-development) |

## Install and open

1. Open **Plugin and Content Manager** in KiCad Manager. Add this repository:

   ```text
   https://raw.githubusercontent.com/wayri/WayriCAD/develop/pcm/repo.json…
