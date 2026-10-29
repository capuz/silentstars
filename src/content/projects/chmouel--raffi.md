---
repo: "chmouel/raffi"
name: "raffi"
description: "An MacOS Alfred alike application launcher for Wayland in Rust"
readmeQualityOk: true
url: "https://github.com/chmouel/raffi"
homepage: "https://chmouel.github.io/raffi/"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
topics: ["fuzzel", "launcher", "sway", "wayland", "yaml", "yaml-config", "iced-rs", "iced", "alfred"]
stars: 119
forks: 3
openIssues: 2
closedIssues: 4
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2023-02-28T11:33:54Z"
lastCommitAt: "2026-10-29T05:49:48Z"
lastReleaseAt: "2024-01-04T20:22:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 44
maintainers: ["chmouel", "dependabot[bot]", "Copilot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/607637630/ee60e382-a442-4869-8c94-6b4ff5d3f882"
---

# Raffi

Raffi is a keyboard-driven search box for your Wayland desktop. From one place you can open apps, browse files, switch windows, paste from your clipboard history, fill in passwords, do sums, convert currencies and a lot more. It is written in Rust, starts fast, and needs no daemon or database.

It works as soon as it is installed. A YAML file lets you pick a theme, choose which addons are on, add web searches and snippets, and add commands or scripts of your own.

The full documentation lives at <https://chmouel.github.io/raffi/>. More screenshots are [further down](#screenshots).

## Installation

Arch Linux (AUR):

```sh
yay -S raffi-bin
```

Nix:

```sh
nix-shell -p raffi
```

Homebrew or Linuxbrew:

```sh
brew tap chmouel/raffi https://github.com/chmouel/raffi
brew install raffi
```

With Cargo:

```sh
cargo install raffi
```

Prebuilt binaries are on the [releases page](https://github.com/chmouel/raffi/releases). The [installation guide](https://chmouel.github.io/raffi/installation/) covers building from source.

## Bind it to a key

Run `raffi` and start typing. With no config yet, Raffi searches your installed applications, open windows and system commands in one…
