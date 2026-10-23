---
repo: "weifuwan/yak-ops"
name: "yak-ops"
description: "Open-source data operations platform for data integration, workflow automation, data quality, and governance."
originalDescription: "Open-source data operations platform for data integration, workflow automation, data quality, and governance."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/weifuwan/yak-ops"
homepage: "https://yak-ops.com/"
language: "Java"
languages: ["Java"]
languagePcts: [77]
stars: 58
forks: 19
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 5
createdAt: "2026-07-22T06:45:25Z"
lastCommitAt: "2026-10-23T09:32:40Z"
lastReleaseAt: "2026-10-22T05:22:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 41
maintainers: ["weifuwan"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3a23130a71fbfb2906410a7e30e40606be27f3a8097d3003a3928c2f51cdadc/weifuwan/yak-ops"
---

# Yak Ops

Build, move, and operate data with confidence.

Yak Ops is a data platform for data integration and synchronization scenarios. The current `main` branch is still in development: Task Definition and YakFlow Core / Runtime / Connectors exist independently, and product-side synchronous execution has not yet been reconnected. For capabilities of published versions, see the corresponding Release.

## Build and Run

Running the Distribution requires Java 21, and you must configure a metadata database connection and a Datasource Master Key.

```sh
# Docker Compose, with built-in metadata database
cp .env.example .env
# Edit .env as described below, then start
docker compose up -d
```

When using an empty database for the first time, set `YAK_SECURITY_BOOTSTRAP_ENABLED=true` and a separate strong password `YAK_SECURITY_BOOTSTRAP_PASSWORD` in `.env`. After startup succeeds and the administrator is created, change the switch back to `false` and redeploy. Environments that already have user data should keep it off. Bootstrap is not allowed to be enabled if no administrator password is configured.

In non-local environments, you must change the example database password and set a…
