---
repo: "Allianaab2m/dotfiles"
name: "dotfiles"
description: "My dotfiles"
url: "https://github.com/Allianaab2m/dotfiles"
language: "Nix"
languages: ["Nix", "Shell", "Lua"]
languagePcts: [39, 31, 28]
topics: ["dotfiles", "neovim", "neovim-dotfiles", "home-manager", "nix", "nix-darwin"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-11-20T00:16:08Z"
lastCommitAt: "2026-06-26T06:48:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 47
maintainers: ["Allianaab2m"]
openGraphImageUrl: "https://opengraph.githubassets.com/7954d45701867f52c78ffa651782833716520028c8b02726af2cd4c65a419f53/Allianaab2m/dotfiles"
---

# dotfiles

Manage with [Nix](https://nixos.org), [home-manager](https://github.com/nix-community/home-manager), [nix-darwin](https://github.com/LnL7/nix-darwin).

## Devices

| Device | Hostname | OS | System |
|  --    |   --     | -- |  --    |
| M3 MacBook Air 13" | marisa | macOS 15.2 (Sequoia) | aarch64-darwin |
| Desktop / Ryzen 5 5500 + GeForce RTX 4060 | youmu-wsl | Ubuntu 24.04.1 (on WSL2) | x86_64-linux |
| Laptop / Core i7-1195G7 | reimu-wsl | Ubuntu 24.04.1 (on WSL2) | x86_64-linux |

## Setup

Install Nix via [DeterminateSystems/nix-installer](https://github.com/DeterminateSystems/nix-installer).

```sh
curl --proto '=https' --tlsv1.2 -sSf -L https://install.determinate.systems/nix | \
  sh -s -- install
```

then, run `nix run nixpkgs#home-manager -- switch --flake .#{hostname}`.

## Usage

See also: [Taskfile.yaml](https://github.com/Allianaab2m/dotfiles/blob/main/Taskfile.yaml)

### Upgrade

Runs `nix flake update`, `home-manager switch` and `nix-garbage-collect --delete-old`

```sh
task up
```

### Update

```sh
task update
```

### Garbage collection

```sh
task gc
```

### home-manager switch

```sh
task hmsw
```

### nix-darwin switch

> [!NOTE]
> It works…
