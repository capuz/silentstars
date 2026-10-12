---
repo: "SAP/redis-operator"
name: "redis-operator"
description: "Manage Redis clusters in Kubernetes"
readmeQualityOk: true
url: "https://github.com/SAP/redis-operator"
language: "Go Template"
languages: ["Go Template", "Go"]
languagePcts: [52, 42]
topics: ["sap-cns", "sap-cs-devops"]
stars: 18
forks: 5
openIssues: 1
closedIssues: 15
watchers: 6
contributors: 674
recentReleases: 0
createdAt: "2023-06-05T06:37:59Z"
lastCommitAt: "2026-10-12T11:14:50Z"
lastReleaseAt: "2023-10-02T07:13:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 65
maintainers: ["renovate[bot]", "ERP4SME-DevOps-GitHub-Admin-User", "zdenko-kovac"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7dd2c374a6f1d010ea7022cb34a7e9a59b37336c3befa623fd74f46d2c8b75b/SAP/redis-operator"
---

# Kubernetes Operator For Redis™

Disclaimer: Redis is a registered trademark of Redis Ltd. Any rights therein are reserved to Redis Ltd. Any use by SAP is for referential purposes only and does not indicate any sponsorship, endorsement, or affiliation between Redis Ltd. and SAP.

## About this project
This repository adds a new resource type `Redis` (`redis.cache.cs.sap.com`) to Kubernetes clusters,
which can be used to deploy redis caches for cluster-internal usage. For example:

```yaml
apiVersion: cache.cs.sap.com/v1alpha1
kind: Redis
metadata:
  name: test
spec:
  replicas: 3
  sentinel:
    enabled: true
  metrics:
    enabled: true
  tls:
    enabled: true
```

The controller contained in this repository under the hood uses the [bitnami redis chart](https://github.com/bitnami/charts/tree/main/bitnami/redis)
to install redis in the cluster. As a consequence of this fact, the following topologies are supported:
- statically configured master with optional read replicas
- sentinel cluster (i.e. dynamic master with read replicas, master elected by sentinel).

Sharding (redis-cluster) scenarios are not supported.

### Sentinel mode
If `spec.sentinel.enabled` is false, one redis…
