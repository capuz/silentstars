---
repo: "Rishabh5321/dotfiles"
name: "dotfiles"
description: "Just another NixOS dotfiles."
url: "https://github.com/Rishabh5321/dotfiles"
language: "Nix"
languages: ["Nix"]
languagePcts: [100]
topics: ["flakes", "nix", "nixos", "pinned", "nix-flakes", "dotfiles", "gnome", "home-manager", "hyprland", "kde"]
stars: 39
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2024-08-25T11:23:27Z"
lastCommitAt: "2026-06-24T06:40:51Z"
lastReleaseAt: "2026-06-24T06:20:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 62
maintainers: ["flakebuilderapp[bot]", "Rishabh5321", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e80722e5e2bf72c78717437e556fc2bebb65086806a2703a8267beb2f326de4/Rishabh5321/dotfiles"
---

# Rishabh's Flakes

  My personal NixOS configurations, managed with Nix Flakes for reproducibility and modularity.

</div>

## 🖼️ Showcase

</p>

## ✨ Philosophy

This project aims to create a highly modular and reusable NixOS setup for all my machines. The core principles are:

- **Reproducibility:** Nix Flakes ensure that every machine has the exact same configuration, defined declaratively.
- **Modularity:** Configurations are broken down into small, reusable modules (`./modules`) that can be mixed and matched for different hosts.
- **Simplicity:** The structure is designed to be easy to understand and manage, with a clear separation between system-level (`configuration.nix`) and user-level (`home.nix`) settings.
- **Automation:** GitHub Actions are used to automatically check, build, and format the code, ensuring quality and consistency.

## 📂 Directory Structure

The repository is organized to separate concerns, making it easy to manage configurations for different machines and purposes.

```
.
├── containers/   # Nix definitions for containerized services (Plex, Sonarr, etc.)
├── hosts/        # Host-specific configurations. Each subdirectory is a unique machine.
│   └──…
