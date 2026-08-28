---
repo: "timothystewart6/vllm-gb10"
name: "vllm-gb10"
description: "Bleeding edge vLLM Docker image for the NVIDIA DGX Spark (GB10 / sm_121a)."
readmeQualityOk: true
url: "https://github.com/timothystewart6/vllm-gb10"
homepage: "https://technotim.com/posts/vllm-gb10-docker/"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [73, 23]
topics: ["arm64", "cuda", "dgx-spark", "docker", "gb10", "inference", "llm", "nvidia", "pytorch", "vllm"]
stars: 48
forks: 5
openIssues: 3
closedIssues: 13
watchers: 2
contributors: 4
recentReleases: 8
createdAt: "2026-05-20T04:19:34Z"
lastCommitAt: "2026-08-28T15:33:55Z"
lastReleaseAt: "2026-06-30T20:14:49Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 95
undervaluedScore: 44
maintainers: ["timothystewart6", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a876e042ac2fda0d470845b5f1b7b75bdc12a0277c473fcd17a4eed501b43cf/timothystewart6/vllm-gb10"
fundingLinks: ["GITHUB:https://github.com/timothystewart6", "PATREON:https://patreon.com/technotim"]
---

# vllm-gb10

Reproducible [vLLM](https://github.com/vllm-project/vllm) Docker image for the
**NVIDIA DGX Spark (GB10 / sm_121a)**. Every input - CUDA base image, PyTorch
stack, NCCL, FlashInfer, vLLM - is pinned by commit SHA or digest. The same
`versions.env` always produces the same image.

> **Hardware:** DGX Spark (GB10 SoC) only. The image targets `linux/arm64`
> with `TORCH_CUDA_ARCH_LIST=12.1a`. It will not run on x86 or other GPU
> architectures.

## Quick start

Pull the latest release and serve a model:

```bash
docker pull ghcr.io/timothystewart6/vllm-gb10:latest

docker run --rm -it \
  --gpus all \
  --ipc=host \
  --network host \
  -v ~/.cache/huggingface:/root/.cache/huggingface \
  ghcr.io/timothystewart6/vllm-gb10:latest \
  vllm serve <model> --host 0.0.0.0 --port 8000 --gpu-memory-utilization 0.7
```

For a pinned version see the [releases page](https://github.com/timothystewart6/vllm-gb10/releases)
for the full component table and immutable tag for each build.

## What's in the image

Each release page lists the exact versions of every component. Key stack:

| Component | Pinned by |
|---|---|
| CUDA base image | digest (`sha256:...`) |
| vLLM | git commit SHA…
