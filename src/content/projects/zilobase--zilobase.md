---
repo: "zilobase/zilobase"
name: "zilobase"
description: " Open-source company brain for teams: notes,   databases, comments, AI workflows, and context from   the tools your organization already uses. Self-hostable."
readmeQualityOk: true
url: "https://github.com/zilobase/zilobase"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["collaboration", "company-brain", "docker", "notion", "productivity", "ai-workflows", "appflowy", "project-managment", "team-workspace"]
stars: 15
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-05-24T23:20:23Z"
lastCommitAt: "2026-08-30T00:45:06Z"
lastReleaseAt: "2026-08-11T01:35:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 48
maintainers: ["sreeragh-s"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c5de1e2db68797b38a82055fc8baeede45784ad5154636939d78a13188b6a09/zilobase/zilobase"
---

<h1 align="center">Zilobase</h1>

  Notes, pages, databases, comments, and AI workflows in one open-source workspace.
</p>

  |
  |
  |
  |
  |
</p>

</p>

---

Zilobase is an open-source workspace for building and organizing knowledge with structured pages, database views, comments, and AI-assisted workflows. It is designed to run as a hosted product or as a self-hosted Docker deployment.

## What You Can Do

- **Write and organize pages** with a rich editor, nested navigation, comments, and workspace context.
- **Model structured information** with standalone or embedded databases, table views, kanban views, timeline views, properties, filters, sorting, and grouping.
- **Work with AI in context** using page-aware chat, workspace tools, and supported page/database edit flows.
- **Run it yourself** with Docker Compose, Caddy, Postgres, and MinIO.

## Quick Start

Run the self-hosted stack locally:

```sh
npm run selfhost:up
```

The command generates ignored development secrets, builds the production image
from source, waits for Postgres and MinIO readiness, and prints these local-only
addresses:

```text
Zilobase: http://127.0.0.1:8787
Setup:    http://127.0.0.1:8787/setup…
