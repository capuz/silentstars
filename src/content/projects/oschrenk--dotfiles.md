---
repo: "oschrenk/dotfiles"
name: "dotfiles"
description: "My terminal settings"
readmeQualityOk: true
url: "https://github.com/oschrenk/dotfiles"
language: "Shell"
languages: ["Shell", "Nix"]
languagePcts: [53, 26]
topics: ["dotfiles", "fish", "shell"]
stars: 22
forks: 0
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2009-11-26T17:06:31Z"
lastCommitAt: "2026-10-21T17:31:05Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 79
undervaluedScore: 55
maintainers: ["oschrenk"]
openGraphImageUrl: "https://opengraph.githubassets.com/abbd89394f132d43f852a2940118c139ea36ebbf8e929818289fcd6c5617831b/oschrenk/dotfiles"
---

# README

These are my dotfiles.

## Bootstrap

The `nix/` flake and `scripts/` live in this repo, so clone it first. The repo
is public, so clone over HTTPS (the 1Password agent supplies the SSH key later).
Clone it anywhere, as long as it matches `my.personal.dotfiles` in
`nix/identity.nix`. home-manager symlinks the config trees for neovim, sketchybar and
Claude Code out of the checkout, so that path is what they resolve through:

```sh
# git ships with the Xcode Command Line Tools; this triggers their install
xcode-select --install

git clone https://github.com/oschrenk/dotfiles.git ~/Projects/ops/dotfiles
cd ~/Projects/ops/dotfiles
```

Name the machine next, which `nix-darwin` uses to pick the host configuration:

```sh
./scripts/hostname.sh
```

Then install Nix and Homebrew:

```sh
./scripts/bootstrap.sh
```

## nix-darwin

Configure `/etc/nix/nix.custom.conf` (Determinate Nix preserves this across upgrades):

```sh
echo 'trusted-users = oliver' | sudo tee -a /etc/nix/nix.custom.conf
echo 'extra-substituters = https://nixos-raspberrypi.cachix.org' | sudo tee -a /etc/nix/nix.custom.conf
echo 'extra-trusted-public-keys =…
