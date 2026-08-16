---
repo: "panbanda/higgs"
name: "higgs"
description: "A rust mlx server and model router for fast, dependency free inference on apple architecture"
readmeQualityOk: true
url: "https://github.com/panbanda/higgs"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 25
forks: 4
openIssues: 4
closedIssues: 3
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-02-17T21:42:00Z"
lastCommitAt: "2026-08-16T04:09:52Z"
lastReleaseAt: "2026-02-27T12:53:27Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 36
maintainers: ["renovate[bot]", "panbanda", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd1785eec3a382fa3a9bdb2b26dfb90b9f7e038510325d69bd8c15e2da705a95/panbanda/higgs"
---

# Higgs

Run open-weight MLX models locally on Apple Silicon, route requests across local and remote providers, and expose everything through one endpoint.

For a local model, set `kv_disk_dir` in its `[[models]]` entry to retain block-aligned prefix KV state across restarts. `kv_disk_space_mb` controls its on-disk LRU budget (default `4096`, minimum `64`). The disk tier is model, quantization, configuration, tokenizer, and chat-template bound; incompatible entries are ignored.

For DeepSeek-V2 models, set `mla_latent_cache = true` in its `[[models]]` entry to store the MLA KV cache as compressed latent rows instead of dense per-head tensors (default off). It cannot be combined with `kv_cache = "turboquant"`, and is a no-op for non-DeepSeek-V2 architectures. The `HIGGS_MLA_LATENT_CACHE` env var, when set to a recognized value (`1`/`0`, `true`/`false`, `on`/`off`, `yes`/`no`), overrides the config value either way.

Higgs is a single static Rust binary that serves local models, proxies to providers like OpenAI, Anthropic, and Ollama, and translates between OpenAI and Anthropic-style APIs so your existing tools and apps do not need a new integration.

**Why care**
- Run open-weight…
