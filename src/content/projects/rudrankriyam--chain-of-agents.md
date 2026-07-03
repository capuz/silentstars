---
repo: "rudrankriyam/Chain-of-Agents"
name: "Chain-of-Agents"
description: "Chain of Agents implementation in Python and Swift"
url: "https://github.com/rudrankriyam/Chain-of-Agents"
language: "Swift"
languages: ["Swift", "Python"]
languagePcts: [57, 38]
stars: 30
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-01-28T12:40:37Z"
lastCommitAt: "2026-07-03T12:21:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 75
undervaluedScore: 35
maintainers: ["rudrankriyam"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac3153b0e41ef8b9cbdf86c9303033e0eab935fb3c034a2a0bc1beb559d835a5/rudrankriyam/Chain-of-Agents"
fundingLinks: ["GITHUB:https://github.com/rudrankriyam"]
---

# Chain of Agents Implementation

Chain of Agents (CoA) implementation in Python and Swift - A framework for long-context tasks using Large Language Models (LLMs).

## Overview

This repository implements the Chain-of-Agents framework as described in:

- [Chain of Agents: Large language models collaborating on long-context tasks](https://research.google/blog/chain-of-agents-large-language-models-collaborating-on-long-context-tasks/) (Google Research Blog)
- [Chain of Agents Paper](https://openreview.net/pdf?id=LuCLf4BJsr) (Research Paper)

The Chain of Agents framework enables efficient processing of long-context tasks by:

1. Breaking down large inputs into manageable chunks
2. Using worker agents to process individual chunks
3. Employing a manager agent to synthesize results

## Features

- Support for PDF document analysis
- Configurable chunk sizes for processing
- Real-time progress tracking
- Streaming responses from both worker and manager agents
- Clean macOS native interface
- Dual processing modes:
  - Cloud-based processing using Together AI's LLaMA models
  - On-device processing using MLX framework
- Support for offline inference with MLX

## Installation

```bash
git…
