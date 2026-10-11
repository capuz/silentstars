---
repo: "alecuba16/herdr-webui"
name: "herdr-webui"
description: "Standalone browser WebUI for Herdr sessions, with workspace/worktree navigation, terminal attach, agent status, settings, and macOS install/update support. New* Includes a built-in backend."
readmeQualityOk: true
url: "https://github.com/alecuba16/herdr-webui"
language: "JavaScript"
languages: ["JavaScript", "Rust"]
languagePcts: [48, 47]
stars: 37
forks: 8
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-06-19T09:27:11Z"
lastCommitAt: "2026-10-11T10:14:24Z"
lastReleaseAt: "2026-06-28T09:22:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 41
maintainers: ["alecuba16"]
openGraphImageUrl: "https://opengraph.githubassets.com/62e5ff7f20737a9f095436aebe37cfb76b09d0ed89da7946fbde38728668a7c2/alecuba16/herdr-webui"
---

# Herdr WebUI

Herdr WebUI is a local browser UI for built-in or external Herdr-compatible terminals, workspaces, worktrees, Git operations, and file browsing.

It runs as a Rust Axum server, serves embedded frontend assets, and starts a built-in terminal multiplexer backend by default. It can also connect to an external Herdr backend protocol for compatibility. The UI supports desktop and mobile layouts.

## Quick start

Prebuilt binaries ship on the [releases page](https://github.com/alecuba16/herdr-webui/releases): pick the tarball for your platform (Linux x86_64, macOS aarch64, macOS x86_64), extract it, and run the documented quick start without a Rust toolchain:

```bash
curl -LO https://github.com/alecuba16/herdr-webui/releases/latest/download/herdr-webui-macos-aarch64.tar.gz
tar -xzf herdr-webui-macos-aarch64.tar.gz
./herdr-webui-macos-aarch64/herdr-webui --https off --backend-mode builtin
# open http://127.0.0.1:8787
```

Each tarball contains `herdr-webui`, `herdr-webui-tui`, and a `README.txt`; a matching `.sha256` checksum is published next to it. The binary can also install itself as a service: `./herdr-webui install-mac` or `install-linux` (see…
