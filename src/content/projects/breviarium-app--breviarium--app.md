---
repo: "Breviarium-app/breviarium--app"
name: "breviarium--app"
description: "Open source Liturgy of the Hours app. Offline, light, fast."
readmeQualityOk: true
url: "https://github.com/Breviarium-app/breviarium--app"
homepage: "https://app.breviarium.es"
language: "Vue"
languages: ["Vue"]
languagePcts: [78]
topics: ["app", "breviary", "liturgia", "liturgy", "meditation", "mobile", "prayer-times", "liturgia-de-las-horas", "rezar", "capacitor"]
stars: 6
forks: 2
openIssues: 5
closedIssues: 20
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-01-27T23:58:07Z"
lastCommitAt: "2026-11-01T22:58:45Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 95
undervaluedScore: 85
maintainers: ["miguelms95", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/38b8da3474c9dd18d87232563134b64bbffe19aa3e308c21ad6c1df6a1ea7862/Breviarium-app/breviarium--app"
fundingLinks: ["GITHUB:https://github.com/miguelms95"]
discussionCount: 1
---

Breviarium App 🙏🏼

  Displays liturgical content and calendars of the Roman Rite of the Roman Catholic Church.<br>
  Supports Node v18+, Modern Browsers (desktop and mobile).

## Quickstart

This app uses [Breviarium](https://www.npmjs.com/package/breviarium) library (open source) with Liturgy of the hours.

To run the app:

```shell
# linux and mac users:
make install
# for windows users:
pnpm i
```

and run the ionic web app

```shell
# linux and mac users:
make run
# for windows users:
pnpm run dev
```

## CI/CD flow

GitHub Actions flow.

```mermaid
flowchart TB
    A["Push"] --> B{"Branch?"}
    B -- main --> C["Test"]
    B -- dev --> G["Test"]
    C --> D["Build"]
    D --> E["Deploy store Production"] & F["Deploy to Cloudflare"]
    E --> H["Update Version"]
    F --> H
    G --> I["Build"]
    I --> J["Deploy store Internal Track"] & K["Deploy to Cloudflare"]
    J --> L["Update code version"]
    K --> L

```
