---
repo: "sgl-project/whl"
name: "whl"
description: "SGLang Kernel Wheel Index"
readmeQualityOk: true
url: "https://github.com/sgl-project/whl"
homepage: "https://docs.sglang.io/whl/"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
topics: ["cuda", "cutlass", "flashinfer", "sglang"]
stars: 26
forks: 13
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 15
recentReleases: 0
createdAt: "2025-01-16T13:48:14Z"
lastCommitAt: "2026-10-09T10:51:24Z"
lastReleaseAt: "2025-02-12T09:41:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 70
maintainers: ["sglang-bot", "alexnails", "Fridge003"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2e3f0151e897ad7d1880f021b7af7aef439e258df7e7288bd88ad77b636bd65/sgl-project/whl"
---

# whl

This repository hosts the **wheel index page** for [SGLang](https://github.com/sgl-project/sglang) packages. It is not the source code repository — it serves as a [PEP 503](https://peps.python.org/pep-0503/)-compatible package index for distributing pre-built wheels.

## Usage

- **Install a kernel package with a specific CUDA version:**
  ```bash
  pip install sglang-kernel --index-url https://docs.sglang.io/whl/cu129
  ```

- **Install nightly builds:**
  ```bash
  pip install sglang --index-url https://docs.sglang.io/whl/nightly/cu129
  ```

- **Browse available wheels:** Visit the [GitHub Releases](https://github.com/sgl-project/whl/releases) page, where all binary wheel files are hosted.
