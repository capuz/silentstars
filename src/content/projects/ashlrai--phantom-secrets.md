---
repo: "ashlrai/phantom-secrets"
name: "phantom-secrets"
description: "Stop AI coding agents from leaking your API keys. Local proxy + MCP that swaps real secrets for phm_ tokens — works with Claude Code, Cursor, Windsurf, and Codex."
readmeQualityOk: true
url: "https://github.com/ashlrai/phantom-secrets"
homepage: "https://phm.dev/secrets"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [67, 24]
topics: ["ai-safety", "api-keys", "claude-code", "cli", "developer-tools", "env-files", "mcp", "rust", "secrets-management", "security"]
stars: 20
forks: 5
openIssues: 1
closedIssues: 27
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-03-27T23:18:47Z"
lastCommitAt: "2026-11-09T04:33:42Z"
lastReleaseAt: "2026-04-26T00:57:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 55
maintainers: ["masonwyatt23"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1194099157/7281dc16-b49a-44a4-bf8a-578bc5503bfe"
discussionCount: 2
---

# Phantom

**Your agent can call the API. The key stays in a local vault.**

Phantom replaces managed secrets in `.env` with `phm_` placeholders. Agents and apps read those placeholders. A proxy on `127.0.0.1` adds the vault value only to the auth header of a matched route.

Source candidate `0.8.8` is not yet a qualified public release; the independently verified GitHub release remains `v0.8.7`.

[**Quick start**](#quick-start) ·
[**Why Phantom?**](#why-phantom) ·
[**How it works**](#how-it-works) ·
[**MCP setup**](#mcp-integration-claude-code-cursor-windsurf-codex) ·
[**llms.txt**](https://github.com/ashlrai/phantom-secrets/blob/HEAD/docs/llms.txt) ·
[**Docs**](https://github.com/ashlrai/phantom-secrets/blob/HEAD/docs/README.md) ·
[**Star on GitHub**](https://github.com/ashlrai/phantom-secrets)

## Quick start

About 30 seconds. Paste the blocks below. They are the same commands an agent should run. None of them print a secret value.

### Install on macOS

```bash
brew tap ashlrai/phantom && brew trust --formula ashlrai/phantom/phantom && brew install ashlrai/phantom/phantom
```

Linux and Windows: paste the checksum-checked script in [Installation](#installation). Package…
