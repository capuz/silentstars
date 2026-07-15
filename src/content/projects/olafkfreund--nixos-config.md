---
repo: "olafkfreund/nixos_config"
name: "nixos_config"
description: "My private nixos_config"
readmeQualityOk: true
url: "https://github.com/olafkfreund/nixos_config"
language: "Nix"
languages: ["Nix"]
languagePcts: [79]
stars: 20
forks: 0
openIssues: 10
closedIssues: 310
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-01-05T11:11:32Z"
lastCommitAt: "2026-07-15T05:53:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 63
maintainers: ["olafkfreund"]
openGraphImageUrl: "https://opengraph.githubassets.com/157abe9e5f22cd1dd46c46aad1e8f495184e8089afdd4d0b386995429ad3f39c/olafkfreund/nixos_config"
---

# NixOS Configuration

Multi-host NixOS configuration using flakes, a single parameterised host
template, Home Manager as a flake module, and Stylix-driven theming.

Last verified: 2026-05-04 against `nixos-unstable` (NixOS 26.05).

## Hosts

| Host  | Class       | Hardware       | Role                              | Template            |
|-------|-------------|----------------|-----------------------------------|---------------------|
| p620  | workstation | AMD RX 7900    | Primary development, AI workloads | desktop/workstation |
| p510  | workstation | Intel Xeon     | Headless media server (Plex)      | desktop/workstation |
| razer | laptop      | Intel + NVIDIA | Mobile development, Secure Boot   | desktop/laptop      |

DEX5550 and Samsung have been removed from the configuration. References
in older docs are stale.

## Architecture

- Single parameterised host template at `hosts/templates/desktop.nix`
  (selects between `workstation` and `laptop` profiles via the
  `profile` argument). Surfaced through `lib/hostTypes.nix` as
  `hostTypes.workstation` / `hostTypes.laptop`. The previous
  `server`/`hybrid`/`base` templates were removed; P510 also uses the
  workstation…
