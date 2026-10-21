---
repo: "HYGON-AI/sglang-das"
name: "sglang-das"
description: "Downstream adaptation repository for das, built on the upstream sgl-project/sglang community version, with feature adaptation and optimization for the hcu platform."
originalDescription: "基于 sgl-project/sglang 上游社区版本建设的 das 下游适配仓库，面向 hcu 平台进行功能适配与优化。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/HYGON-AI/sglang-das"
language: "Python"
languages: ["Python"]
languagePcts: [84]
stars: 46
forks: 76
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2085
recentReleases: 0
createdAt: "2026-05-26T10:14:00Z"
lastCommitAt: "2026-10-21T08:48:36Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 43
maintainers: ["dddddddxl", "RyeYuan", "Crowder13"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6a1b7c4c8cd3cc65af4cc39b7f48cb2d95789571d489171a1d47cc2b6678906/HYGON-AI/sglang-das"
---

# SGLang: Fast inference for LLMs and multimodal models

SGLang is an open-source inference framework for large language, vision-language, and diffusion models, optimized for agentic workloads, large-scale serving, and RL rollouts. [SGLang Diffusion](https://docs.sglang.io/docs/sglang-diffusion) is its built-in image and video generation engine, included in this repository and the `sglang` Python package.

👋 Get started below, or meet the community at [SGLang Events](https://www.sglang.io/events), including meetups, developer meetings, workshops, and office hours.

## Get Started

Pull the Docker image, which includes SGLang and its dependencies:

```bash
docker pull lmsysorg/sglang:latest
```

Alternatively, install SGLang in an activated Python environment with uv:

```bash
uv pip install --prerelease=allow sglang
```

Next, launch your model:

- [Quickstart](https://docs.sglang.io/docs/get-started/quickstart): Run your first model and send a request.
- [Cookbook](https://cookbook.sglang.io/): Choose your model and hardware to get a ready-to-run launch command.

## Supported Hardware

SGLang supports a wide range of GPUs, TPUs, NPUs, CPUs, and Apple Silicon platforms.

|…
