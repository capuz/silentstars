---
repo: "wejoncy/sfllm"
name: "sfllm"
description: "Super fast serving stack for LLM on Windows/Linux/Macos"
readmeQualityOk: true
url: "https://github.com/wejoncy/sfllm"
language: "Cuda"
languages: ["Cuda", "Python", "C++"]
languagePcts: [45, 28, 27]
stars: 17
forks: 1
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2025-04-03T00:59:06Z"
lastCommitAt: "2026-09-18T08:27:42Z"
lastReleaseAt: "2025-12-17T14:20:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 60
maintainers: ["ffwejoncy", "wejoncy"]
openGraphImageUrl: "https://opengraph.githubassets.com/4000f9c25e5d8bcffd4b28ba61bfb60495da62b69f9527a2f5bacb70359541da/wejoncy/sfllm"
---

# SFLLM: High-Performance LLM Serving Framework

[🇨🇳 中文文档](https://github.com/wejoncy/sfllm/blob/HEAD/README_CN.md) | [🇺🇸 English](https://github.com/wejoncy/sfllm/blob/HEAD/README.md)

A production-ready, high-performance serving framework for large language models with OpenAI-compatible APIs.

## Project Background

SFLLM (Serving Framework for Large Language Models) is designed to provide efficient and scalable inference services for large language models. It focuses on maximizing GPU utilization and reducing inference latency through intelligent batching, CUDA optimizations, and memory-efficient implementations.

## Features

- **OpenAI-Compatible API**: Drop-in replacement for OpenAI API endpoints
- **High Performance**: Optimized inference with intelligent request batching
- **Streaming Support**: Real-time streaming responses for better user experience
- **CUDA Optimizations**: CUDA graphs and custom kernels for maximum performance
- **Memory Efficient**: Optimized KV-cache management and memory allocation
- **Production Ready**: Built-in health checks and error handling
- **Eagle3 Speculative Decoding**: Advanced speculative decoding with Eagle3 algorithm for faster…
