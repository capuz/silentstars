---
repo: "avifenesh/memra"
name: "memra"
description: "Rust + CUDA inference engine for NVIDIA RTX PRO 6000 Blackwell and RTX 5090. Serves safetensors and GGUF over an OpenAI-compatible API, with per-device tuned defaults and speculative decode gated byte-identical to plain decode. Hosted instance: inference.tiyuvta.ai"
readmeQualityOk: true
url: "https://github.com/avifenesh/memra"
homepage: "https://inference.tiyuvta.ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [37]
topics: ["blackwell", "cuda", "gguf", "gpu-kernels", "moe", "nvfp4", "rust", "speculative-decoding", "llm", "sm120a"]
stars: 328
forks: 38
openIssues: 1
closedIssues: 3
watchers: 25
contributors: 3
recentReleases: 10
createdAt: "2026-07-05T20:45:33Z"
lastCommitAt: "2026-08-29T17:26:54Z"
lastReleaseAt: "2026-07-10T00:12:53Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 95
undervaluedScore: 30
maintainers: ["avifenesh"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c15ab21056d9a66fd8f85cbb09bdfd412bfc697b3a0b579803057e22f18e411/avifenesh/memra"
---

# memra

Rust + CUDA inference engine tuned separately for RTX PRO 6000 Blackwell and RTX 5090, with
OpenAI-compatible serving and model-specific correctness gates.

[Install](https://github.com/avifenesh/memra/blob/HEAD/docs/INSTALLATION.md) · [Models](https://github.com/avifenesh/memra/blob/HEAD/docs/MODELS.md) ·
[Serving](https://github.com/avifenesh/memra/blob/HEAD/docs/SERVING.md) · [Performance](https://github.com/avifenesh/memra/blob/HEAD/docs/PERFORMANCE.md) ·
[Hosted API](https://inference.tiyuvta.ai/model?c=github-memra-readme)

> **Want to try Memra without operating a GPU?**
> [Open the hosted instance →](https://inference.tiyuvta.ai/model?c=github-memra-readme).
> Its live model catalog, access path, prices, and terms are documented there.

## Quick start

Prebuilt binaries require Linux x86_64, an NVIDIA driver with CUDA 13 runtime support, and the
CUDA runtime libraries. The installer selects the GPU build, verifies its checksum, and does not
require `nvcc`.

```bash
curl -fsSL https://raw.githubusercontent.com/avifenesh/memra/main/tools/install.sh | sh
export PATH="$HOME/.local/bin:$PATH"
kernel-check                  # expect: ALL GREEN
```

Start a server with a…
