---
repo: "jpetrucciani/nix"
name: "nix"
description: "❄️ my nix modules, overlays, host configurations, and more!"
readmeQualityOk: true
url: "https://github.com/jpetrucciani/nix"
homepage: "https://nixdocs.cobi.dev"
language: "Nix"
languages: ["Nix"]
languagePcts: [99]
topics: ["nix", "nixos", "dotfiles", "hex", "pog"]
stars: 108
forks: 5
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2020-11-19T18:49:41Z"
lastCommitAt: "2026-08-30T00:43:13Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 49
maintainers: ["jpetrucciani", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9239bad4346a0520f59e3ee2b9f55aa1bbc85a1439c3a3aa82b6932a999cc017/jpetrucciani/nix"
---

# jpetrucciani/nix

_jacobi's pinned nixpkgs setup, layered overlays, custom packages, host configs, and repo-specific tooling_

## Start Here

The best entry point is the curated docs [hosted here!](https://nixdocs.cobi.dev/) (or source found under [`docs/`](https://github.com/jpetrucciani/nix/blob/HEAD/docs/)). If you are new to the repo, read these first:

1. [`docs/getting-started.md`](https://github.com/jpetrucciani/nix/blob/HEAD/docs/getting-started.md)
2. [`docs/architecture.md`](https://github.com/jpetrucciani/nix/blob/HEAD/docs/architecture.md)
3. [`docs/home-manager.md`](https://github.com/jpetrucciani/nix/blob/HEAD/docs/home-manager.md)
4. [`docs/tooling/index.md`](https://github.com/jpetrucciani/nix/blob/HEAD/docs/tooling/index.md)

If you want to make a safe change:

1. Enter the dev shell with `nix develop`.
2. Inspect the exposed outputs with `nix flake show`.
3. Pick an area:
   - hosts and machine configs: [`hosts/README.md`](https://github.com/jpetrucciani/nix/blob/HEAD/hosts/README.md)
   - overlays and helpers: [`mods/README.md`](https://github.com/jpetrucciani/nix/blob/HEAD/mods/README.md)
   - package definitions:…
