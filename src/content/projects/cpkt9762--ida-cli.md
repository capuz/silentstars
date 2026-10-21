---
repo: "cpkt9762/ida-cli"
name: "ida-cli"
description: "Headless IDA Pro MCP server for AI-assisted binary analysis, powered by idalib"
readmeQualityOk: true
url: "https://github.com/cpkt9762/ida-cli"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [64, 35]
stars: 31
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 1
createdAt: "2026-04-17T05:45:23Z"
lastCommitAt: "2026-10-21T19:56:52Z"
lastReleaseAt: "2026-10-08T16:25:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 40
maintainers: ["cpkt9762"]
openGraphImageUrl: "https://opengraph.githubassets.com/097a96c200a53cd1bcf34c834da32c80be6a47aa2bf9acaa981e9e4b6e65cb32/cpkt9762/ida-cli"
---

# ida-cli

Headless IDA CLI and skill-first toolkit for binary analysis on macOS and
Linux. `ida-cli` auto-selects a runtime backend, auto-starts a local server
when needed, and exposes the same surface as a flat CLI, a stdio MCP
transport, and a Streamable HTTP MCP transport.

[中文说明](https://github.com/cpkt9762/ida-cli/blob/HEAD/README.zh-CN.md)

## Two User-Facing Entrypoints

- the local `ida-cli` binary (client + service in one executable)
- the installable `ida-cli` skill (`skill/SKILL.md`) for agent environments

The underlying worker / router service layer is started and shut down by the
CLI automatically. You only need to run `serve` / `serve-http` explicitly
when you actually want a long-lived, externally addressable service.

## Support Matrix

### Host Platforms

- Supported: macOS, Linux
- Not supported: Windows

### IDA Runtime Policy

Runtime requirements: IDA 9.4/9.5 and Python >=3.11. All database operations use the dedicated pinned Nexus 0.13.4 / Domain 0.5.1 environment. Missing dependencies or mismatched patches fail explicitly. Rust builds need no IDA SDK.

## Current Capabilities

On supported IDA 9.x runtimes, `ida-cli` can:

- open raw PE / ELF / Mach-O…
