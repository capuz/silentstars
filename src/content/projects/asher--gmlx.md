---
repo: "asher/gmlx"
name: "gmlx"
description: "Local inference platform for K/IQ-quant GGUF models on Apple Silicon"
readmeQualityOk: true
url: "https://github.com/asher/gmlx"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["anthropic-api", "apple-silicon", "gguf", "gguf-model-support", "gguf-runner", "inference", "inference-engine", "llm", "llm-inference", "lora"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-07-19T20:13:08Z"
lastCommitAt: "2026-07-30T06:06:29Z"
lastReleaseAt: "2026-07-27T14:45:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 28
maintainers: ["asher"]
openGraphImageUrl: "https://opengraph.githubassets.com/69415cfef45caba667c5cb7c4e04f798e944ff26a566baa82e8d37f5b8804dab/asher/gmlx"
---

# gmlx

**The fastest way to run GGUF models on Apple Silicon.**

gmlx is a local inference platform for Apple Silicon: chat with an open
model, serve it over OpenAI- and Anthropic-compatible APIs, talk to it by
voice, and fine-tune it. One command, entirely on your Mac. If GGUF files,
quants, and the KV cache are unfamiliar terms, the
[getting-started guide](https://github.com/asher/gmlx/blob/main/docs/getting-started.md)
introduces them alongside the first install, and its
[glossary](https://github.com/asher/gmlx/blob/main/docs/getting-started.md#glossary)
defines the vocabulary used throughout these docs.

gmlx takes the highest-quality quants available and serves them with the best
performance on Apple Silicon. Today that means the community's K-quant and
IQ-quant builds, which, size for size, keep more of the original model's
accuracy than any other open format, and markedly more than MLX's built-in
affine quantization ([accuracy per byte](#accuracy-per-byte)). Nearly every
open-weight release gets these builds within days, published as GGUF files,
and gmlx runs them exactly as published: nothing converted, nothing
re-quantized, none of that accuracy given back. The companion…
