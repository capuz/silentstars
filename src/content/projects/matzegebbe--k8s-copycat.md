---
repo: "matzegebbe/k8s-copycat"
name: "k8s-copycat"
description: "A Kubernetes controller that synchronizes container images from cluster workloads to external registries."
readmeQualityOk: true
url: "https://github.com/matzegebbe/k8s-copycat"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["container", "k8s", "kubernetes", "operator"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-08-28T20:32:37Z"
lastCommitAt: "2026-09-18T06:08:00Z"
lastReleaseAt: "2025-09-25T07:02:34Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 80
maintainers: ["dependabot[bot]", "matzegebbe"]
openGraphImageUrl: "https://opengraph.githubassets.com/839b44e833355bfde070e3ab19f46926b13d7d9a989f48429fe1db802aeaff98/matzegebbe/k8s-copycat"
postedAt: "2026-09-08T08:21:00.449Z"
---

# k8s-copycat

k8s-copycat watches the container images referenced by Kubernetes workloads and copies them into a registry you control. It keeps a mirror of your runtime dependencies in AWS ECR or another Docker-compatible registry, without changing your workloads.

[Quick start](#quick-start) · [Configuration](#configuration-reference) · [Example configuration](#example-configuration) · [Troubleshooting](#observability-and-troubleshooting) · [Optional Kyverno use case](#use-case-copycat--kyverno-image-replacement)

## What does it do?

An upstream image can disappear, a tag can be deleted or changed, and a public registry can become unavailable, overloaded, or rate-limited. k8s-copycat provides an insurance policy: preserve the images your cluster uses while they are still available, so you have your own copy when you need it.

```mermaid
flowchart LR
    W[Kubernetes workloads] -->|reference images in| U[Upstream registry]
    W -->|observed by| C[k8s-copycat]
    U -->|image manifests and layers| C
    C -->|copies images| R[Your registry]
```

The controller watches **Deployments, StatefulSets, DaemonSets, Jobs, CronJobs, and Pods**, including regular, init, and ephemeral…
