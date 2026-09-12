---
repo: "RL-Align/RL-Kernel"
name: "RL-Kernel"
description: "High-performance RL post-training infrastructure. Designed to achieve bitwise operator-level train-inference consistency across heterogeneous engines and extreme memory efficiency for GRPO, PPO, etc."
readmeQualityOk: true
url: "https://github.com/RL-Align/RL-Kernel"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 296
forks: 86
openIssues: 81
closedIssues: 89
watchers: 3
contributors: 30
recentReleases: 0
createdAt: "2026-02-05T05:02:24Z"
lastCommitAt: "2026-09-12T08:05:05Z"
status: "thriving"
tags: []
healthScore: 87
undervaluedScore: 27
maintainers: ["Flink-ddd", "inaniloquentee", "maxiaosong1124"]
openGraphImageUrl: "https://opengraph.githubassets.com/a21d8f93c1b9bf4feb85736d8b7301e5a915ea13181b4b3789053c8e797ec586/RL-Align/RL-Kernel"
discussionCount: 0
---

</p>

<h1 align="center">RL-Kernel</h1>

  <strong>Building cross-hardware and multi-model RL post-training infrastructure for kernel-level train–inference consistency.</strong>
</p>

</p>

</p>

**RL-Kernel** is high-performance infrastructure for RL post-training. It provides
deterministic operators for consistent numerical computation across rollout and training
engines, together with hardware-specific kernels for faster execution and lower memory
use in GRPO, PPO, and related workloads.

Today, the end-to-end path covers Qwen3-8B Dense with vime, vLLM, and Megatron-LM.
Work on DeepSeek-V4 Flash MoE, Miles, and AReaL is ongoing.

## Why RL-Kernel?

Rollout and training engines can produce different log probabilities for the same tokens
and model weights because their kernels, batching, and reduction orders differ. Those
differences enter the policy ratios and KL terms used by RL algorithms.

- **Exact train–inference consistency:** deterministic operators keep rollout and training
  computations aligned. The published experiment records exact runtime LogP agreement
  across all 200 training steps.
- **RL operators:** deterministic attention, dense FFN, LogP, GRPO and PPO…
