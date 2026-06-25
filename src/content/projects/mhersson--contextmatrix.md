---
repo: "mhersson/contextmatrix"
name: "contextmatrix"
description: "ContextMatrix is a kanban-style task coordination system designed for AI agents and humans"
url: "https://github.com/mhersson/contextmatrix"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [69, 28]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-30T14:17:17Z"
lastCommitAt: "2026-06-25T06:43:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 50
maintainers: ["mhersson", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ca43246ae149254f2f5dd898b5154bb24cfaa7e96986c0dd6caee958a72620e/mhersson/contextmatrix"
---

# ContextMatrix

> [!WARNING]
>
> This project is under heavy development. Breaking changes should be expected
> at the current stage.

Kanban-style task coordination for AI agents and humans. Cards are markdown
files with YAML frontmatter, stored in a git repository. Every mutation is
auto-committed, giving you a full audit trail.

ContextMatrix is a coordination layer — it tracks tasks but never touches your
project code repositories. Claude Code agents claim tasks, execute them in their
own repos, and report progress back through the board.

## Features

- **Kanban web UI** — drag-and-drop columns, real-time SSE updates, collapsible
  columns and cards, filter bar, and an Everforest dark/light theme.
- **Markdown-native cards** — plain files with YAML frontmatter, human-readable
  and diffable. No database required.
- **Image attachments** — paste from the clipboard or drag-and-drop screenshots
  straight into a card description. Uploads are resized server-side (max
  1024×768, 10 MiB), content-hashed for deduplication, and rendered inline.
  Agents see them automatically: `get_card` and `get_task_context` extract
  embedded images and attach them as base64 in the MCP response.…
