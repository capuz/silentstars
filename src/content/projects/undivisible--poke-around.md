---
repo: "undivisible/poke-around"
name: "poke-around"
description: "let poke use your computer, with macos, linux and windows support."
readmeQualityOk: true
url: "https://github.com/undivisible/poke-around"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["ai-agent", "automation", "computer-use", "mcp", "poke", "remote-control", "rust", "rs-peekaboo", "ts", "typescript"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-01T03:21:55Z"
lastCommitAt: "2026-09-16T08:47:25Z"
lastReleaseAt: "2026-06-06T06:42:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 86
undervaluedScore: 45
maintainers: ["undivisible", "ampagent"]
openGraphImageUrl: "https://opengraph.githubassets.com/147b9b13eae8b89414bf774798e52acd0d77f1026fc8cf2bf3659c840c0f83d5/undivisible/poke-around"
fundingLinks: ["GITHUB:https://github.com/undivisible"]
---

# Poke Around

Let your [Poke](https://poke.com) AI assistant access your machine.

<sub>A community project — not affiliated with Poke or The Interaction Company.</sub>

---

Run Poke Around on your machine, then message Poke from iMessage, Telegram, or SMS to use the explicitly advertised local tools.

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

If Brew already poured a newer simdjson but could not link it, either run `brew link --overwrite simdjson` and retry, or `brew reinstall simdjson` after `brew…
