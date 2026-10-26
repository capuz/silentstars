---
repo: "ashlrai/phantom-secrets"
name: "phantom-secrets"
description: "Stop AI coding agents from leaking your API keys. Local proxy + MCP that swaps real secrets for phm_ tokens — works with Claude Code, Cursor, Windsurf, and Codex."
readmeQualityOk: true
url: "https://github.com/ashlrai/phantom-secrets"
homepage: "https://phm.dev/secrets"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
topics: ["ai-safety", "api-keys", "claude-code", "cli", "developer-tools", "env-files", "mcp", "rust", "secrets-management", "security"]
stars: 18
forks: 5
openIssues: 1
closedIssues: 27
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-03-27T23:18:47Z"
lastCommitAt: "2026-10-26T09:18:04Z"
lastReleaseAt: "2026-04-26T00:57:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 55
maintainers: ["masonwyatt23", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1194099157/7281dc16-b49a-44a4-bf8a-578bc5503bfe"
discussionCount: 2
---

**Your agent can use the key. It never sees it.**

Delegate more to AI without putting real keys in agent context.

Phantom replaces project secrets with scoped `phm_` placeholders. Applications use those placeholders through an authenticated local proxy, while agents use value-blind MCP tools for inventory, diagnostics, and governed requests.

[**Quick start**](#quick-start) ·
[**Delegate safely**](https://github.com/ashlrai/phantom-secrets/blob/HEAD/docs/delegation-quickstart.md) ·
[**Why Phantom?**](#why-phantom) ·
[**MCP setup**](#mcp-integration-claude-code-cursor-windsurf-codex) ·
[**Docs**](https://github.com/ashlrai/phantom-secrets/blob/HEAD/docs/README.md) ·
[**Contribute**](https://github.com/ashlrai/phantom-secrets/blob/HEAD/CONTRIBUTING.md) ·
[**phm.dev**](https://phm.dev)

---

## Install

```bash
brew tap ashlrai/phantom
brew trust --formula ashlrai/phantom/phantom
brew install ashlrai/phantom/phantom
```

macOS via Homebrew; installs `phantom` and `phantom-mcp` (reviewed `v0.7.9`). Linux and Windows:
use the matching [release asset](#exact-v079-github-assets). Then run
`phantom init` in your project and `phantom setup --client claude` (or
`cursor`, `windsurf`,…
