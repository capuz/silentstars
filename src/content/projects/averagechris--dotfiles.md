---
repo: "averagechris/dotfiles"
name: "dotfiles"
description: "nix configurations with nix flakes."
readmeQualityOk: true
url: "https://github.com/averagechris/dotfiles"
homepage: "https://git.sr.ht/~averagechris/dotfiles"
language: "Nix"
languages: ["Nix", "Rust"]
languagePcts: [49, 39]
topics: ["doom-emacs", "emacs", "nix", "nixos"]
stars: 7
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2016-11-27T23:13:49Z"
lastCommitAt: "2026-10-03T22:04:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 79
undervaluedScore: 66
maintainers: ["averagechris"]
openGraphImageUrl: "https://opengraph.githubassets.com/05969e54b5f190b3c911fef995367be1a4ea7b446631d98a9d3077e3a471cf4a/averagechris/dotfiles"
---

# Dotfiles Repository

This repository contains NixOS and nix-darwin configurations for all machines in the fleet, organized using a multi-flake architecture for modularity and maintainability.

## Issue Tracking

Repository work is tracked in [GitHub Issues for
`averagechris/dotfiles`](https://github.com/averagechris/dotfiles/issues). Use
the GitHub CLI for common issue operations:

```bash
gh issue list -R averagechris/dotfiles
gh issue view NUMBER -R averagechris/dotfiles
gh issue create -R averagechris/dotfiles --title "..." --body "..."
```

## Quick Start

### Prerequisites

- [Nix](https://nixos.org/download.html) installed (with flakes enabled)
- For NixOS: Fresh NixOS installation or existing system
- For macOS: Existing macOS system with Nix

### Building a Host

To build and activate a configuration on the current system:

```bash
# NixOS systems
nixos-rebuild switch --use-remote-sudo --flake .#HOSTNAME

# macOS systems (Darwin)
nix run nix-darwin -- switch --flake .#HOSTNAME
```

For subsequent builds, you can omit the `--flake .#HOSTNAME` argument since the configuration will set the system's hostname for you.

### Deploying to Remote Hosts

To deploy a configuration…
