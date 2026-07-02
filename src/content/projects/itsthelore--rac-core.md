---
repo: "itsthelore/rac-core"
name: "rac-core"
description: "Give your coding agent the decisions your team already made — so it stops re-doing things you ruled out, treating product knowledge like code."
url: "https://github.com/itsthelore/rac-core"
homepage: "https://itsthelore.github.io/rac-core/"
language: "Python"
languages: ["Python"]
languagePcts: [83]
topics: ["cli", "cli-tool", "cli-tooling", "markdown", "product-management", "documentation", "product-development", "product-management-tools", "product-manager", "requirements"]
stars: 255
forks: 6
openIssues: 10
closedIssues: 9
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-01T08:42:02Z"
lastCommitAt: "2026-07-02T06:33:49Z"
lastReleaseAt: "2026-06-05T18:55:03Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 89
undervaluedScore: 29
maintainers: ["tcballard"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1255866572/8702002c-6eb6-4689-b725-868c5177c008"
discussionCount: 10
---

# Lore

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/itsthelore/rac-core/main/rac/assets/images/lore-header-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/itsthelore/rac-core/main/rac/assets/images/lore-header-light.png">
</picture>

</p>

</p>

> **Give your coding agent the decisions your team already made — so it stops re-doing things you ruled out.**

Lore keeps your team's recorded knowledge — requirements, decisions, designs, roadmaps, and prompts — as typed Markdown in your repo and serves it **read-only** to Claude Code, Cursor, and Claude Desktop over MCP, so the agent cites your decisions instead of violating them. No RAG, no embeddings, no model call to decide what's relevant — retrieval is deterministic and reproducible. It is built on **RAC — Requirements as Code**, the open-source engine underneath; the package, CLI, and MCP server ship under the `rac` name.

## How it compares

Lore isn't a search index or a memory tool — it's the **deterministic system of
record** an agent grounds against. Fuzzy retrieval (RAG, agent memory) is good at
finding *what's near* a…
