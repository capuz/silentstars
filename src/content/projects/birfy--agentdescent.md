---
repo: "Birfy/agentdescent"
name: "agentdescent"
description: "Gradient descent, but the parameters are agents — a parallel, asynchronous framework for self-evolving agents (skills, prompts, harnesses). Diffs are the gradients; the aggregator is the optimizer."
readmeQualityOk: true
url: "https://github.com/Birfy/agentdescent"
homepage: "https://birfy.github.io/agentdescent/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-framework", "agents", "ai-agents", "asynchronous", "evolutionary-algorithms", "gradient-descent", "llm", "llm-agents", "optimizer", "parallel"]
stars: 205
forks: 20
openIssues: 11
closedIssues: 145
watchers: 10
contributors: 4
recentReleases: 10
createdAt: "2026-07-24T13:48:05Z"
lastCommitAt: "2026-10-21T17:32:08Z"
lastReleaseAt: "2026-10-16T08:22:59Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 98
undervaluedScore: 34
maintainers: ["Birfy", "HugoXK"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e040da903f03cd769a73ecc9be6b13d2c29c1f8fc191491e67a77f46cb3bbc7/Birfy/agentdescent"
discussionCount: 2
---

# AgentDescent

**[Website & interactive demo](https://birfy.github.io/agentdescent/)** ·
[Get started](https://birfy.github.io/agentdescent/install/) ·
[Documentation](https://birfy.github.io/agentdescent/docs/)

> **Gradient descent — but the parameters are agents.** A parallel, asynchronous
> framework for self-evolving agents (skills, prompts, harnesses) where **diffs
> are the gradients** and **the aggregator is the optimizer**.

*N* workers propose edits to a shared artifact **in parallel**; a barrier-free
aggregator merges them into one version-controlled library. Serial
self-improvement is bounded at one accepted change per iteration, and merging
concurrent edits is the attempt to lift that bound.

The place the analogy has to break is the whole design: **gradients add, diffs do
not.** So aggregation is not averaging but conflict resolution, fusion,
statistical acceptance and a transactional commit.

## What it measures

Every row names the setting that produced it, and
[the full results page](https://birfy.github.io/agentdescent/results/) also
reports the runs where there was nothing left to learn.

| | measured | setting |
|---|---|---|
| An artifact held in **one key**,…
