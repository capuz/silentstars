---
repo: "woowacourse-teams/2026-ChongChong"
name: "2026-ChongChong"
description: "Leave tedious study management to ChongChong now 🥕"
originalDescription: "번거로운 스터디 운영, 이제 총총에게 맡기세요🥕"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/woowacourse-teams/2026-ChongChong"
homepage: "https://www.chongchong.kr"
language: "Java"
languages: ["Java", "TypeScript"]
languagePcts: [64, 33]
stars: 5
forks: 2
openIssues: 37
closedIssues: 161
watchers: 0
contributors: 5
recentReleases: 2
createdAt: "2026-08-03T00:06:19Z"
lastCommitAt: "2026-10-15T08:32:44Z"
lastReleaseAt: "2026-10-14T15:03:52Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 69
maintainers: ["Antoliny0919", "wontop02", "DongEun02"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0bf6b1b89dc51316ddf2407c61d56353e6e6dea45412dd06383d70081357e8d/woowacourse-teams/2026-ChongChong"
discussionCount: 8
---

# ChongChong

This is the monorepo for ChongChong, the 2026 team project of Woowacourse Tech Course.

## Tech Stack

| Area     | Technology                                                             |
| -------- | ---------------------------------------------------------------------- |
| Frontend | React 19, TypeScript 6, Webpack 5, pnpm 11 |
| Backend  | Java 25, Spring Boot 4, Gradle                                         |

## Repository Structure

```text
.
├── backend/     # Spring Boot application
├── frontend/    # React application
├── docs/        # Project documentation
└── .github/     # GitHub Actions and collaboration templates
```

## Local Setup

### Frontend

```bash
cd frontend
corepack enable
pnpm install
pnpm start
```

### Backend

```bash
cd backend
./gradlew bootRun
```

## Verification

```bash
cd frontend
pnpm type-check
pnpm lint
pnpm build
```

```bash
cd backend
./gradlew test
```

## Branch Flow

```text
fe/*      ─┐
be/*      ─┼→ dev → prod
common/*  ─┘
```

`dev` and `prod` are integration branches that verify frontend and backend sources together. Actual deployment does not split into further branches; instead, it runs independently via `fe-v<버전>`…
