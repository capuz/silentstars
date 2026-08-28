---
repo: "kube-dc/kube-dc-public"
name: "kube-dc-public"
description: "Installers, Helm charts, Deployments and other resources"
readmeQualityOk: true
url: "https://github.com/kube-dc/kube-dc-public"
language: "Go"
languages: ["Go"]
languagePcts: [82]
stars: 36
forks: 5
openIssues: 2
closedIssues: 1
watchers: 2
contributors: 5
recentReleases: 5
createdAt: "2025-03-05T08:40:43Z"
lastCommitAt: "2026-08-28T15:34:38Z"
lastReleaseAt: "2026-07-24T11:50:57Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 56
maintainers: ["voatsap"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f96d6b605e1c9505613526eb277e748c214f2216e2e3028d049331750b3c2e7/kube-dc/kube-dc-public"
discussionCount: 2
---

# Kube-DC

</p>

  <strong>A Kubernetes-native cloud platform for governed applications, virtual machines, data services, and Managed Clusters.</strong>
</p>

</p>

## What Kube-DC Is

Kube-DC gives infrastructure teams one control plane for self-service cloud
resources on Kubernetes. Users work through a web console, the `kube-dc` CLI,
or Kubernetes APIs. Platform operators retain control of identity, quota,
networking, policy, and shared infrastructure.

The product model has three primary levels:

- An **Organization** owns identity, membership, billing, and shared quota.
- A **Project** is the governed workload boundary for a team or environment.
  Kube-DC backs it with a Kubernetes namespace, RBAC, a private VPC, optional
  quota, and a Project kubeconfig.
- A **Managed Cluster** has its own Kubernetes API and control plane.
  Create one inside a Project when a workload needs CRDs, operators, multiple
  namespaces, or other cluster-scoped control.

### Project or Managed Cluster?

| Choose | When you need |
|---|---|
| **Project** | Fast deployment of containers, compatible Helm charts, VMs, managed databases, storage, and platform services |
| **Managed Cluster** | A…
