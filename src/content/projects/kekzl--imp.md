---
repo: "kekzl/imp"
name: "imp"
description: "Run large AI chat models privately on your own NVIDIA RTX 50 or RTX PRO graphics card. On one RTX 5090, Qwen3.8-27B writes about 70 words per second, 1.4x faster than vLLM. Even a model almost four times larger than the card's memory runs. Works with apps made for ChatGPT or Claude. Starts with one docker command."
readmeQualityOk: true
url: "https://github.com/kekzl/imp"
language: "C++"
languages: ["C++", "Cuda"]
languagePcts: [51, 36]
topics: ["blackwell", "cuda", "mixture-of-experts", "quantization", "rtx-5090", "qwen", "inference-engine", "nvfp4", "llm-inference", "local-llm"]
stars: 72
forks: 7
openIssues: 1
closedIssues: 519
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-02-23T01:02:56Z"
lastCommitAt: "2026-11-09T04:34:57Z"
lastReleaseAt: "2026-06-09T13:53:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 41
maintainers: ["kekzl", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1164344011/6531498b-14a0-4fb7-821f-e9748ac97f38"
discussionCount: 1
---

RTX 5050 to 5090 · RTX PRO 2000 to 6000 · one <code>docker run</code> · OpenAI and Anthropic API · built-in chat · Linux or WSL2</p>

**imp runs AI chat models on your own NVIDIA graphics card** (any GeForce RTX 50 or RTX PRO Blackwell). Chat apps and coding agents talk to it the way they talk to ChatGPT or Claude, but nothing leaves your machine. It is built for this one card generation only, and that is why it is fast. One container, nothing else to install, MIT license.

## How fast

| Qwen3.8-27B on one RTX 5090, tokens/s | **imp** | vLLM 0.31.0 |
| --- | ---: | ---: |
| one user | **95.5** | 70.4 |
| 32 users at once (total) | **1974.8** | 1380.1 |

Both engines read the same model file. A token is about ¾ of a word, so 95 tokens/s is roughly 70 words per second. Every model, method and raw log: [`docs/BENCHMARKS.md`](https://github.com/kekzl/imp/blob/HEAD/docs/BENCHMARKS.md).

**Bigger than the card:** the 123.6 GiB Qwen3.8-Flash-Next answers at **91.8 tokens/s** on a 32 GB card, its experts in host RAM ([how](https://github.com/kekzl/imp/blob/HEAD/docs/BIG_MODELS.md)).

## Quickstart (Docker)

**You need:** an RTX 50 or RTX PRO Blackwell card, Linux or Windows with WSL2,…
