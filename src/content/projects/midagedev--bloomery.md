---
repo: "midagedev/bloomery"
name: "bloomery"
description: "Hybrid GPU + CPU inference for mixture-of-experts models, written in Rust down to the CUDA kernels. A drop-in llama-server."
readmeQualityOk: true
url: "https://github.com/midagedev/bloomery"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
topics: ["cuda", "deepseek", "gguf", "glm", "inference", "llama-cpp", "llm", "moe", "qwen", "rust"]
stars: 53
forks: 5
openIssues: 34
closedIssues: 153
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-09-19T12:45:54Z"
lastCommitAt: "2026-10-23T08:47:22Z"
lastReleaseAt: "2026-10-09T09:08:41Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 41
maintainers: ["juliankang4", "Burntgogi", "midagedev"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1377146773/b8f76f4e-44bf-41ac-a749-86d8513f1bee"
discussionCount: 0
---

Written in Rust from the HTTP server down to the CUDA kernels. A drop-in

- **MoE models larger than the card, and larger than the host's RAM.** Routed experts live on the GPU and in host
  RAM; the engine counts its own routing and moves the experts it calls most onto the card while it runs. On one
  RTX 3090 24 GB beside a 256 GB host, DeepSeek-V4.1-Flash `Q3_K_M` (347 GB) serves two requests at 33.5 tok/s in
  total and GLM-5.3-Flash at 25.3 (0.3.0). When the RAM cannot hold the host's experts either, Qwen3.8, GLM-5.3-Flash and
  DeepSeek-V4.1-Flash page the rest from the model file on NVMe.
- **A prompt cache that survives other requests.** The Qwen3.8 and GLM-5.3-Flash seats keep saved prompt states in
  host RAM: a request that shares a prefix with an earlier one restores it, even after another request used the
  slot ([recorded on tape](https://tape.midagedev.com/r/u8fnay7pn4djqmy6vvaq)).
- **Several requests, one pass.** With `--parallel 2` two busy streams run through the model together. With the MTP
  draft off, that gave 25–37 % more tokens a second in total than one stream (0.2.1,
  [measured on the…
