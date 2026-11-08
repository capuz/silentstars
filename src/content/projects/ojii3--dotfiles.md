---
repo: "OJII3/dotfiles"
name: "dotfiles"
description: "Set Tmorrow Ablaze"
readmeQualityOk: true
url: "https://github.com/OJII3/dotfiles"
language: "Nix"
languages: ["Nix", "JavaScript"]
languagePcts: [34, 24]
stars: 16
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-04-25T03:30:57Z"
lastCommitAt: "2026-11-08T14:13:45Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 60
maintainers: ["OJII3"]
openGraphImageUrl: "https://opengraph.githubassets.com/a46ce0ff9d8343b4e4164fecd468d2918f1472474e8684d75d2d31f0c8125f59/OJII3/dotfiles"
---

# dotfiles

Multi-platform dotfiles powered by Nix Flakes.
Declarative configuration management using the `dot.*` options namespace.

## Module Structure

```
modules/
├── nixos/    # NixOS modules (dot.core, dot.desktop, dot.hardware, dot.networking, dot.server)
├── darwin/   # nix-darwin modules (dot.darwin.core, dot.darwin.desktop, dot.darwin.networking)
├── home/     # Home Manager modules (dot.home.*)
└── windows/  # Windows setup scripts and dotter-managed files
```

See each directory's README for details:
- [modules/nixos/README.md](https://github.com/OJII3/dotfiles/blob/HEAD/modules/nixos/README.md)
- [modules/darwin/README.md](https://github.com/OJII3/dotfiles/blob/HEAD/modules/darwin/README.md)
- [modules/home/README.md](https://github.com/OJII3/dotfiles/blob/HEAD/modules/home/README.md)
- [modules/home/ai/skills/README.md](https://github.com/OJII3/dotfiles/blob/HEAD/modules/home/ai/skills/README.md)

## Hosts

| Host | Type | Configuration |
|------|------|---------------|
| **Aglaea** (decommitioned) | Laptop | NixOS + Home Manager |
| **Bronya** (decommitioned) | Desktop | NixOS + Home Manager |
| **Cipher** | Server | GMKTec G3 | NixOS + AdGuard Home |
| **Cyrene**…
