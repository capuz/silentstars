---
repo: "ToramCalculator-Team/ToramCalculator"
name: "ToramCalculator"
description: "ToramOnline's player configuration calculation tool"
originalDescription: "ToramOnline's player configuration calculation tool"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ToramCalculator-Team/ToramCalculator"
homepage: "https://app.kiaclouth.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["electricsql", "kysely", "localfirst", "pglite", "pwa", "solidstart", "tailwindcss", "tanstack-form", "tanstack-table", "tanstack-virtual"]
stars: 8
forks: 3
openIssues: 1
closedIssues: 9
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2024-08-16T10:02:31Z"
lastCommitAt: "2026-10-10T10:03:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 84
maintainers: ["KiaClouth", "Clouthber"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc6e910dbc90fb624bf90b1d99d16a2370902b9c5d20d712969877e9761b9db8/ToramCalculator-Team/ToramCalculator"
---

# ToramCalculator

## Project Introduction

ToramCalculator is an assistant tool for Toram Online, used for game Wiki data management, team configuration optimization, battle process simulation, and frame-by-frame data analysis.

## Online Access

- Application: [https://app.kiaclouth.com](https://app.kiaclouth.com)
- Wiki: [](https://deepwiki.com/ToramCalculator-Team/ToramCalculator)

## Running Locally

### Requirements

- Docker
- Node.js >= 24
- pnpm, using the version declared by `packageManager` in `package.json`

### Quick Start

```bash
# 1. Install dependencies
pnpm install

# 2. Copy the environment variable file
cp .env.example .env

# 3. Initialize the local environment
pnpm run setup

# 4. Start the development server
pnpm dev
```

## Contributing

For the development workflow, database, code generation, script descriptions, and pre-commit checks, see [CONTRIBUTING.md](https://github.com/ToramCalculator-Team/ToramCalculator/blob/HEAD/CONTRIBUTING.md).
