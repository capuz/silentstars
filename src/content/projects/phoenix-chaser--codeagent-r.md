---
repo: "Phoenix-chaser/CodeAgent-R"
name: "CodeAgent-R"
description: "Auditable code-repair post-training platform: source-group-isolated QLoRA SFT, mutation-audited tasks, execution-based checkpoint selection, paired frozen-test evaluation. 3-seed protocol on Qwen2.5-Coder-7B: mean +1.7pp, zero regressions"
originalDescription: "Auditable code-repair post-training platform: source-group-isolated QLoRA SFT, mutation-audited tasks, execution-based checkpoint selection, paired frozen-test evaluation. 3-seed protocol on Qwen2.5-Coder-7B: mean +1.7pp, zero regressions"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Phoenix-chaser/CodeAgent-R"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["benchmark", "code-repair", "evaluation", "fine-tuning", "llm", "peft", "qlora", "reproducibility", "sft"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-31T12:53:26Z"
lastCommitAt: "2026-11-07T13:55:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 38
maintainers: ["Phoenix-chaser"]
openGraphImageUrl: "https://opengraph.githubassets.com/32508ea927e4c0e38bd05c34abe4c325fb21e565b9ab52bfeca1a77438f3a1ae/Phoenix-chaser/CodeAgent-R"
---

# CodeAgent-R

**Chinese** | [English](https://github.com/Phoenix-chaser/CodeAgent-R/blob/HEAD/README_EN.md)

An experimental post-training platform for code repair: public context construction → teacher candidate collection → test validation → data isolation → QLoRA SFT → paired base-and-adapter evaluation. A real single-GPU SFT and evaluation loop built on Hugging Face / PEFT is already in place; DPO and GRPO remain offline contracts and toy validation.

## Experiment results (v6, 2026-11-07)

| Set | Base | SFT | Change | Improved / regressed |
|---|---|---|---|---|
| dev (20 problems, used for model selection) | 10/20 (50%) | 12/20 (60%) | +10.0 pp, monotonic across epochs | +3 / −1 |
| **test (20 problems, frozen and unbiased, seed 42)** | **12/20 (60%)** | **13/20 (65%)** | **+5.0 pp** | **+1 / 0** |
| **test 3-seed summary** | 60% | — | **mean +1.7pp, CI [0, +5]** | **0 regressions** |

104 problems across 52 source groups (benchmark with mutation-testing audit of data quality), 202 replay-verified samples, QLoRA for 3 epochs, and checkpoints selected by dev execution pass@1 (Base included as a control). **Reproduced across 3 training seeds: mean +1.7pp (0/+5/0), zero…
