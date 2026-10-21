---
repo: "Leabua/dotfiles"
name: "dotfiles"
description: "My arch + hyprland config"
readmeQualityOk: true
url: "https://github.com/Leabua/dotfiles"
language: "QML"
languages: ["QML"]
languagePcts: [67]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-02T17:52:51Z"
lastCommitAt: "2026-10-21T23:30:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 40
maintainers: ["Leabua"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ec4e99a8e5a9cdcdc7bc5dc292717b80ab1813d1921afbaefc474ec91ca1954/Leabua/dotfiles"
---

# Lea’s dotfiles

My desktop setup for NixOS and Arch: Hyprland, Quickshell, Ghostty, Bash, and Neovim. Herdr handles most terminal sessions; tmux stays available as an alternative. Niri is included as an alternative compositor.

These are personal configs, currently maintained on NixOS. Start with an installed system, networking, Git, and GNU Stow. Review the host settings and paths before applying them to another machine.

## Install on NixOS

The system configuration lives in [`nixos/`](https://github.com/Leabua/dotfiles/blob/HEAD/nixos). Rebuild directly from the repository; this directory is not a Stow package.

1. Clone the repository:

   ```sh
   git clone https://github.com/Leabua/dotfiles.git ~/dotfiles
   cd ~/dotfiles
   ```

2. Enable flakes if needed. Add this to your existing NixOS configuration and rebuild it once:

   ```nix
   nix.settings.experimental-features = [ "nix-command" "flakes" ];
   ```

3. Replace the hardware configuration with the one generated for your machine:

   ```sh
   cp /etc/nixos/hardware-configuration.nix ~/dotfiles/nixos/
   ```

   Review [`configuration.nix`](https://github.com/Leabua/dotfiles/blob/HEAD/nixos/configuration.nix),…
