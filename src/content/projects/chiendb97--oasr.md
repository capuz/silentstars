---
repo: "chiendb97/oasr"
name: "oasr"
description: "A high-performance inference and serving framework for Automatic Speech Recognition"
readmeQualityOk: true
url: "https://github.com/chiendb97/oasr"
language: "Python"
languages: ["Python"]
languagePcts: [72]
topics: ["asr", "attention", "conformer", "ctc", "cuda", "inference", "transducer", "transformer", "asr-serving", "wfst"]
stars: 18
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-23T07:12:48Z"
lastCommitAt: "2026-08-19T04:07:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 41
maintainers: ["chiendb97"]
openGraphImageUrl: "https://opengraph.githubassets.com/86b65c0d1e0e79ac8bac163d929816570d987457aefcfc4cace95d71e05f012f/chiendb97/oasr"
---

<picture>
  </picture>
</p>

<h3 align="center">
Easy, fast, and cheap ASR serving for everyone
</h3>

---

OASR is a fast and easy-to-use framework for the inference and serving of automatic speech recognition (ASR) models. It is designed to deliver low-latency, high-throughput inference.

---

## Key Features

OASR is fast with:

- Custom CUDA / CUTLASS kernels for GEMM, attention, normalization, convolution, feature extraction, and decoding
- Paged KV cache for streaming attention
- Dynamic batching of offline and streaming requests, with length-bucketing and sequence packing for offline
- CUDA Graph capture of the steady-state streaming encoder
- FP16 / BF16 / FP32 paths across Volta through Blackwell (SM70–SM120)

OASR is flexible and easy to use with:

- A single engine for both offline and streaming inference
- Seven architectures across five decode families — CTC, RNN-T, AED, NAR (CIF), and speech-LLM
- Checkpoints load directly from Hugging Face, WeNet, icefall, and FunASR — no conversion step
- Decoders: CTC greedy and prefix beam, GPU WFST beam search, transducer and AED greedy/beam, CTC+AED rescoring
- A production Rust frontend with **OpenAI-compatible** HTTP, a…
