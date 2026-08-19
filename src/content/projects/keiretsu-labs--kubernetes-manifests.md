---
repo: "keiretsu-labs/kubernetes-manifests"
name: "kubernetes-manifests"
description: "GitOps Monorepo"
readmeQualityOk: true
url: "https://github.com/keiretsu-labs/kubernetes-manifests"
homepage: "https://keiretsu.top/"
language: "Shell"
languages: ["Shell"]
languagePcts: [51]
topics: ["argocd", "helm", "kubernetes", "kubernetes-cluster", "kustomization", "kustomize"]
stars: 9
forks: 3
openIssues: 6
closedIssues: 44
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2024-04-16T01:23:26Z"
lastCommitAt: "2026-08-19T02:01:50Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 80
maintainers: ["renovate[bot]", "rajsinghtechbot", "rajsinghtech"]
openGraphImageUrl: "https://opengraph.githubassets.com/92f420988122773a44ee01f98a4ba068a2605e071503e9b9f8af8a5f85d67a2e/keiretsu-labs/kubernetes-manifests"
postedAt: "2026-08-03T06:48:22.019Z"
---

### Keiretsu — Multi-Cluster Kubernetes Infrastructure

_Managed with Flux, Tailscale, and GitHub Actions_

</div>

#### Ottawa

</div>

#### Robbinsdale

</div>

#### St. Petersburg

</div>

---

Multi-cluster Kubernetes infrastructure managed with FluxCD GitOps. The three
Talos Linux clusters are connected by a Tailscale mesh and share the same
repository, platform conventions, and observability stack.

## Clusters

| Cluster | Site and nodes | Primary role | Storage | <code>${CLUSTER_DOMAIN}</code> |
|---------|----------------|--------------|---------|-------------------------|
| <code>talos-ottawa</code> | Ontario, Canada; 3 control planes (<code>rei</code>, <code>asuka</code>, <code>kaji</code>) plus worker <code>shiro</code> | Primary media, databases, and general workloads | Rook-Ceph, SMB, and local Garage pools | <code>killinit.cc</code> |
| <code>talos-robbinsdale</code> | Minnesota, US; 3 control planes (<code>tank</code>, <code>stone</code>, <code>titan</code>) and no workers | Home automation, media, and general workloads | Rook-Ceph, SMB, and local Garage pools | <code>lukehouge.com</code> |
| <code>talos-stpetersburg</code> | Florida, US; control plane…
