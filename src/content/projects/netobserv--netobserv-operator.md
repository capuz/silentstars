---
repo: "netobserv/netobserv-operator"
name: "netobserv-operator"
description: "A Kubernetes operator for network observability"
readmeQualityOk: true
url: "https://github.com/netobserv/netobserv-operator"
homepage: "https://netobserv.io"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["kubernetes", "observability", "operator", "ebpf", "network"]
stars: 238
forks: 47
openIssues: 16
closedIssues: 28
watchers: 2
contributors: 33
recentReleases: 0
createdAt: "2021-09-28T06:51:14Z"
lastCommitAt: "2026-09-02T08:03:52Z"
lastReleaseAt: "2023-06-05T08:32:23Z"
status: "thriving"
tags: ["community_hub"]
healthScore: 91
undervaluedScore: 40
maintainers: ["dependabot[bot]", "jotak", "Amoghrd"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8d97237bfca707b3b2382c734f8daa97eb4ddafe349ac03f7c14b4935cab235/netobserv/netobserv-operator"
discussionCount: 48
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
