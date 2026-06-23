---
repo: "grafana/synthetic-monitoring-agent"
name: "synthetic-monitoring-agent"
description: "Synthetic Monitoring agent"
url: "https://github.com/grafana/synthetic-monitoring-agent"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["grafana", "monitoring", "prometheus", "blackbox-exporter", "synthetic-monitoring", "golang", "hacktoberfest", "grafana-synthetic-monitoring", "k6"]
stars: 216
forks: 30
openIssues: 49
closedIssues: 75
watchers: 134
contributors: 1300
recentReleases: 0
createdAt: "2020-02-11T21:24:40Z"
lastCommitAt: "2026-06-23T06:41:25Z"
lastReleaseAt: "2023-02-23T16:17:56Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 91
undervaluedScore: 35
maintainers: ["renovate-sh-app[bot]", "sm-release-app[bot]", "ka3de"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d79cc4b3e7613bc9bdf99820a373b8f647295387eabebc107b7a7139140f15d/grafana/synthetic-monitoring-agent"
discussionCount: 1
---

Synthetic Monitoring Agent
==========================
This is the 'worker' for Grafana's [Synthetic Monitoring application](https://github.com/grafana/synthetic-monitoring-app). The agent provides probe functionality and executes network [checks](https://github.com/grafana/synthetic-monitoring-app/blob/main/README.md#check-types) for monitoring remote targets. 

Please [install](https://grafana.com/grafana/plugins/grafana-synthetic-monitoring-app/installation) Synthetic Monitoring 
in your Grafana Cloud or local Grafana instance before setting up your own private probe. You may need to generate a [new API key](https://grafana.com/profile/api-keys) to initialize the app.

Probes
------
Probes run [checks](https://github.com/grafana/synthetic-monitoring-app/blob/main/README.md#check-types) from 
distributed locations around the world and send the resulting metrics and events directly to 
[Grafana Cloud](https://grafana.com/products/cloud/) Prometheus and Loki services. 

You can select 1 or more **public** probes to run checks from or [run your own **private** probes](https://grafana.com/docs/grafana-cloud/synthetic-monitoring/private-probes/)
from any environment you choose.

Run…
