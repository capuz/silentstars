---
repo: "imdomestic/nix-config"
name: "nix-config"
description: "My nix stuff"
url: "https://github.com/imdomestic/nix-config"
language: "Nix"
languages: ["Nix"]
languagePcts: [96]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-01-12T17:56:28Z"
lastCommitAt: "2026-06-27T06:25:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 72
maintainers: ["HCHogan", "linwh1te"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce50485d757f4210f3c22d7cb707e83fd2cc7be0e7970d36823da6dbb0333c4d/imdomestic/nix-config"
---

# ❄️ nix-config

Declarative NixOS, nix-darwin, and Home Manager setup with a single flake that scales from servers to laptops—and even standalone HM installs on other distros.

## ✨ Highlights

- 🧩 Flake entry point that keeps **system** and **Home Manager** layers cleanly separated.
- 🖥️ Host registry covering Linux (x86_64/aarch64) and macOS (`aarch64-darwin`, `x86_64-darwin`), plus Home Manager–only machines.
- 👥 Shared profiles + per-user overrides so you can reuse core pieces without shipping unwanted packages.
- 🪟 Role-driven profiles (`desktop`, `server`, `virtualisation`, …) that compose into each host.
- 🏠 HM outputs exposed as `homeConfigurations."hosts/<host>/<user>"`, ideal for non-NixOS distros.
- ⚙️ System Manager outputs as `systemConfigs.<system>.<host>` (plus aliases under `systemConfigs.<host>` and `systemConfigs.hosts.<host>`) for declarative services on non-NixOS Linux boxes.
- 🧰 Reusable module library for services (mihomo, vfio, …) and desktop tooling (Hyprland, Kitty, Starship, …).

## 📁 Layout

```text
.
├── flake.nix
├── lib/
│   ├── mkConfigurations.nix           # Builds nixos/darwin systems from host metadata
│   ├── mkHomeConfigurations.nix…
