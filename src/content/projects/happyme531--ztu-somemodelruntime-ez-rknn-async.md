---
repo: "happyme531/ztu_somemodelruntime_ez_rknn_async"
name: "ztu_somemodelruntime_ez_rknn_async"
description: "A better RKNPU2 python API"
readmeQualityOk: true
url: "https://github.com/happyme531/ztu_somemodelruntime_ez_rknn_async"
language: "C++"
languages: ["C++"]
languagePcts: [72]
stars: 19
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-02-04T16:18:52Z"
lastCommitAt: "2026-07-20T06:34:10Z"
lastReleaseAt: "2026-03-15T14:01:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 23
maintainers: ["happyme531"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d3b131c534949fbb8b9834925d60793254013de6f1bcb4e51799510e49c322c/happyme531/ztu_somemodelruntime_ez_rknn_async"
---

# ztu_somemodelruntime_ez_rknn_async
### A better ORT-style RKNPU2 API for Python and C++

Supported Python versions: 3.7+

--------

## 🚀 Feature Comparison

| Feature | This Project | Official SDK |
| :--- | :---: | :---: |
| **Model Loading & Basic Inference** | ✅ Supported | ✅ Supported |
| **Multi-core Tensor Parallel Inference** | ✅ Supported | ✅ Supported |
| **Multi-core Data Parallel Inference** | ✅ Supported | ❌ Not Supported |
| **Pipeline-based Async Inference** | ✅ Supported | ⚠️ Limited (Depth = 1) |
| **True Async Inference (Callback/Future)** | ✅ Supported | ❌ Not Supported |
| **Multi-batch Data Parallel Inference** | ✅ Supported | ⚠️ Limited (Fixed batch/4D only) |
| **Zero-copy Inference** | ✅ Supported (via OrtValue/io_binding API) | ❌ Not Supported |
| **Multi model weight sharing** | ✅ Supported | ❌ Not Supported |
| **Custom Operator Plugins** | ✅ Supported | ❌ Not Supported |
| **Read model embed string** | ✅ Supported | ❌ Not Supported |
| **Python and C++ APIs** | ✅ Supported | ⚠️ Proprietary C API |
| **API Style** | 🚀 ORT-like (Easy migration) | ⚙️ Proprietary (Complex) |
| **Zero Dependencies** | ✅ Yes (NumPy only) | ❌ No |
| **Break Other Packages**…
