---
repo: "XPolicyLab/XPolicyLab"
name: "XPolicyLab"
description: "Involving over 40 Advanced Manipulation Policies"
readmeQualityOk: true
url: "https://github.com/XPolicyLab/XPolicyLab"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 139
forks: 26
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 54
recentReleases: 0
createdAt: "2026-02-08T05:59:41Z"
lastCommitAt: "2026-08-11T04:49:57Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 27
maintainers: ["TianxingChen", "FlowsMple", "zhanghaoyu913-cmyk"]
openGraphImageUrl: "https://opengraph.githubassets.com/16d0dfb94c5c32e931d0627041f8fc0bdb4e990215275fdf9e9ee95c5728ecbf/XPolicyLab/XPolicyLab"
---

<h1>XPolicyLab</h1>

<p><strong>A Unified Standard and Open Ecosystem for Robot Policy Evaluation and Deployment</strong></p>

<p>
</p>

<p><em>Connecting N policies to M evaluation environments — from O(N×M) down to O(N+M).</em></p>

</div>

XPolicyLab is the shared layer between policy code and evaluation environments. Keep each model's dependencies, checkpoints, and training recipes under `policy/<POLICY>/`; XPolicyLab handles the parts that are boring but easy to get wrong — serving, observation/action contracts, and eval wiring. As of August 2026, the ecosystem integrates **42 robot policies** spanning VLA, world-action, imitation-learning, and memory-augmented families, and the same adapters serve RoboTwin, RoboDojo simulation, and standardized real-robot evaluation.

Start here for repo-level concepts and integration steps. For install commands, checkpoint layout, and training details, jump to that policy's README — it is the source of truth for its model.

## 📚 Contents

- [What XPolicyLab Enables](#-what-xpolicylab-enables)
- [Supported Benchmarks And Infrastructure](#-supported-benchmarks-and-infrastructure)
- [Integrated Policies](#-integrated-policies)
- [Framework…
