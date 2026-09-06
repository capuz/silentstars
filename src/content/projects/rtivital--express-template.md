---
repo: "rtivital/express-template"
name: "express-template"
description: "A basic Express template with TypeScript, ESM, ESLint and Prettier. Node.js 24+ only."
readmeQualityOk: true
url: "https://github.com/rtivital/express-template"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["nodejs", "express", "postgresql", "prisma", "redis"]
stars: 23
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-05-14T19:22:40Z"
lastCommitAt: "2026-09-06T08:02:39Z"
lastReleaseAt: "2023-09-29T14:03:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 41
maintainers: ["renovate[bot]", "rtivital"]
openGraphImageUrl: "https://opengraph.githubassets.com/7540f717ae7e89318ad889a7248c86eaab1b58ba4db216e344dbdd26a90202be/rtivital/express-template"
---

# Express template

A basic express server template with TypeScript, ESM, Oxlint, and Oxfmt. Node.js 24+ is required.

## Getting started

1. Clone or download the repository or click "Use this template" button on GitHub.
2. Run `nvm use` – it will install the required Node.js version if it is not installed yet.
3. Install dependencies: `yarn`
4. Create `.env` file from `.env.example`: `cp .env.example .env`. Change the values if needed.
5. Generate OpenAPI specification: `npm run openapi:export`
6. Run the server: `npm run dev`

## Build for production

1. Run `npm run build`
2. To start production application run `npm start`

## npm scripts

| Script                   | Description                                                                    |
| :----------------------- | :----------------------------------------------------------------------------- |
| `npm run dev`            | start the server in development mode                                           |
| `npm run build`          | build the server for production                                                |
| `npm start`              | start the server in production mode (it is required to build the server first)…
