---
repo: "RishabhPande/memory-poison-lab"
name: "memory-poison-lab"
description: "Local test range for agent memory poisoning - watch a planted memory steer an agent, then prove the repair. Synthetic targets, scripted deterministic agent."
readmeQualityOk: true
url: "https://github.com/RishabhPande/memory-poison-lab"
homepage: "https://rishabhpande.github.io/memory-poison-lab/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-memory", "ai-agents", "llm-security", "red-teaming"]
stars: 1
forks: 1
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-31T13:21:57Z"
lastCommitAt: "2026-11-07T16:20:34Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 74
undervaluedScore: 49
maintainers: ["RishabhPande"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6a376c85cbfbef02c7b21af275c7414d9121babeb4173f40464bf97a907d126/RishabhPande/memory-poison-lab"
promoted: true
postedAt: "2026-11-07T22:58:48.052Z"
---

# Memory Poisoning Lab

**Your agent remembered it. Should it have?**

A local test range for agent memory poisoning: persistent memory as an attack surface. Feed an agent's memory controlled untrusted writes, watch a planted memory change what the agent does, then try to stop it - and prove the repair worked.

> **Scope, plainly.** Synthetic targets, a scripted deterministic agent. This repo demonstrates the *mechanics* of memory poisoning, defense and repair from published research, on real memory backends. It is not evidence about the safety of any real LLM, hosted memory service, or production system. Never point anything in here at a system you do not own.

## Why this exists

Agent memory layers are shipping fast, and the attack classes against them are documented in research (see Sources). This repo is a small, local place to *watch* those attacks happen and test a fix. The first four scenarios are built from the published taxonomy; A5 extends the range to the ranking window itself, and A6 to a second decision the owner never wrote a policy for:

| Scenario | Attack class | Mechanic under test |
| --- | --- | --- |
| **A1 - Direct injection** | Instruction-shaped content in…
