---
repo: "AlexBrandes/cmp170hx-qwen38-flash-next"
name: "cmp170hx-qwen38-flash-next"
description: "Qwen3.8-Flash-Next (W4A16) on 2x NVIDIA CMP 170HX with vLLM pipeline parallel: 226 tok/s single-user, 840 tok/s at 8 users, 262K context, HumanEval 157/164"
readmeQualityOk: true
url: "https://github.com/AlexBrandes/cmp170hx-qwen38-flash-next"
language: "Shell"
languages: ["Shell", "Dockerfile"]
languagePcts: [62, 38]
topics: ["cmp-170hx", "llm-inference", "qwen", "sm80", "vllm"]
stars: 10
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-17T01:13:45Z"
lastCommitAt: "2026-11-06T02:44:18Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 70
undervaluedScore: 3
maintainers: ["AlexBrandes"]
openGraphImageUrl: "https://opengraph.githubassets.com/a4c80345720aafca5208e15d42bcd3c4583854d8f521e800df982bf8acf57114/AlexBrandes/cmp170hx-qwen38-flash-next"
---

# Qwen3.8-Flash-Next on 2× CMP 170HX

**Qwen3.8-Flash-Next (W4A16) on two NVIDIA CMP 170HX cards, pipeline-parallel
with vLLM: 234 tok/s for one user (code), 827 tok/s across eight, 6,200–7,400
tok/s prefill from 4k to 64k prompts, the full 262,144-token window, image and
video input, and HumanEval 157/164, GSM8K 1,272/1,319.** Measured on PCIe Gen2 x4
links.

Serves [Intel/Qwen3.8-Flash-Next-W4A16-AutoRound](https://huggingface.co/Intel/Qwen3.8-Flash-Next-W4A16-AutoRound)
with upstream vLLM and the [vllm-cmp170hx](https://github.com/AlexBrandes/vllm)
plugin in a container: an OpenAI-compatible API with text, image and video
input, native MTP speculative decoding, reasoning and tool calls. The ~102 GB
N-gram (PLE) table stays on the NVMe drive and is read through the page cache;
everything else is on the two GPUs.

```bash
git clone https://github.com/AlexBrandes/cmp170hx-qwen38-flash-next
cd cmp170hx-qwen38-flash-next
./download.sh     # checkpoint at the pinned revision (~170 GB)
./start.sh        # tunes the host (sudo), starts the container, waits for /health
```

The API listens on `127.0.0.1:8000` as model `qwen3.8-flash-next-w4a16`.
`./stop.sh` stops it. Settings go in…
