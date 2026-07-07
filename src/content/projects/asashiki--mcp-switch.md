---
repo: "asashiki/mcp-switch"
name: "mcp-switch"
description: "Self-hosted gateway that aggregates local stdio and remote HTTP MCP servers behind one OAuth endpoint — connect once, reach all your tools from any AI."
readmeQualityOk: true
url: "https://github.com/asashiki/mcp-switch"
homepage: "https://github.com/asashiki/mcp-switch"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["aggregator", "ai", "chatgpt", "claude", "gateway", "mcp", "model-context-protocol", "oauth", "self-hosted", "stdio"]
stars: 21
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-13T17:44:40Z"
lastCommitAt: "2026-07-07T06:39:30Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 22
maintainers: ["asashiki"]
openGraphImageUrl: "https://opengraph.githubassets.com/1712cee5cbad2b0e7bc48d065803c4e993365e71c964903ea7d0b14e35b44541/asashiki/mcp-switch"
---

# MCP Switch

**One MCP endpoint to rule them all.**

Web- or app-based AIs are limited to remote MCP servers and typically offer only a single custom connector slot. In contrast, half of the most useful MCP servers run locally via standard I/O (like npx or uvx), making them accessible only to Claude Desktop or CLI tools.

**English** · [简体中文](https://github.com/asashiki/mcp-switch/blob/HEAD/README.zh-CN.md) · [日本語](https://github.com/asashiki/mcp-switch/blob/HEAD/README.ja.md)

🔗 **[Live console demo](https://show.asashiki.com/console/)** · 📖 **[User manual](https://github.com/asashiki/mcp-switch/blob/HEAD/docs/manual.md)**

</div>

---

## Why

Web/app AIs can only connect to **remote** MCP servers, and most of them give you
just **one** custom connector slot. Meanwhile half the useful MCP servers are
**local** (`npx`/`uvx` stdio processes) that only Claude Desktop / a CLI can reach.

MCP Switch sits in the middle:

```
   local stdio MCP  ─┐
                     ┼──►  MCP Switch  ──►  one OAuth URL  ──►  claude.ai / ChatGPT / …
   yet another MCP  ─┘     (your VPS)
```

- **Aggregate** any number of MCP servers — remote (URL) or local (stdio, hosted on
  your box) — into one…
