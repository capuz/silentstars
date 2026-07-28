---
repo: "Enplug/app-seed"
name: "app-seed"
description: "Seed project for DisplayOS apps using the web SDK."
readmeQualityOk: true
url: "https://github.com/Enplug/app-seed"
homepage: "https://developers.enplug.com"
language: "TypeScript"
languages: ["TypeScript", "SCSS", "JavaScript"]
languagePcts: [46, 27, 21]
stars: 7
forks: 1
openIssues: 0
closedIssues: 3
watchers: 23
contributors: 39
recentReleases: 0
createdAt: "2015-08-11T21:35:45Z"
lastCommitAt: "2026-07-28T14:56:38Z"
status: "watched"
tags: ["legacy_hero", "community_watch"]
healthScore: 87
undervaluedScore: 38
maintainers: ["jesusmarencodev"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa1381679e5af453cffd96004bb9422ed025ada36c14e6fb60b0fe5ab2c055ea/Enplug/app-seed"
---

# App Seed

This is a seed project for Enplug Apps. It consists of two subprojects:

- `app` used for displaying content on the Enplug Player. Normally it communicates with the Player API to generate content to be displayed, based on asset data
- `dashboard` for configuring assets - the content that will be displayed on the screens.

Neither subproject is ejected, meaning all the config happens through `angular.json`.

## Migration Status

> **The two subprojects are currently on different stacks.** Only `dashboard` has been migrated; `app` is still the legacy seed and will be migrated later.

| Subproject | Status | Stack | Package manager | How it serves locally |
|------------|--------|-------|-----------------|-----------------------|
| `dashboard` | Migrated | Angular 21, standalone components, Biome | pnpm (11.9.0 pinned) | `pnpm start` — reads certs from `cert/` via `angular.json` |
| `app` | Pending migration | Legacy Angular, NgModules | npm/yarn + `@enplug/scripts` | `npm run start:ssl` — reads certs from `dev.private.json` |

Until `app` is migrated, keep in mind that commands, tooling, and Node versions differ between the two folders: everything documented below for…
