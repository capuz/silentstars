---
repo: "aenix-io/aeman"
name: "aeman"
description: "A short-term planning system for engineering teams — keep engineers focused, run daily sprints, and track unplanned work. Built on GitHub Projects v2 (no database of its own): one Go binary with an embedded React UI, REST API, MCP server for AI agents, and live board updates over WebSocket."
readmeQualityOk: true
url: "https://github.com/aenix-io/aeman"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [68, 28]
topics: ["agile", "ai-agents", "github-projects", "github-projects-v2", "golang", "mcp", "mcp-server", "project-management", "react", "self-hosted"]
stars: 28
forks: 2
openIssues: 4
closedIssues: 1
watchers: 0
contributors: 8
recentReleases: 10
createdAt: "2026-06-24T16:45:49Z"
lastCommitAt: "2026-08-28T15:32:36Z"
lastReleaseAt: "2026-08-12T16:00:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 38
maintainers: ["kvaps"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1279399374/234b1384-1677-4205-a04e-76288800860c"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/logo-dark.svg">
  </picture>
</p>

# aeman

A short-term planning system for engineering teams — it keeps engineers focused, runs daily sprints, and makes unplanned work visible. **A git repository is the storage**: a board is a repository of small YAML/Markdown files and every action is a commit, so aeman has no database of its own and the board's history is a plain git log. The whole thing ships as one self-contained Go binary: an embedded React SPA (via `go:embed`), a JSON REST API, a WebSocket **watch** stream that keeps every open board updated live, and an MCP server for AI agents — all driving the same board service, with the repository as the single source of truth.

## Concept

Two complementary views — a personal day board and a team board:

- **Me** — your personal day board. Your cards for the selected day, stacked into four colour zones, with an editable notes log on the right. You can also **View as** another person to see (and act on) their board, with a one-click reset back to yourself.
  - **Gray** — regular, planned work.
  - **Green** — start only when every other zone is clear.
  -…
