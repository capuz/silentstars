---
repo: "labscommunity/cascadia"
name: "cascadia"
description: "Run any model on Intel silicon"
readmeQualityOk: true
url: "https://github.com/labscommunity/cascadia"
homepage: "https://cascadia.to"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
topics: ["distributed-inference", "intel", "llm-inference", "local-ai", "openvino"]
stars: 31
forks: 0
openIssues: 19
closedIssues: 28
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-05-01T21:19:40Z"
lastCommitAt: "2026-09-15T08:55:23Z"
lastReleaseAt: "2026-08-26T10:24:05Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 45
maintainers: ["7i7o", "t8", "twilson63"]
openGraphImageUrl: "https://opengraph.githubassets.com/03b64ffe3069c593ed6d4e0ca406fb5cee0d0bb783ae5ecc0df9031107d7a613/labscommunity/cascadia"
---

</p>

</p>

---

Cascadia distributes LLM inference across Intel laptops, desktops, and AI PCs. Shard a model across the machines you already have and serve it through an OpenAI-compatible API. No cloud or NVIDIA GPUs required.

Frontier models don't fit on a single laptop. Cloud APIs are expensive, opaque, and require sending your data offsite. Cascadia lets you point a few Intel machines at each other and run models that none of them could handle alone.

## Features

- **OpenAI-compatible API**: `/v1/chat/completions` with SSE streaming; point existing clients at it unchanged
- **Pipeline parallelism**: shard a model into stages and run each stage on a different machine, activations relayed over TCP
- **Built-in sharder**: `cascadia shard` cuts a HuggingFace model into INT4 per-stage shards; no external tooling
- **Seven engines**: `mock`, `ov-genai`, `ov-runtime`, `ov-dist-spec` (distributed speculative decoding), `gemma4`, a CPU-targeted `sparse-moe` engine for large mixture-of-experts models like Kimi K2.6 and MiniMax-M2, and `qwen35` for the Qwen3.5 hybrid family (Qwen3.6 MoE, dense Qwen3.8)
- **Single static binary per node**: Rust only at runtime; no Python on workers
-…
