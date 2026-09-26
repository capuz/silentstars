---
repo: "Smana/cloud-native-ref"
name: "cloud-native-ref"
description: "Opiniated Cloud Native Platform Reference"
readmeQualityOk: true
url: "https://github.com/Smana/cloud-native-ref"
homepage: "https://blog.ogenki.io"
language: "Shell"
languages: ["Shell", "HCL"]
languagePcts: [50, 35]
topics: ["cloud", "devops", "kubernetes", "security"]
stars: 102
forks: 15
openIssues: 15
closedIssues: 99
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2023-10-02T20:29:14Z"
lastCommitAt: "2026-09-26T08:46:44Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 49
maintainers: ["Smana", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/18d78ce3037e0d161face484995eed0c43389b3bf7b82dd73efede8e7c70982a/Smana/cloud-native-ref"
discussionCount: 13
---

# Cloud Native Platform Reference

**_An opinionated, production-ready Kubernetes platform using GitOps principles._**

A reference implementation of a complete cloud-native platform on AWS EKS: infrastructure as
code with OpenTofu and Crossplane, continuous delivery with Flux, a private PKI and zero-trust
networking, a full observability stack, and a developer-facing abstraction that turns one small
YAML claim into a whole application.

📖 **Full documentation: [cnref.ogenki.io](https://cnref.ogenki.io)**

## Architecture

> Editable source: [`docs/architecture/platform-overview.drawio`](https://github.com/Smana/cloud-native-ref/blob/HEAD/docs/architecture/platform-overview.drawio)

Three bands: the **cloud's managed services** on the left, with their AWS and GCP equivalents
side by side (Route 53 / Cloud DNS, ELB / Cloud Load Balancing, IAM via EKS Pod Identity / GKE
Workload Identity, S3 / Cloud Storage, KMS / Cloud KMS), the **Kubernetes cluster** in the centre
in four tiers (GitOps & composition, compute & networking, security & identity, observability),
and **applications & data** on the right. Flux reconciles the repository; Tailscale provides
private access; OpenBao holds…
