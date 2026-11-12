---
repo: "askrid/wye"
name: "wye"
description: "LLM gateway without bloat"
readmeQualityOk: true
url: "https://github.com/askrid/wye"
homepage: "https://askrid.github.io/wye/"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["claude-code", "codex", "llm-gateway", "rust", "ai-gateway", "anthropic", "llm-proxy", "openai"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-10-27T12:51:19Z"
lastCommitAt: "2026-11-11T16:23:45Z"
lastReleaseAt: "2026-11-05T07:49:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 57
maintainers: ["askrid"]
openGraphImageUrl: "https://opengraph.githubassets.com/4934974546bbccc5a305209b18144136d0c5f48cdb67323c49622db3a202c58f/askrid/wye"
---

# <img src="https://raw.githubusercontent.com/askrid/wye/HEAD/site/assets/icon-fork.svg" alt="" width="36" align="absmiddle"> Wye

**LLM gateway without bloat.**

One small, stateless binary and one TOML file, under a millisecond per request ([p99 on c7i.4xlarge](#performance)), with the features a gateway needs and no more.

## Quick start

Prerelease, tested on one machine ([status](#status)).

Install on macOS or Linux, no Rust needed; the installer is the release's own script, and puts `wye` in `~/.local/bin`:

```bash
curl --proto '=https' --tlsv1.2 -LsSf \
    https://github.com/askrid/wye/releases/latest/download/wye-installer.sh | sh
```

Or with Rust 1.99+:

```bash
cargo install --git https://github.com/askrid/wye --tag v0.1.0-rc.2 wye --locked
```

Write a config and run the gateway in the background; neither needs a key, and the service install shows what it sets up before it asks:

```bash
wye init
wye service install
```

Then use Claude Code as usual, and see what went through:

```bash
wye claude
wye report
```

By default Wye uses your own Claude login or API key, listens only on this machine, and stores no key. Linux and macOS binaries are on the [releases…
