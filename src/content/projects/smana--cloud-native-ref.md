---
repo: "Smana/cloud-native-ref"
name: "cloud-native-ref"
description: "Opiniated Cloud Native Platform Reference"
readmeQualityOk: true
url: "https://github.com/Smana/cloud-native-ref"
homepage: "https://blog.ogenki.io"
language: "HCL"
languages: ["HCL", "Shell"]
languagePcts: [52, 32]
topics: ["cloud", "devops", "kubernetes", "security"]
stars: 98
forks: 15
openIssues: 20
closedIssues: 75
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2023-10-02T20:29:14Z"
lastCommitAt: "2026-08-28T14:22:05Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 48
maintainers: ["Smana", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1fbd9b68153797699c04eec6b9b9766e21d1df93e5a32032ee96489d9e3fddc5/Smana/cloud-native-ref"
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

Three bands: **AWS managed services** on the left (Route 53, ELB, IAM via EKS Pod Identity, S3,
KMS), the **EKS cluster** in the centre in four tiers (GitOps & composition, compute &
networking, security & identity, observability), and **applications & data** on the right. Flux
reconciles the repository; Tailscale provides private access; OpenBao holds the secrets and the
PKI. The self-hosted LLM platform is opt-in and off by default.

Every subsystem is explained at…
