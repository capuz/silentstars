---
repo: "linagora/twake-calendar-frontend"
name: "twake-calendar-frontend"
description: "Fontend for Twake Calendar"
readmeQualityOk: true
url: "https://github.com/linagora/twake-calendar-frontend"
language: "TypeScript"
languages: ["TypeScript", "Java"]
languagePcts: [79, 20]
stars: 10
forks: 3
openIssues: 51
closedIssues: 707
watchers: 7
contributors: 45
recentReleases: 2
createdAt: "2025-05-12T11:19:28Z"
lastCommitAt: "2026-09-29T08:12:14Z"
lastReleaseAt: "2026-09-17T11:29:39Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 98
undervaluedScore: 74
maintainers: ["chibenwa", "lethemanh", "Arsnael"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a1b21ff590cd60eb867a6cdd3d68a14eaf375092797d6172bc129cd0f4bac7b/linagora/twake-calendar-frontend"
---

# Twake Calendar Frontend

## Goals

This project aims at serving a Single Page Application allowing a user to interact with its calendar.

This frontend application is built in a monorepo structure with Rsbuild, React, and TypeScript. It interacts with:

- [esn-sabre](https://github.com/linagora/esn-sabre/) CalDAV + CardDAV server, tailor made for LINAGORA needs.
- [Twake Calendar side service](https://github.com/linagora/twake-calendar-side-service) that delivers additional backend features for Sabre.

It is meant as a drop-in replacement of [esn-frontend-calendar](https://github.com/linagora/esn-frontend-calendar).

---

## Project Structure

The repository is organized as a monorepo workspace:

- **[`apps/private`](https://github.com/linagora/twake-calendar-frontend/blob/HEAD/apps/private)**: The main private calendar application. Accessible by authenticated users.
- **[`apps/public`](https://github.com/linagora/twake-calendar-frontend/blob/HEAD/apps/public)**: The public calendar application. Used for public event previews and shared links.
- **[`common`](https://github.com/linagora/twake-calendar-frontend/blob/HEAD/common)**: Shared components, hooks, translation locales,…
