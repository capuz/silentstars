---
repo: "wiremind/wiremind-grafana-dashboards"
name: "wiremind-grafana-dashboards"
description: "Set of useful Grafana Dashboards used at Wiremind"
readmeQualityOk: true
url: "https://github.com/wiremind/wiremind-grafana-dashboards"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 15
forks: 10
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 9
recentReleases: 0
createdAt: "2021-02-01T09:26:25Z"
lastCommitAt: "2026-09-07T08:35:16Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 79
undervaluedScore: 49
maintainers: ["desaintmartin", "nahuel11500", "spnngl"]
openGraphImageUrl: "https://opengraph.githubassets.com/3a08696be8f90e30aa4e0d6a796522aed0d6f715f539a296a964c1f766fc706f/wiremind/wiremind-grafana-dashboards"
---

# wiremind-grafana-dashboards

This is a set of useful Grafana Dashboards used and maintained at Wiremind, which we think will be useful for other people.

## Contribute

To export an existing Grafana dashboard:

- Export from Grafana UI using the "Export the dashboard to use in another instance" toggle
- Please add the pre-commit hook before committing so that datasources are automatically cleaned-up:

`git config core.hooksPath .githooks`
