---
repo: "newrelic/nrdot-collector-releases"
name: "nrdot-collector-releases"
description: "Handle the configuration files for the OpenTelemetry New Relic distributions."
url: "https://github.com/newrelic/nrdot-collector-releases"
language: "Go"
languages: ["Go", "Shell"]
languagePcts: [43, 37]
stars: 6
forks: 29
openIssues: 0
closedIssues: 0
watchers: 9
contributors: 43
recentReleases: 0
createdAt: "2023-01-05T00:55:03Z"
lastCommitAt: "2026-06-22T22:58:09Z"
lastReleaseAt: "2024-09-27T08:05:55Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 87
undervaluedScore: 75
maintainers: ["kb-newrelic", "agarvin-nr", "mailo-nr"]
openGraphImageUrl: "https://opengraph.githubassets.com/18eb5afe7298c80719958b54df7da3fa75f6e1ffde6216af13962bb4c4dacab6/newrelic/nrdot-collector-releases"
---

# New Relic Distribution of OpenTelemetry (NRDOT) Releases 

This repository assembles [custom distributions](https://opentelemetry.io/docs/collector/distributions/#custom-distributions) of the [OpenTelemetry Collector](https://opentelemetry.io/docs/collector/) focused on specific use cases to work with NewRelic out-of-the-box.

Generated assets are available in the corresponding Github [release page](https://github.com/newrelic/nrdot-collector-releases/releases) and as docker images published within the [newrelic organization on Docker Hub](https://hub.docker.com/u/newrelic).

## Current list of distributions:

- [nrdot-collector](./distributions/nrdot-collector/README.md): Comprehensive distribution supporting all [use cases](./distributions/nrdot-collector/README.md#use-cases) offered by New Relic. 
- [nrdot-collector-experimental](./distributions/nrdot-collector-experimental/README.md): Experimental integrations

Please refer to [this README](./distributions/README.md) for documentation on our distributions.

### Deprecation Notices

Former distributions that were deprecated.

- `nrdot-collector-host`: deprecated in favor of the 'Host Monitoring' use case of `nrdot-collector`…
