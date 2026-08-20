---
repo: "PxyUp/fitter"
name: "fitter"
description: "New way for collect information from the API's/Websites"
readmeQualityOk: true
url: "https://github.com/PxyUp/fitter"
homepage: "https://pxyup.github.io/fitter/"
language: "Go"
languages: ["Go", "HTML"]
languagePcts: [75, 23]
topics: ["api", "go", "parsing", "scraper", "scrawler", "golang", "json", "ai-agents", "mcp", "mcp-server"]
stars: 132
forks: 10
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2023-02-05T19:18:13Z"
lastCommitAt: "2026-08-20T04:08:58Z"
lastReleaseAt: "2023-03-07T17:19:21Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 88
undervaluedScore: 41
maintainers: ["PxyUp"]
openGraphImageUrl: "https://opengraph.githubassets.com/c60e9b67bbdbba0dbffefdea86aaf79433ce7a29619a52fe0a5cc381616fe717/PxyUp/fitter"
fundingLinks: ["GITHUB:https://github.com/PxyUp"]
discussionCount: 1
---

# Fitter — web data for AI agents

**Fitter turns any website or API into structured JSON — declaratively.** One JSON/YAML config describes where the data lives (HTTP request, headless browser, file, static value) and what to extract (JSON paths, CSS selectors, XPath). No code, no brittle scraping scripts.

**🚀 [Try it in your browser](https://pxyup.github.io/fitter/)** — the real engine compiled to WebAssembly: live examples, a visual config builder, no install.

Because configs are plain data, **LLMs can author them**. The built-in [MCP server](#how-to-use-fitter_mcp) lets Claude Code, Claude Desktop, or any MCP client write and run scraping pipelines on your machine, on demand:

> *"Get the top 5 HackerNews stories with titles and scores"* → the model authors a fitter config, validates it, runs it locally, and gets clean JSON back.

**One engine, five ways to use it:**

| | |
|---|---|
| 🤖 **Fitter MCP** | [MCP server](#how-to-use-fitter_mcp) exposing fitter to Claude Code, Claude Desktop and any MCP client |
| 🧠 **Fitter Agent** | AI-powered CLI: natural language → config → executed result |
| 🖥 **Fitter CLI** | run configs locally for test/debug/home usage |
| 📦 **Fitter…
