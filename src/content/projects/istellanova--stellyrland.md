---
repo: "iStellanova/Stellyrland"
name: "Stellyrland"
description: "My Personal Systems Repository"
readmeQualityOk: true
url: "https://github.com/iStellanova/Stellyrland"
language: "Nix"
languages: ["Nix"]
languagePcts: [100]
topics: ["configuration", "declarative", "macos", "nix", "nix-darwin", "nixos", "amd", "deployment", "home-manager", "linux"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-21T02:34:32Z"
lastCommitAt: "2026-10-16T08:27:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 57
maintainers: ["iStellanova"]
openGraphImageUrl: "https://opengraph.githubassets.com/e726d2b9f8c244108f8dffe28d571cf172b763fc78da3ace09c4b35c8719ea88/iStellanova/Stellyrland"
---

---

This is my personal configuration for my systems, managed by the nix language
and the lix package manager. I stick to the dendritic pattern. Documentation will explain all concepts I use here. I use this to tinker, deploy, and manage my computers from home and remote. :)

My personal workstation is **Stellyrland**, most topics here will revolve around
that host.

> **Note:**<br> This is a personal configuration. This is not meant to be forked
> or used by others.

## 🏗️ Architecture

```mermaid
flowchart TD
    PNIX["pnix inputs + resolver"] --> FLAKE["flake.nix"]
    FLAKE --> LOADER["direct module loader"]
    LOADER --> MODULES["modules/"]
    MODULES --> BUILD["system outputs"]

    BUILD --> STELLYRLAND["stellyrland"]
    BUILD --> STELLYRLAB["stellyrlab"]
    BUILD --> STELLYRTOP["stellyrtop"]
    BUILD --> PLASMA["plasmapulsefinale"]
    BUILD --> REDFLAME["ItsRedFlame"]

    style PNIX fill:#363a4f,color:#cad3f5,stroke:#5b6078
    style FLAKE fill:#363a4f,color:#cad3f5,stroke:#5b6078
    style MODULES fill:#24273a,color:#f5a97f,stroke:#494d64
    style BUILD fill:#24273a,color:#7dc4e4,stroke:#494d64
    style STELLYRLAND fill:#1e2030,color:#8aadf4,stroke:#8aadf4…
