---
repo: "SENERGY-Platform/web-ui"
name: "web-ui"
description: "Web-based graphical user interface for the SENERGY platform"
readmeQualityOk: true
url: "https://github.com/SENERGY-Platform/web-ui"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [76]
stars: 7
forks: 6
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 10
recentReleases: 0
createdAt: "2018-11-29T10:13:03Z"
lastCommitAt: "2026-10-06T10:42:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 82
undervaluedScore: 79
maintainers: ["zsco", "franzmueller", "IngoRoessner"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2a0c98ff37a4fbf1fbc927adfd180c06375d78d22cd286812fd6316a6194740/SENERGY-Platform/web-ui"
---

# SENERGY Web UI

The web frontend of the SENERGY platform: an Angular application through which
users manage devices and their metadata, build dashboards, run analytics and
process flows, configure imports and exports, and administer permissions.

It is a client only — every capability it shows belongs to a platform service
behind the gateway. There is no business logic here that is not also enforced
server-side.

## What it contains

`src/app` is split three ways: `core` for cross-cutting services, `widgets` for
dashboard widgets, and `modules` for the feature areas:

| Area | Modules |
|---|---|
| Devices and data | `devices`, `metadata`, `data`, `imports`, `exports` |
| Analytics and processes | `smart-services`, `processes`, `dashboard`, `cost`, `reporting` |
| Platform and access | `admin`, `permissions`, `credentials`, `settings`, `environments`, `info` |
| API documentation | `api-doc` — embeds the services' own OpenAPI and AsyncAPI documents |

Built with Angular 18 and Angular Material 18, tested with Karma.

## Run it

```bash
npm install
npm run start_dev
```

`start_dev` renders the runtime environment first (`build-env.sh`) and then
serves. On Windows use `npm run…
