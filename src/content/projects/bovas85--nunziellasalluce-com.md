---
repo: "bovas85/nunziellasalluce.com"
name: "nunziellasalluce.com"
description: "Nunziella Salluce portfolio site"
readmeQualityOk: true
url: "https://github.com/bovas85/nunziellasalluce.com"
language: "Vue"
languages: ["Vue", "TypeScript"]
languagePcts: [45, 33]
stars: 12
forks: 7
openIssues: 1
closedIssues: 8
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2018-06-30T20:16:37Z"
lastCommitAt: "2026-11-18T12:05:46Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 71
maintainers: ["alessandro-giordo", "bovas85", "google-labs-jules[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b24c557a4e460380862fccb3664247738428c4ff6cff5ec399be9ff89e456b2/bovas85/nunziellasalluce.com"
---

# Nunziella Salluce Design

> Nuxt 4 + WordPress REST API for a portfolio site

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn preview

# generate static project for deployment
$ yarn generate
```

## Deployment

Production and PR previews are deployed to Cloudflare Workers via Alchemy
(`.github/workflows/deploy-cloudflare.yml`):

```bash
# deploy an isolated preview stage via Alchemy
$ yarn alchemy deploy --yes

# deploy production (requires CASE_STUDY_PASSWORD)
$ CASE_STUDY_PASSWORD="<PASSWORD>" yarn alchemy deploy --stage prod --adopt --yes
```

## Codacy Static Analysis

The project integrates with Codacy for code quality, security, and
coverage reporting.

### AI Assistant Integration (MCP & Skills)

You can integrate Codacy code quality and security reviews directly into your
AI coding assistant (e.g., Cursor, VS Code, Windsurf, Claude Desktop, or
Gemini). For installation and setup instructions tailored to your specific
editor or AI model, refer to the
[Codacy Skills repository](https://github.com/codacy/codacy-skills).
