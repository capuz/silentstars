---
repo: "maksimzayats/acodex"
name: "acodex"
description: "Local MCP automation bridge for the Codex desktop app, with CLI, HTTP server, and live codex_app.* tool access."
readmeQualityOk: true
url: "https://github.com/maksimzayats/acodex"
homepage: "http://docs.acodex.dev/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent", "ai", "automation", "cli", "codex", "codex-cli", "codex-sdk", "openai-codex", "python", "python-sdk"]
stars: 58
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-02-14T14:26:20Z"
lastCommitAt: "2026-10-13T10:57:38Z"
lastReleaseAt: "2026-03-29T09:02:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 39
maintainers: ["dependabot[bot]", "maksimzayats"]
openGraphImageUrl: "https://opengraph.githubassets.com/f1baba22300d4f6743f5b663a0155231ce4a7fb25223f2ee426607fb9773b1b1/maksimzayats/acodex"
---

# acodex

**Local MCP automation for the Codex desktop app.**

acodex gives scripts, tools, and agents a local bridge into a running Codex
desktop session. It can relaunch Codex with a Chrome DevTools Protocol (CDP)
port, run a managed HTTP/MCP server, and call the live `codex_app.*` tools that
your Codex desktop build exposes.

[Quick Start](#quick-start) | [CLI](#cli) | [Support](#support) | [Contributing](https://github.com/maksimzayats/acodex/blob/HEAD/CONTRIBUTING.md)

## Why acodex

- **Live Codex desktop access.** Inspect and call the tools exposed by the
  running desktop renderer without writing CDP plumbing.
- **MCP-compatible local server.** Expose Codex desktop tools at `/mcp` for
  local automation clients.
- **Practical CLI workflow.** Check configuration, relaunch Codex with CDP,
  manage the bridge server, and call tools from a terminal.

## Quick Start

Prerequisites:

- Python 3.10 or newer.
- `uv`; see the [official install guide](https://docs.astral.sh/uv/getting-started/installation/).
- macOS with Codex.app installed. The relaunch flow expects
  `/Applications/Codex.app` by default; set `ACODEX_CODEX_APP_PATH` if yours is
  elsewhere.

Install the CLI:

```sh…
