---
repo: "Chr1Z93/SCED-downloads"
name: "SCED-downloads"
description: "A repo to host downloadable content for SCED"
url: "https://github.com/Chr1Z93/SCED-downloads"
language: "Lua"
languages: ["Lua"]
languagePcts: [95]
stars: 13
forks: 22
openIssues: 0
closedIssues: 27
watchers: 1
contributors: 17
recentReleases: 0
createdAt: "2024-07-26T09:35:28Z"
lastCommitAt: "2026-07-03T12:43:14Z"
lastReleaseAt: "2024-11-17T10:10:40Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 100
undervaluedScore: 83
maintainers: ["Chr1Z93", "dscarpac", "KrawczykPiotr93"]
openGraphImageUrl: "https://opengraph.githubassets.com/eebbf2dd76746f5d9a33945c89e54545dc512d4f2b1a8bd369d3e71c2eb7639a/Chr1Z93/SCED-downloads"
---

# SCED-downloads
A repository dedicated to hosting downloadable content for the **SCED** Tabletop Simulator mod.

## 🛠️ Mandatory Git Setting: Long Filenames
Due to deep folder nesting in this repository, **long file path support must be enabled** for Git on Windows to avoid errors:

```bash
git config --global core.longpaths true

```

## 📂 Repository Structure

The repository is organized into two main categories: individual decomposed files (for easier version control) and pre-bundled JSON objects.

```graphql
SCED-downloads/
│
├── decomposed/                  # Individual files (bundled automatically by the TTS Mod Manager)
│   └── [type]/                  # Folder matching the "type" field in library.json
│       └── [name]/              # Folder matching the "name" field in library.json
│
├── downloadable/                # Pre-bundled complete object data in .json format
│   └── [type]/                  # Folder matching the "type" field in library.json
│
├── library.json                 # Metadata manifest describing available content
└── README.md                    # This documentation
```

## 📄 library.json

The `library.json` file is a manifest that describes all…
