---
repo: "SidCorp-co/forge"
name: "forge"
description: "Self-hosted lifecycle platform for software powered by Claude Code. Configurable pipelines, devices you control, no credentials on the server. Apache-2.0."
readmeQualityOk: true
url: "https://github.com/SidCorp-co/forge"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [70]
topics: ["agent-orchestration", "ai-agents", "claude", "claude-code", "local-first", "mcp", "mcp-server", "nextjs", "self-hosted", "tauri"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-04-19T07:37:56Z"
lastCommitAt: "2026-09-13T08:29:30Z"
lastReleaseAt: "2026-04-25T17:52:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 59
maintainers: ["chuongld20", "junixlabs", "falconx1"]
openGraphImageUrl: "https://opengraph.githubassets.com/e98e20e482006a9f038c2589b32b981aaa0924743372aa7882fd3f7cc460cdd6/SidCorp-co/forge"
discussionCount: 0
---

# Forge

> Open-source control plane for Claude Code. Your devices run `claude`; Forge routes the work,
> gates it, and keeps the receipts. **The server never holds your Claude credentials.**

**Status:** alpha. Breaking changes across `v0.x`.

## Architecture

Three boundaries hold the shape:

- **Control plane vs. runtime.** The server queues jobs and streams events; your machines run
  Claude. A server compromise leaks no Claude credentials — they never leave your box.
- **Two principals, one policy layer.** A user (JWT) and a device (long-lived, revocable) are
  separate principals; every access goes through the same checks.
- **Core does not know the plugin exists.** A project *designates* plugins; each device resolves
  its own set and installs them. Nothing in this repo can gate that one —
  [`SidCorp-co/forge-plugin`](https://github.com/SidCorp-co/forge-plugin) ships the CLI, the
  session hooks and the driver skill on its own clock.

The agent's surface and where it is going: [`docs/architecture/agent-surface.md`](https://github.com/SidCorp-co/forge/blob/HEAD/docs/architecture/agent-surface.md).

## Quickstart

```bash
git clone https://github.com/SidCorp-co/forge.git &&…
