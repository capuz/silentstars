---
repo: "Lazurio/LazurioPlatform"
name: "LazurioPlatform"
description: "Lazurio Platform: source-available TypeScript product and codebase for CLI, Launchpad, Folder Factory, and shared contracts."
readmeQualityOk: true
url: "https://github.com/Lazurio/LazurioPlatform"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 14
forks: 2
openIssues: 313
closedIssues: 91
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-09-08T17:36:35Z"
lastCommitAt: "2026-11-06T13:20:06Z"
lastReleaseAt: "2026-09-27T23:33:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 45
maintainers: ["immakermatty", "annavesela"]
openGraphImageUrl: "https://opengraph.githubassets.com/60200d484afd5ddccd29ec226110f29191311e8c35a966169d7a21d79a6297f2/Lazurio/LazurioPlatform"
---

# Lazurio Platform

> **Approved target update, 2026-10-06 (root 0192):** [Account and Environment access](https://github.com/Lazurio/LazurioPlatform/blob/HEAD/docs/environment-access.md) refines organizational admission: Lazurio membership and full/app grants, optional GitHub for visitors, Admin approval of the exact Headscale device, and delegated same-Organization sharing. Conflicting older target statements below are superseded; implemented behavior and evidence remain baseline only until a qualified migration. No runtime changes in this documentation update.

**Install Lazurio with one command** (Linux x64 and arm64, macOS on Apple silicon):

```sh
curl --proto '=https' --tlsv1.2 -fsSL https://lazurio.ai/install | sh
```

`lazurio.ai/install` serves this once the website route is deployed. Until then, and
until a release carries `install.sh` as an asset, use the script of this repository:

```sh
curl --proto '=https' --tlsv1.2 -fsSL https://raw.githubusercontent.com/Lazurio/LazurioPlatform/main/install.sh | sh
```

It installs the `lazurio` CLI and the Launchpad (one program) for your user, without
`sudo` and without touching your shell profile, and ends with the next command…
