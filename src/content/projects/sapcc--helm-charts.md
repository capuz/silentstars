---
repo: "sapcc/helm-charts"
name: "helm-charts"
description: "Helm charts for SAP Cloud Infrastructure managing openstack on kubernetes"
url: "https://github.com/sapcc/helm-charts"
language: "Go Template"
languages: ["Go Template", "Smarty"]
languagePcts: [50, 29]
topics: ["openstack", "helm", "kubernetes"]
stars: 41
forks: 111
openIssues: 24
closedIssues: 44
watchers: 42
contributors: 305
recentReleases: 0
createdAt: "2016-11-01T17:54:30Z"
lastCommitAt: "2026-07-03T12:40:10Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 92
undervaluedScore: 55
maintainers: ["sapcc-bot", "stwilkes", "nagadeesh-nagaraja"]
openGraphImageUrl: "https://opengraph.githubassets.com/6164419b6e24ec7ac2bc44a041fdc3e84e9820b5dd48236932503599843a461f/sapcc/helm-charts"
---

# SAP Cloud Infrastructure 

This repository contains Helm charts required by SAP Cloud Infrastructure.

## Structure

Charts are grouped logically into:

  * `common`: Reusable charts
  * `global`: Singletons that only exist once in a global context
  * `openstack`: Openstack and dependent or related services
  * `prometheus-exporters`: A curated collection of Prometheus exporters
  * `prometheus-rules`: Prometheus alert- & aggregation rules
  * `system`: Infrastructure required by the control plane

This structure is just a logical grouping, it does not represent deployable
units or imply other semantics.

## Charts

On the second level we expect a chart. This can be a single chart or
a meta-chart that describes a dependent set of components. Meta-charts contain
sub-charts or reference charts from other repositories using Helm dependencies.

```
.
└── system
    ├── dns
    │   └── charts
    │       ├── bind
    │       └── unbound
    ├── kube-system
    │   └── charts
    │       ├── ingress
    │       └── dashboard
    └── prometheus
        └── charts
            ├── kube-state-metrics
            ├── prometheus-collector
            └── prometheus-frontend
```

We imply…
