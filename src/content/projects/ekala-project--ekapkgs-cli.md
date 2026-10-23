---
repo: "ekala-project/ekapkgs-cli"
name: "ekapkgs-cli"
description: "Official CLI for use with ekapkgs"
readmeQualityOk: true
url: "https://github.com/ekala-project/ekapkgs-cli"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
stars: 21
forks: 0
openIssues: 4
closedIssues: 0
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-08-24T20:35:18Z"
lastCommitAt: "2026-10-23T09:32:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 30
maintainers: ["jonringer"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac44751176b7ca382b8eeccfcab001f1b185ba1093f33bcf1958eceb78a85d74/ekala-project/ekapkgs-cli"
---

# ekapkgs-cli

A unified Nix CLI that replaces several standalone tools with a single
binary. Two binaries: `ekapkgs` (client) and `ekapkgs-serve` (server).

`ekapkgs` combines the functionality of:

- **nix** — build, run, shell, develop, flake operations with integrated caching
- **nixos-rebuild** — `ekapkgs system` for system configuration management with auto-rollback
- **home-manager** — `ekapkgs home` for per-user dotfiles, packages, and services
- **nix-index** — `ekapkgs search` for packages, options, and file search with cached indexes
- **nix-prefetch / nix-init** — `ekapkgs template` for generating Nix expressions with GitHub metadata fetching
- **nix copy / cachix** — `ekapkgs cache` with a negotiated binary cache protocol (single round trip)
- **nix-env / devenv** — `ekapkgs env` for per-directory dev environments with shell hook activation
- **nix registry** — `ekapkgs registry` for flake registry management
- **syft / trivy** — `ekapkgs closure sbom` for CycloneDX SBOM generation from Nix closures
- **nix-ld + FHS** — `ekapkgs fuse` for on-demand `/usr/lib` shared library serving via FUSE

## Why

The standard nix binary cache protocol requires ~3N HTTP requests for…
