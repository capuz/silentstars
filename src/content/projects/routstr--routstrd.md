---
repo: "Routstr/routstrd"
name: "routstrd"
description: "A Routstr daemon that runs locally to route you to the best Routstr provider from all available Routstr nodes. "
readmeQualityOk: true
url: "https://github.com/Routstr/routstrd"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 12
forks: 11
openIssues: 8
closedIssues: 13
watchers: 0
contributors: 11
recentReleases: 6
createdAt: "2026-03-02T21:46:29Z"
lastCommitAt: "2026-11-07T09:30:07Z"
lastReleaseAt: "2026-10-04T14:29:23Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "fork_magnet"]
healthScore: 90
undervaluedScore: 71
maintainers: ["sh1ftred", "ashen0x", "jooray"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee30354fbb5f9fd59ecebe76039169e1f44e786652375be9ecded413180f0a22/Routstr/routstrd"
---

# routstrd

Routstr daemon - A CLI tool for managing routstr processes, with a built-in Cashu wallet.

## Overview

routstrd is a Bun-based CLI tool that provides a background daemon for the Routstr protocol. It carries an in-process Cashu wallet (coco) for payments and uses the Routstr SDK to handle provider routing and model discovery.

## Routstr for Teams

For team-based routing, see [routstrd-auth](https://github.com/Routstr/routstrd-auth).

## Features

- **Daemon Mode**: Run routstrd as a background HTTP server
- **Wallet Integration**: In-process Cashu wallet, with Lightning, NWC, and NPC support
- **Provider Routing**: Automatically discovers and routes requests to available providers
- **Config Management**: Stores configuration in `~/.routstrd/`

## Requirements

The standalone release does not require Bun, Node.js, or npm. Installing from
npm or running from source requires the [Bun](https://bun.sh) runtime.

## Installation

### Step 1: Install

**Standalone binary (recommended):**

Installs the standalone executable for Linux or macOS (x64 or arm64) into
`$HOME/.local/bin`. No Bun, Node.js, or npm required.

```sh
curl -fsSL…
