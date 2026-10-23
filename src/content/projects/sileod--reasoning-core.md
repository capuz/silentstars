---
repo: "sileod/reasoning-core"
name: "reasoning-core"
description: "Procedural data generators for verifiable reasoning, synthetic pretraining, post-training, evaluation, and RL."
readmeQualityOk: true
url: "https://github.com/sileod/reasoning-core"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["dataset", "dataset-generation", "grpo", "llm", "logic", "reasoning", "rlvr", "verifiers", "pre-training", "pre-pre-training"]
stars: 51
forks: 6
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 8
recentReleases: 1
createdAt: "2025-03-10T10:54:32Z"
lastCommitAt: "2026-10-23T08:47:28Z"
lastReleaseAt: "2026-10-02T13:30:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 45
maintainers: ["sileod", "gabrielloiseau", "Super-Eric"]
openGraphImageUrl: "https://opengraph.githubassets.com/faffc32a7b5e36e54671f5185c631d99b7f3aa19f59ecbf51cc440b2a575564a/sileod/reasoning-core"
---

# Reasoning Core ◉

**Procedural reasoning data for language-model pre-training, post-training, evaluation, and RL.**

Reasoning Core generates verifiable textual tasks across first-order logic, symbolic mathematics, planning, algorithms, syntax, and more. Use it as a Python library, generate datasets at scale, or plug it into modern reinforcement-learning environments.

More than **10B tokens** of pre-generated data are available in the 🤗 [Reasoning Core dataset collection](https://huggingface.co/collections/reasoning-core/datasets).

Tasks target compact, canonical answers and expose task-native scorers—clean targets for supervised fine-tuning (SFT), with deterministic rewards for RL and evaluation. The public [training and influence API](https://github.com/sileod/reasoning-core/blob/HEAD/docs/evaluation.md) provides reproducible paired baseline/treatment experiments. Follow the [task influence guide](https://github.com/sileod/reasoning-core/blob/HEAD/docs/influence.md) to measure a new or changed task, and compare it with the [reference results](https://github.com/sileod/reasoning-core/blob/HEAD/docs/results/influence.md).

## Quickstart

```bash
uv pip install…
