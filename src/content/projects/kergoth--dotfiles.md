---
repo: "kergoth/dotfiles"
name: "dotfiles"
description: "Primary dotfiles & scripts repository"
readmeQualityOk: true
url: "https://github.com/kergoth/dotfiles"
language: "Shell"
languages: ["Shell", "Go Template", "Python"]
languagePcts: [38, 25, 24]
stars: 31
forks: 1
openIssues: 44
closedIssues: 75
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2011-06-22T16:44:03Z"
lastCommitAt: "2026-07-05T20:50:16Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 81
undervaluedScore: 53
maintainers: ["kergoth"]
openGraphImageUrl: "https://opengraph.githubassets.com/5129d3f5a74b8817edad9274ccbe1e3afeb47de7708f634ba5f85d37555b35d9/kergoth/dotfiles"
---

# Kergoth's Dotfiles and Setup Scripts

    </a>
</p>

</p>

Personal dotfiles and system setup, managed with [chezmoi] and [Nix Home Manager][home-manager]. This repository covers application configuration, shell customization, package installation, and system-level setup across macOS, Linux, FreeBSD, and Windows. All machine-specific differences and optional feature flags are handled through chezmoi's template system.

## How It Works

[Chezmoi][chezmoi] manages dotfiles: it templates configuration files, applies them to `$HOME`, handles encrypted secrets via [age], and runs setup scripts as part of the apply process. [Nix Home Manager][home-manager] provides the primary method of declarative, reproducible package management at the user level where Nix and nixpkgs are viable, supplemented by [Homebrew] on macOS, [Scoop] on Windows, and language-specific package managers as needed. Where that path is unavailable or incomplete, the setup falls back to system package managers and other installation methods. See [Platform Notes](#platform-notes) for FreeBSD and Chimera Linux.

Chezmoi templates drive per-machine configuration. Flags in `~/.config/chezmoi/chezmoi.toml` control what…
