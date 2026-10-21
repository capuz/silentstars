---
repo: "Bad3r/nixos"
name: "nixos"
description: "NixOS Infrastructure as Code using the Dendritic Pattern & flake parts"
readmeQualityOk: true
url: "https://github.com/Bad3r/nixos"
language: "Nix"
languages: ["Nix"]
languagePcts: [75]
topics: ["nixos-config", "nixos-configuration", "iac", "infrastructure-as-code"]
stars: 10
forks: 0
openIssues: 66
closedIssues: 89
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2025-08-14T23:27:41Z"
lastCommitAt: "2026-10-21T17:31:50Z"
lastReleaseAt: "2026-10-17T10:33:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 91
undervaluedScore: 70
maintainers: ["Bad3r", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8fad334cde791d0863d04f33bbe4fd1194dd2c38771cd67cd94e0ea8cb27a0fb/Bad3r/nixos"
discussionCount: 1
---

# NixOS Configuration

NixOS Infrastructure as Code using the [Dendritic Pattern](https://github.com/mightyiam/dendritic), an organic configuration growth pattern with automatic module discovery. Powered by [flake-parts](https://flake.parts/).

The `system76` host (System76 Oryx Pro laptop) is deprecated: its configuration was removed from this repository in [#489](https://github.com/Bad3r/nixos/pull/489) and survives only in git history.

## Automatic Import

All Nix files are flake-parts modules and are automatically imported via [import-tree](https://github.com/vic/import-tree). Files prefixed with `_` are omitted. No literal path imports are used, so files can be moved and nested freely.

Shared device policy that serves multiple optional applications belongs in `modules/hosts/common/`, so its permissions do not disappear when one app module is disabled. Optional app modules own their package and capability-wrapper behavior, including compiled argv filters with audited, grammar-aware allowlists that fail closed on unsupported and non-device forms, validate parser-dependent argument boundaries, and bound the resulting no-sudo operation boundary.

## Build and Deployment

This…
