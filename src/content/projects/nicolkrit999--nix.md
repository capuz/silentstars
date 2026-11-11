---
repo: "nicolkrit999/nix"
name: "nix"
description: "Nix config. Support for x86 and arm pc, as well as macOS (nix-darwin) and servers/NAS, uses denix for simple enabling/disabling of modules, as well as many other features"
readmeQualityOk: true
url: "https://github.com/nicolkrit999/nix"
language: "Nix"
languages: ["Nix", "Shell"]
languagePcts: [71, 23]
topics: ["cachix", "denix", "impermanence", "nix", "nix-darwin", "sops-nix", "btrfs-snapshots", "cosmic-desktop", "gnome-desktop", "hyprland"]
stars: 31
forks: 1
openIssues: 1
closedIssues: 7
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-12-07T12:01:34Z"
lastCommitAt: "2026-11-11T19:45:50Z"
lastReleaseAt: "2026-07-02T22:22:27Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 97
undervaluedScore: 53
maintainers: ["nicolkrit999", "github-actions[bot]", "nicolkrit999-uni"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a0dd8c7cbe5546c652bdfdc6c247e5d6db6c03df2c52552c42214483ac945ba/nicolkrit999/nix"
discussionCount: 0
---

# ❄️ Personal NixOS Config

---

## ✨ Features

→ [Full feature descriptions](https://github.com/nicolkrit999/nix/blob/HEAD/Documentation/features.md)

- Adaptive host support via denix (per-host modules and constants)
- Host-specific home-manager modules (`/users` + `/modules`) and manual-import templates (`/templates`)
- Hybrid declarative + non-declarative modules (shells, caelestia, noctalia GUI overrides)
- Theming: base16 + optional Catppuccin via stylix
- Host-specific wallpapers tied to monitor list
- Multiple desktop environments: Hyprland with waybar, Hyprland with caelestia, Hyprland with noctalia, niri with noctalia, MangoWM with mangowc, KDE, GNOME, Cosmic
- NixOS specializations: guest (ephemeral RAM home), safe-mode (IceWM recovery shell), deep-focus (distraction-free workspaces), secure-travel (hardened, Tailscale Mullvad exit-node VPN with advisory warning)
- flakes & Home Manager integration, tracking nixos-unstable by default with a permanent stable input available for per-package pins
- Multiple shells (bash, zsh, fish)
- Optional BTRFS snapshots with per-host retention policy
- SOPS-nix secret management
- Impermanence (root wiped on reboot, `/persist` for…
