---
repo: "knap-ai/knapsack_desktop"
name: "knapsack_desktop"
description: "A safe and simple OpenClaw desktop app"
url: "https://github.com/knap-ai/knapsack_desktop"
homepage: "https://www.knapsack.ai"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [45, 41]
topics: ["ai", "assistant", "browser-automation", "clawdbot", "openclaw"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-01-30T21:59:07Z"
lastCommitAt: "2026-06-23T23:18:00Z"
lastReleaseAt: "2026-03-13T21:54:14Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 62
maintainers: ["heynenm", "johnknap", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1146293500/63fc38b6-3bd0-42b2-bc44-8114fa527a9a"
discussionCount: 1
---

# Knapsack 🎒

Knapsack is the safe, simple and open-source way to run [OpenClaw](https://github.com/moltbot/moltbot) (née Moltbot née Clawdbot) on your Mac or Windows PC.

OpenClaw is a powerful AI agent platform with browser automation, multi-channel messaging, file access, and code execution -- but running it raw means configuring tokens, locking down network bindings, managing process lifecycles, and getting file permissions right. Miss any of those and you have an agent with broad system access listening on all interfaces.

Knapsack wraps OpenClaw in a Tauri desktop app that handles all of that for you:

- **Localhost-only by default** -- The OpenClaw gateway and browser control server bind to `127.0.0.1`. Nothing is exposed to your network.
- **Hardened secret storage** -- API keys and auth tokens are stored in a single `tokens.json` file with `0600` permissions, managed by the Rust backend. No secrets in config files you have to chmod yourself.
- **Managed process lifecycle** -- OpenClaw runs as a managed background service (LaunchAgent on macOS, Windows Service on Windows) with automatic health checks, restart-on-failure, and cleanup of orphaned browser processes.
-…
