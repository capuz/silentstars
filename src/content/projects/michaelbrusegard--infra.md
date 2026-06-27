---
repo: "michaelbrusegard/infra"
name: "infra"
description: "Personal configurations and dotfiles for personal computers, clusters and servers running GNU/Linux, macOS and Windows, all managed declaratively with Nix and GitOps"
url: "https://github.com/michaelbrusegard/infra"
language: "Nix"
languages: ["Nix"]
languagePcts: [87]
topics: ["homebrew", "neovim", "gitconfig", "wezterm", "macos-defaults", "yabai", "zshrc", "nix", "nix-darwin", "nixos"]
stars: 10
forks: 0
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-08-31T02:30:43Z"
lastCommitAt: "2026-06-27T00:26:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 64
maintainers: ["michaelbrusegard", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8fe6968d27cd600db830c93ed45a56344243a0b169a8cb30c97bc35a1900112c/michaelbrusegard/infra"
---

# infra

This is primarily a guide for myself on how to setup my own systems, feel free
to copy anything, but do not expect a direct copy of everything to
work for you.

Note to self: Make sure to follow the guide for each system step by step.

> [!NOTE]
> I also maintain a private repository with a Nix flake containing soft
> and hard secrets. Directly copying the configuration will therefore fail
> since it will fail to fetch the private repository. The private flake uses
> Age keys to further encrypt the most critical secrets. To include them in
> the build, add the age keys to `~/.config/sops/age/keys.txt`

## Lungo (Nix-darwin Laptop)

First install macOS normally by following the default installation on
the mac. To access the installer hold the power button during boot to access
recovery options. Then go through all the sections below for the initial setup.

### Screenshot (Lungo)

![Screenshot 2025-05-02 at 15 03 38](https://github.com/user-attachments/assets/381c8dce-f0d0-4a91-b38f-544c30a3209a)

### Command line tools

Install Xcode command line tools:

```sh
xcode-select --install
```

### Install Rosetta

```sh
softwareupdate --install-rosetta --agree-to-license
```…
