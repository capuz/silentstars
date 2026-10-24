---
repo: "VMAFx/vmafx"
name: "vmafx"
description: "VMAFx: perceptual video quality assessment (VMAF), GPU-accelerated and SIMD-tuned. CUDA, SYCL, HIP and Metal backends checked against the CPU scores, AVX2/AVX-512/NEON, tiny-AI models, an MCP server, Kubernetes/Helm deployment. Fork of Netflix/vmaf; fork code EUPL-1.2, Netflix code BSD-2-Clause-Patent."
readmeQualityOk: true
url: "https://github.com/VMAFx/vmafx"
homepage: "http://vmafx.dev/"
language: "C"
languages: ["C", "Python"]
languagePcts: [37, 36]
topics: ["cloud-native", "cuda", "ffmpeg", "mcp", "onnx", "sycl", "video-encoding", "video-quality", "vmaf", "c"]
stars: 6
forks: 3
openIssues: 252
closedIssues: 45
watchers: 0
contributors: 113
recentReleases: 9
createdAt: "2026-05-28T10:17:19Z"
lastCommitAt: "2026-10-24T08:21:43Z"
lastReleaseAt: "2026-10-07T15:00:42Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded", "release_machine"]
healthScore: 83
undervaluedScore: 61
maintainers: ["lusoris", "renovate[bot]", "Tualua"]
openGraphImageUrl: "https://opengraph.githubassets.com/6582d724dd7c44b0b7d55257f62502970b595077859f4855e9c52f62a4c14f52/VMAFx/vmafx"
fundingLinks: ["GITHUB:https://github.com/lusoris", "KO_FI:https://ko-fi.com/lusoris", "PATREON:https://patreon.com/Lusoris"]
discussionCount: 6
---

**Perceptual video quality assessment — GPU-accelerated, SIMD-tuned, numerically exact**

  *A fork of [Netflix/vmaf](https://github.com/Netflix/vmaf) that keeps the reference scores byte-for-byte*

VMAFx is a perceptual video quality assessment (VMAF) library and `vmaf`
command-line tool. It adds CUDA, SYCL, HIP and Metal backends and AVX2,
AVX-512, NEON and SVE2 SIMD paths, each checked against the CPU scores, and
keeps Netflix's reference scores as a required CI gate. It also ships ONNX
tiny models, an MCP server and FFmpeg filters.

**[📖 Full documentation](https://vmafx.dev/)** · [Documentation source](https://github.com/VMAFx/vmafx/blob/HEAD/docs/index.md)

---

## 🎯 Why VMAFx

VMAFx keeps upstream's numbers and adds the parts a production pipeline needs. The
three Netflix reference pairs are a required CI gate, so every change below is
measured against scores that never move.

| | Upstream `libvmaf` | VMAFx |
| --- | --- | --- |
| **GPU backends** | CUDA | CUDA · SYCL · HIP · Metal, selected at runtime |
| **SIMD** | AVX2, AVX-512 | AVX2 · AVX-512 · NEON · SVE2, held to feature-specific parity tolerances |
| **Output precision** | `%.6f` | `%.6f` by default,…
