---
repo: "yuuki/shawk"
name: "shawk"
description: "Record of network dependencies of your servers: eBPF traces which process talks to which service, stored in PostgreSQL with observation coverage, metrics in Prometheus, dashboards in Grafana."
readmeQualityOk: true
url: "https://github.com/yuuki/shawk"
language: "C"
languages: ["C", "Go"]
languagePcts: [64, 33]
topics: ["network-monitoring", "observability", "tcp", "tracing", "ebpf", "golang", "grafana", "opentelemetry", "postgresql", "prometheus"]
stars: 58
forks: 4
openIssues: 46
closedIssues: 42
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2019-06-12T05:56:43Z"
lastCommitAt: "2026-11-20T12:02:32Z"
lastReleaseAt: "2020-04-15T02:03:01Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 47
maintainers: ["yuuki", "claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/191506750/781db900-79a5-11ea-95bd-f5083da996db"
---

# shawk

shawk records the network dependencies of your servers: which process talks
to which TCP/UDP service on every host, or to which local service on its
Unix socket, since when, until when, and how much.
It traces sockets in the kernel with eBPF, keeps the dependencies in
PostgreSQL, sends their traffic to Prometheus and shows both in Grafana.

It is meant for the questions you ask before changing a system: *who still
uses this database? what appeared after the deployment? did anything use
this host in the last 90 days, and were we watching?*
