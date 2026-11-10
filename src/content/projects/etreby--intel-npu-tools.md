---
repo: "etreby/intel-npu-tools"
name: "intel-npu-tools"
description: "Private semantic search, Whisper, OCR, and MCP agent tools on Intel Arrow Lake AI Boost NPUs for Linux"
readmeQualityOk: true
url: "https://github.com/etreby/intel-npu-tools"
homepage: "https://etreby.github.io/intel-npu-tools/"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [74, 24]
topics: ["arrow-lake", "artificial-intelligence", "intel", "linux", "mcp", "npu", "ocr", "openvino", "whisper", "ai-agents"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-08-08T12:53:17Z"
lastCommitAt: "2026-11-10T11:37:58Z"
lastReleaseAt: "2026-08-09T08:58:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 50
undervaluedScore: 17
maintainers: ["etreby"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ce76aadd542550197e938a463fdd98c76ee6c3c34c8c91021ff83f47e5d3844/etreby/intel-npu-tools"
discussionCount: 0
---

# Intel NPU Tools for Linux

An unofficial, community-maintained toolkit that makes the integrated **Intel AI Boost NPU** in Arrow Lake processors useful on Linux. It provides private semantic search, local speech transcription, screenshot OCR, hardware verification, and twelve MCP tools that AI agents can call.

> This project is not affiliated with, sponsored by, or endorsed by Intel Corporation. Intel, Intel Core, OpenVINO, and Intel AI Boost are trademarks of their respective owners.

## Why this exists

Linux can expose an Arrow Lake NPU as `/dev/accel/accel0`, but applications still need Intel's Level Zero NPU user-mode driver, OpenVINO, compatible models, permissions, and integration code. This repository assembles those pieces into useful desktop and agent workflows.

The NPU is a good fit for efficient background inference. It does **not** replace a discrete GPU for model training, large language models, or image generation.

## Features

- **Speech to text:** multilingual Whisper Base INT8 runs locally on the NPU. Whisper Small is available for noisier rooms; see the [roadmap](https://github.com/etreby/intel-npu-tools/blob/HEAD/docs/ROADMAP.md) for the accuracy and…
