---
repo: "cortexproject/cortex-helm-chart"
name: "cortex-helm-chart"
description: "Helm chart for Cortex"
readmeQualityOk: true
url: "https://github.com/cortexproject/cortex-helm-chart"
language: "Go Template"
languages: ["Go Template", "Mustache"]
languagePcts: [47, 37]
topics: ["prometheus", "helm", "cortex"]
stars: 159
forks: 176
openIssues: 12
closedIssues: 172
watchers: 9
contributors: 76
recentReleases: 0
createdAt: "2019-06-05T16:21:47Z"
lastCommitAt: "2026-11-19T05:04:22Z"
lastReleaseAt: "2021-12-01T21:43:28Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 51
maintainers: ["renovate[bot]", "CharlieTLe", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a9e8483c2fcfe20f927ca68b2cf5f5ab4a15236b97adc734dbda0b939af3a6dc/cortexproject/cortex-helm-chart"
---

# cortex

 

Horizontally scalable, highly available, multi-tenant, long term Prometheus.

**Homepage:** <https://cortexmetrics.io/>

## Maintainers

| Name | Email | Url |
| ---- | ------ | --- |
| Tom Hayward | <thayward@infoblox.com> | <https://github.com/kd7lxl> |
| Niclas Schad | <niclas.schad@stackit.cloud> | <https://github.com/nschad> |

## Documentation

Checkout our documentation for the cortex-helm-chart [here](https://cortexproject.github.io/cortex-helm-chart/)

## Dependencies

### Key-Value store

Cortex requires a Key-Value (KV) store to store the ring. It can use traditional KV stores like [Consul](https://www.consul.io/) or [etcd](https://etcd.io/), but it can also build its own KV store on top of memberlist library using a gossip algorithm.

The recommended approach is to use the built-in memberlist as a KV store, where supported.

External KV stores can be installed alongside Cortex using their respective helm charts https://github.com/bitnami/charts/tree/master/bitnami/etcd and https://github.com/hashicorp/consul-k8s/tree/main/charts/consul.
