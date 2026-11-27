---
repo: "versatiles-org/versatiles-fonts"
name: "versatiles-fonts"
description: "Repository of open-source SDF fonts optimized for MapLibre GL JS rendering."
readmeQualityOk: true
url: "https://github.com/versatiles-org/versatiles-fonts"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 8
forks: 1
openIssues: 0
closedIssues: 11
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2023-01-25T17:47:04Z"
lastCommitAt: "2026-11-27T13:01:11Z"
lastReleaseAt: "2026-09-14T17:23:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 92
undervaluedScore: 61
maintainers: ["MichaelKreil", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/861b212594068376398b1d38e5f603e3fc3eb95b4f7098c981dbefe7ef35662a/versatiles-org/versatiles-fonts"
fundingLinks: ["GITHUB:https://github.com/versatiles-org"]
---

# VersaTiles Fonts

**VersaTiles Fonts** provides free font glyphs tailored for map rendering.

## Installation

Clone the repository:

```bash
git clone git@github.com:versatiles-org/versatiles-fonts.git
cd versatiles-fonts
```

Building requires the [`versatiles_glyphs`](https://github.com/versatiles-org/versatiles-glyphs-rs) binary, version 0.10.0 or newer. Install or update it with:

```bash
curl -Ls "https://github.com/versatiles-org/versatiles-glyphs-rs/raw/refs/heads/main/scripts/install.sh" | sh
```

## Building

To generate the font files, run:

```bash
npm run build
```

This will create:
