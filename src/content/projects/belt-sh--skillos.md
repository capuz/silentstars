---
repo: "belt-sh/skillos"
name: "skillos"
description: "PyTorch implementation of SkillOS (arXiv:2605.06614) using HuggingFace TRL — train a skill curator that outperforms frontier models at agent memory management"
readmeQualityOk: true
url: "https://github.com/belt-sh/skillos"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [72, 28]
stars: 8
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-14T08:37:31Z"
lastCommitAt: "2026-08-29T17:28:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 68
undervaluedScore: 32
maintainers: ["ok-inference", "okaris"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa3be7c26207bfa262630a64d195b490001e9bf82a370bd8e4bdcbc84dc9a891/belt-sh/skillos"
---

# SkillOS

Open reproduction of ["SkillOS: Learning Skill Curation for Self-Evolving Agents"](https://arxiv.org/abs/2605.06614) (Ouyang et al., 2026). The paper trains a curator with GRPO on 16 H100s using verl. We reproduced it on 8 H100s in **both** [TRL](https://github.com/huggingface/trl) and [verl-agent/GiGPO](https://github.com/langfengQ/verl-agent) — ten full 60-step training runs, ~3 months of box time — with all training and eval code, three benchmarks (ALFWorld + AIME + GPQA-Diamond), and every deviation logged.

**This reproduction was run almost entirely by an LLM agent** (Claude, Anthropic) working continuously for three months, with a human author setting scope, funding compute, and adjudicating disputes. The agent wrote the training code, ran the experiments, found and fixed its own bugs, retracted its own results when it found a stale baseline, and kept a failure record that a second pass of agents then audited. Section 6.8 of the paper reports this as a result in its own right: 185 failures counted, half missing from the agent's own records, and a taxonomy of what went wrong that we think is useful for anyone planning to delegate research to an agent. The short…
