---
repo: "davanstrien/uv-scripts"
name: "uv-scripts"
description: "Hugging Face recipes: run OCR, transcription, classification, embeddings and more over a Hub dataset in one command, locally or on HF Jobs. Built for people and coding agents."
readmeQualityOk: true
url: "https://github.com/davanstrien/uv-scripts"
homepage: "https://huggingface.co/uv-scripts"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["agents", "huggingface", "ocr", "pep723", "uv", "hf-jobs"]
stars: 91
forks: 5
openIssues: 23
closedIssues: 10
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-06-03T08:07:41Z"
lastCommitAt: "2026-11-19T11:55:40Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 83
undervaluedScore: 28
maintainers: ["davanstrien", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/53e3672455015ad31b67b402ba7a9c63357d2be6df87ce7b3245d4d665573206/davanstrien/uv-scripts"
---

# uv-scripts

> **Run a data or ML task over a Hugging Face dataset in one command: OCR, transcription, classification, embeddings, deduplication and more.** Run it on your own machine, or on a pay-per-second GPU with [Hugging Face Jobs](https://huggingface.co/docs/hub/jobs-overview). For people and coding agents.

Each **recipe** is one Python file with its dependencies declared inside it, so it runs straight from its URL: no clone, no virtualenv, no `pip install`. Most recipes read a [Hub](https://huggingface.co/datasets) dataset and write a new one, so one recipe's output can be the next one's input.

## Quickstart

First [install the `hf` CLI](https://huggingface.co/docs/huggingface_hub/en/guides/cli#getting-started). **See the recipe families** (no GPU, no account):

```bash
hf datasets ls --author uv-scripts
```

Each family is a Hub repo. List a family's scripts without downloading them, or open its page (for example [`uv-scripts/ocr`](https://huggingface.co/datasets/uv-scripts/ocr)) to see how to run them:

```bash
hf download uv-scripts/ocr --repo-type dataset --include "*.py" --dry-run
```
