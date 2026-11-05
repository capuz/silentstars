---
repo: "netobserv/netobserv-operator"
name: "netobserv-operator"
description: "A Kubernetes operator for network observability"
readmeQualityOk: true
url: "https://github.com/netobserv/netobserv-operator"
homepage: "https://netobserv.io"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["kubernetes", "observability", "operator", "ebpf", "network"]
stars: 271
forks: 51
openIssues: 18
closedIssues: 34
watchers: 3
contributors: 35
recentReleases: 0
createdAt: "2021-09-28T06:51:14Z"
lastCommitAt: "2026-11-05T08:04:50Z"
lastReleaseAt: "2023-06-05T08:32:23Z"
status: "thriving"
tags: ["legacy_hero", "community_hub"]
healthScore: 92
undervaluedScore: 39
maintainers: ["dependabot[bot]", "jotak", "Amoghrd"]
openGraphImageUrl: "https://opengraph.githubassets.com/823a6991ab433c9e0fccf73237018ff0a6b8e30dc3a32b46fefaaf789cc7c475/netobserv/netobserv-operator"
discussionCount: 50
---

# NetObserv Operator

NetObserv Operator is a Kubernetes operator for network observability. It deploys a monitoring pipeline that consists in:
- An eBPF agent, that generates network flows from captured packets.
- Flowlogs-pipeline, a component that collects, enriches and exports these flows.
- A web console for flows visualization with powerful filtering options, a topology representation, a network health view, etc.

Flow data is then available in multiple ways, each optional:

- As Prometheus metrics.
- As raw flow logs stored in Loki.
- As raw flow logs exported to a collector via Kafka, OpenTelemetry or IPFIX.

## Getting Started

You can install the NetObserv Operator using [Helm](https://helm.sh/), or directly from sources.

> [!TIP]
NetObserv can be used in downstream products, which may provide their own documentation. If you are using such a product, please refer to that documentation instead:
> 
> - On OpenShift: [see Network Observability operator](https://docs.redhat.com/en/documentation/openshift_container_platform/latest/html/network_observability/installing-network-observability-operators).

### Pre-requisite

The following architectures are supported: _amd64_,…
