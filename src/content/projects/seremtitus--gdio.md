---
repo: "SeremTitus/gdio"
name: "gdio"
description: "The last CLI TOOL you will ever need for GODOT"
readmeQualityOk: true
url: "https://github.com/SeremTitus/gdio"
homepage: "https://gdio.seremtitus.co.ke/"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["butler", "cli", "cli-tool", "godot", "godot-engine", "itchio"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-08-14T19:17:45Z"
lastCommitAt: "2026-08-28T14:23:39Z"
lastReleaseAt: "2026-08-24T12:45:15Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 62
maintainers: ["SeremTitus"]
openGraphImageUrl: "https://opengraph.githubassets.com/fcd77a427d6716925688d7bad217f313431ed89f712972dd0d12cd3ccde823cc/SeremTitus/gdio"
---

</p>

<h1 align="center">gdio</h1>

  CLI tool for managing Godot Engine projects, editor versions, addons and export templates.
</p>

## Build and Install
Clone this repository, `cd` into it's directory and run:
```bash
python scripts\local_install.py
```

## Latest Release Installation

### Windows

```powershell
curl.exe -fsSL https://gdio.seremtitus.co.ke/install.ps1 | powershell -Command -
```

### Linux / macOS

```bash
curl -fsSL https://gdio.seremtitus.co.ke/install.sh | bash
```

### Quick Start

```bash
cd my_godot_project
gdio                                          # Open a project in the current directory

gdio add 4.7                                  # Add an editor

gdio list                                     # List editors
```

## Commands

### `gdio` (no args)

Open the current directory's Godot project. Detects the required version from `project.godot` and opens it with the matching editor.

- If previously opened, uses the same editor
- If not, finds a matching editor or prompts to download
- Auto-detects version: `gdio add 4.7.2`

### `gdio add <version or path>`

Download or register a Godot editor.

```bash
gdio add 4.7                                  #…
