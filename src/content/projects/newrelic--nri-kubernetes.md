---
repo: "newrelic/nri-kubernetes"
name: "nri-kubernetes"
description: "New Relic integration for Kubernetes"
readmeQualityOk: true
url: "https://github.com/newrelic/nri-kubernetes"
homepage: "https://docs.newrelic.com/docs/integrations/kubernetes-integration/get-started/introduction-kubernetes-integration"
language: "Go"
languages: ["Go"]
languagePcts: [88]
topics: ["kubernetes", "monitoring"]
stars: 50
forks: 58
openIssues: 3
closedIssues: 242
watchers: 4
contributors: 77
recentReleases: 0
createdAt: "2020-07-16T12:01:22Z"
lastCommitAt: "2026-11-23T12:23:26Z"
lastReleaseAt: "2020-11-13T15:28:37Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 66
maintainers: ["renovate[bot]", "NewRelic-K8s-Agents-Bot", "TmNguyen12"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c7d4a6b0a512961595c0ee7d4c3c413275b652c9c0208f10b9c998b47d12229/newrelic/nri-kubernetes"
---

# New Relic integration for Kubernetes [](https://codecov.io/gh/newrelic/nri-kubernetes)

New Relic's Kubernetes integration gives you full observability into the health and performance of your environment,
no matter whether you run Kubernetes on-premises or in the cloud.
It gives you visibility about Kubernetes namespaces, deployments, replica sets, nodes, pods, and containers.
Metrics are collected from different sources:

* [kube-state-metrics service](https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-state-metrics) provides information about state of
Kubernetes objects like namespace, replicaset, deployments and pods (when they are not in running state)
* `/stats/summary` kubelet endpoint gives information about network, errors, memory and CPU usage
* `/pods` kubelet endpoint provides information about state of running pods and containers
* `/metrics/cadvisor` cAdvisor endpoint provides missing data that is not included in the previous sources.
* `/metrics` from control plane components: `ETCD`,`controllerManager`, `apiServer` and `scheduler`
