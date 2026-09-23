---
repo: "iStellanova/Stellyrland"
name: "Stellyrland"
description: "My Personal Systems Repository"
readmeQualityOk: true
url: "https://github.com/iStellanova/Stellyrland"
language: "Nix"
languages: ["Nix"]
languagePcts: [100]
topics: ["configuration", "declarative", "macos", "nix", "nix-darwin", "nixos", "amd", "deployment", "home-manager", "hyprland"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-21T02:34:32Z"
lastCommitAt: "2026-09-23T08:45:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 55
maintainers: ["iStellanova"]
openGraphImageUrl: "https://opengraph.githubassets.com/53a5b85ed5948f9e98a74a148fc2c4473768550519486720f963726f9604f2bf/iStellanova/Stellyrland"
---

</p>

  <br/>
</p>

---

This is my personal configuration for my systems, managed by the nix language
and the lix package manager. I stick to the dendritic pattern. Documentation will explain all concepts I use here. I use this to tinker, deploy, and manage my computers from home and remote. :)

My personal workstation is **Stellyrland**, most topics here will revolve around
that host.

<table align="center">
  <tr>
    <td colspan="2" align="center">
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
    </td>
    <td align="center" width="50%">
    </td>
  </tr>
  <tr>
    <td align="center">
    </td>
    <td align="center">
    </td>
  </tr>
</table>

> **Note:**<br> This is a personal configuration. This is not meant to be forked
> or used by others.

</p>

## 🏗️ Architecture

```mermaid
flowchart TD
    PNIX["pnix inputs + resolver"] --> FLAKE["flake.nix"]
    FLAKE --> MODULES["modules/"]
    MODULES --> PARTS["flake-parts"]
    PARTS --> BUILD["system builders"]

    BUILD --> STELLYRLAND["stellyrland"]
    BUILD --> STELLYRLAB["stellyrlab"]
    BUILD --> STELLYRTOP["stellyrtop"]
    BUILD --> PLASMA["plasmapulsefinale"]
    BUILD --> REDFLAME["ItsRedFlame"]…
