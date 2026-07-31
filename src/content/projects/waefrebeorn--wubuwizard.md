---
repo: "waefrebeorn/wubuwizard"
name: "wubuwizard"
description: "wubuwizard: The best inference engine"
readmeQualityOk: true
url: "https://github.com/waefrebeorn/wubuwizard"
homepage: "http://wubu.waefrebeorn.com"
language: "Python"
languages: ["Python"]
languagePcts: [78]
stars: 28
forks: 2
openIssues: 4
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-12-14T04:38:33Z"
lastCommitAt: "2026-07-31T06:32:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 51
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/7b09adf4085575649bc0ba1a41cf7e09daeb7f5f4082311fd4c9296a6af19952/waefrebeorn/wubuwizard"
---

# wubuwizard

C11 inference engine ("the Colonel") plus a vault of mathematical encoders and
prior research. No external ML dependencies; quantization, matmul, tokenizer,
and model loaders are implemented in-tree.

## Layout

| Path | Contents |
|------|----------|
| `src/` | Core engine: model loader, SSM/GQA/MoE forward, quant matmul, GGUF + safetensors readers, CUDA kernels. |
| `include/` | Public headers (opaque structs, minimal includes). |
| `tools/` | `gen_text` (CPU generation), verification harnesses, component tests, API server, analysis scripts. |
| `vault/` | Quantization format references, legacy docs, archived session snapshots. |
| `THEORY/` | Research papers (markdown), `math_viz/` runnable proofs, `ENCODERS/` converter notes. |
| `draftPY/` | Python research prototypes (hyperbolic/GAAD/DFT/DCT encoders). |

## Build

```bash
make gen_text          # CPU inference binary
make test_ssd_moe      # slot-bank unit test (synthetic)
make test_real_load    # loads real Agents-A1-4B shards
make api_server        # OpenAI-compatible HTTP server
```

C11, GCC/Clang. CUDA paths require `nvcc` (optional). Flags in `Makefile`.

## Model support

Loads GGUF and HuggingFace…
