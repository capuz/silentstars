---
repo: "attune-io/attune"
name: "attune"
description: "Safe, in-place Kubernetes pod resource right-sizing. VPA done right."
readmeQualityOk: true
url: "https://github.com/attune-io/attune"
homepage: "https://attune-io.github.io/attune/"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["cost-optimization", "in-place-resize", "kubernetes", "right-sizing", "vpa", "autoscaler", "kubernetes-operator", "resource-optimization", "kubernetes-autoscaler"]
stars: 23
forks: 2
openIssues: 12
closedIssues: 170
watchers: 0
contributors: 1
recentReleases: 9
createdAt: "2026-05-25T00:32:25Z"
lastCommitAt: "2026-08-24T04:20:19Z"
lastReleaseAt: "2026-05-29T19:26:49Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "under_pressure"]
healthScore: 98
undervaluedScore: 53
maintainers: ["SebTardif", "dependabot[bot]", "attune-release-bot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1248686932/d185b30d-d46c-4acf-aed7-9483c28a22b5"
---

</p>

# Attune

**Safe, in-place Kubernetes pod resource right-sizing. VPA done right.**

Attune is a Kubernetes operator that automatically right-sizes pod
resource requests and limits using [In-Place Pod Resize](https://kubernetes.io/blog/2025/12/19/kubernetes-v1-35-in-place-pod-resize-ga/)
(**GA** in Kubernetes 1.35; beta and enabled by default in 1.33–1.34; alpha
since 1.27, still feature-gated on 1.32). Attune requires **Kubernetes 1.32+**
for the `/resize` subresource path. In-place by default, optional eviction
fallback for infeasible resizes, and no HPA conflicts.

---

## Why

| Problem | Impact |
|---------|--------|
| Average CPU utilization is **8%** | Most requested compute sits idle ([CAST AI 2026](https://cast.ai/reports/state-of-kubernetes-optimization/)) |
| **70%** cite overprovisioning among top cost drivers | Resources allocated "just in case" never reclaimed ([CNCF 2023](https://www.cncf.io/blog/2023/12/20/cncf-cloud-native-finops-cloud-financial-management-microsurvey/)) |
| **<1%** run VPA in production | VPA historically evicts pods, conflicts with HPA, and is hard to run unattended ([ScaleOps…
