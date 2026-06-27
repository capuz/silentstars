---
repo: "rounakdatta/dotfiles"
name: "dotfiles"
description: "Blue, Hot, Nixy"
url: "https://github.com/rounakdatta/dotfiles"
homepage: "https://rounak.taptappers.club/notes/alexander-nixinton/"
language: "Nix"
languages: ["Nix"]
languagePcts: [69]
topics: ["dotfiles", "nix"]
stars: 15
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-08-26T16:45:52Z"
lastCommitAt: "2026-06-27T06:22:21Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 94
undervaluedScore: 54
maintainers: ["rounakdatta"]
openGraphImageUrl: "https://opengraph.githubassets.com/102449ec0b47a611a2c2e5460012840ff37b7d2f00b6ffbc3f3409ba850a86f8/rounakdatta/dotfiles"
---

</div>

# dotfiles

Nix is my way of setting up and managing my computers. It's an entirely declarative way of saying what you want. Some people also say it's a cult.

## How broad it is

- **ninezeroes** — NixOS (x86_64-linux)
- **trueswiftie** — macOS (aarch64-darwin)

## How to navigate

- The `hosts/` directory contains the entrypoints to different architectures of machines.
- The `configs/` directory contains how individual software should be configured.

## Going ahead and using it

```bash
# on a new system, you wouldn't even have the nix CLI
curl -sSf -L https://install.lix.systems/lix | sh -s -- install
```

Apply a configuration:

```bash
# NixOS
sudo nixos-rebuild switch --flake .#ninezeroes

# macOS
sudo nix run nix-darwin/nix-darwin-25.11#darwin-rebuild -- switch --flake .
```

## What else

Sometimes you might have to ask Nix to skip cache, and the flag for that is `--option eval-cache false`.

---

My dotfiles setup has evolved over the years, starting from maybe ... Ansible? I used NixOS (the real thing) for about a year before moving on to application-level Nix on macOS. I think I value convenience over [BTW-ism](https://knowyourmeme.com/memes/btw-i-use-arch).
