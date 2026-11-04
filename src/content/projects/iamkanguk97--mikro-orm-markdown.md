---
repo: "iamkanguk97/mikro-orm-markdown"
name: "mikro-orm-markdown"
description: "Generate Mermaid ERD diagrams and Markdown schema docs from MikroORM entities without a live database connection."
readmeQualityOk: true
url: "https://github.com/iamkanguk97/mikro-orm-markdown"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["erd", "markdown", "mikro-orm"]
stars: 16
forks: 1
openIssues: 4
closedIssues: 41
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2026-06-11T08:24:58Z"
lastCommitAt: "2026-11-04T02:56:15Z"
lastReleaseAt: "2026-08-26T02:13:57Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 91
undervaluedScore: 45
maintainers: ["iamkanguk97", "dependabot[bot]", "smailliwniloc"]
openGraphImageUrl: "https://opengraph.githubassets.com/8efe5c41c0d348fa935376809c8819de9f2a438a21ebe6a71fab60bccf568797/iamkanguk97/mikro-orm-markdown"
---

# mikro-orm-markdown

**mikro-orm-markdown** is a MikroORM ERD generator that creates **Mermaid ER diagrams** and **Markdown database schema documentation** from your [MikroORM](https://mikro-orm.io) entities.

Use the CLI or TypeScript API to document entity columns, relations, indexes, constraints, and JSDoc descriptions without connecting to a live database.

[한국어 문서](https://github.com/iamkanguk97/mikro-orm-markdown/blob/main/README.ko.md)

See the [MikroORM ERD example output](https://github.com/iamkanguk97/mikro-orm-markdown/blob/main/examples/ERD.md).

Agent users (Claude Code and other Agent Skills-compatible tools) can optionally use the Agent Skill at `skills/mikro-orm-markdown/` to set up and troubleshoot this tool — it is not part of the npm package.

> Heavily inspired by [prisma-markdown](https://github.com/samchon/prisma-markdown) by [@samchon](https://github.com/samchon). Thank you for the great idea.

## Features

- **Mermaid ERD diagrams** generated from MikroORM entity metadata
- **Markdown schema documentation** with per-entity column tables, actual DB column names, keys, nullability, descriptions, indexes, and constraints
- **JSDoc-driven grouping and…
