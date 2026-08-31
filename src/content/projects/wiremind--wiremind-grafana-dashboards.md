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
lastCommitAt: "2026-08-31T09:59:44Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 79
undervaluedScore: 48
maintainers: ["desaintmartin", "nahuel11500", "spnngl"]
openGraphImageUrl: "https://opengraph.githubassets.com/d5ab661c49dcdcba2f588d7158dbffd30d77c57997dfe90e482f439597d709ab/wiremind/wiremind-grafana-dashboards"
---

# wiremind-grafana-dashboards

This is a set of useful Grafana Dashboards used and maintained at Wiremind, which we think will be useful for other people.

## Contribute

To export an existing Grafana dashboard:

- Export from Grafana UI using the "Export the dashboard to use in another instance" toggle
- Please add the pre-commit hook before committing so that datasources are automatically cleaned-up:

`git config core.hooksPath .githooks`
