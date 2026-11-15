---
repo: "nelsonmestevao/dotfiles"
name: "dotfiles"
description: ":penguin: Configuration files"
readmeQualityOk: true
url: "https://github.com/nelsonmestevao/dotfiles"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [62]
topics: ["dotfiles", "git", "zsh", "nvim", "nix"]
stars: 112
forks: 13
openIssues: 0
closedIssues: 9
watchers: 4
contributors: 6
recentReleases: 0
createdAt: "2017-10-16T22:27:33Z"
lastCommitAt: "2026-11-14T23:49:00Z"
lastReleaseAt: "2019-07-23T22:41:09Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 46
maintainers: ["nelsonmestevao"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/107189730/01bbff00-eac7-11e9-9fdf-b73508264581"
discussionCount: 1
---

[releases]: https://github.com/nelsonmestevao/dotfiles/releases/latest
[ci]: https://github.com/nelsonmestevao/dotfiles/actions/workflows/ci.yml
[license]: #-license
[spells]: https://github.com/nelsonmestevao/spells

I enjoy customizing every aspect of my system. This repository contains my
complete setup — from configuration files for the tools I use (managed through
symlinks) to the declarative configuration of my entire system using the Nix
package manager, language, and operating system.

If you're just getting started, feel free to use my setup (_I don't mind_ — see
the [LICENSE][license]). But for your own good, **take the time to read through
it**. You won't get the most out of it otherwise.

## 🧩 Overview

This configuration is as modular as I can make it. It's split into two main
layers:

- **`home/`** — portable Home Manager configuration that works across any Linux
distribution **and macOS**. Most modules run everywhere; platform-specific ones
like GNOME, Hyprland, or Vicinae are simply left disabled where they don't
apply, and cross-platform modules (e.g. Ghostty, Docker) adapt their config per
OS via `pkgs.stdenv.isDarwin`.

- **`system/`** — OS-level configuration…
