---
repo: "nojusmorkunas/conatus"
name: "conatus"
description: "A self-hosted task manager for projects, recurring work, reminders, collaboration and automation. Inspired by Todoist."
readmeQualityOk: true
url: "https://github.com/nojusmorkunas/conatus"
homepage: "https://useconatus.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["collaboration", "docker", "mcp", "model-context-protocol", "nextjs", "openapi", "postgresql", "productivity", "project-management", "recurring-tasks"]
stars: 59
forks: 3
openIssues: 1
closedIssues: 10
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-07-19T11:48:49Z"
lastCommitAt: "2026-11-07T09:29:40Z"
lastReleaseAt: "2026-10-02T15:45:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 43
maintainers: ["nojusmorkunas", "dependabot[bot]", "nlowe"]
openGraphImageUrl: "https://opengraph.githubassets.com/713e21a96c9ee25893ec5d0a8b0047098d65ebd95b6dc0db41da7dcf82fd6c89/nojusmorkunas/conatus"
discussionCount: 0
---

Conatus is a self-hosted task manager inspired by Todoist. It runs on your own server with Docker Compose, with tasks in PostgreSQL and files in S3 storage you control. AI agents can read, create, reschedule and complete your tasks through the [MCP server](https://github.com/nojusmorkunas/conatus-mcp), and your own scripts can use the REST API and webhooks. Conatus is free and open source under the AGPL.

- Projects with sections, sub-tasks, labels, four priorities and saved filters
- Recurring tasks with due dates, separate deadlines, durations and reminders
- [Quick add](https://github.com/nojusmorkunas/conatus/blob/HEAD/docs/natural-language.md) that reads dates, repeats, `p1`, `#project` and `@label` straight from the task name
- List, board and calendar views, plus an iCal feed for your calendar app
- Shared projects with comments, assignees and file attachments
- Todoist import from an API token or a backup file
- A REST API with scoped tokens, signed webhooks and an MCP server for AI agents
- Daily database backups from the first boot

## Deploy

### 1. Get the Compose file and environment template

```bash
mkdir conatus
cd conatus

curl -O…
