---
repo: "pmh-only/welplan2"
name: "welplan2"
description: "삼성웰스토리/신세계푸드 삼성전자 구내식당 메뉴 API Wrapper / WebApp"
readmeQualityOk: true
url: "https://github.com/pmh-only/welplan2"
homepage: "https://welplan.pmh.codes"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [50, 45]
stars: 5
forks: 1
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-03-08T04:24:06Z"
lastCommitAt: "2026-08-21T04:09:56Z"
lastReleaseAt: "2026-07-21T23:38:13Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 70
maintainers: ["pmh-only"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ce9941e6a077f7410870117cd335aa410d47daff34c8b2ba7267a46adb8c65c/pmh-only/welplan2"
fundingLinks: ["GITHUB:https://github.com/pmh-only"]
---

# welplan2

`welplan2` provides TypeScript clients and a web app for browsing cafeteria menus from Samsung Welstory Plus and Shinsegae Food PlanEAT Choice.

The repository contains a SvelteKit web app, shared TypeScript models, and vendor-specific clients used to fetch menu, nutrition, and restaurant data.

## Demo

**https://welplan.pmh.codes**

## Features

- Aggregates restaurant and meal-time data from Welstory Plus and PlanEAT Choice.
- Exposes an unauthenticated Streamable HTTP MCP server at `/mcp` for restaurant search and date-specific menus.
- Supports gallery, take-in, and take-out menu views.
- Displays calories and detailed nutrition in the web UI.
- Caches restaurants, meal times, menus, and menu details in PostgreSQL.
- Uses a dedicated worker for periodic cache prefetching. The web app reads from PostgreSQL cache only.
- Sends take-in breakfast, lunch, and dinner menus either together or at independently configured times to Discord, Slack, Google Chat, Microsoft Teams, Mattermost, Dooray!, Swit, and JANDI.
- Builds and publishes a Docker image to GHCR.
- Publishes client packages to the GitHub Packages npm registry.

## Repository Layout

| Path                  |…
