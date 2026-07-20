---
repo: "suiflex/suitest"
name: "suitest"
description: "Self-hostable, MCP-native testing platform. Manual test management, deterministic runs, optional AI. Your stack, your   LLM, your data."
readmeQualityOk: true
url: "https://github.com/suiflex/suitest"
homepage: "https://suitest.suiflex.dev/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [70, 25]
topics: ["ai", "ai-agents", "e2e-testing", "mcp", "model-context-protocol", "open-source", "playwright", "qa", "self-hosted", "test-automation"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 8
createdAt: "2026-05-22T15:37:06Z"
lastCommitAt: "2026-07-20T06:34:30Z"
lastReleaseAt: "2026-07-19T14:11:08Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 64
maintainers: ["mulhamna", "badrus123", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c7116a72eafa3408c4fce2998c3f8c5fe9817c0dfe32a13fa8349b6f98a634c/suiflex/suitest"
discussionCount: 1
---

# Suitest — MCP-native testing platform

  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/brand/logo-dark.svg">
  </picture>
</p>

  <strong>Manual test management. Deterministic runs. Optional autonomous AI.<br>Your stack, your LLM, your data.</strong>
</p>

</p>

</p>

  <em>AI-generated suite (from <a href="./examples/demo-app/PRD.md">PRD.md</a>) running green against a live app — API + browser steps, screenshots included.<br>
  Replay it yourself in one command: <code>make demo</code> → <a href="http://localhost:3000">localhost:3000</a> (<code>demo@suitest.dev</code> / <code>demo1234</code>). No LLM key needed.</em>
</p>

**Suitest** is a self-hostable, open-source QA platform that works fully **without an LLM** (ZERO tier): manual test case management plus a deterministic run engine that drives any target through [MCP](https://modelcontextprotocol.io) (Playwright, HTTP APIs, Postgres, and more). If you want AI on top, plug in your own LLM key (cloud, or local Ollama) to unlock test generation, failure diagnosis, and conversational testing. No vendor lock-in, no forced API keys.

It also ships an **MCP server for IDE agents** (Claude Code, Cursor,…
