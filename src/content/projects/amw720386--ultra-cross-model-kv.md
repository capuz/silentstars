---
repo: "amw720386/ultra-cross-model-kv"
name: "ultra-cross-model-kv"
description: "Prefill a 27B hybrid model with a 4B one: cross-model KV + DeltaNet state transfer for Qwen3.5/3.8"
readmeQualityOk: true
url: "https://github.com/amw720386/ultra-cross-model-kv"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-11-17T01:12:54Z"
lastCommitAt: "2026-11-23T12:21:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 48
maintainers: ["claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/e31fa218bff4524d14b072b216f69aa2bfd1c8a1adc638f2a1b5af0e05f4298a/amw720386/ultra-cross-model-kv"
---

# ultra-cross-model-kv

Prefill Qwen3.8-27B with Qwen3.5-4B. The 4B reads the prompt; learned maps turn its activations into the 27B's
full-attention KV **and** Gated-DeltaNet recurrent states; the 27B decodes from there. One GPU, no cache over the wire.

- **2.0–2.1× faster TTFT than native vLLM 0.34** at 8K–32K on the same H100 (2.4–3.1× against this engine's own
  native); decode unchanged
- **~2× goodput** under load (TTFT ≤ 5 s), against this engine's native
- **Level with or ahead of [OneTriangle](https://onetriangle.ai/blog/transfer-benchmarks?pair=qwen-27)** on every
  long-document and coding benchmark both ran
- 5× at 128K, 21.5× at 1M, but exact recall is not preserved beyond 32K
