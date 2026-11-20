---
repo: "ShaneLiu04/Step-RL"
name: "Step-RL"
description: "An LLM Agent long-horizon decision optimization system based on reinforcement learning"
originalDescription: "基于强化学习的 LLM Agent 长链路决策优化系统"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ShaneLiu04/Step-RL"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 35
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-23T02:30:38Z"
lastCommitAt: "2026-11-20T11:58:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 35
maintainers: ["ShaneLiu04"]
openGraphImageUrl: "https://opengraph.githubassets.com/37e7fab3115b11ca674fd5f98f5ed6a9e813550b6405f66810b3767218f1e451/ShaneLiu04/Step-RL"
---

# Step-RL v4.16

**Validator-driven hierarchical reinforcement learning for on-device Web Agents**

> Toward self-evolution: capability gating discovers uncovered tasks → a real LLM fallback succeeds once → trajectories are automatically induced into parameterized skills → thereafter similar tasks use **0 LLM**.  
> Remove task: **uncovered** before induction, **3/3** after induction (across products/layouts + ID churn), 0 prompt tokens;  
> **Batch removal**: a single instruction with 2–3 products, skill path **3/3**, 0 LLM; single-product removal does not regress.  
> **Skill statistics and priority**: skill success/failure is recorded using validator criteria; when the success rate drops, the skill is retired to yield (0/1 → explicit gap → LLM fallback → closed-loop re-induction), and afterward similar tasks use **0 LLM**.  
> **Order status query**: real order page + server-side status predicates (valid/cancelled), LLM fallback **1 step / 186 tokens** consolidated into a 1-step skill; similar instructions **3/3, 0 LLM** (including cancelled-state transition + v2 layout + ID churn).
