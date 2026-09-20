---
repo: "rajveer43/VeloxQuant-MLX"
name: "VeloxQuant-MLX"
description: "Fast KV-cache quantization for Apple Silicon (MLX) — 43 research-adapted compression methods with Metal kernels"
readmeQualityOk: true
url: "https://github.com/rajveer43/VeloxQuant-MLX"
homepage: "https://veloxquant.dev/"
language: "Python"
languages: ["Python"]
languagePcts: [81]
topics: ["kv", "llm", "mlx", "quantization", "kv-cache", "macos", "ondeviceai", "apple-silicon", "compression", "inference"]
stars: 23
forks: 6
openIssues: 36
closedIssues: 143
watchers: 1
contributors: 5
recentReleases: 9
createdAt: "2026-04-19T03:18:11Z"
lastCommitAt: "2026-09-20T08:47:44Z"
lastReleaseAt: "2026-07-10T16:41:18Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded", "release_machine"]
healthScore: 96
undervaluedScore: 53
maintainers: ["rajveer43", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1214779578/4388af7a-fb3d-4ed0-a52e-663139e8a636"
fundingLinks: ["KO_FI:https://ko-fi.com/rajveer43", "CUSTOM:https://buymeachai.in/rajveer43"]
discussionCount: 0
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/veloxquant-logo-dark.svg" />
</picture>

<p>
  43 compression methods — quantizers, token-eviction caches, cross-layer merging — in MLX
</p>

<p>
  
  
</p>

<p>
  <b><a href="https://veloxquant.dev/">veloxquant.dev</a></b> —
</p>

</div>

---

VeloxQuant-MLX shrinks the KV cache of any `mlx_lm` model on Apple Silicon, up to 16× smaller with near-lossless quality, in three lines of code. If you run models locally and keep hitting a context-length or memory wall, you swap in a compressed cache and change nothing else about the model.

Inside are 43 compression methods, each adapted from a published paper, spanning zero-calibration 1-bit quantizers, token-eviction caches, and cross-layer merging. All of them share the same 3-line API, so switching means changing `method="..."`. The hot path runs on hand-written Metal kernels (up to 14.7× faster quantize), and it's validated on 12 production models (Llama, Mistral, Qwen, Phi, Gemma 3/4, Falcon) plus vision-language models via [mlx-vlm](https://github.com/Blaizzy/mlx-vlm).

> **Compression ratios are bit-width accounting, not measured RSS.** Most methods still…
