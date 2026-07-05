---
repo: "DivitMittal/OS-nixCfg"
name: "OS-nixCfg"
description: "nix (via nix-darwin, nixos, nix-on-droid, home-manager, etc.) declarative configurations to attain my deterministically reproducible layer"
readmeQualityOk: true
url: "https://github.com/DivitMittal/OS-nixCfg"
language: "Nix"
languages: ["Nix"]
languagePcts: [87]
topics: ["flake-parts", "flakes", "home-manager", "nix", "nix-darwin", "nix-on-droid", "nixos", "nixos-wsl", "agenix", "emacs"]
stars: 29
forks: 0
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-04-16T09:30:38Z"
lastCommitAt: "2026-07-05T06:29:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 59
maintainers: ["DivitMittal"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e4f5a2c34e3ebaeed73d6708ff052dae8d6ec0fdb369a4b82dd13071a6f36a6/DivitMittal/OS-nixCfg"
fundingLinks: ["GITHUB:https://github.com/DivitMittal"]
---

<h1 align='center'>OS-nixCfg</h1>
        <strong>My personal declarative Nix configurations for macOS, Android, and Linux (NixOS/WSL).</strong>
    </div>

</div>

---

    </a>
    </a>
    </a>
    </a>
</div>

---

    </a>
    </a>
    </a>
    </a>
</div>

---

## Contents

- [Overview](#overview)
- [Quick Start](#quick-start)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Theme Pipeline](#theme-pipeline)
- [Home Manager Profile Graph](#home-manager-profile-graph)
- [Network Topology](#network-topology)
- [Secrets Management](#secrets-management)
- [Related Repositories](#related-repositories)

---

## Overview

This repository contains primarily [nix](https://github.com/nixos/nix) configurations, leveraging [Nix Flakes](https://nixos.wiki/wiki/Flakes), [Home Manager](https://github.com/nix-community/home-manager), and system-specific modules ([NixOS](https://nixos.org/), [nix-darwin](https://github.com/LnL7/nix-darwin), [nix-on-droid](https://github.com/nix-community/nix-on-droid)) to achieve a purely declarative, reproducible, and consistent environment across multiple OSes on multiple hosts for multiple users:

- **macOS** (via `nix-darwin`)…
