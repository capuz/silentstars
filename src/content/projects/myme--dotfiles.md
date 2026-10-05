---
repo: "myme/dotfiles"
name: "dotfiles"
description: "My collection of dotfiles"
readmeQualityOk: true
url: "https://github.com/myme/dotfiles"
language: "Nix"
languages: ["Nix"]
languagePcts: [61]
stars: 28
forks: 0
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2019-01-25T10:02:55Z"
lastCommitAt: "2026-10-05T10:36:33Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 85
undervaluedScore: 53
maintainers: ["myme", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4fc90ad4f6436c0c27d8e21eda6dd6016209fc2eed6bba4092c35441be95002e/myme/dotfiles"
---

# NixOS Configuration

This repository contains the [NixOS](https://nixos.org/) system and user profile
configuration files for my machines. For an overview and more thorough
description, read [NixOS: Confederation
(myme.no)](https://myme.no/posts/2022-06-14-nixos-confederation.html).

I rarely install new machines and thus haven't really invested the time to
automate this process in a good way. The steps under
[Installation](#installation-experimentalbroken) are most likely borken or
incomplete. Your best bet is to [download and
install](https://nixos.org/download.html#nixos-iso) `NixOS` following the
regular documentation, then simply [build and update](#updating) using
`nixos-rebuild switch --flake .`.

## Installation

### Install SSH keys on machine

Use a local keyboard and mouse or remote console to start up a shell on the
machine. Then add public keys as desired to `.ssh/authorized_keys` for remote
access.

``` bash
$ mkdir .ssh
$ curl -o .ssh/authorized_keys https://github.com/myme.keys
```

### Jump into dev shell

``` bash
# shorthand for `nix develop` (with --extra-experimental-features)
./dev
```

### Copy installation files to host

The following command will prompt…
