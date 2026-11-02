---
repo: "lorisleiva/dotfiles"
name: "dotfiles"
description: "❄️ Personal set of configurations for macOS"
readmeQualityOk: true
url: "https://github.com/lorisleiva/dotfiles"
language: "Lua"
languages: ["Lua", "Nix"]
languagePcts: [48, 38]
stars: 25
forks: 7
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2018-04-13T14:24:09Z"
lastCommitAt: "2026-11-02T11:38:08Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 74
undervaluedScore: 40
maintainers: ["lorisleiva"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb9f9a7fbeb55c1a7039f473035219fd92bcf383d3b94a5d7fdace5f8186efe4/lorisleiva/dotfiles"
---

# Dotfiles

❄️ Personal set of configurations for macOS, powered by [nix-darwin](https://github.com/nix-darwin/nix-darwin) and [Home Manager](https://github.com/nix-community/home-manager).

## Profiles

Each machine runs one profile: the shared modules (`modules/`) plus a profile on top (`profiles/`), declared in `flake.nix` with the macOS account it is for.

| Profile | Account | What it is |
|---|---|---|
| `personal` | `loris` | My everyday Mac: dev tools, apps, the PHP/web stack, commits signed with GPG. |
| `agents` | `paseo` | A dedicated machine for coding agents: dev tools only, no personal apps or keys, commits signed with the machine's own SSH key. |

To use these on your own machine, change the account names in `flake.nix` (or add a profile of your own).

## Fresh machine

1. Git clone to `~/Code/dotfiles`
2. Make sure the config fits your needs (`flake.nix`, `modules/`, `profiles/`)
3. Run `./bootstrap.sh <profile>`, e.g. `./bootstrap.sh personal`

## Everyday changes

Run `./rebuild.sh` after editing any config. It uses the profile `bootstrap.sh` was run with (kept in `~/.config/dotfiles/profile`); pass a profile name to set or change it.
