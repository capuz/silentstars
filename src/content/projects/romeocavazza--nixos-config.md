---
repo: "RomeoCavazza/nixos-config"
name: "nixos-config"
description: "Personal dotfiles for NixOS, Hyprland, and GNOME"
url: "https://github.com/RomeoCavazza/nixos-config"
homepage: "https://github.com/nixos"
language: "Nix"
languages: ["Nix", "Shell"]
languagePcts: [72, 25]
topics: ["gnome", "hyprland", "linux", "nixos", "dotfiles", "flake", "wayland"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-07-05T19:11:54Z"
lastCommitAt: "2026-06-28T02:02:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 63
maintainers: ["RomeoCavazza"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7e861bb086091691ff1dc2d94205eef678c0849b5190246c11286bc281b5b77/RomeoCavazza/nixos-config"
---

<h1>NixOS dotfiles</h1>

  </div>
</div>

---

## Overview

The [**GitHub Wiki**](https://github.com/RomeoCavazza/setup-os/wiki) is the primary documentation resource for this repository.

- [Architecture & Flake Logic](https://github.com/RomeoCavazza/setup-os/wiki/Architecture-&-Flake-Logic)
- [Modules Breakdown](https://github.com/RomeoCavazza/setup-os/wiki/Modules-Breakdown)
- [Security & Secrets](https://github.com/RomeoCavazza/setup-os/wiki/Security-&-Secrets)
- [Observability and Metrics](https://github.com/RomeoCavazza/setup-os/wiki/Observability-and-Metrics)

Local technical annexes:

- [docs/README.md](./docs/README.md) - technical annexes, diagram index, and regeneration commands
- [docs/cloc-report.md](./docs/cloc-report.md) - raw cloc report
- [docs/specification.txt](./docs/specification.txt) - dense configuration glossary
- [docs/diagrams/](./docs/diagrams/) - PlantUML sources, Carbon TreeView maps, and generated PNGs

### Architecture

```
nixos/
├── config/           # Application-specific configurations (Hypr, scripts, terminal)
├── home/tco/         # Home Manager entry point and user-space modules
│   └── modules/      # Domain-specific apps (CAD, data,…
