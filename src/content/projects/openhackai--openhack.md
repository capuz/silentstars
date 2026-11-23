---
repo: "openhackai/OpenHack"
name: "OpenHack"
description: "Open Source Agentic Security Scanner"
readmeQualityOk: true
url: "https://github.com/openhackai/OpenHack"
homepage: "https://openhack.com"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["agents", "llm", "ai", "sast", "security", "cybersecurity", "hacking"]
stars: 446
forks: 71
openIssues: 6
closedIssues: 3
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2026-05-23T06:52:21Z"
lastCommitAt: "2026-11-23T13:30:43Z"
lastReleaseAt: "2026-11-23T13:27:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 67
undervaluedScore: 17
maintainers: ["ananay", "kartikk-k"]
openGraphImageUrl: "https://opengraph.githubassets.com/abd9154b30ae7acca5cc86be06cdc182f6e94f101e6c57f07c90b93e20f4c6ea/openhackai/OpenHack"
discussionCount: 0
---

# OpenHack

OpenHack is a local AI security scanner for source code. Pick a project, connect your AI provider, and review findings in a browser dashboard or your terminal.

The v2 harness maps your codebase, assigns focused source reviews, challenges candidate findings, and judges the evidence. Scan history, findings, notes, and configuration stay in your local workspace. The selected AI provider processes the source excerpts needed for each review.

## Install

On macOS or Linux:

```sh
curl -fsSL https://install.openhack.com | sh
```

The installer currently selects **v2.0.0**. It detects your OS and processor, downloads the matching GitHub release archive, verifies its SHA-256 checksum, and installs `openhack` in `~/.local/bin`. License notices are preserved in `~/.local/bin/openhack-licenses`. It needs no sudo, does not modify shell profiles, and does not start the app automatically. If needed, add the directory to your current terminal's PATH:

```sh
export PATH="$HOME/.local/bin:$PATH"
openhack
```

To select a version or installation directory:

```sh
curl -fsSL https://install.openhack.com | sh -s -- --version 2.0.0 --install-dir "$HOME/.local/bin"
```
