---
repo: "ngi-nix/forge"
name: "forge"
description: "Software distribution system for projects funded via Next Generation Internet (NGI)"
readmeQualityOk: true
url: "https://github.com/ngi-nix/forge"
homepage: "https://ngi.nixos.org/"
language: "Nix"
languages: ["Nix", "Elm"]
languagePcts: [55, 28]
topics: ["build-with-buildbot", "european-union", "ngi", "nix", "nixos", "nixpkgs", "nlnet"]
stars: 25
forks: 24
openIssues: 123
closedIssues: 251
watchers: 3
contributors: 19
recentReleases: 0
createdAt: "2026-03-09T13:21:28Z"
lastCommitAt: "2026-11-05T08:04:58Z"
lastReleaseAt: "2026-06-30T12:13:49Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 58
maintainers: ["imincik", "phanirithvij", "eljamm"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1479b6e2e71bdc790b09076bef0c04b8401d793031aed71180eb48ee7a1b6d6/ngi-nix/forge"
---

# NGI Forge

This software is in active development. Expect backwards incompatible changes.

## Features

- Simple, type checked configuration recipes for **packages** and
  **multi-component applications** using
  [module system](https://nix.dev/tutorials/module-system/index.html)

- [Web UI](https://ngi.nixos.org)

- Easy [self hosting](#self-hosting)

### Conceptual diagram

```mermaid
graph TB
    subgraph NixosCommunity["NixOS Community"]
      NIXPKGS(Nixpkgs)
      NIXOS(NixOS)
    end

    subgraph Sources["Sources"]
        SW1[Git Repository]
        SW2[Tarball URL]
        SW3[Local Path]
    end

    PKG[Package Recipe<br/>recipe.nix]

    subgraph PackageOutputs["Packages"]
        PO4[Nix Package]
        PO1[Development Environment]
        PO2[Shell Environment]
    end

    APP[Application Recipe<br/>recipe.nix]

    subgraph AppOutputs["Applications"]
        AO1[Shell Runtime<br/>for CLI and GUI components]
        AO2[Container Runtime<br/>for services]
        AO3[NixOS Runtime<br/>for services]
    end

    SW1 & SW2 & SW3 & NIXPKGS--> PKG
    PKG --> PO1 & PO2 & PO4

    PO4 & NIXPKGS & NIXOS --> APP
    APP --> AO1
    APP --> AO2
    APP --> AO3
```

##…
