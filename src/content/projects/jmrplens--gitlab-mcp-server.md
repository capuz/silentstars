---
repo: "jmrplens/gitlab-mcp-server"
name: "gitlab-mcp-server"
description: "Open source GitLab MCP server for AI assistants: 2-tool dynamic find/execute over 850+ GitLab actions (1,000+ Enterprise), stdio/HTTP/OAuth, safe/read-only modes."
readmeQualityOk: true
url: "https://github.com/jmrplens/gitlab-mcp-server"
homepage: "https://docs.jmrp.io/gitlab-mcp-server/"
language: "Go"
languages: ["Go"]
languagePcts: [81]
topics: ["ai-tools", "gitlab", "gitlab-api", "go", "llm", "mcp", "mcp-server", "model-context-protocol"]
stars: 45
forks: 8
openIssues: 94
closedIssues: 386
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-04-11T21:48:02Z"
lastCommitAt: "2026-10-30T11:02:43Z"
lastReleaseAt: "2026-04-25T20:32:33Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded"]
healthScore: 96
undervaluedScore: 42
maintainers: ["jmrplens"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1208139072/6775d253-0da8-4b0c-8c61-ddeec51d3a61"
fundingLinks: ["GITHUB:https://github.com/jmrplens", "KO_FI:https://ko-fi.com/jmrplens"]
---

# GitLab MCP Server

**Releases and packages**

**Build and quality**

**Security**

**Directories**

**All of GitLab for your AI assistant.** Up to 1,103 actions over GitLab's REST and GraphQL APIs, from Free to Ultimate and on GitLab.com, in one self-contained binary that works with Claude, Cursor, VS Code, Codex and any other MCP client. You ask in plain language; it does the GitLab work.

**11,396 tokens of startup context by default, the same on every GitLab tier (1,994 with `GITLAB_MCP_CAPABILITY_SURFACE=minimal`).** Two tools reach the whole catalog, where listing every tool as its own costs from 578,892 to 740,054 tokens. Measured with the cl100k_base tokenizer and checked in CI. [How it is measured](https://docs.jmrp.io/gitlab-mcp-server/tools/dynamic-tools/#how-much-startup-context-does-dynamic-mode-save)

> "Review merge request !15: is it safe to merge?" · "Why did the last pipeline fail?" · "List open issues assigned to me" · "Generate release notes from v1.0 to v2.0"

## Why this server

- **Every tier and every instance.** Free/CE, Premium and Ultimate, self-managed or GitLab.com with its Orbit knowledge graph. The tier is detected and the catalog follows it.
-…
