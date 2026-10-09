---
repo: "flicoH/ClassroomToolkit"
name: "ClassroomToolkit"
description: "Classroom Toolkit"
originalDescription: "课堂工具包"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/flicoH/ClassroomToolkit"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["monorepo", "nest", "next", "typeorm", "typescript"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-18T04:20:02Z"
lastCommitAt: "2026-10-09T10:50:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 73
undervaluedScore: 41
maintainers: ["flicoH"]
openGraphImageUrl: "https://opengraph.githubassets.com/b861a73a6be217304e86b23f407b884a7876bb76631393dcc7b70b80f4fb7d6d/flicoH/ClassroomToolkit"
discussionCount: 0
---

# Classroom Widget

A classroom widget for teachers that helps them manage classes and track student attendance.

## Running

- Install dependencies first

```
pnpm install
```

- Run

```
pnpm dev
```

## Development Standards and Verification

Development and review follow the [Project Development and Acceptance Standards](https://github.com/flicoH/ClassroomToolkit/blob/HEAD/docs/development-standards.md). The recognition rules for course PDFs are also described in the [Course PDF Recognition Benchmark](https://github.com/flicoH/ClassroomToolkit/blob/HEAD/docs/semester-reports-setup.md#课程-pdf-识别基准). User-facing dialogs must use the in-site components; the browser's native `alert/confirm/prompt` are prohibited. Behavior changes must include corresponding tests and code comments that explain the key constraints.

Before committing, run the full automated verification:

```bash
pnpm verify
```

This command runs the standards checks, the Backend/Web/Admin tests, and builds for all three ends. GitHub Actions for Pull Requests also runs the same command.

## Port Notes

- 3000 is the backend API port
- 3001 is the client access port
- 8080 is the admin port

## Backend

- Built with…
