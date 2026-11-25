---
repo: "nhrbuilds/flashbrowse"
name: "flashbrowse"
description: "Token-compressed, AXTree-native headless browser and MCP server for AI agents. Sub-100ms CDP automation in pure Rust. Zero Python."
readmeQualityOk: true
url: "https://github.com/nhrbuilds/flashbrowse"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
stars: 105
forks: 8
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-11-08T02:11:21Z"
lastCommitAt: "2026-11-24T20:19:32Z"
lastReleaseAt: "2026-11-24T18:09:20Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 34
maintainers: ["nowshad-hossain-rahat", "LightYagami28"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2d47634ea6e6387758655874782fd5afe0afe45a86ad13c0134fc18fee1a042/nhrbuilds/flashbrowse"
---

# flashbrowse

Industrial-grade, single-binary, headless browser controller and token-compression
engine written in pure Rust - built for LLM agents.

- Zero Python/Node/JVM. No Playwright/Puppeteer/Selenium shims.
- Raw CDP JSON-RPC 2.0 over POSIX pipe (`--remote-debugging-pipe` on Unix) or
  WebSocket (Windows, `--cdp-url`, and persistent `--session-id` sessions),
  using browser-level `flatten` multiplexing.
- AXTree-first compression: **3x - 23x fewer tokens** than Playwright/Puppeteer
  accessibility snapshots (and 75-99% less than raw HTML on content pages).
- Native MCP stdio server for Claude Code, Cursor, Codex.
- **Faster** than Playwright *and* Puppeteer on the agent loop.

> **Honest limits.** Stealth defeats naive bots, not determined fingerprinting
> (Canvas/Audio/TLS entropy remain). `select` matches text/value. Markdown
> extraction is lightweight. `flashbrowse setup` fetches managed Chrome (~120 MB
> once). See `RELEASE.md` and the benchmarks below.

Workspace layout:
