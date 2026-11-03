---
repo: "sapcc/helm-charts"
name: "helm-charts"
description: "Helm charts for SAP Cloud Infrastructure managing openstack on kubernetes"
readmeQualityOk: true
url: "https://github.com/sapcc/helm-charts"
language: "Go Template"
languages: ["Go Template", "Smarty"]
languagePcts: [52, 24]
topics: ["openstack", "helm", "kubernetes"]
stars: 43
forks: 125
openIssues: 24
closedIssues: 45
watchers: 39
contributors: 270
recentReleases: 0
createdAt: "2016-11-01T17:54:30Z"
lastCommitAt: "2026-11-03T10:52:26Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 92
undervaluedScore: 55
maintainers: ["sapcc-bot", "stwilkes", "ibakshay"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a76ea53e7ffaf6af678aff8b7ac9ee92b7686ffc96c248da96ac46f541d3959/sapcc/helm-charts"
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
