---
repo: "Jaxon1216/GenBI"
name: "GenBI"
description: "AI-powered intelligent data analysis platform, suitable as a graduation project"
originalDescription: "AI驱动的智能数据分析平台，可作毕业设计"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Jaxon1216/GenBI"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [54, 35]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-08T08:58:49Z"
lastCommitAt: "2026-09-30T09:57:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 55
undervaluedScore: 17
maintainers: ["Jaxon1216"]
openGraphImageUrl: "https://opengraph.githubassets.com/da889ea0b3712a308a274aa0c2c01b48971984fac1ec813e88597ea09b113c0f/Jaxon1216/GenBI"
---

# GenBI

An intelligent data analysis application based on React and Spring Boot: upload table data, and AI generates visualizations and analysis conclusions.

## Demo Video

The repository root directory contains a screen recording file **[`Demo.mov`](https://github.com/Jaxon1216/GenBI/blob/HEAD/Demo.mov)** (approximately 62MB). You can click the link to download on GitHub, or play it directly after cloning locally.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Ant Design Pro, UmiJS Max, TypeScript, ECharts |
| Backend | Go 1.24, Gin, GORM, MySQL, Redis (sessions/rate limiting), RabbitMQ (async), DeepSeek |
| Validation | Frontend performs Zod schema validation and security filtering on chart JSON returned by AI |

## Repository Structure

```
GenBI/
├── frontend/     # Web frontend
├── backend/      # REST API
├── backend/sql/  # SQL for table creation, etc.
└── Demo.mov      # Feature demo screen recording
```

## Local Setup

### Environment

- Node.js 16+
- Go 1.24+
- MySQL 8, create a database and execute `backend/sql/create_table.sql`
- Redis: `brew install redis && brew services start redis`
- RabbitMQ: `brew install rabbitmq && brew services…
