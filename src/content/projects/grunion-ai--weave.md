---
repo: "grunion-ai/weave"
name: "weave"
description: "Open-source, self-hosted alternative to Airtable, Fibery, Notion databases and ClickUp: a work management database built for AI agents, agent-first (Claude Code, Codex, Cursor, any MCP client). Tables, relations, formulas, rollups, workflows, documents, one SQLite file. REST, CLI, MCP server. Docker or one Node process, zero dependencies, MIT."
readmeQualityOk: true
url: "https://github.com/grunion-ai/weave"
homepage: "https://grunion-ai.github.io/weave/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [91]
topics: ["ai-agents", "airtable-alternative", "clickup-alternative", "database", "knowledge-base", "local-first", "low-code", "mcp", "mcp-server", "no-code"]
stars: 10
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-08-16T16:05:36Z"
lastCommitAt: "2026-10-09T18:38:46Z"
lastReleaseAt: "2026-09-09T16:51:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 82
undervaluedScore: 58
maintainers: ["claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/de3d1a1e2720feb4183857c9234d77f94b6c7d6cb0d67969d61a065bbc78fdde/grunion-ai/weave"
discussionCount: 0
---

built so that AI agents are first-class users, not an afterthought.</strong>

  Connected tables, relations, workflows, formulas, rollups, and per-entity markdown
  documents. One SQLite file. Zero dependencies. No build step. MIT.

---

## For agents

weave stores structured work (tables, rows, relations, documents) in one SQLite
file, and an agent drives it over MCP, REST or the CLI.

- Connect over MCP: `node bin/weave.js mcp --data <file.db>`, the same as
  `weave mcp --data <file>`. In Claude Code:
  `claude mcp add weave -- node /path/to/weave/bin/weave.js mcp --data /path/to/workspace.db`
- Or build from a file: `weave build <spec.json> --dry-run`, then again without
  `--dry-run`.
- Read [AGENTS.md › Using weave](https://github.com/grunion-ai/weave/blob/HEAD/AGENTS.md#using-weave) first: the primer,
  every tool by job, plans with turn budgets, and common errors with their fixes.

## What weave is

weave is a **work platform you run yourself**: spaces hold tables, tables hold
entities, and entities connect to each other through real bidirectional
relations — with lookups, rollups, formulas, workflow states, automations, and
any number of markdown documents attached to each…
