---
repo: "sadiksaifi/SpaceTerm"
name: "SpaceTerm"
description: "A native, keyboard-first desktop terminal multiplexer built with Rust, GPUI, and libghostty-vt."
readmeQualityOk: true
url: "https://github.com/sadiksaifi/SpaceTerm"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["desktop-application", "developer-tools", "gpu-accelerated", "gpui", "libghostty-vt", "macos", "openssh", "remote-development", "rust", "ssh"]
stars: 5
forks: 0
openIssues: 7
closedIssues: 319
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-04T00:12:39Z"
lastCommitAt: "2026-11-02T13:39:00Z"
lastReleaseAt: "2026-10-09T18:56:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 63
maintainers: ["sadiksaifi"]
openGraphImageUrl: "https://opengraph.githubassets.com/97dca89376cb691c04c4f0439eeed279f228e5822fefbfb1013bea650618c64b/sadiksaifi/SpaceTerm"
---

# SpaceTerm

A native desktop terminal multiplexer for macOS and Linux, coming soon for Windows.

## Highlights

- **Workspaces** for local and remote terminal work
- **Tabs and Panes** with recursive splits, focus, resize, and zoom
- **Remote terminals** over paired, encrypted QUIC connections on UDP port 9231
- **Keyboard-first navigation** through the Command Palette and Workspace Switcher

## Install macOS/Linux

```sh
curl -fsSL https://github.com/sadiksaifi/SpaceTerm/releases/latest/download/install.sh | sh
```

On a Mac, you can also install with Homebrew:

```sh
brew install --cask sadiksaifi/tap/spaceterm
```

## Workspace hierarchy

```mermaid
flowchart TB
    SpaceTerm["SpaceTerm"]

    SpaceTerm --> W1["Workspace 1"]
    SpaceTerm --> W2["Workspace 2"]
    SpaceTerm --> W3["Workspace 3"]

    W1 --> W1T1["Tab 1"]
    W1 --> W1T2["Tab 2"]
    W2 --> W2T1["Tab 1"]
    W2 --> W2T2["Tab 2"]
    W3 --> W3T1["Tab 1"]
    W3 --> W3T2["Tab 2"]

    W1T1 --> W1T1P1["Pane"]
    W1T1 --> W1T1P2["Pane"]
    W1T2 --> W1T2P1["Pane"]
    W2T1 --> W2T1P1["Pane"]
    W2T2 --> W2T2P1["Pane"]
    W2T2 --> W2T2P2["Pane"]
    W3T1 --> W3T1P1["Pane"]
    W3T1 --> W3T1P2["Pane"]
    W3T2 -->…
