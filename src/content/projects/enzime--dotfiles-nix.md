---
repo: "Enzime/dotfiles-nix"
name: "dotfiles-nix"
description: "Use Nix to declaratively manage and configure all of my systems everywhere all at once"
url: "https://github.com/Enzime/dotfiles-nix"
language: "Nix"
languages: ["Nix"]
languagePcts: [94]
topics: ["nix", "dotfiles", "home-manager", "nixos", "infrastructure-as-code"]
stars: 53
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-09-20T05:42:31Z"
lastCommitAt: "2026-06-23T01:25:45Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 78
undervaluedScore: 47
maintainers: ["Enzime"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0a6a439f98364d8d2e4b35f6be4819c68a1081216cf37a5a8e43125171496a2/Enzime/dotfiles-nix"
fundingLinks: ["GITHUB:https://github.com/Enzime"]
---

I use Nix to declaratively manage and configure all of my systems everywhere all at once

## Getting started

Due to subflakes being broken in Nix, before you can use this repo you'll need to run:

```
$ nix-shell --pure -I nixpkgs=flake:nixpkgs -p '(import ./shell.nix { }).packages.${builtins.currentSystem}.add-subflakes-to-store' --command add-subflakes-to-store
```

You can then run a NixOS VM on Linux with:

```
$ nix run .#phi-nixos-vm
```

All the possible hostnames are `gaia`, `phi-nixos` and `sigma`

## See also

- [Frequently Asked Questions about Nix](https://github.com/hlissner/dotfiles/tree/55194e703d1fe82e7e0ffd06e460f1897b6fc404?tab=readme-ov-file#frequently-asked-questions)
