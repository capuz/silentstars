---
repo: "shelken/nix-config"
name: "nix-config"
description: "❄️ My nix-config configuration"
originalDescription: "❄️ 我的 nix-config 配置"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/shelken/nix-config"
language: "Nix"
languages: ["Nix", "TypeScript"]
languagePcts: [34, 31]
stars: 5
forks: 0
openIssues: 8
closedIssues: 39
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2023-08-05T20:20:04Z"
lastCommitAt: "2026-10-26T03:03:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 78
maintainers: ["shelken"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1e434aa1116e93fc49c3f21ec84041f562e543ccfd514f4046e9975e8c726ec/shelken/nix-config"
---

·
  ·
  ·
  ·

&nbsp;

# Structure

One piece of software is one "feature". Its nix-darwin, NixOS, and Home Manager configuration is written in the same place. A host selects only one "role", and each feature declares for itself which roles it belongs to.

```text
modules/
├── features/<category>/<feature>   # the system-side and user-level configuration of one piece of software
├── profiles/                       # role chain core ⊂ tui ⊂ gui ⊂ desktop ⊂ workstation, plus the add-on role homelab
└── flake/                          # homeManager.<name> is automatically attached to the system module of the same name
hosts/<host>/                       # selects a role, a few single-machine features, and parameters
```

For the steps to add software, enable optional features, and add a new host, see [Features and Roles](https://github.com/shelken/nix-config/blob/HEAD/docs/user-guide/02-features.md). For the design rationale, see [ADR 0004](https://github.com/shelken/nix-config/blob/HEAD/docs/adr/0004-dendritic-feature-modules.md).

# darwin

## Initialization

```bash
# 0. If secrets are used, add the new machine to secrets.nix, and write shelken.secrets.enable = true; in…
