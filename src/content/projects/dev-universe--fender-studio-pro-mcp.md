---
repo: "dev-universe/fender-studio-pro-mcp"
name: "fender-studio-pro-mcp"
description: "Fender Studio Pro MCP server for AI-assisted track editing, mixer control, and VST3 automation on Apple Silicon."
readmeQualityOk: true
url: "https://github.com/dev-universe/fender-studio-pro-mcp"
language: "Rust"
languages: ["Rust"]
languagePcts: [64]
topics: ["audio-plugins", "daw", "daw-automation", "fabfilter", "fender-studio-pro", "macos", "mcp", "model-context-protocol", "music-production", "rust"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-11-08T15:16:56Z"
lastCommitAt: "2026-11-27T12:59:32Z"
lastReleaseAt: "2026-11-25T17:52:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 50
maintainers: ["dev-universe"]
openGraphImageUrl: "https://opengraph.githubassets.com/2855fe1c91b561912a3f8b04e884c8980a982d029990a11812d0e89c88af3d8d/dev-universe/fender-studio-pro-mcp"
---

Experimental · Live-tested on Studio Pro 8.1.1 (Build 113103) on Apple Silicon Macs</p>

- [Quick start](#quick-start)
- [Usage](#usage)
- [Supported plugins](#supported-plugins)
- [Native add-on](#optional-native-add-on)
- [Inspect files offline](#inspect-files-offline)
- [Validation](#validation)
- [Project docs](#project-docs)
- [License](#license)

## Quick start

You need Fender Studio Pro, Rust 1.88 or later with Cargo, and an MCP client that supports local stdio servers.

### 1. Build and install the bridge

The installer uses `~/Library/Application Support/Fender/Studio Pro 8` by default. For a custom profile, pass `--profile /path/to/profile` with each install and connection command. Add it to the client's `serve` arguments too.

Quit Studio Pro, then build the server and install the bridge and EditTasks.

```sh
git clone https://github.com/dev-universe/fender-studio-pro-mcp.git
cd fender-studio-pro-mcp
cargo build --locked --release
./target/release/fender-studio-pro-mcp install
```

### 2. Set up the control surface

Start the virtual MIDI source. Leave this command running until the control surface is configured.

```sh
./target/release/fender-studio-pro-mcp hold
```
