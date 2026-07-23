---
repo: "virzs/Search-Next"
name: "Search-Next"
description: "A simple browser homepage / new tab page written in React, supporting local account switching, multi-engine search, URL navigation, and more features are under development."
originalDescription: "一个简单的浏览器主页 / 新标签页，由React编写，支持本地账户切换，多引擎搜索，网址导航，更多功能正在开发"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/virzs/Search-Next"
homepage: "https://search_next.virs.xyz/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["react", "homepage", "newtabpage"]
stars: 127
forks: 42
openIssues: 0
closedIssues: 26
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2021-02-28T03:28:24Z"
lastCommitAt: "2026-07-23T06:15:08Z"
lastReleaseAt: "2021-06-20T07:57:38Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 50
maintainers: ["virzs"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a69e855e8b068433fe6c45a9255d51adcb62d560885150c32d7802a26b6b525/virzs/Search-Next"
discussionCount: 1
---

# Search Next

Search Next is a desktop navigation and search entry that supports website favorites, applications, unified search, theme wallpapers, user data synchronization, and background management. The current repository is organized using pnpm workspace, with the frontend, backend, backend API, and built-in applications maintained in the same repository.

## Preview

## Project Structure

- `apps/web`: User-side main site, Vite + React.
- `apps/admin`: Management backend, Vite + React.
- `apps/api`: Backend API, NestJS + MongoDB + Redis.
- `apps/apps/*`: Built-in applications, each directory is an independent application project.
- `apps/docs`: Documentation site.
- `packages/*`: Shared packages.
- `scripts`: Application scaffolding, packaging, screenshot scripts, etc.

## Local Running Guide

### Environment Requirements

- Node.js 20.19+ or 22 LTS+.
- pnpm 10.x, the repository declares version as `pnpm@10.23.0`.
- MongoDB and Redis. The backend will connect to both when starting, and Redis is also used for caching and login status.

You can use Corepack to enable the corresponding pnpm version:

```bash
corepack enable
corepack prepare pnpm@10.23.0 --activate
```

###…
