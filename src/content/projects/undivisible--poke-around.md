---
repo: "undivisible/poke-around"
name: "poke-around"
description: "let poke use your computer, with macos, linux and windows support."
readmeQualityOk: true
url: "https://github.com/undivisible/poke-around"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["ai-agent", "automation", "computer-use", "mcp", "poke", "remote-control", "rust", "rs-peekaboo", "ts", "typescript"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-04-01T03:21:55Z"
lastCommitAt: "2026-07-20T06:35:09Z"
lastReleaseAt: "2026-06-06T06:42:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 55
maintainers: ["undivisible"]
openGraphImageUrl: "https://opengraph.githubassets.com/dfe4748f5cab22f7cc35858c92c3a6b49536c9ebff554eae06836caeff7c2aa5/undivisible/poke-around"
---

# Poke Around

Let your [Poke](https://poke.com) AI assistant access your machine.

<sub>A community project — not affiliated with Poke or The Interaction Company.</sub>

---

Run Poke Around on your machine, then message Poke from iMessage, Telegram, or SMS to run commands, read files, take screenshots, and more — all on your machine.

## Install

**Install script (macOS / Linux)**

```bash
curl -fsSL https://raw.githubusercontent.com/undivisible/poke-around/main/scripts/install.sh | bash
```

**Install script (Windows PowerShell)**

```powershell
irm https://raw.githubusercontent.com/undivisible/poke-around/main/scripts/install.ps1 | iex
```

Installs to `%LOCALAPPDATA%\Programs\poke-around\poke-around.exe` unless `POKE_AROUND_BIN` is set.

**Homebrew (macOS / Linux)**

```bash
brew tap undivisible/tap
brew install poke-around
```

If install fails at **`brew link`** for **`simdjson`** (a dependency of Homebrew **node**), your prefix still has an older simdjson linked. Unlink it, then retry:

```bash
brew unlink simdjson
brew install poke-around
```

If Brew already poured a newer simdjson but could not link it, either run `brew link --overwrite simdjson` and retry, or `brew…
