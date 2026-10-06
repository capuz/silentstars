---
repo: "rajsinghtech/garage-operator"
name: "garage-operator"
description: "A Kubernetes operator for managing Garage - a distributed S3-compatible object storage system designed for self-hosting."
readmeQualityOk: true
url: "https://github.com/rajsinghtech/garage-operator"
homepage: "https://rajsinghtech.github.io/garage-operator/"
language: "Go"
languages: ["Go"]
languagePcts: [93]
stars: 264
forks: 24
openIssues: 8
closedIssues: 136
watchers: 2
contributors: 23
recentReleases: 0
createdAt: "2026-01-15T07:24:48Z"
lastCommitAt: "2026-10-06T10:42:28Z"
lastReleaseAt: "2026-01-16T05:06:33Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 34
maintainers: ["rajsinghtech", "renovate[bot]", "kevinvalk"]
openGraphImageUrl: "https://opengraph.githubassets.com/a591a6fd68bbc58dedd416af2dce1450a60adb16604194ba11d6e22e77d1e68d/rajsinghtech/garage-operator"
---

# Garage Kubernetes Operator

A Kubernetes operator for [Garage](https://garagehq.deuxfleurs.fr/) - distributed, self-hosted object storage with multi-cluster federation.

- **Declarative cluster lifecycle** — StatefulSet, config, and layout managed via CRDs
- **Unified storage + gateway tiers in one CR** (v1beta2) — combine durable storage pods and persistent-identity S3 gateways in a single `GarageCluster`
- **Node-local pools** — bind Garage identities to selected Kubernetes Nodes and HostPath disks, including multi-disk layouts
- **Bucket & key management** — create buckets, quotas, and S3 credentials with kubectl
- **Multi-cluster federation** — span storage across Kubernetes clusters with automatic node discovery
- **Persistent-identity gateway pods** — StatefulSet with a small metadata PVC; gateway pods keep the same Garage node identity across restarts and participate in the cluster layout with `capacity: null` (matching upstream `garage layout assign --gateway`)
- **Scale subresource** — `kubectl scale` and autoscaler support for the Auto-managed default storage group (and v1beta1 edge gateways)
- **COSI driver** — optional Kubernetes-native object storage provisioning…
