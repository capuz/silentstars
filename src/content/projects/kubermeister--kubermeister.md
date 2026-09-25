---
repo: "kubermeister/kubermeister"
name: "kubermeister"
description: "A fast, native desktop client for browsing and managing Kubernetes clusters."
readmeQualityOk: true
url: "https://github.com/kubermeister/kubermeister"
homepage: "https://github.com/kubermeister/kubermeister/releases/latest"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["desktop-app", "devops", "electron", "k8s", "kubernetes", "kubernetes-client", "kubernetes-dashboard", "react", "typescript"]
stars: 14
forks: 0
openIssues: 4
closedIssues: 131
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-14T15:01:17Z"
lastCommitAt: "2026-09-25T09:02:04Z"
lastReleaseAt: "2026-09-20T16:50:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "community_hub"]
healthScore: 99
undervaluedScore: 58
maintainers: ["araratpoghosyan", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/64e12476f21636ce65070168002cb2c9afa5d9ce97cfcd9b3d871509dba16196/kubermeister/kubermeister"
discussionCount: 45
---

# Kubermeister

A fast, native desktop client for browsing and managing Kubernetes clusters, for macOS, Windows and
Linux.

Kubermeister reads the kubeconfig you already have and needs nothing else installed: no `kubectl`,
no plugins, no agent in the cluster. Every screen stays live through the API server's own watches,
so what you see is what the cluster is doing right now.

## What it does

### See the cluster

- **Cluster summary.** Nodes, workloads and capacity at a glance, live CPU and memory sparklines
  from metrics-server, alerts for what needs attention, and a stream of recent events.
- **Nodes.** Conditions, system info, allocatable capacity against usage, and the pods scheduled on
  each node. Cordon and uncordon a node, or drain it with a plan you can read before it runs.
- **Namespaces.** A roll-up of everything a namespace holds, the quotas and limit ranges it carries,
  and its pods' usage against what they asked for.
- **Events, quotas, limits**, priority classes, leases and runtime classes.

### Every kind, one way

Pods, Deployments, StatefulSets, DaemonSets, ReplicaSets and ReplicationControllers; Jobs and
CronJobs; ConfigMaps, Secrets, autoscalers and…
