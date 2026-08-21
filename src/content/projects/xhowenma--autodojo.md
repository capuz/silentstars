---
repo: "xhOwenMa/AutoDojo"
name: "AutoDojo"
description: "Code for \"AutoDojo: Adaptive Black-Box Attacks Reveal the Limits of IPI Defenses and Task-Specification Effects in LLM Agents\""
readmeQualityOk: true
url: "https://github.com/xhOwenMa/AutoDojo"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-11T17:59:28Z"
lastCommitAt: "2026-08-21T04:11:56Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 76
undervaluedScore: 42
maintainers: ["xhOwenMa"]
openGraphImageUrl: "https://opengraph.githubassets.com/5aae337c4c8cf9eea36232818764879e7fd5dae6fcfb581bda1e0b7b8eb49526/xhOwenMa/AutoDojo"
---

# AutoDojo

Source code of our paper:

> **[AutoDojo: Adaptive Black-Box Attacks Reveal the Limits of IPI Defenses and Task-Specification Effects in LLM Agents](https://arxiv.org/abs/2606.15057)**
> by Xinhang Ma, Taoran Li, Chaowei Xiao, Zhiyuan Yu, Ning Zhang, Yevgeniy Vorobeychik

## Updates

- [x] **2026-08-20** — **Run cost is now reported in dollars when using OpenRouter.** `optimize_variants.py` prints a per-role breakdown (target agent vs. optimizer LLM) with call counts, exact prompt/completion/reasoning/cached token counts, and the total USD at the end of the run; the same summary is written to `run_cost.json` beside the produced `injections.json`. On by default — disable with `--no-cost-tracking` or `AUTODOJO_COST_TRACKING=0`. Only OpenRouter calls are affected — local vLLM and other endpoints are counted but priced at zero.
- [x] **2026-08-10** — **CaMeL now enforces its security policies.** `--defense camel` previously built the pipeline with an allow-everything engine, so no policy ever ran; it now enforces the suite's engine during the run, and the old behavior is kept as `--defense camel_nopolicy`. Security-policy engines were added for the three AgentDyn suites,…
