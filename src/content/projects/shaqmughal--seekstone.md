---
repo: "shaqmughal/seekstone"
name: "seekstone"
description: "The Obsidian MCP server that needs no plugin, no running Obsidian app — and doesn't blow your context window. Filesystem-direct, single-digit-ms search, ~2 KB payloads, 17 tools."
readmeQualityOk: true
url: "https://github.com/shaqmughal/seekstone"
homepage: "https://seekstone.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["ai", "claude", "llm", "markdown", "mcp", "model-context-protocol", "nodejs", "notes", "obsidian", "obsidian-ai"]
stars: 22
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-05-29T01:30:23Z"
lastCommitAt: "2026-08-18T04:08:13Z"
lastReleaseAt: "2026-06-08T03:18:01Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 89
undervaluedScore: 48
maintainers: ["shaqmughal", "dependabot[bot]", "seekstone-release-bot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1252898213/ef8e274f-660a-4078-98d5-a8429f0e79c8"
fundingLinks: ["CUSTOM:https://buymeacoffee.com/shaqmughal"]
discussionCount: 1
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="brand/seekstone-wordmark-dark.svg" />
  </picture>
</p>

</p>

</p>

---

|  | **Seekstone** | [obsidian-mcp-server](https://github.com/cyanheads/obsidian-mcp-server) (#1 by downloads) | REST-proxy servers |
|---|---|---|---|
| Local REST API plugin | **Not needed** | Required | Required |
| Obsidian app running | **Not needed — works with Obsidian closed** | Required | Required |
| Search payload @ 10k notes | **2.0 KB** | 47 KB | up to **95 MB** |
| Warm search latency @ 10k notes | **6.2 ms** | 732 ms (~118× slower) | up to 1,550 ms |
| Structured frontmatter queries | **Built-in (`query_notes`) — property/date/size predicates, ~350 B answers** | JSONLogic via REST | Varies |

<sup>Same queries, same committed vaults, 20 runs each — [full results across eight servers and three vault sizes below](#why-seekstone-the-numbers), fully reproducible from the [harness](https://github.com/shaqmughal/seekstone/blob/HEAD/packages/harness).</sup>

---

</p>

---

## What is Seekstone?

**Seekstone is an Obsidian MCP server** — it gives Claude (and any [Model Context Protocol](https://modelcontextprotocol.io) client) direct…
