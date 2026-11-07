---
repo: "Chr1Z93/SCED-downloads"
name: "SCED-downloads"
description: "A repo to host downloadable content for SCED"
readmeQualityOk: true
url: "https://github.com/Chr1Z93/SCED-downloads"
language: "Lua"
languages: ["Lua"]
languagePcts: [96]
stars: 17
forks: 25
openIssues: 0
closedIssues: 30
watchers: 1
contributors: 21
recentReleases: 0
createdAt: "2024-07-26T09:35:28Z"
lastCommitAt: "2026-11-07T10:36:30Z"
lastReleaseAt: "2024-11-17T10:10:40Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 100
undervaluedScore: 79
maintainers: ["Chr1Z93", "KrawczykPiotr93", "thumbd78492"]
openGraphImageUrl: "https://opengraph.githubassets.com/84a69f0ec4c6d6e5d90a11e5ba46c545e5fa0cab468a5689b08e8c3531e145be/Chr1Z93/SCED-downloads"
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
