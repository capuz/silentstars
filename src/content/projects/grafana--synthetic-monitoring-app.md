---
repo: "grafana/synthetic-monitoring-app"
name: "synthetic-monitoring-app"
description: "Synthetic Monitoring frontend application"
readmeQualityOk: true
url: "https://github.com/grafana/synthetic-monitoring-app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["grafana", "monitoring", "synthetic-monitoring", "grafana-synthetic-monitoring"]
stars: 171
forks: 26
openIssues: 82
closedIssues: 313
watchers: 135
contributors: 100
recentReleases: 0
createdAt: "2020-01-09T19:47:17Z"
lastCommitAt: "2026-09-18T08:27:36Z"
lastReleaseAt: "2020-07-30T21:11:17Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 94
undervaluedScore: 38
maintainers: ["VikaCep", "renovate-sh-app[bot]", "sm-release-app[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/657bcc8026a3a0cc9015d4039f531ec2dccc1efc3fc90a1017bd05fa90168422/grafana/synthetic-monitoring-app"
---

# Synthetic monitoring application

Synthetic Monitoring is a blackbox monitoring solution provided as part of [Grafana Cloud](https://grafana.com/products/cloud/).
Synthetic Monitoring provides users with insights into how their applications and services are behaving from an external point of view.
Users can define checks to continually test remote targets from 1 or more probe locations around the world to assess the availability, performance and correctness of the services. As each check runs, metrics and logs are collected and published to the user's Grafana Cloud service. Metrics are published to Grafana Cloud Prometheus and logs are published to Grafana Cloud Loki.

Synthetic monitoring is the successor to the original [worldping application](https://github.com/raintank/worldping-app).
The refreshed Synthetic Monitoring product focuses on reducing complexity and taking advantage of Grafana Cloud capabilities.

## Check Types

Users can define HTTP/HTTPS, DNS, TCP and ICMP Ping checks to monitor their remote targets. Internally, the Synthetic Monitoring solution uses the [Prometheus Blackbox exporter](https://github.com/prometheus/blackbox_exporter) for executing the checks…
