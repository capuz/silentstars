---
repo: "actions-gateway/github-actions-gateway"
name: "github-actions-gateway"
description: "Multi-tenant Kubernetes operator for self-hosted GitHub Actions runners. Scale-to-zero workers, per-tenant egress IP pools, and GPU priority scheduling across a shared ResourceQuota — an Actions Runner Controller (ARC) alternative."
readmeQualityOk: true
url: "https://github.com/actions-gateway/github-actions-gateway"
homepage: "https://actions-gateway.com"
language: "Go"
languages: ["Go", "Shell"]
languagePcts: [65, 28]
topics: ["actions-runner-controller", "autoscaling", "ci-cd", "controller-runtime", "devops", "egress-proxy", "ephemeral-runners", "github-actions", "golang", "gpu"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 17
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-16T23:42:27Z"
lastCommitAt: "2026-11-17T14:29:34Z"
lastReleaseAt: "2026-07-20T05:57:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 60
maintainers: ["karlkfi", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1241076663/f4e8ea1b-689b-4405-be64-aacb80bc946b"
---

# GitHub Actions Gateway

> **Multi-tenant self-hosted GitHub Actions runners on Kubernetes, for clusters where many teams run runners side by side.**

Actions Runner Controller (ARC) scale-set mode is the common starting point.
Once many teams share one cluster, three gaps open that ARC does not close.
GitHub Actions Gateway (GAG) closes them:

| Gap at multi-tenant scale | How GAG closes it | Detail |
| --- | --- | --- |
| A worker the cluster takes away leaves its job needing a **manual rerun** | The run concludes and **re-runs itself**, with a per-run retry budget | [flow](https://github.com/actions-gateway/github-actions-gateway/blob/HEAD/docs/design/04-operational-flows.md#worker-pod-eviction-and-auto-retry) |
| Tenants **can't be given isolated GitHub egress IPs** | A per-tenant proxy pool as the choke point, over a specified and live-validated path to a distinct, stable per-tenant source IP | [mechanism](https://github.com/actions-gateway/github-actions-gateway/blob/HEAD/docs/design/network-architecture.md#per-tenant-egress-ip-the-source-ip-mechanism) |
| **Idle runner and listener compute** stays provisioned between jobs | Workers scale to zero. Every listener is a…
