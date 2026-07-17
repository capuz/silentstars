---
repo: "echoVic/blade-deepseek"
name: "blade-deepseek"
description: "Orca is a DeepSeek-native coding agent."
readmeQualityOk: true
url: "https://github.com/echoVic/blade-deepseek"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 310
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-05T07:19:56Z"
lastCommitAt: "2026-07-17T05:57:46Z"
lastReleaseAt: "2026-06-22T01:09:47Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 30
maintainers: ["echoVic"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c7d6b6a9b1d6245485f96d7b48d3e1f51584b3c48afcbf1330287eaaa35006b/echoVic/blade-deepseek"
---

# Orca

Orca is a DeepSeek-native coding agent.

A local terminal coding agent built in Rust, focused on DeepSeek reasoning and tool-use semantics. It runs a multi-turn agent loop with SSE streaming, automatic context window management, and HTTP retry with exponential backoff.

## Installation

### npm

```bash
npm install -g @blade-ai/orca
orca --version
```

The npm package installs a small Node.js launcher and the native `orca` binary for supported platforms.

Supported npm platforms:

- macOS Apple Silicon (`darwin/arm64`)
- macOS Intel (`darwin/x64`)
- Linux x64 (`linux/x64`)
- Linux ARM64 (`linux/arm64`)

### curl

```bash
curl -fsSL https://orcaagent.dev/install.sh | sh
```

The installer downloads the native binary for your platform from GitHub Releases.
Set `INSTALL_DIR` to choose a destination and `ORCA_VERSION` to pin a version:

```bash
curl -fsSL https://orcaagent.dev/install.sh | \
  INSTALL_DIR=/usr/local/bin ORCA_VERSION=0.2.40 sh
```

### GitHub Releases

Download the archive for your platform from the latest GitHub Release, extract it, and place `orca` on your `PATH`.

## Community

- QQ group: `472309526`
- Telegram: https://t.me/+11No1w5ZbTMyZTQ1

##…
