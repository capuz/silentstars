---
repo: "greymass/unicove"
name: "unicove"
description: "Unicove 2.0 - Web Wallet interfaces and block explorer"
readmeQualityOk: true
url: "https://github.com/greymass/unicove"
homepage: "https://unicove.com"
language: "Svelte"
languages: ["Svelte", "TypeScript"]
languagePcts: [54, 44]
stars: 11
forks: 6
openIssues: 56
closedIssues: 116
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2024-07-16T00:27:38Z"
lastCommitAt: "2026-07-16T05:59:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 78
undervaluedScore: 47
maintainers: ["aaroncox"]
openGraphImageUrl: "https://opengraph.githubassets.com/10683171e2e488f8b8567fc1710c04597bdc01e7b08299d7d75a7283bc0a6776/greymass/unicove"
discussionCount: 1
---

# Unicove 2.0

## Development

Running Unicove in development mode leverages `make` and `bun`. To setup a local development environment, clone this repository and perform the following actions.

#### Install dependencies

Run `make install` to install the same version of the dependencies used in production builds (or `bun install --frozen-lockfile`).

#### Run Unicove

Run `make dev` to start a local development environment running at:

http://localhost:5173

#### Formatting + Linting

The `make check` command will run through Svelte checks, eslint, and prettier. All PRs submitted against the repository will also automatically run these checks to ensure functionality and consistent code formatting.

#### Local Configuration

The `.env` file contains the default configuration for Unicove running the Jungle 4 testnet. This file shouldn't be modified for local changes, and instead a `.env.development` file should be created to selectively override the defaults in the `.env`.

A number of complete chain configurations are available in the `./configs` directory. These configs can be loaded in using one of the Makefile config commands (e.g. `make config/eos`). This will copy the…
