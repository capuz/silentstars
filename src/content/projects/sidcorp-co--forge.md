---
repo: "SidCorp-co/forge"
name: "forge"
description: "Self-hosted lifecycle platform for software powered by Claude Code. Configurable pipelines, devices you control, no credentials on the server. Apache-2.0."
readmeQualityOk: true
url: "https://github.com/SidCorp-co/forge"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [67]
topics: ["agent-orchestration", "ai-agents", "claude", "claude-code", "local-first", "mcp", "mcp-server", "nextjs", "self-hosted", "tauri"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-04-19T07:37:56Z"
lastCommitAt: "2026-10-26T03:03:19Z"
lastReleaseAt: "2026-04-25T17:52:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 60
maintainers: ["chuongld20", "junixlabs", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf15aa26859973654bda62dc3a098daa9715f809994df5da3f0171f486482574/SidCorp-co/forge"
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

### The plugin boundary, close up

The driver skill, the `forge` CLI and the session hooks live in a second repository on its own
clock. The CLI is not `forge-runner` — it carries its own HTTP client and its own declared route
table, and…
