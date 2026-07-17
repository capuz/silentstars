---
repo: "lappland22233/tgtc"
name: "tgtc"
description: "A cloud storage system using TGBOT API for file storage, with PostgreSQL as the database."
originalDescription: "通过TGBOT API存储文件，PostgreSQL为数据库的网盘"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/lappland22233/tgtc"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [62, 35]
stars: 30
forks: 9
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-16T10:18:57Z"
lastCommitAt: "2026-07-17T05:59:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 38
maintainers: ["lappland22233"]
openGraphImageUrl: "https://opengraph.githubassets.com/9babf1e66f2d2e1901b8ef32e8bf4bb52a262519943d51076ba8be150cf1bc65/lappland22233/tgtc"
---

# File Distribution System

A file distribution system based on NestJS + Vue 3 + PostgreSQL, using the Telegram Bot API as the storage backend, supporting encrypted access, time-limited sharing, and access count control.

## Features

### Authentication
- Email registration and login, email verification code (configurable switch)
- JWT authentication (HttpOnly Cookie), three-level role permissions (super_admin / admin / user)
- Login failure rate limiting (IP + email dimension, 5 failed attempts lock for 15 minutes)
- Verification code uses crypto random number + SHA256 hash storage, 5 errors lock for 5 minutes
- Request-level Cookie secure dynamic judgment (compatible with reverse proxy X-Forwarded-Proto)
- Cross-tab logout synchronization (BroadcastChannel)

### File Management
- Drag-and-drop upload / popup batch upload
- Business layer dynamic size limit
- File list search, pagination, type filtering (pagination/search parameters persisted to URL)
- **Tag Management**: Create/edit/delete tags, support multi-tag filtering (AND logic), quick edit tags in file list
- Set public/private, access count limit, sharing validity period (including expiration check)
- Batch select images…
