---
repo: "funkpopo/Anna"
name: "Anna"
description: "Run Qwen3.5 / Qwen3-TTS / Gemma4 on your Intel Arc Alchemist GPU"
url: "https://github.com/funkpopo/Anna"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 12
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 8
createdAt: "2026-03-26T02:18:22Z"
lastCommitAt: "2026-07-03T06:24:01Z"
lastReleaseAt: "2026-04-17T08:33:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 47
maintainers: ["funkpopo"]
openGraphImageUrl: "https://opengraph.githubassets.com/3203df797ad0fce1af98c7331ccc648e3849c680d3572ca8377e45d67b7c748c/funkpopo/Anna"
---

# Anna

[English](README.md) | [简体中文](README_zh.md)

Anna is a local inference runtime for large language, multimodal, and speech models. It provides an OpenAI-compatible HTTP API and command-line tools for local generation, serving, benchmarking, Qwen3-TTS speech synthesis, and Qwen3-ASR speech recognition.

The runtime is built on PyTorch and is optimized for Intel Arc / XPU. CPU execution is useful for development and smaller tests.

## Features

- OpenAI-compatible endpoints: `/v1/chat/completions`, `/v1/completions`, `/v1/audio/speech`, `/v1/audio/transcriptions`, `/v1/models`
- Non-streaming and streaming text generation
- Chat, plain text completion, multimodal chat, function calling, and reasoning output
- Qwen3-TTS speech synthesis and Qwen3-ASR speech recognition
- Intel XPU options for `torch.compile`, KV-cache quantization, int4 weight quantization, MoE expert offload, prompt cache, and continuous batching
- CLI tools: `anna-serve`, `anna-generate`, `anna-bench`, `anna-speak`, `anna-transcribe`, `anna-xpu-int4-cache`

## Supported Models

Anna loads a local model directory. A normal Hugging Face-style directory should contain `config.json` and model weights. A Qwen…
