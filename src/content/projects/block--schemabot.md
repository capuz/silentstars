---
repo: "block/schemabot"
name: "schemabot"
description: "GitOps for database schemas"
readmeQualityOk: true
url: "https://github.com/block/schemabot"
language: "Go"
languages: ["Go"]
languagePcts: [97]
stars: 27
forks: 6
openIssues: 8
closedIssues: 11
watchers: 2
contributors: 18
recentReleases: 0
createdAt: "2026-04-07T22:08:33Z"
lastCommitAt: "2026-08-26T04:16:45Z"
lastReleaseAt: "2026-05-26T20:46:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 38
maintainers: ["aparajon", "Kiran01bm", "JashLal"]
openGraphImageUrl: "https://opengraph.githubassets.com/170fbfd908c74e62dd7e9e99c26397fe3cd2f3e4c0b63fd13dad719be1c48e44/block/schemabot"
discussionCount: 0
---

# <a href="./assets/schemabot-avatar.svg"><img src="./assets/schemabot-avatar.svg" alt="SchemaBot" style="height: 1em; max-width: 100%;"></a> SchemaBot

GitOps for database schemas. Define your desired schema in SQL files, open a PR, and SchemaBot plans and executes your schema changes safely.

## Schema Changes via Pull Request

Open a PR with schema changes and SchemaBot handles the rest — plan, apply, and verify across environments:

## Interactive CLI

SchemaBot provides a fully interactive CLI for planning, applying, and monitoring schema changes:

## How It Works

SchemaBot uses **declarative schema** — you describe the desired end state in SQL files, and SchemaBot figures out the DDL needed to get there:

```sql
-- schema/testapp/users.sql
CREATE TABLE users (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,       -- add a column: just edit this file
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

SchemaBot diffs your schema files against the live database, computes the DDL, and applies it:

```
$ schemabot plan -s ./schema…
