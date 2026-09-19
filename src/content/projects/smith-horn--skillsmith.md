---
repo: "smith-horn/skillsmith"
name: "skillsmith"
description: "Shared skills, safe for production."
readmeQualityOk: true
url: "https://github.com/smith-horn/skillsmith"
homepage: "https://skillsmith.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["agent-skills", "agentic-ai", "agentic-systems", "agentic-workflow", "skills"]
stars: 78
forks: 18
openIssues: 29
closedIssues: 235
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-01-11T19:40:21Z"
lastCommitAt: "2026-09-19T01:16:22Z"
lastReleaseAt: "2026-04-16T20:07:43Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 98
undervaluedScore: 42
maintainers: ["wrsmith108"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1132346844/1831d39e-c334-42af-987b-ae38e68fb9bf"
discussionCount: 1
---

# Skillsmith

**Shared skills, safe for production.**

Once more than one team is publishing agent skills, the problem stops being finding them and starts being managing them. Which team is this scoped to? Which version is installed where? Has it been flagged by a security scan? What happens to the ones nobody maintains anymore?

Skillsmith is a registry for sharing, scanning, and tracking agent skills across teams. Skills are published to a registry scoped to your team and versioned immutably, so drift across installs is visible instead of silent. Flagged or suspicious skills are quarantined pending security review. Skills that go stale can be deprecated instead of quietly rotting in someone's repo.

## Installation

### Quick Setup (MCP)

Skillsmith is **MCP-compatible** — pick the snippet for your agent.
SMI-4580: snippets sourced from [`packages/cli/src/templates/mcp-server.template.snippets.ts`](https://github.com/smith-horn/skillsmith/blob/HEAD/packages/cli/src/templates/mcp-server.template.snippets.ts) so this README and the website docs cannot drift.

<details>
<summary><strong>Claude Code</strong> — <code>~/.claude/settings.json</code></summary>

```json
{
  "mcpServers":…
