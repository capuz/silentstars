---
repo: "monitoring-mixins/website"
name: "website"
description: "Prometheus monitoring mixins"
readmeQualityOk: true
url: "https://github.com/monitoring-mixins/website"
homepage: "https://monitoring.mixins.dev"
language: "Shell"
languages: ["Shell", "HTML"]
languagePcts: [62, 24]
topics: ["prometheus", "mixins", "alerts", "dashboards", "prometheus-alerts", "grafana-dashboard", "yaml", "jsonnet"]
stars: 279
forks: 64
openIssues: 1
closedIssues: 11
watchers: 8
contributors: 15
recentReleases: 0
createdAt: "2020-06-08T16:27:35Z"
lastCommitAt: "2026-07-23T06:15:25Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 96
undervaluedScore: 35
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/39e5e8797d9fa41c9deda1e1556bb07ed5b0b15cbc2db092176ac537f7871dbb/monitoring-mixins/website"
---

# Monitoring Mixins site

## Adding new mixin

0. Install [required software](#requirements)
1. Add new mixin to [mixins.json](https://github.com/monitoring-mixins/website/blob/HEAD/mixins.json) file
2. Run `make`

## Requirements

- jq
- make
- git
- golang
