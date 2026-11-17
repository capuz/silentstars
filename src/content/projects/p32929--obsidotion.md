---
repo: "p32929/obsidotion"
name: "obsidotion"
description: "Obsidian plugin that syncs your vault two-way with a Notion database — works on desktop and mobile"
readmeQualityOk: true
url: "https://github.com/p32929/obsidotion"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [78]
topics: ["cross-platform", "notion", "obsidian", "sync", "obsidian-notion-sync", "markdown", "notion-api", "notion-sync", "obsidian-plugin", "typescript"]
stars: 37
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2024-05-25T12:09:55Z"
lastCommitAt: "2026-11-17T14:36:47Z"
lastReleaseAt: "2026-11-16T11:37:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 77
undervaluedScore: 39
maintainers: ["p32929"]
openGraphImageUrl: "https://opengraph.githubassets.com/dffede31824e5c3a5b907097b64581476a6b3659969d8ddd26fde97899c0fa71/p32929/obsidotion"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/p32929"]
---

# obsidotion

Sync your Obsidian notes with a Notion database. Upload your notes to Notion with one click, and pull the changes you make in Notion back into Obsidian. Works on desktop and mobile.

**Safe with the rest of your Notion.** obsidotion only updates or archives pages it created or pulled itself, so pages you made in Notion are never touched. Your note properties, like tags, are kept as they are.

## Screenshots
### From Windows

### From Android

## Set up Notion

You do this once. It gives the plugin a key to your Notion and a database to put your notes in.

1. Open [notion.so/my-integrations](https://www.notion.so/my-integrations) and click **New integration**.
2. Give it a name (for example `Obsidian`), pick your workspace, and save.
3. Copy the **Internal Integration Secret**. It starts with `ntn_` or `secret_`. This is your **token**.
4. In Notion, create a new page and choose **Table** to make a database. Keep its first column, **Name**: that is where note titles go.
5. On the database page, click **•••** (top right), then **Connections**, then add the integration you made in step 2. Without this, the plugin cannot see the database.
6. Copy the database link…
