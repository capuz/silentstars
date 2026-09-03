---
repo: "sapcc/helm-charts"
name: "helm-charts"
description: "Helm charts for SAP Cloud Infrastructure managing openstack on kubernetes"
readmeQualityOk: true
url: "https://github.com/sapcc/helm-charts"
language: "Go Template"
languages: ["Go Template", "Smarty"]
languagePcts: [52, 25]
topics: ["openstack", "helm", "kubernetes"]
stars: 42
forks: 123
openIssues: 24
closedIssues: 45
watchers: 42
contributors: 335
recentReleases: 0
createdAt: "2016-11-01T17:54:30Z"
lastCommitAt: "2026-09-03T08:13:37Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 92
undervaluedScore: 55
maintainers: ["sapcc-bot", "s10", "adziauho"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f385a9dab99e1fea8ca0a73064557b0b599ac1c12bb52435fcefd87f6e932cf/sapcc/helm-charts"
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
