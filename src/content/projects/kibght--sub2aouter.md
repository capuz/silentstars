---
repo: "kibght/sub2aouter"
name: "sub2aouter"
description: "Sub2API Apophis full front-end theme distribution: dynamic branding, automatic upstream sync, GHCR images, and local Windows run"
originalDescription: "Sub2API Apophis 全前端主题发行版：动态品牌、自动同步上游、GHCR 镜像和 Windows 本地运行"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/kibght/sub2aouter"
homepage: "https://api.kinght.top/"
language: "Go"
languages: ["Go"]
languagePcts: [74]
topics: ["ai-gateway", "docker", "sub2api", "vue", "apophis-theme"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 42
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-29T10:29:40Z"
lastCommitAt: "2026-11-07T10:37:03Z"
lastReleaseAt: "2026-08-01T14:45:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 63
maintainers: ["kibght", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9cc1432301c7bdd6121823828664b29638030abb5dad4e30d39bacc61d49224c/kibght/sub2aouter"
---

# Sub2Aouter Apophis Theme

**A sustainably updatable, customized front-end distribution based on Sub2API**

Apophis-style home page, authentication pages, user console, and admin dashboard. Retains Sub2API's original backend, database, APIs, authentication, and business features.

## Project Positioning

This repository does not reimplement Sub2API and does not modify its business protocols. Instead, it maintains a repeatably applicable front-end theme layer on top of the official upstream source code:

```text
Wei-Shaw/sub2api upstream source
            │
            ▼
Apply theme/apophis overlay
            │
            ▼
Frontend/backend tests + Docker build
            │
      ┌─────┴─────┐
      ▼           ▼
themed-release   GHCR image
```

- `main`: permanent theme, overlay scripts, workflows, and release configuration.
- `themed-release`: deployable source code automatically generated from the latest upstream.
- `ghcr.io/kibght/sub2aouter:latest`: latest themed image, published after tests pass.
- `ghcr.io/kibght/sub2aouter:upstream-<commit>`: rollback-capable image pinned to a fixed upstream version.

## Front-end Changes

### Public Home Page

- Black-and-white grid…
