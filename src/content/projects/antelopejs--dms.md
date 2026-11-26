---
repo: "AntelopeJS/dms"
name: "dms"
description: "Open-source back office for your product. Connect Postgres, MySQL/MariaDB or MongoDB, mock up the dashboard with your coding agent, then it builds the pages as TypeScript in your repo. Self-hosted."
readmeQualityOk: true
url: "https://github.com/AntelopeJS/dms"
homepage: "https://dms.antelopejs.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
topics: ["admin-dashboard", "admin-panel", "antelopejs", "back-office", "internal-tools", "mongodb", "open-source", "postgresql", "rethinkdb", "self-hosted"]
stars: 55
forks: 8
openIssues: 6
closedIssues: 96
watchers: 2
contributors: 10
recentReleases: 10
createdAt: "2026-09-16T21:58:38Z"
lastCommitAt: "2026-11-26T23:24:20Z"
lastReleaseAt: "2026-09-17T07:02:49Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 45
maintainers: ["Upd4ting", "github-actions[bot]", "renovate[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1373673693/2836a97e-de7e-4f99-bfe0-48f53da070ad"
---

# AntelopeJS DMS

**The open-source back office for your product.**<br>
Paste your PostgreSQL, MySQL, MariaDB, MongoDB or RethinkDB connection string.<br>
Your coding agent drafts a live mockup you comment on, then builds the admin pages and dashboards as TypeScript in your repo.

[Quick start](#quick-start) · [Live demo](https://dms-demo.antelopejs.com) · [Docs](https://dms.antelopejs.com/docs) · [Discord](https://discord.gg/g4pFt6eXqu)

```bash
npx @antelopejs/core project init demo --template dms-connect-demo
```

Then `cd demo && docker compose up` starts AntelopeJS DMS and a sample coffee shop in PostgreSQL.

## Mock it up, then build it

The assistant drafts the back office as a mockup first, drawn with the real blocks on the `/mockup` page:

- A change redraws at once, with no typecheck and no reload.
- Blocks read sample data, so you settle the dashboard before wiring a table or a query.
- Pin a comment on any block and press **Resolve with AI**. Once you approve the mockup, **Build it** writes the real code once.

### One connection string, one agent run

We ran it on the connect demo, a sample coffee shop on PostgreSQL.
