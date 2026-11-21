---
repo: "Bad3r/nixos"
name: "nixos"
description: "NixOS Infrastructure as Code using the Dendritic Pattern & flake parts"
readmeQualityOk: true
url: "https://github.com/Bad3r/nixos"
language: "Nix"
languages: ["Nix", "Python"]
languagePcts: [54, 33]
topics: ["nixos-config", "nixos-configuration", "iac", "infrastructure-as-code"]
stars: 9
forks: 0
openIssues: 94
closedIssues: 99
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2025-08-14T23:27:41Z"
lastCommitAt: "2026-11-21T11:36:44Z"
lastReleaseAt: "2026-10-17T10:33:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 90
undervaluedScore: 71
maintainers: ["Bad3r"]
openGraphImageUrl: "https://opengraph.githubassets.com/01eb3a2eb6bcb7204a4338ffabb97b9e401ac695a41f3d12d12b501ad9dfc5ba/Bad3r/nixos"
discussionCount: 1
---

# NixOS Configuration

NixOS Infrastructure as Code using the [Dendritic Pattern](https://github.com/mightyiam/dendritic), an organic configuration growth pattern with automatic module discovery. Powered by [flake-parts](https://flake.parts/).

The `system76` host (System76 Oryx Pro laptop) and the `tpnix` host (ThinkPad P15s Gen 2i laptop) are deprecated: their configurations were removed from this repository in [#489](https://github.com/Bad3r/nixos/pull/489) and [#597](https://github.com/Bad3r/nixos/pull/597) and survive only in git history.

## Automatic Import

All Nix files are flake-parts modules and are automatically imported via [import-tree](https://github.com/vic/import-tree). Files prefixed with `_` are omitted. No literal path imports are used, so files can be moved and nested freely.
