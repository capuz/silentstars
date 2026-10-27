---
repo: "tinybirdco/llm-benchmark"
name: "llm-benchmark"
description: "We assessed the ability of popular LLMs to generate accurate and efficient SQL from natural language prompts. Using a 200 million record dataset from the GH Archive uploaded to Tinybird, we asked the LLMs to generate SQL based on 50 prompts. "
readmeQualityOk: true
url: "https://github.com/tinybirdco/llm-benchmark"
homepage: "https://llm-benchmark-five.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
stars: 87
forks: 9
openIssues: 1
closedIssues: 11
watchers: 3
contributors: 13
recentReleases: 0
createdAt: "2025-05-01T11:29:39Z"
lastCommitAt: "2026-10-27T09:16:31Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 50
maintainers: ["actions-user", "github-actions[bot]", "pei-tinybird"]
openGraphImageUrl: "https://opengraph.githubassets.com/227925033cd3f2d2c912552ee455e350599589dd788a93efa45dfb5c5e460edf/tinybirdco/llm-benchmark"
---

# LLM SQL Generation Benchmark

A tool for benchmarking various Large Language Models (LLMs) on their ability to generate correct analytical SQL queries for Tinybird.

See results: https://llm-benchmark.tinybird.live/

## Overview

This benchmark evaluates how well different LLMs can generate analytical SQL queries based on natural language questions about data in Tinybird. It measures:

- SQL query correctness
- Execution success
- Performance metrics (time to first token, total duration, token usage)
- Error handling and recovery

The benchmark includes an automated retry mechanism that feeds execution errors back to the model for correction.

## Supported Providers & Models

The benchmark currently supports the following providers and models through [OpenRouter](https://openrouter.ai/):

- **X.AI**: Grok-3 Beta, Grok-3 Mini Beta, Grok-4
- **Anthropic**: Claude 3.5 Sonnet, Claude 3.7 Sonnet, Claude Opus 4, Claude Sonnet 4
- **DeepSeek**: DeepSeek Chat v3 0324, DeepSeek Chat v3 0324 Free
- **Google**: Gemini 2.0 Flash 001, Gemini 2.5 Flash, Gemini 2.5 Pro
- **Meta**: Llama 4 Maverick, Llama 4 Scout, Llama 3.3 70B Instruct
- **Mistral**: Ministral 8B, Mistral Small 3.1 24B…
