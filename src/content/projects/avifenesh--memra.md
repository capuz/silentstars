---
repo: "avifenesh/memra"
name: "memra"
description: "Rust + CUDA inference engine for NVIDIA RTX PRO 6000 Blackwell and RTX 5090. Serves safetensors and GGUF over an OpenAI-compatible API, with per-device tuned defaults and speculative decode gated byte-identical to plain decode. Hosted instance: inference.tiyuvta.ai"
readmeQualityOk: true
url: "https://github.com/avifenesh/memra"
homepage: "https://inference.tiyuvta.ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [36]
topics: ["blackwell", "cuda", "gguf", "gpu-kernels", "moe", "nvfp4", "rust", "speculative-decoding", "llm", "sm120a"]
stars: 325
forks: 38
openIssues: 1
closedIssues: 3
watchers: 25
contributors: 3
recentReleases: 10
createdAt: "2026-07-05T20:45:33Z"
lastCommitAt: "2026-08-25T04:10:16Z"
lastReleaseAt: "2026-07-10T00:12:53Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 93
undervaluedScore: 30
maintainers: ["avifenesh"]
openGraphImageUrl: "https://opengraph.githubassets.com/21b75031a7be218e49f72e39ecc6994595cfc37f6e34158f9b4e1976d5aa6f41/avifenesh/memra"
---

# memra

Rust + CUDA inference engine tuned separately for RTX PRO 6000 Blackwell and RTX 5090, with
OpenAI-compatible serving and model-specific correctness gates.

[Install](https://github.com/avifenesh/memra/blob/HEAD/docs/INSTALLATION.md) · [Models](https://github.com/avifenesh/memra/blob/HEAD/docs/MODELS.md) ·
[Serving](https://github.com/avifenesh/memra/blob/HEAD/docs/SERVING.md) · [Performance](https://github.com/avifenesh/memra/blob/HEAD/docs/PERFORMANCE.md) ·
[Hosted API](https://inference.tiyuvta.ai)

## Quick start

Prebuilt binaries require Linux x86_64, an NVIDIA driver with CUDA 13 runtime support, and the
CUDA runtime libraries. The installer selects the GPU build, verifies its checksum, and does not
require `nvcc`.

```bash
curl -fsSL https://raw.githubusercontent.com/avifenesh/memra/main/tools/install.sh | sh
export PATH="$HOME/.local/bin:$PATH"
kernel-check                  # expect: ALL GREEN
```

Start a server with a supported public checkpoint. The first run downloads and caches the model:

```bash
MEMRA_MODELS="q38=hf:Avifenesh/Qwen3.8-27B-NVFP4-MTP-GGUF:Q5K-mtp" \
memra-server
```

The server listens on `127.0.0.1:8080`. Send a streaming chat completion…
