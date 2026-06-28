---
repo: "nuggocto/kickoutchi"
name: "kickoutchi"
description: "A TUI & CLI port janitor"
url: "https://github.com/nuggocto/kickoutchi"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-02-19T15:57:32Z"
lastCommitAt: "2026-06-28T02:03:00Z"
lastReleaseAt: "2026-06-27T21:58:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 44
maintainers: ["nuggocto"]
openGraphImageUrl: "https://opengraph.githubassets.com/2abb37c91fd05e19a4e9f6abbb7d602e8ec77ab0b81cf227fadbfa2e663d5395/nuggocto/kickoutchi"
---

# Kickoutchi ༼⁠ ⁠つ⁠ ⁠◕⁠‿⁠◕⁠ ⁠༽⁠つ

**"What are you doing in my swamp?!"** but for whatever is squatting on your
local ports.

Kickoutchi is a small TUI and CLI that shows open local TCP/UDP ports, names the
process behind them when the OS allows it, and lets you kick stale dev servers
out safely. Two binaries, one tool: `kickoutchi` is the full name, `kick` is the
daily-use shortcut.

Website: <https://kickoutchi.com>

## What You Need

- **Rust 1.95.0+** to build from source or install with Cargo.
- **Git** if you are cloning the repository or using `cargo install --git`.
- **Linux 5.3+** for safe termination through `pidfd`; listing ports works on
  older kernels too.
- **Windows** with the normal Rust C++ build tooling available.
- **macOS** with normal developer tooling available.

## What It Does

- Lists listening TCP sockets and bound UDP sockets.
- Shows address, port, PID, process name, parent, path, command, bind scope, and
  permission status when available.
- Explains Docker-owned or partial-metadata ports in details when Docker CLI
  metadata is available; Docker is optional and never required for normal port
  listing.
- Opens as a terminal UI when run without a…
