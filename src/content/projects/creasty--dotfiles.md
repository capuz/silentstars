---
repo: "creasty/dotfiles"
name: "dotfiles"
description: "Stellar productivity"
readmeQualityOk: true
url: "https://github.com/creasty/dotfiles"
language: "Lua"
languages: ["Lua"]
languagePcts: [76]
topics: ["dotfiles", "vim", "zsh", "macos", "neovim", "lsp", "hammerspoon", "nix", "nix-darwin", "nixos-dotfiles"]
stars: 104
forks: 4
openIssues: 0
closedIssues: 37
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2013-09-30T10:09:14Z"
lastCommitAt: "2026-10-03T09:22:52Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 95
undervaluedScore: 46
maintainers: ["creasty", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/13211965/398eb800-b2a3-11eb-88d8-262992502392"
---

# creasty's dotfiles

[ci]: https://github.com/creasty/dotfiles/actions/workflows/provisioning.yml
[ci-badge]: https://github.com/creasty/dotfiles/actions/workflows/provisioning.yml/badge.svg
[tests]: https://github.com/creasty/dotfiles/actions/workflows/tests.yml
[tests-badge]: https://github.com/creasty/dotfiles/actions/workflows/tests.yml/badge.svg
[platform-badge]: https://img.shields.io/badge/Platform-macOS-lightgrey
[license]: ./LICENSE.txt
[license-badge]: https://img.shields.io/badge/License-MIT-yellow.svg

This repository contains my personal dotfiles configuration for macOS, featuring thoroughly tailored setups for NeoVim and Zsh with performance in mind.

## Installation

<pre><code>$ curl -L <a href="https://dotfiles.creasty.com/provision">dotfiles.creasty.com/provision</a> | bash</code></pre>

It clones this repository to `~/dotfiles`, installs Homebrew and [Nix](https://determinate.systems/nix/), and applies the [nix-darwin](https://github.com/nix-darwin/nix-darwin) configuration of `flake.nix` for the current user, [home-manager](https://github.com/nix-community/home-manager) included.

To apply changes later, provision again:

```sh-session
$ ~/dotfiles/provision…
