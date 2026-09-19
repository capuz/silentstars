---
repo: "4evy/dotfiles"
name: "dotfiles"
description: "Personal workstation config for Spectrum/Bluefin, NixOS, and macOS, with shared chezmoi dotfiles."
readmeQualityOk: true
url: "https://github.com/4evy/dotfiles"
homepage: "https://github.com/4evy/dotfiles/pkgs/container/spectrum"
language: "YAML"
topics: ["ansible", "chezmoi", "homebrew", "universal-blue", "bluefin", "bootc", "dotfiles", "macos", "nix", "nix-flake"]
stars: 18
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-12-02T12:01:36Z"
lastCommitAt: "2026-09-19T08:10:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 62
maintainers: ["4evy"]
openGraphImageUrl: "https://opengraph.githubassets.com/71cea1149e21227e23c28255e8178c6d903b82c74e1e32c2ca5d4868147329ca/4evy/dotfiles"
---

# dotfiles

My personal workstation config for Spectrum/Bluefin, NixOS, and macOS

> [!IMPORTANT]
> This repository is for my machines. It's public for reference, but it isn't
> a reusable installer or a supported project

</p>

The goal is to make every machine feel like mine without maintaining the same
config four times

## Rebuilding a machine

I keep the repo at `~/dotfiles`:

``` bash
git clone https://github.com/4evy/dotfiles.git ~/dotfiles
cd ~/dotfiles
```

<details>
<summary><strong>Spectrum / Bluefin</strong></summary>

<br>

On a fresh Bluefin install, I switch to the Spectrum image:

``` bash
sudo bootc switch ghcr.io/4evy/spectrum:latest
systemctl reboot
```

After the reboot, I finish the setup:

``` bash
cd ~/dotfiles
just setup
```

</details>

<details>
<summary><strong>NixOS</strong></summary>

<br>

On an installed NixOS system, I apply the flake and finish the shared setup:

``` bash
sudo nixos-rebuild \
  --option extra-substituters https://install.determinate.systems \
  --option extra-trusted-public-keys cache.flakehub.com-3:hJuILl5sVK4iKm86JzgdXW12Y2Hwd5G07qKtHTOcDCM= \
  --flake .#nixos \
  switch
just setup
```

The extra cache options are only needed…
