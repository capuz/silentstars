---
repo: "wevisdemo/politigraph"
name: "politigraph"
description: "Civic-initiated open API for Thai political data"
readmeQualityOk: true
url: "https://github.com/wevisdemo/politigraph"
homepage: "https://politigraph.wevis.info"
language: "TypeScript"
languages: ["TypeScript", "Vue", "MDX"]
languagePcts: [36, 36, 22]
stars: 7
forks: 0
openIssues: 4
closedIssues: 22
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2024-12-11T09:05:32Z"
lastCommitAt: "2026-11-10T14:50:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 76
maintainers: ["Th1nkK1D", "NamsaiJug"]
openGraphImageUrl: "https://opengraph.githubassets.com/302f1aaf9b9a0c49301238989f2e5d4e6b055920617f448719891491a4fbc6f8/wevisdemo/politigraph"
discussionCount: 0
---

# Politigraph

A (WIP) civic-initiated open API for Thai political data

To learn more about the data and API, visit the [documentations](https://politigraph.wevis.info/docs)

> [!WARNING]
> We are not responsible for any misinformation or consequence of any usage on our data. These open data are collected, transformed, validated, and published by us, a civil society, to push the open API standard in Thailand. We are not the official government institution who originally own and responsible in publishing these data. Please send us any feedback or suggestion via team@wevis.info or create an issue on GitHub.

## 1. The Monorepo

Managed with [Turborepo](https://turborepo.com/)

- **/apps** : Application repository
  - **/admin** : Admin dashboard for managing Politigraph data to be built as SPA
  - **/api** : Backend API for GraphQL, authentication, and static file (web/assets) serving
  - **/docs** : Landing page and documentations to be built as static website
- **/packages** : Shared packages between app
  - **/auth** : Authentication and related database management
  - **/config** : Centralized environment variable validation
  - **/graphql** : Schemas and custom resolvers…
