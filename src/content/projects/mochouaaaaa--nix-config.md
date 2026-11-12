---
repo: "mochouaaaaa/nix-config"
name: "nix-config"
description: "❄️ My nix config for both desktops(NixOS+macOS+Wsl) "
originalDescription: "❄️ My nix config for both desktops(NixOS+macOS+Wsl) "
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/mochouaaaaa/nix-config"
language: "Nix"
languages: ["Nix"]
languagePcts: [95]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-02-20T01:57:18Z"
lastCommitAt: "2026-11-12T11:40:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 74
maintainers: ["mochouaaaaa"]
openGraphImageUrl: "https://opengraph.githubassets.com/150543f140f018a7000a0ad0c73c5c9a9e140ca5edf62f491bd2b8c0fcf70628/mochouaaaaa/nix-config"
---

# Dendritic Nix Configuration

Personal Nix configuration repository, built on **Nix Flakes, flake-parts and import-tree**, organized in a modular (Dendritic) way, centrally managing NixOS, nix-darwin and Home Manager configurations.

## Design Goals

- **Modular organization**: split configuration by function, avoiding putting all system settings into a single Host file.
- **Host composition**: describe hosts via `hosts/<username>@<hostname>/`, auto-discovered by the Flake.
- **Cross-platform reuse**: share common configuration while keeping the platform boundaries of NixOS, Darwin and Home Manager.
- **Declarative management**: pin dependencies with Nix Flakes, and describe system state through module composition.
- **Maintainability**: provide unified formatting, static checks, Flake evaluation and system switching commands.

## Tech Stack

| Component | Purpose |
| --- | --- |
| [Nix Flakes](https://nix.dev/concepts/flakes.html) | Dependency locking and configuration entry point |
| [flake-parts](https://github.com/hercules-ci/flake-parts) | Organizing Flake outputs |
| [import-tree](https://github.com/vic/import-tree) | Automatically importing the module tree |
|…
