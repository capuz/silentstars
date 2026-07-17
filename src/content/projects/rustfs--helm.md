---
repo: "rustfs/helm"
name: "helm"
description: "helm release"
readmeQualityOk: true
url: "https://github.com/rustfs/helm"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 22
forks: 7
openIssues: 5
closedIssues: 6
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2025-11-18T08:39:04Z"
lastCommitAt: "2026-07-17T05:58:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 44
maintainers: ["majinghe", "loverustfs", "cloudflare-workers-and-pages[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d557b014e03dc017742dcbd432a259d01981a5b29a931e9474151b0253e50cf/rustfs/helm"
---

# About RustFS

[RustFS](https://github.com/rustfs/rustfs) is a high-performance, distributed object storage system built in Rust., one of the most popular languages worldwide. RustFS combines the simplicity of MinIO with the memory safety and performance of Rust., S3 compatibility, open-source nature, support for data lakes, AI, and big data. Furthermore, it has a better and more user-friendly open-source license in comparison to other storage systems, being constructed under the Apache license. As Rust serves as its foundation, RustFS provides faster speed and safer distributed features for high-performance object storage.

# RustFS Helm Mode

RustFS helm chart supports **standalone and distributed mode**. For standalone mode, there is only one pod and one pvc; for distributed mode, there are two styles, 4 pods and 16 pvcs(each pod has 4 pvcs), 16 pods and 16 pvcs(each pod has 1 pvc). You should decide which mode and style suits for your situation. You can specify the parameters `mode` and `replicaCount` to install different mode and style.

- **For standalone mode**: Only one pod and one pvc acts as single node single disk; Specify parameters…
