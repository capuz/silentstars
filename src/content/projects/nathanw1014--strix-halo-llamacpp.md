---
repo: "Nathanw1014/strix-halo-llamacpp"
name: "strix-halo-llamacpp"
description: "Performance-tuned llama.cpp for AMD Strix Halo (gfx1151): FA + MoE-prefill fixes with a bundled current Mesa driver. Vulkan and HIP; portable dir, Docker, and distrobox."
readmeQualityOk: true
url: "https://github.com/Nathanw1014/strix-halo-llamacpp"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [51, 48]
topics: ["amd", "flash-attention", "gfx1151", "llama-cpp", "llm-inference", "local-llm", "radv", "rocm", "ryzen-ai-max", "speculative-decoding"]
stars: 101
forks: 12
openIssues: 3
closedIssues: 7
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-07-26T06:21:44Z"
lastCommitAt: "2026-08-22T03:04:03Z"
lastReleaseAt: "2026-08-07T00:20:56Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 83
undervaluedScore: 31
maintainers: ["Nathanw1014"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9ea02116769cc1afabbb4f0888af3446757823c835b61ab6bf427662214e1d5/Nathanw1014/strix-halo-llamacpp"
---

# Strix Halo llama.cpp toolbox (FA + MoE-prefill fixes)

A ready-to-run llama.cpp for AMD Strix Halo (Ryzen AI Max+ 395 / Radeon 8060S / gfx1151),
tuned for **long-context, quantized-KV** workloads. It bundles a set of Flash-Attention and
MoE-prefill fixes plus a current GPU driver, so quantized KV cache is fast instead of a penalty.

The measurements behind these fixes (matrices, methodology, raw data) live in the companion
[evidence pack](https://github.com/Nathanw1014/strix-halo-llamacpp/blob/HEAD/benchmarks/BENCHMARKS.md).

## Speedups at a glance

**v0.6.4 payload vs stock master, same box, same session** (`amd_iommu=off`, pp512 / tg32 t/s, `-b 512 -ub 512`,
`-r 3`, captured 2026-08-18 between 05:28 and 06:04 UTC). Baseline is stock upstream `9f0d017` at f16 KV, the
commit this release merged; fixed is the released v0.6.4 payload (`baf6360b` on `strix-halo-vulkan`). Both arms
were built with the same pinned glslc and run against the same pinned Mesa, so only llama.cpp differs. Every cell
traces to a raw run under [`benchmarks/results/glance-20260818/`](https://github.com/Nathanw1014/strix-halo-llamacpp/blob/HEAD/benchmarks/results/glance-20260818/).

| Model (arch) | KV |…
