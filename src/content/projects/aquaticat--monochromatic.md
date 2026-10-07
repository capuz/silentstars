---
repo: "Aquaticat/Monochromatic"
name: "Monochromatic"
description: "TypeScript and Rust monorepo: Claude Code and Pi coding-agent plugins, a minimal MCP stdio server framework, custom oxlint plugins and a pluggable Rust linter, policy-aware git tooling, core TS libraries, Wayland desktop apps (GTK4 file manager, Slint terminal, true-peak music player), OpenTofu infra automation, and a personal site."
readmeQualityOk: true
url: "https://github.com/Aquaticat/Monochromatic"
language: "HTML"
languages: ["HTML"]
languagePcts: [76]
topics: ["ai-agents", "claude-code", "developer-tools", "linter", "mcp", "mise", "monorepo", "oxlint", "pnpm", "wayland"]
stars: 5
forks: 2
openIssues: 350
closedIssues: 229
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-10-26T09:53:10Z"
lastCommitAt: "2026-10-07T08:47:05Z"
lastReleaseAt: "2026-05-17T22:06:10Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "under_pressure"]
healthScore: 87
undervaluedScore: 75
maintainers: ["Aquaticat"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c726df184f1fca617d58ffb20935dd1ebda316a3e877940ab07af40bfafc88a/Aquaticat/Monochromatic"
postedAt: "2026-09-30T10:05:46.857Z"
---

# Monochromatic

A TypeScript and Rust monorepo (148 workspace packages plus 18 standalone Rust crates)
for developer tooling,
coding-agent infrastructure,
custom linters,
desktop applications,
web applications,
and infrastructure automation.

## Highlights

**Minimal MCP server**:
[`mcp-stdio`](https://github.com/Aquaticat/Monochromatic/blob/HEAD/package/mcp/stdio/) implements Model Context Protocol
revision 2026-07-28 over stdio,
with three runtime dependencies:
one workspace module,
`valibot`,
and `@valibot/to-json-schema`.
The official `@modelcontextprotocol/sdk` pulled 5.8 MB and 17 dependencies
at audit time (Express,
Hono,
jose,
OAuth,
rate limiting,
SSE);
this package implements only JSON-RPC 2.0,
`server/discover`,
`tools/list`,
and `tools/call`.

**Coding-agent infrastructure**:
[`claude-code-plugin`](https://github.com/Aquaticat/Monochromatic/blob/HEAD/package/claude-code-plugin/) packages Claude Code hooks and plugins
(guardrail,
statusline,
bash output filtering,
session spawning,
housekeeping),
and [`pi-plugin`](https://github.com/Aquaticat/Monochromatic/blob/HEAD/package/pi-plugin/) does the same for the Pi coding agent
(advisor,
guardrail,
morph-compact,
model…
