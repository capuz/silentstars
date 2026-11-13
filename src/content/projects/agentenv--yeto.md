---
repo: "agentenv/yeto"
name: "yeto"
description: "Fast and Efficient LLM Finetuning with Heterogeneous GPUs on Any Cloud"
readmeQualityOk: true
url: "https://github.com/agentenv/yeto"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 6
forks: 2
openIssues: 3
closedIssues: 2
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-07-02T21:38:47Z"
lastCommitAt: "2026-11-13T05:35:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 50
maintainers: ["michaellchung"]
openGraphImageUrl: "https://opengraph.githubassets.com/4fc145ec6b7bf418da3de6b24e1bca75237260d91070fe32ad2fb7578d4548a5/agentenv/yeto"
---

# Yeto

Yeto post-trains language and diffusion models (SFT and RL) on accelerators
spread across spot instances, regions, clouds and hardware families. Each
learner island trains on its own and exchanges weights with the others through
an asynchronous syncer, so a slow link or a reclaimed spot VM does not stop
the rest of the fleet.

## What it does

**Fine-tuning (SFT)**
- Causal-LM LoRA, QLoRA (NF4 base) and full-parameter fine-tuning;
  diffusion image/video LoRA through Diffusers.
- Asynchronous multi-island training based on Decoupled DiLoCo: islands push
  parameter fragments to a Rust syncer that merges them (quorum with an
  adaptive grace window, token-weighted merge, Nesterov outer step).
- Adapter lifecycle: strict resume (`--resume-from`), branching into a new run
  with recorded lineage (`--branch-from`), and merging an adapter into its base
  model with sharded SafeTensors output (`yeto merge`).

**Reinforcement learning**
- Two trainer backends behind one framework-neutral engine: Miles (default)
  and verl (`--rl-backend`), with Megatron-Core or FSDP inside an island.
- SGLang or vLLM rollout engines, optionally decoupled from the trainer
  through a durable…
