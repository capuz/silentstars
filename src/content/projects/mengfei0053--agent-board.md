---
repo: "mengfei0053/agent-board"
name: "agent-board"
description: "Local agent task board for pi / Claude Code / Cursor CLI"
originalDescription: "Local agent task board for pi / Claude Code / Cursor CLI"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/mengfei0053/agent-board"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [63, 23]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-28T03:30:31Z"
lastCommitAt: "2026-10-31T02:00:30Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 47
maintainers: ["mengfei0053"]
openGraphImageUrl: "https://opengraph.githubassets.com/02d02d8f38199a5f96ce30ef039d6c72573e57d2fe55b43c0b35e24fe9b22043/mengfei0053/agent-board"
---

# agent-board

Local agent kanban board: a **workspace** CRUD panel on the left, and five swimlanes on the right (Draft / Todo / In Progress / Completed / Archived). Creating a new draft or Todo automatically uses the path of the currently selected workspace. Supports **pi / Claude Code / Cursor CLI / Devin CLI / Codex CLI**, real-time logs (SSE), stop / continue task, and light and dark themes.

## Interface Preview

Main interface (sidebar workspaces + swimlanes), dark theme:

Main interface, light theme:

Task detail dialog (status, output, stop / continue):

The top bar can switch the theme: follow system → light → dark (the preference is saved to `localStorage`).

## Feature Overview

| Capability | Description |
| --- | --- |
| Workspace | Create, read, update, and delete on the left; right-click menu (Settings / Edit / Delete); the workspace settings page can configure prompts / skills / MCP; cwd = workspace path |
| Draft / Todo | “New draft” only saves to the database; “New Todo” creates the task and starts running it; drag between swimlanes to change status |
| In Progress / Completed / Archived | SSE live-refreshes cards and logs; processes can be stopped; completed…
