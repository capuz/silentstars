---
repo: "uw-syfi/vibesys"
name: "vibesys"
description: "Can AI Agents Build Bespoke Systems?"
readmeQualityOk: true
url: "https://github.com/uw-syfi/vibesys"
language: "Python"
languages: ["Python"]
languagePcts: [72]
topics: ["agent", "llm-serving", "systems"]
stars: 126
forks: 45
openIssues: 168
closedIssues: 846
watchers: 1
contributors: 16
recentReleases: 5
createdAt: "2026-05-07T11:13:13Z"
lastCommitAt: "2026-11-05T11:17:29Z"
lastReleaseAt: "2026-11-05T04:52:40Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 96
undervaluedScore: 37
maintainers: ["vic-lsh", "Ryclic"]
openGraphImageUrl: "https://opengraph.githubassets.com/b7434965152ab2e18e4e9bd1c4c94af9866fe4f0f821715ee2bc92ac7b88ccd0/uw-syfi/vibesys"
---

# VibeSys: Generating Bespoke Systems with AI Agents

**An agentic framework that generates bespoke systems from application requirements, workload characteristics, and the underlying hardware.**

## News

- **2026-11-04** — [VibeSys on Trainium](https://syfi.cs.washington.edu/blog/2026-11-04-vibesys-trainium/): agents build and tune Qwen3.8 serving engines on AWS Trainium2.
- **2026-10-08** — [VibeSys on AMD MI300A](https://syfi.cs.washington.edu/blog/2026-10-08-qwen35-mi300a/): an agent-built Qwen3.5-397B engine achieves 2.3× the goodput of tuned SGLang.
- **2026-05-12** — [Introducing VibeServe](https://syfi.cs.washington.edu/blog/2026-05-12-introducing-vibeserve/): let AI agents write your serving stack. [Paper](https://arxiv.org/abs/2605.06068).

## About VibeSys

Today's systems software is built for generality. A serving engine, operating
system, or database supports many workloads and hardware platforms, but its
shared abstractions can leave opportunities in any one deployment unexploited.
Specialization can recover large gains; building and maintaining a separate
system for each deployment has rarely justified the engineering cost. Coding
agents are beginning to change…
