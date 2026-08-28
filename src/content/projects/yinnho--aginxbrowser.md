---
repo: "yinnho/aginxbrowser"
name: "aginxbrowser"
description: "The browser built for AI agents — fetch live pages as markdown, render JS/SPAs with built-in V8, take screenshots without Chromium, meta-search 5 engines, and drive interactive login sessions. One Rust binary, stealth TLS fingerprints, MCP native for Claude Code & Cursor. Headless browser alternative to Puppeteer/Playwright."
readmeQualityOk: true
url: "https://github.com/yinnho/aginxbrowser"
homepage: "https://browser.aginx.net"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["agent-browser", "ai-agents", "antibot", "browser-automation", "claude-code", "cursor", "firecrawl", "headless-browser", "mcp", "mcp-server"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-06-19T03:27:07Z"
lastCommitAt: "2026-08-28T14:32:58Z"
lastReleaseAt: "2026-08-27T18:55:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 65
maintainers: ["yinnho"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f2c4896c6878fa15125cddaaa08fdbcb2851e88de186c285d8c4956a3190257/yinnho/aginxbrowser"
discussionCount: 1
---

# AginxBrowser

**The Browser for AI Agents. See the live web. Interact with it.**

**[English](https://github.com/yinnho/aginxbrowser/blob/HEAD/README.md)** | [中文文档](https://github.com/yinnho/aginxbrowser/blob/HEAD/README.zh-CN.md)

A browser built for agents from the first line of code — not a human browser bolted onto automation. See the world, read it, search it, and act on it: one Rust binary with built-in V8, **no Chromium required**.

> Humans have Chrome. Agents have AginxBrowser.

One binary, zero dependencies, instant service. HTTP API + native MCP — agents plug in and go.

*Real pages rendered by AginxBrowser's diting engine (no Chromium) — Wikipedia, this repo, Rust. [Screenshot it yourself →](https://github.com/yinnho/aginxbrowser/blob/HEAD/docs/API.md#screenshot)*

## Why Agents Need Their Own Browser

Measured against headless Chrome on the same 20 pages, same network ([bench](https://github.com/yinnho/aginxbrowser/blob/HEAD/bench/README.md), 2026-08-28): **7.6× faster** to agent-usable text (p50 532 ms vs 4 053 ms), **~10× less memory** (227 MB for the whole process vs ~2.1 GB per Chrome page), and 0 hard failures where Chrome's `--dump-dom` produced no DOM on 5 of…
