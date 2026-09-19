---
repo: "newrelic/newrelic-prometheus-configurator"
name: "newrelic-prometheus-configurator"
description: "New Relic Prometheus Configurator"
readmeQualityOk: true
url: "https://github.com/newrelic/newrelic-prometheus-configurator"
language: "Go"
languages: ["Go"]
languagePcts: [91]
stars: 14
forks: 16
openIssues: 3
closedIssues: 42
watchers: 3
contributors: 52
recentReleases: 0
createdAt: "2022-06-21T14:09:02Z"
lastCommitAt: "2026-09-19T01:15:35Z"
lastReleaseAt: "2022-10-20T07:26:48Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 79
maintainers: ["renovate[bot]", "NewRelic-K8s-Agents-Bot", "dbudziwojskiNR"]
openGraphImageUrl: "https://opengraph.githubassets.com/da2dc82dc92421800db8a99b6cce1a06859a4797b71c95cb87941ab42deeaa64/newrelic/newrelic-prometheus-configurator"
---

# New Relic Prometheus Configurator [](https://codecov.io/gh/newrelic/newrelic-prometheus-configurator)

New Relic Prometheus Configurator (a.k.a. New Relic Prometheus Agent) gives you full observability of your services exposing [Prometheus](https://github.com/prometheus/prometheus) metrics.

This repo contains the code base of the `newrelic-prometheus-configurator` and the [Helm Chart](https://github.com/newrelic/newrelic-prometheus-configurator/blob/HEAD/charts/newrelic-prometheus-agent/README.md) to install the solution in Kubernetes.

The `newrelic-prometheus-configurator` uses a custom configuration that simplifies the experience related to configure features like discovery, filtering, metrics decoration, and sharding.

```mermaid
flowchart LR
    id1>NewRelic Config]   --> Configurator
    Configurator           --> id2>Prometheus Config]
    id2>Prometheus Config] --> id3(Prometheus Agent)

style id1 stroke:#333,stroke-width:2px
style id2 stroke:#333,stroke-width:2px
```

The `Configurator` generates a configuration file that is used to run a [Prometheus Server](https://github.com/prometheus/prometheus) in Agent mode, and send metrics to the New Relic Remote Write…
