---
repo: "wjn6/GongXi-Mail"
name: "GongXi-Mail"
description: "An all-in-one Outlook mailbox pool management solution, built for automation scenarios."
originalDescription: "一站式 Outlook 邮箱池管理解决方案，专为自动化场景打造"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/wjn6/GongXi-Mail"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 135
forks: 54
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-29T18:54:41Z"
lastCommitAt: "2026-11-27T12:57:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 69
undervaluedScore: 22
maintainers: ["wjn6"]
openGraphImageUrl: "https://opengraph.githubassets.com/4954f2315f84b3b2df6c1f501b621f7b600c06a688b67cbebb2d0d99775e7970/wjn6/GongXi-Mail"
---

# GongXi Mail (廾匸邮箱)

An API service for receiving mail using Microsoft OAuth2.

## Tech Stack

- **Backend**: Fastify 5 + TypeScript + Prisma 6
- **Database**: PostgreSQL
- **Cache**: Redis
- **Frontend**: React + Ant Design + Vite

## Project Structure

```
├── server/                 # Backend service
│   ├── src/
│   │   ├── config/        # Environment configuration
│   │   ├── lib/           # Core library
│   │   ├── plugins/       # Fastify plugins
│   │   ├── modules/       # Business modules
│   ├── prisma/            # Database schema
│   └── package.json
├── web/                    # Admin dashboard frontend
├── docker-compose.yml
└── Dockerfile
```

## Quick Start

### Docker Deployment

Secrets do not need to be prepared manually: on first startup, `JWT_SECRET`, `ENCRYPTION_KEY`, and a strong random `ADMIN_PASSWORD` are generated automatically and persisted to `data/bootstrap-secrets.json` in the `app_data` volume (they remain unchanged after restarting and rebuilding the container). The initial admin password is printed only once in the first-startup logs; you can retrieve it at any time with `docker compose logs app | grep "initial admin password"`.
