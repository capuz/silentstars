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
languagePcts: [76]
stars: 58
forks: 19
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 5
createdAt: "2026-07-22T06:45:25Z"
lastCommitAt: "2026-10-24T00:15:49Z"
lastReleaseAt: "2026-10-22T05:22:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 41
maintainers: ["weifuwan", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d754d746f6b14d52bf819010c20e0bb99d7fb504a04ae61c624518b0a3eb4ac/weifuwan/yak-ops"
---

# Yak Ops

Build, move, and operate data with confidence.

Yak Ops is a data platform for data integration and synchronization scenarios. The current `main` branch is still under development: Task Definition and YakFlow Core / Runtime / Connectors exist independently, and product-side synchronous execution has not yet been reconnected. For the capabilities of published versions, see the corresponding Release.

## Build and Run

Running the Distribution requires Java 21, along with a metadata database connection and a Datasource Master Key.

```sh
# Docker Compose, with built-in metadata database
cp .env.example .env
# Edit .env as described below, then start
docker compose up -d
```

When using an empty database for the first time, set `YAK_SECURITY_BOOTSTRAP_ENABLED=true` and a separate strong password `YAK_SECURITY_BOOTSTRAP_PASSWORD` in `.env`. After startup succeeds and the administrator is created, change the switch back to `false` and redeploy. Environments that already have user data should keep it disabled. Initialization may not be enabled unless an administrator password is configured.

In non-local environments, you must change the example database password and set a…
