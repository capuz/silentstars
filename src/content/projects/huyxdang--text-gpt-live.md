---
repo: "huyxdang/Text-GPT-Live"
name: "Text-GPT-Live"
description: "Can you train a GPT-Live with $50? "
readmeQualityOk: true
url: "https://github.com/huyxdang/Text-GPT-Live"
homepage: "https://huyxdang.com/text-gpt-live"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-06T19:00:32Z"
lastCommitAt: "2026-08-11T04:48:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 18
maintainers: ["huyxdang"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c2710230d09757e380d16aca58272879f5f6ab4d8005e14ce09f4ef6f19606b/huyxdang/Text-GPT-Live"
---

# Text GPT-Live

A small language model trained to act *while* you type, instead of waiting for
you to finish.

Every 650 ms the browser sends the current contents of the textbox. The model
reads that stream — including pauses, corrections, and an empty box — and
predicts exactly one action: stay silent, reply, highlight a word, translate a
committed clause, start a background task, or run a search. Nothing in the
runtime decides whether the user has finished talking. The model does.

- **Write-up:** [Can you train a GPT-Live for $50?](https://huyxdang.com/text-gpt-live)
- **Model:** [huyxdang/text-gpt-live](https://huggingface.co/huyxdang/text-gpt-live)
- **Dataset:** [huyxdang/text-gpt-live-dataset](https://huggingface.co/datasets/huyxdang/text-gpt-live-dataset)

Base model is `Qwen/Qwen3.5-4B` with a rank-32 LoRA, trained in three
sequential SFT stages on [Tinker](https://thinkingmachines.ai/tinker/). All
three stages cost about $50.

## Contents

- [The action grammar](#the-action-grammar)
- [Run the app](#run-the-app)
- [Reproduce the dataset](#reproduce-the-dataset)
- [Train](#train)
- [Layout](#layout)
- [What is not in this repo](#what-is-not-in-this-repo)
-…
