---
repo: "ashlrai/phantom-secrets"
name: "phantom-secrets"
description: "Stop AI coding agents from leaking your API keys. Local proxy + MCP that swaps real secrets for phm_ tokens — works with Claude Code, Cursor, Windsurf, and Codex."
readmeQualityOk: true
url: "https://github.com/ashlrai/phantom-secrets"
homepage: "https://phm.dev/secrets"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [66, 26]
topics: ["ai-safety", "api-keys", "claude-code", "cli", "developer-tools", "env-files", "mcp", "rust", "secrets-management", "security"]
stars: 20
forks: 5
openIssues: 6
closedIssues: 28
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-03-27T23:18:47Z"
lastCommitAt: "2026-11-25T03:15:06Z"
lastReleaseAt: "2026-04-26T00:57:48Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 96
undervaluedScore: 54
maintainers: ["masonwyatt23", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1194099157/7281dc16-b49a-44a4-bf8a-578bc5503bfe"
discussionCount: 2
---

# Phantom

**Your agent can call the API. The key stays in a local vault.**

Phantom replaces managed secrets in `.env` with `phm_` placeholders. Agents and apps read those placeholders. A proxy on `127.0.0.1` adds the vault value only to the auth header of a matched route.

The independently verified GitHub release is `v0.8.11`, matching the current source version.

[**Quick start**](#quick-start) ·
[**Why Phantom?**](#why-phantom) ·
[**How it works**](#how-it-works) ·
[**MCP setup**](#mcp-integration-claude-code-cursor-windsurf-codex-gemini-cli) ·
[**llms.txt**](https://github.com/ashlrai/phantom-secrets/blob/HEAD/docs/llms.txt) ·
[**Docs**](https://github.com/ashlrai/phantom-secrets/blob/HEAD/docs/README.md) ·
[**Star on GitHub**](https://github.com/ashlrai/phantom-secrets)

## Quick start

Five steps. Phantom itself never prints a secret value in these steps; step 5 runs your own app, so what it logs is up to that app.
