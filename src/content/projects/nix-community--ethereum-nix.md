---
repo: "nix-community/ethereum.nix"
name: "ethereum.nix"
description: "Nix packages and NixOS modules for the Ethereum ecosystem. [maintainers=@aldoborrero,@brianmcgee,@selfuryon,@bbjubjub2494]"
readmeQualityOk: true
url: "https://github.com/nix-community/ethereum.nix"
language: "Nix"
languages: ["Nix"]
languagePcts: [91]
topics: ["blockchain", "eth", "ethereum", "ethereum-blockchain", "nix", "nixpkgs", "nixos"]
stars: 155
forks: 46
openIssues: 5
closedIssues: 119
watchers: 3
contributors: 42
recentReleases: 0
createdAt: "2022-09-01T12:34:42Z"
lastCommitAt: "2026-10-17T07:57:32Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 99
undervaluedScore: 45
maintainers: ["nix-flake-auto-update[bot]", "aldoborrero", "selfuryon"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c5966c7a57edcc51b81598663fb00efe6fbf67ea9be9a3d390d8a82bcec7cf4/nix-community/ethereum.nix"
fundingLinks: ["GITHUB:https://github.com/nix-community", "OPEN_COLLECTIVE:https://opencollective.com/nix-community"]
discussionCount: 7
---

Ethereum.nix is a collection of [Nix](https://nixos.org) packages and [NixOS](https://wiki.nixos.org/wiki/NixOS_modules) modules
designed to make it easier to operate [Ethereum](https://ethereum.org) related services and infrastructure.

For the uninitiated, using Ethereum.nix will give you the following benefits:

- Access to a wide range of Ethereum applications packaged with Nix, ready to run without fuss. Nix guarantees you don't have to worry about version conflicts, missing dependencies or even what state your OS is in.
- We aim that every Ethereum application stored in the repository is constructed from its source, including all input dependencies. This approach guarantees the code's reproducibility and trustworthiness. Furthermore, with Nix, expert users can tweak and adjust the build process to any degree of detail as required.
- We develop custom NixOS modules to streamline operations with applications such as Execution and Consensus clients (including performing backups). Moreover, we aim to introduce further abstractions that simplify everyday tasks, such as running a development environment effortlessly without needing docker.

This project is developed entirely in…
