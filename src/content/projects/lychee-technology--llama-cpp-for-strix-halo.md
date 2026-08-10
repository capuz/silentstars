---
repo: "Lychee-Technology/llama-cpp-for-strix-halo"
name: "llama-cpp-for-strix-halo"
description: "This repository builds llama.cpp for Strix Halo devices."
readmeQualityOk: true
url: "https://github.com/Lychee-Technology/llama-cpp-for-strix-halo"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 59
forks: 5
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-01-14T04:56:47Z"
lastCommitAt: "2026-08-10T05:05:05Z"
lastReleaseAt: "2026-01-20T20:41:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 38
maintainers: ["iceboundrock"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c42a8b7b17a7b78b003c591c06e8fb3df4ae31de4e3e750c6d38f693becd4aa/Lychee-Technology/llama-cpp-for-strix-halo"
---

# **llama.cpp for AMD Strix Halo (Linux)**

This repository provides **prebuilt and reproducible Linux binaries of llama.cpp specifically optimized for AMD Strix Halo (AMD AI APU) platforms**.

## **Why This Project Exists**

AMD Strix Halo–based systems are uniquely capable of running **large local LLMs** thanks to their ability to access **well over 100 GB of unified system memory**. At the time of writing (Jan 2026):

* **`llama.cpp` is the only local LLM runtime that can practically leverage >80 GB memory on Strix Halo**
* Official `llama.cpp` releases **do not provide Linux binaries tuned for Strix Halo**
* Default Linux kernel and ROCm settings **severely limit usable VRAM / GPU-addressable memory**
* Building `llama.cpp` correctly for Strix Halo requires:
  * Non-default compile parameters
  * Correct ROCm installation

This repository exists to:

* Provide **ready-to-use Linux builds of llama.cpp for Strix Halo**
* Document **exact system tuning steps** required to unlock large-memory inference
* Lower the barrier for running **70B–120B+ models locally** on AMD AI APUs

## **Platform Overview: Strix Halo Memory Model**

Strix Halo uses **unified system memory** instead of…
