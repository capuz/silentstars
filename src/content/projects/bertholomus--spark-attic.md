---
repo: "bertholomus/spark-attic"
name: "spark-attic"
description: "More memory for CUDA on an NVIDIA GB10 (DGX Spark, ASUS Ascent GX10): lend the unused display carveout to vLLM, SGLang and TensorFold as KV cache"
readmeQualityOk: true
url: "https://github.com/bertholomus/spark-attic"
language: "Python"
languages: ["Python", "C"]
languagePcts: [55, 27]
topics: ["cuda", "dgx-spark", "gb10", "kv-cache", "sglang", "tensorfold", "vllm"]
stars: 35
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-11-10T08:22:31Z"
lastCommitAt: "2026-11-19T05:06:42Z"
lastReleaseAt: "2026-11-19T05:06:44Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 24
maintainers: ["bertholomus"]
openGraphImageUrl: "https://opengraph.githubassets.com/3babd0aa760a711ff23aa36341e00620b3610ff793924e711ca8fc972aef65f3/bertholomus/spark-attic"
---

# spark-attic

**More memory for CUDA on an NVIDIA GB10: lend it the display carveout.**

The NVIDIA driver sets aside about 2 GiB of a GB10's memory for a display. On a box that is not driving a display
that memory lies outside the kernel's System RAM, so MemAvailable never counts it. spark-attic's `atticd`, a small
root daemon, lends it to CUDA programs as ordinary device memory, in 2 MiB slices. An inference engine's KV cache
gets about 2 GiB more without giving up any other memory.
