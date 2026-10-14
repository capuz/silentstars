---
repo: "mann1x/omnimergekit"
name: "omnimergekit"
description: "Tools for model merging (omnimerge_v2), Gemma 4 MoE expert pruning, differential competence-map extraction, and GGUF quantization."
readmeQualityOk: true
url: "https://github.com/mann1x/omnimergekit"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [65, 33]
stars: 8
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-03T14:28:24Z"
lastCommitAt: "2026-10-14T08:57:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 54
maintainers: ["mann1x"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ff9a4b436ce095379c899c6ee2195dd6f7984b85f7ca3b44caeb5b661424f50/mann1x/omnimergekit"
---

# omnimergekit

Tools for **model merging**, **expert pruning**, **differential competence-map extraction**, and **GGUF quantization** — built on top of `transformers`, `safetensors`, and `llama.cpp`. The kit started as a fork-flavored alternative to mergekit (`omnimerge_v2` recipe) and grew to cover Gemma 4 MoE surgery and Qwen3.5 hybrid-attention frankenmerges.

> **Status:** research code. Not packaged for pip yet. Scripts assume the directory layout described below; paths inside scripts may need editing for your environment.

## What's inside

| Path | Purpose |
|------|---------|
| `omnimergekit.py` | The main merge script. Methods: `dare_ties`, `omnimerge_v2`, plus features `obim`, `darex`, `emr`, `fisher`. A single `--source` (2-model merge) is accepted for `omnimerge_v2` / `dare_linear` / `task_arithmetic` — EMR is a bit-exact identity at one source (`scripts/test_omnimerge_single_source.py`); `dare_ties` / `della` still refuse it. |
| `competence/` | Differential competence-map pipeline: extract per-source per-task fisher signal → combine across tasks → feed into `omnimergekit.py --fisher`. |
| `gemma4/` | Gemma 4 MoE surgery: expert drop, DERN-style redistribution,…
