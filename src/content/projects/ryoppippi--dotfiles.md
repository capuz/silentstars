---
repo: "ryoppippi/dotfiles"
name: "dotfiles"
description: "ryoppippi's dotfiles"
readmeQualityOk: true
url: "https://github.com/ryoppippi/dotfiles"
language: "Nix"
languages: ["Nix", "Lua"]
languagePcts: [45, 30]
stars: 268
forks: 5
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2022-01-24T11:06:40Z"
lastCommitAt: "2026-10-27T12:39:44Z"
lastReleaseAt: "2023-09-20T07:50:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 35
maintainers: ["ryoppippi-nix-updater[bot]", "ryoppippi", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbe6a8683835d4728333a8974c01257cd1173e98b52005828fee90f61163d2d0/ryoppippi/dotfiles"
---

# dotfiles

ryoppippi's dotfiles, managed as a Nix flake: nix-darwin plus Home Manager on macOS, standalone Home Manager on Linux.

## Layout

- `flake.nix` — inputs only; the outputs are flake-parts modules under `nix/flake/`
- `nix/flake/` — flake-parts modules: `apps/`, `hosts/`, `formatter.nix`, `pkgs.nix`
- `nix/mk-pkgs.nix` — the overlaid nixpkgs instance shared by `perSystem` and the hosts
- `nix/modules/home/` — cross-platform Home Manager modules (packages, programs, dotfile symlinks)
- `nix/modules/darwin/` — macOS system settings, Homebrew, OmniWM
- `nix/modules/linux/` — Linux-only modules
- `nix/overlays/` — custom packages, also exposed as flake `packages`
- `nix/packages/node/` — Node packages built with Nix
- `fish/`, `nvim/`, `karabiner/` — plain config, symlinked or generated into place by Home Manager
- `agents/AGENTS.md`, `agents/shared/`, `agents/skills/` — global instructions, their fragments, and skills shared by Claude Code and Codex
- `registry/sources/` — pinned external skill repositories

## Setup

Installing Nix is the one manual step, because everything after it is a Nix
command. The same installer covers macOS and Linux:

```sh
curl -sSfL…
