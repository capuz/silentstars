---
repo: "lyc403223157-source/knowledge-inbox"
name: "knowledge-inbox"
description: "Local-first knowledge ingestion for AI agents and Obsidian"
readmeQualityOk: true
url: "https://github.com/lyc403223157-source/knowledge-inbox"
language: "Python"
languages: ["Python"]
languagePcts: [86]
topics: ["fastapi", "hermes-agent", "knowledge-management", "local-first", "mcp", "obsidian", "python", "wechat"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-08-11T12:39:37Z"
lastCommitAt: "2026-09-04T08:11:20Z"
lastReleaseAt: "2026-08-12T09:15:15Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 27
maintainers: ["lyc403223157-source"]
openGraphImageUrl: "https://opengraph.githubassets.com/623ba6cb0ffa3c5362e24fd34ec6a68e2deb13ce2f69eb0e3bbdf9559b378c5c/lyc403223157-source/knowledge-inbox"
---

# Knowledge Inbox

**English** | [简体中文](https://github.com/lyc403223157-source/knowledge-inbox/blob/HEAD/README.zh-CN.md)

Harness-neutral, local-first knowledge ingestion for Obsidian and other local retrieval
tools. It turns links, text, videos, screenshots, PDFs, and local files into structured
Markdown knowledge cards. Hermes, Codex, OpenClaw, and other MCP clients share the same
adapters and processing service.

> Current release: `0.3.0`. Web and file ingestion run cross-platform. WeChat Channels
> downloading is an optional, experimental macOS integration that requires the desktop
> WeChat client and a local TLS proxy.

## How it works

```text
Hermes / Codex / OpenClaw / CLI / Web / Telegram
                  |
              MCP / FastAPI
                  |
             Source Adapter
                  |
             ContentItem
                  |
       Cleaner / OCR / Whisper / AI
                  |
      Classifier / Tags / Knowledge Linker
                  |
          Obsidian Markdown + SQLite
```

Every source is normalized into a `ContentItem`. To add a platform, implement
`SourceAdapter.detect()` and `SourceAdapter.fetch()`, then register the adapter in…
