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
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-31T12:53:26Z"
lastCommitAt: "2026-11-23T10:29:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 19
maintainers: ["Phoenix-chaser"]
openGraphImageUrl: "https://opengraph.githubassets.com/dc624d4fde8fe1d2750b621c8f931775af608c274b2b1f02c449dbf533e6896f/Phoenix-chaser/CodeAgent-R"
---

# CodeAgent-R

**Post-training and execution-based evaluation for code-repair models** · [English](https://github.com/Phoenix-chaser/CodeAgent-R/blob/HEAD/README_EN.md)

CodeAgent-R is a reproducible post-training and evaluation pipeline for code repair: a frozen task pool, execution-based scoring, QLoRA SFT / DPO / RFT, model selection on dev, and paired comparison against the base model (Base) on the frozen test set. All published experiments were evaluated on 104 self-written single-file Python repair tasks using **Qwen2.5-Coder-7B-Instruct**. Qwen3.5-9B is also supported. It has no experimental results yet, so run a smoke test before the first run.

**Conclusion: the pipeline runs end to end, but it did not measure a reliable improvement.** On the 20 frozen test tasks, Base fixed 12 and teacher-distillation SFT fixed 13. Averaged over three training seeds, the gain is 1.7 percentage points, with a 95% interval of [0, +5]. Two of the seeds selected Base on dev. All three DPO rounds failed to exceed SFT. The test set has only 20 tasks, all self-written, and this scale does not support generalization claims.
