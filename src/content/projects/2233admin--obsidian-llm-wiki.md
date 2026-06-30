---
repo: "2233admin/obsidian-llm-wiki"
name: "obsidian-llm-wiki"
description: "Your markdown vault, compiled into a 6-persona MCP team for Claude Code, Codex, OpenCode, and Gemini CLI. Headless-first. Cites, doesn't guess."
url: "https://github.com/2233admin/obsidian-llm-wiki"
homepage: "https://github.com/2233admin/obsidian-llm-wiki/wiki"
language: "JavaScript"
languages: ["JavaScript", "Python", "TypeScript"]
languagePcts: [48, 29, 21]
topics: ["ai-agent", "claude-code", "cursor", "knowledge-base", "llm-wiki", "mcp", "model-context-protocol", "obsidian", "karpathy", "mcp-server"]
stars: 19
forks: 7
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 8
createdAt: "2026-04-05T22:21:46Z"
lastCommitAt: "2026-06-30T06:49:20Z"
lastReleaseAt: "2026-06-20T13:55:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 76
undervaluedScore: 51
maintainers: ["2233admin"]
openGraphImageUrl: "https://opengraph.githubassets.com/18efe9cbde760e0105d92895f502687842f8f97f4a37cdce8f49310417fb04ea/2233admin/obsidian-llm-wiki"
discussionCount: 2
---

</p>

# LLMwiki

**LLMwiki turns a team's raw research folder into a reviewed, queryable, self-improving Obsidian wiki. Headless-first. Cites, doesn't guess.**

**Language**: English (this page) · [简体中文](docs/zh-CN/) — **Guide**: [English](docs/GUIDE.md) · [简体中文](docs/GUIDE.zh-CN.md) — **Wiki**: [Home](https://github.com/2233admin/obsidian-llm-wiki/wiki) · [Architecture](https://github.com/2233admin/obsidian-llm-wiki/wiki/Architecture) · [Rationale](https://github.com/2233admin/obsidian-llm-wiki/wiki/Rationale) · [FAQ](https://github.com/2233admin/obsidian-llm-wiki/wiki/FAQ)

You are reading this because your team has already lost knowledge.

Not because nobody wrote it down. They did: papers, meeting notes, repo findings, screenshots, agent answers. The problem is worse: the knowledge has no state. No source. No reviewer. No promotion path. No way to tell a draft from team truth.

LLMwiki gives that mess a compiler pass:

```
capture -> compile -> ask -> file -> review -> promote
```

Put source material in `raw/`. Compile it into `wiki/` summaries, concept pages, backlinks, and contradiction reports. Ask agents cited questions. File useful answers into `00-Inbox/AI-Output/`.…
