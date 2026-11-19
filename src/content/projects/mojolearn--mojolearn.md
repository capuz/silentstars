---
repo: "mojolearn/mojolearn"
name: "mojolearn"
description: "GPU machine learning in Mojo that supports bitwise identical inference and training on Apple Metal, NVIDIA CUDA and AMD HIP."
readmeQualityOk: true
url: "https://github.com/mojolearn/mojolearn"
homepage: "https://mojolearn.org"
language: "Mojo"
languages: ["Mojo", "Python"]
languagePcts: [62, 34]
topics: ["cuda", "gpu", "machine-learning", "metal", "mojo", "reproducibility", "rocm", "bitwise-identical", "ai", "attention"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-08-20T13:43:28Z"
lastCommitAt: "2026-11-19T05:06:47Z"
lastReleaseAt: "2026-09-11T18:14:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 52
maintainers: ["ajhendel"]
openGraphImageUrl: "https://opengraph.githubassets.com/abd1238205b156b9a79cedc86873cd8c4e58f74d0aba2ba953187231b3560d10/mojolearn/mojolearn"
---

# mojolearn

**Bitwise-Identical Machine Learning Across GPUs and CPUs.**

The same machine-learning workload can produce different bits on different
GPUs, changing predictions, learned models and subsequent training updates.
mojolearn is a GPU machine-learning library whose default mode is **identical**.
In `identical` mode, mojolearn returns the same bits on Apple, NVIDIA and AMD GPUs.
Its x86-64 Linux and Apple silicon CPU bindings give the same bits too. Results agree
bit for bit, not merely within a numerical tolerance.
