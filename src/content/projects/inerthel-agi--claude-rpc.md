---
repo: "inerthel-agi/claude-rpc"
name: "claude-rpc"
description: "Native Tauri/Rust Discord Rich Presence for Claude Code and Claude Desktop with tray controls, usage limits, and RPC customization."
readmeQualityOk: true
url: "https://github.com/inerthel-agi/claude-rpc"
language: "Rust"
languages: ["Rust"]
languagePcts: [61]
topics: ["anthropic", "claude", "claude-code", "discord-rich-presence", "rich-presence", "claude-desktop", "rust", "tauri"]
stars: 7
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 6
createdAt: "2026-03-18T19:36:33Z"
lastCommitAt: "2026-11-23T13:29:18Z"
lastReleaseAt: "2026-11-11T22:05:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 39
maintainers: ["inerthel-agi"]
openGraphImageUrl: "https://opengraph.githubassets.com/42b39c141a1779380b6fd9d50c96cef6f35404df5eac5d970d9acaf581d130f5/inerthel-agi/claude-rpc"
---

# Claude RPC

Claude RPC shows your Claude Code and Claude Desktop activity as a Discord Rich Presence on Windows. A tray app detects the running Claude client, the model and effort, the provider or plan and the usage limits, then publishes them to the Discord desktop app.

## Requirements

- Windows 10 or 11.
- The Discord desktop app, running and signed in.
- Claude Code (CLI) or Claude Desktop.

To build from source:

- Rust 1.95.0 (the version used by CI and releases; Slint 1.19 needs it).
- Node.js 22 and npm, to run the build and test scripts.
- Visual Studio Build Tools with the C++ workload.
- NSIS 3 (`makensis`), to build the installer.

## Install

Download one of these files from the latest GitHub release:

- `Claude.RPC_4.1.0_x64-setup.exe`: installer. It installs to `%LOCALAPPDATA%\Claude RPC` and replaces an earlier version in place.
- `claude-rpc.exe`: portable executable.

Updates:
