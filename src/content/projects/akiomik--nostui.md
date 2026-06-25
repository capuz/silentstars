---
repo: "akiomik/nostui"
name: "nostui"
description: "A TUI client for Nostr"
url: "https://github.com/akiomik/nostui"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["nostr", "ratatui", "tui", "social-media-app"]
stars: 67
forks: 4
openIssues: 3
closedIssues: 2
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2023-12-30T00:53:04Z"
lastCommitAt: "2026-06-25T01:38:33Z"
lastReleaseAt: "2025-12-03T12:28:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 80
undervaluedScore: 44
maintainers: ["akiomik", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab876e513381e3bc58a67c1d27ca82c841abc8a9799b1fadd09d7e5772e6fd83/akiomik/nostui"
fundingLinks: ["GITHUB:https://github.com/akiomik", "KO_FI:https://ko-fi.com/akiomik"]
---

# nostui

A TUI client for [Nostr](https://nostr.com)

## Current Features

- Timeline
- Post, reply, react and repost
- Open per-user timelines as tabs
- Broadcast the currently playing track as a music status (NIP-38)

## Getting Started

Dowonload binaries from the [release](https://github.com/akiomik/nostui/releases/latest) page.

Or, install manually via `crates.io`:

```shell
cargo install nostui
```

On NetBSD, a package is available from the official repositories. To install it, simply run:

```shell
pkgin install nostui
```

## Setup

> [!NOTE]
> Other extensions supported are `.json5`, `.yaml`, `.toml` and `.ini`.

1. Create a `config.json` to the following path:

- Linux: `~/.config/nostui/config.json`
- Windows: `~\AppData\Roaming\0m1\nostui\config.json`
- macOS: `~/Library/Application Support/io.0m1.nostui/config.json`

2. Add your key to the `config.json`:

```json5
{
    "key": "nsec1...", // or "npub..." for readonly mode
    "relays": ["wss://nos.lol"], // optional
    "nip-38": { "enabled": true } // optional, broadcasts the currently playing track as a status (default: false)
}
```

## Usage

### Commands

```shell
nostui [OPTIONS]

Options:
  -t, --tick-rate…
