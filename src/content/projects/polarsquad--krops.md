---
repo: "polarsquad/krops"
name: "krops"
description: "Kubernetes-Native Resource Operations"
readmeQualityOk: true
url: "https://github.com/polarsquad/krops"
homepage: "https://krops.build"
language: "Rust"
languages: ["Rust", "Shell"]
languagePcts: [57, 30]
stars: 143
forks: 13
openIssues: 58
closedIssues: 22
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2026-04-09T18:24:55Z"
lastCommitAt: "2026-09-14T09:12:24Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 84
undervaluedScore: 26
maintainers: ["renovate[bot]", "shrinedogg", "lmilbaum"]
openGraphImageUrl: "https://opengraph.githubassets.com/1af87afc0126c1b41bf7ebdd4ac23979e88ff151c9b3ccb0b57a7035df749f36/polarsquad/krops"
---

# krops
## kubernetes resource operations

krops is a GitOps pattern for managing infrastructure through the Kubernetes API
with plain declarative YAML. Terraform and OpenTofu use HCL, a state file, and
discrete plan/apply runs; krops stores desired state as Kubernetes resources in
Git. [Flux](https://fluxcd.io/) delivers those resources, and controllers
continuously reconcile the infrastructure to match them. Kubernetes provides
one API, RBAC model, policy surface, and audit trail for infrastructure and
workloads. No HCL, no `.tfstate`, no second toolchain.

[Crossplane](https://www.crossplane.io/) is the closer comparison because it
also runs infrastructure reconciliation inside Kubernetes. Its providers expose
managed resources, while XRDs and compositions can turn them into higher-level
platform APIs. krops introduces no krops-specific CRD or controller: it combines
[Cluster API](https://cluster-api.sigs.k8s.io/) for clusters,
[ACK](https://aws-controllers-k8s.github.io/docs/) for AWS resources, and Flux
for GitOps. If those resource APIs already say what you mean, krops does not
wrap them to say it again.

This repository demonstrates the pattern end to end on AWS EKS, local…
