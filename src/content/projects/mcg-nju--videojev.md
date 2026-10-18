---
repo: "MCG-NJU/VideoJev"
name: "VideoJev"
description: "VideoJev: System One Model for Video Understanding and Interaction"
readmeQualityOk: true
url: "https://github.com/MCG-NJU/VideoJev"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 162
forks: 7
openIssues: 2
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-10-08T01:01:33Z"
lastCommitAt: "2026-10-18T08:17:04Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 19
maintainers: ["zyuhan1999", "LanXingXuan"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f3d7fc52f5e94684a37a23a7c71bf1a388c4edd358eaeefc509923acbb33263/MCG-NJU/VideoJev"
---

## Overview

**VideoJev** performs temporal grounding and multiple-choice video QA through direct candidate scoring, without text generation.

[Try VideoJev-4B on ModelScope Studio ↗](https://modelscope.cn/studios/MCG-NJU/VideoJev-Demo)

https://github.com/user-attachments/assets/b8acb023-26d5-4940-bde1-2d623bc019fe

## Results

### Temporal grounding

### Video question answering

## Models

| Model | Base model | Weight format | Usage |
|---|---|---|---|
| **VideoJev-4B** | [Qwen3.5-4B](https://huggingface.co/Qwen/Qwen3.5-4B) | BF16 · Safetensors | [Checkpoint & examples ↗](https://huggingface.co/ZhuYuhan/VideoJev-4B) · [ModelScope ↗](https://modelscope.cn/models/MCG-NJU/VideoJev-4B) |
| **VideoJev-35B-A3B** | [Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | BF16 · Safetensors | [Checkpoint & examples ↗](https://huggingface.co/ZhuYuhan/VideoJev-35B-A3B) · [ModelScope ↗](https://modelscope.cn/models/MCG-NJU/VideoJev-35B-A3B) |

## Quick start

Set up the [environment](#environment), then run the 10-second demo:

```python
import json
import torch
from huggingface_hub import hf_hub_download
from transformers import AutoModel, AutoProcessor

video = hf_hub_download(…
