---
repo: "cloudrift-ai/emmy"
name: "emmy"
description: "Optimized GPU compiler for LLM inference. Choose from a list of optimized recipes or optimize your own model via kernel fusion, autotuning, and advanced scheduling. Run benchmarks across different GPU types and configurations, track results and share experiments with the community."
readmeQualityOk: true
url: "https://github.com/cloudrift-ai/emmy"
homepage: "https://riftstack.ai/emmy"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["compilers", "gpu-computing", "inference", "llm-inference", "llmops"]
stars: 123
forks: 20
openIssues: 7
closedIssues: 3
watchers: 0
contributors: 12
recentReleases: 6
createdAt: "2025-08-02T04:46:17Z"
lastCommitAt: "2026-11-07T10:37:21Z"
lastReleaseAt: "2026-09-17T14:45:32Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 86
undervaluedScore: 47
maintainers: ["Slonegg", "6erun", "Alex-Wengg"]
openGraphImageUrl: "https://opengraph.githubassets.com/d53c74e328a5e6d4751ca8047b4b9516c8c09bf56d490a425cb5090c5efc6ad6/cloudrift-ai/emmy"
---

**Compile → Benchmark → Deploy.** Emmy compiles PyTorch models into CUDA kernels, benchmarks LLM inference, and
deploys models on local or cloud GPUs with vLLM and SGLang.

[Compile](#compile) · [Tune](#tune) · [Deploy](#deploy) · [Benchmark](#benchmark) · [Serve](#serve) · [Recipes](#recipes)

See Emmy in action: [Outperforming vLLM on Gemma4-12B](https://riftstack.ai/research/optimizing-gemma-4-12b-rtx).

## Install

Requires Python 3.12 or newer.

```bash
pip install emmy-ml
emmy --version
```

The package includes ready-to-use recipes. Remote deployment and benchmarking do not require a local GPU or CUDA
installation. For gated Hugging Face models, accept the model's license and set `HF_TOKEN`.

## Compile

Compile a PyTorch operation, compare its speed with PyTorch, or inspect the generated CUDA:

```bash
pip install "emmy-ml[compile]"

# Compile an operation
emmy compile -c "nn.RMSNorm(2048)(torch.randn(1,32,2048))"

# Benchmark against eager PyTorch and torch.compile
emmy run --bench -c "nn.Softmax(dim=-1)(torch.randn(1,28,2048,2048))"

# Inspect the generated CUDA
emmy compile -c "nn.RMSNorm(2048)(torch.randn(1,32,2048))" --ir cuda
```

Running compiled kernels requires an…
