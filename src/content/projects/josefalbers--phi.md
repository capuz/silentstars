---
repo: "JosefAlbers/phi"
name: "phi"
description: "Phi-4 for Mac: Locally-run Vision and Language Models for Apple Silicon"
readmeQualityOk: true
url: "https://github.com/JosefAlbers/phi"
homepage: "https://medium.com/@albersj66"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Python"]
languagePcts: [65, 35]
topics: ["fine-tuning", "finetuning", "llm", "lora", "mac", "macos", "metal", "mlx", "phi-3", "phi-3-mini"]
stars: 277
forks: 22
openIssues: 1
closedIssues: 9
watchers: 7
contributors: 2
recentReleases: 0
createdAt: "2024-05-27T18:26:04Z"
lastCommitAt: "2026-07-31T06:30:08Z"
lastReleaseAt: "2024-07-20T05:34:02Z"
status: "thriving"
tags: []
healthScore: 85
undervaluedScore: 23
maintainers: ["JosefAlbers"]
openGraphImageUrl: "https://opengraph.githubassets.com/51e98bb6e99fb8b7c7b39b6bd34d13b3ffaa3a542cdb3b2a2bb501a76ae4a289/JosefAlbers/phi"
---

# Phi-3-MLX: Language and Vision Models for Apple Silicon

Phi-3-MLX is a versatile AI framework that leverages both the Phi-3-Vision multimodal model and the Phi-3-Mini-128K language model, optimized for Apple Silicon using the MLX framework. This project provides an easy-to-use interface for a wide range of AI tasks, from advanced text generation to visual question answering and code execution.

## Features

- Integration with [Phi-3.5-vision](https://huggingface.co/microsoft/Phi-3.5-vision-instruct) model
- Support for the [Phi-3.5-mini](https://huggingface.co/microsoft/Phi-3.5-mini-instruct) model
- Optimized performance on Apple Silicon using MLX
- Batched generation for processing multiple prompts
- Flexible agent system for various AI tasks
- Custom toolchains for specialized workflows
- Model quantization for improved efficiency
- LoRA fine-tuning capabilities
- API integration for extended functionality (e.g., image generation, text-to-speech)

## Minimum Requirements

Phi-3-MLX is designed to run on Apple Silicon Macs. The minimum requirements are:

- Apple Silicon Mac (M1, M2, or later)
- 8GB RAM (with quantization using `quantize_model=True` option)

For optimal…
