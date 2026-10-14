---
repo: "hannoeru/dotfiles"
name: "dotfiles"
description: "My dotfiles"
readmeQualityOk: true
url: "https://github.com/hannoeru/dotfiles"
language: "Shell"
languages: ["Shell", "Nix"]
languagePcts: [42, 38]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2021-10-29T12:07:25Z"
lastCommitAt: "2026-10-14T08:57:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 68
maintainers: ["hannoeru", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2ae13740f95dfb34cf78e3be09d5ef8c201998405778f4f67ebf7dc14061970/hannoeru/dotfiles"
---

# dotfiles

Nix-managed dotfiles using [nix-darwin](https://github.com/nix-darwin/nix-darwin) and [home-manager](https://github.com/nix-community/home-manager).

## Machines

Defined once in `machines.nix`; the key is the flake configuration name.

| Configuration                      | Machine                                             |
| ---------------------------------- | --------------------------------------------------- |
| `darwinConfigurations.Han-MBP`     | Personal MacBook Pro                                |
| `darwinConfigurations.work`        | Work MacBook Pro                                    |
| `homeConfigurations.hanlee@ubuntu` | Personal Linux                                      |
| `homeConfigurations.ephemeral`    | Ephemeral machines (containers, devcontainers, WSL) |

Linux configurations also exist with an `-aarch64` suffix (e.g. `ephemeral-aarch64`) for ARM.

## Install

```
git clone https://github.com/hannoeru/dotfiles ~/dotfiles
~/dotfiles/scripts/bootstrap.sh
```

## Apply changes

macOS:

```
sudo darwin-rebuild switch --flake ~/dotfiles#Han-MBP
sudo darwin-rebuild switch --flake ~/dotfiles#work
```

Linux (x86_64):

```
nix run…
