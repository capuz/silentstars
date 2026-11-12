---
repo: "gkze/nixcfg"
name: "nixcfg"
description: "Nix system configuration"
readmeQualityOk: true
url: "https://github.com/gkze/nixcfg"
language: "Nix"
languages: ["Nix", "Python"]
languagePcts: [54, 45]
stars: 5
forks: 1
openIssues: 3
closedIssues: 42
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2023-05-10T20:16:37Z"
lastCommitAt: "2026-11-12T04:42:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 81
maintainers: ["gkze", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/281192a69c14b6d1af2a8a8ec07597ee28336410cf94e4487967a07ec0581194/gkze/nixcfg"
---

# nixcfg

Unified [Nix flake](https://nix.dev/concepts/flakes) for macOS hosts,
[Home Manager](https://github.com/nix-community/home-manager) user
configuration, and reusable module building blocks.

The repository still targets George's machines, user profile, and workflows.
Ongoing work separates those personal defaults into reusable framework
primitives and a standalone module library.

## Repository map

```mermaid
flowchart TD
  flake["flake.nix<br/>inputs and outputs"] --> darwin["darwin/<br/>host entrypoints"]
  flake --> home["home/<br/>user configuration"]
  flake --> modules["modules/<br/>reusable modules"]
  flake --> packages["packages/<br/>standalone derivations"]
  flake --> overlays["overlays/<br/>package overrides"]
  flake --> lib["lib/<br/>Python tooling and Nix helpers"]
  lib --> cli["nixcfg.py<br/>Typer CLI"]
  cli --> update["update<br/>source and hash refresh"]
  cli --> ci["ci<br/>crate2nix and CI helpers"]
  cli --> schema["schema<br/>codegen and verification"]
  packages --> hosts["darwinConfigurations<br/>argus, rocinante, zeus"]
  overlays --> hosts
  modules --> hosts
  home --> homecfg["homeConfigurations.george"]
  modules --> homecfg
```

Read…
