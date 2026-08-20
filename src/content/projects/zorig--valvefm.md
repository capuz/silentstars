---
repo: "Zorig/valveFM"
name: "valveFM"
description: "Vintage FM radio TUI for streaming stations from radio-browser.info."
readmeQualityOk: true
url: "https://github.com/Zorig/valveFM"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["cli", "golang", "music", "radio", "terminal-ui", "tui"]
stars: 51
forks: 6
openIssues: 1
closedIssues: 1
watchers: 3
contributors: 2
recentReleases: 1
createdAt: "2026-02-10T04:06:15Z"
lastCommitAt: "2026-08-20T04:05:43Z"
lastReleaseAt: "2026-08-20T04:10:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 65
undervaluedScore: 13
maintainers: ["Zorig", "webbrain-one"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa9d3347196874e5069fcc4949d519c0f3e1a6f9bd4bd10fadf3bda448b8630c/Zorig/valveFM"
---

# Valve FM

Vintage FM radio TUI for streaming stations from radio-browser.info.

**Languages:** [English](https://github.com/Zorig/valveFM/blob/HEAD/README.md) | [Español](https://github.com/Zorig/valveFM/blob/HEAD/README.es-ES.md)

## Install

### Homebrew (macOS / Linux)

```bash
brew tap zorig/tap
brew install valvefm
```

### Chocolatey (Windows)!
> Due to Chocolatey review, new version takes some time to get accepted.

```powershell
choco install valvefm
```

### From source

```bash
make build        # TUI + tray -> bin/valvefm
make build-tui    # TUI only   -> bin/valvefm-tui
```

### TUI-only (no tray)

Prefer a plain terminal app without the system tray? Grab a `valvefm-tui-*` asset from the [releases](https://github.com/zorig/valvefm/releases), or build it yourself with `make build-tui` (Windows: `make build-windows-tui`). It runs the same TUI via `cmd/radio`, without the tray/IPC layer.

## Requirements

- **Go 1.26+**
- **Audio Backend:** Built-in pure Go MP3 player (no external deps).
- **Optional:** `mpv` or `ffplay` for AAC/OGG support and better streaming stability.
  - Windows: automatically downloads `ffplay.exe` if needed.

## Run (TUI + Tray)

```bash
go run…
