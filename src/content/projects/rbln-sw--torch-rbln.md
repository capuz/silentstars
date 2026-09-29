---
repo: "RBLN-SW/torch-rbln"
name: "torch-rbln"
description: "PyTorch extension for Rebellions NPU"
readmeQualityOk: true
url: "https://github.com/RBLN-SW/torch-rbln"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [71, 27]
topics: ["ai-accelerator", "deep-learning", "hardware-backend", "inference", "machine-learning", "neural-network", "npu", "python", "pytorch", "rbln"]
stars: 14
forks: 2
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 14
recentReleases: 2
createdAt: "2026-03-30T01:27:29Z"
lastCommitAt: "2026-09-29T10:04:09Z"
lastReleaseAt: "2026-08-28T06:21:50Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 54
maintainers: ["rebel-chanheo", "rebel-jonghewk", "rebel-clee"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e1e923187be0788ed42db974239bfc04381ad675c5624ff6b023af96396fea6/RBLN-SW/torch-rbln"
---

# PyTorch RBLN
<picture>
  <source srcset="https://raw.githubusercontent.com/RBLN-SW/torch-rbln/main/docs/img/torch-rbln-white.png" media="(prefers-color-scheme: dark)">
  <source srcset="https://raw.githubusercontent.com/RBLN-SW/torch-rbln/main/docs/img/torch-rbln-black.png" media="(prefers-color-scheme: light)">
</picture>

</div>

## About

PyTorch RBLN (`torch-rbln`) is a PyTorch extension that allows natural use of Rebellions NPU compute within PyTorch. By implementing **eager mode**, which operates in a **define-by-run** fashion, it supports the full lifecycle of **model development, deployment, and serving** in the PyTorch ecosystem. It is also convenient for **debugging** and related workflows.

The same interface style as **CPU** and **GPU** applies — the **`rbln`** device, **`torch.rbln`**, and **`torch.compile`** — so developers and customers can target RBLN NPUs with familiar APIs. Operations on `rbln` tensors are integrated via PyTorch’s **[out-of-tree extension](https://docs.pytorch.org/tutorials/unstable/python_extension_autoload.html)** path; execution is coordinated with the RBLN compiler and runtime (**`rebel-compiler`**).

PyTorch RBLN is currently in **beta**…
