---
repo: "jneb802/mod-manager-cli"
name: "mod-manager-cli"
description: "BepinEx mod manager CLI"
readmeQualityOk: true
url: "https://github.com/jneb802/mod-manager-cli"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 10
forks: 2
openIssues: 8
closedIssues: 11
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-15T03:30:19Z"
lastCommitAt: "2026-11-11T19:48:02Z"
lastReleaseAt: "2026-03-19T05:27:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 76
undervaluedScore: 26
maintainers: ["jneb802", "Malvi1697"]
openGraphImageUrl: "https://opengraph.githubassets.com/c9a76f313f662ffb85266e940cf134d6426941d5a2c2383f5aa7f0c3f5c184b5/jneb802/mod-manager-cli"
---

# mmcli

A command-line Valheim mod manager for macOS and Linux. Installs mods from [Thunderstore](https://thunderstore.io/c/valheim/) and [Hexium](https://valheim.hexium.gg), manages profiles, and launches the game with BepInEx.

## Install

### Shell script (recommended)

```
curl -fsSL https://raw.githubusercontent.com/jneb802/mod-manager-cli/main/install.sh | bash
```

The installer uses a user-writable location and does not require a password. It updates an existing writable `mmcli` install, installs to a writable directory already on your `PATH`, or installs to `~/.local/bin`.

If it installs to `~/.local/bin` and your shell cannot find `mmcli`, the installer adds this to your shell profile:

```
export PATH="$HOME/.local/bin:$PATH"
```

Restart your terminal, or run the `source` command printed by the installer.

### Homebrew

```
brew install jneb802/tap/mmcli
```

### Manual download

Download the latest binary for your platform from [Releases](https://github.com/jneb802/mod-manager-cli/releases), then:

```
mkdir -p ~/.local/bin
binary=mmcli-linux-amd64 # or mmcli-darwin-arm64 / mmcli-darwin-amd64
chmod +x "$binary"
mv "$binary" ~/.local/bin/mmcli
```

## Getting Started…
