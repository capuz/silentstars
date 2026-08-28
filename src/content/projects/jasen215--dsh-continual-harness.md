---
repo: "jasen215/dsh-continual-harness"
name: "dsh-continual-harness"
description: "DeepSeek Harness (DSH) plugin for self-improving AI agents: continual learning, persistent memory, cross-session knowledge, review-and-refine workflows, and automatic rollback."
readmeQualityOk: true
url: "https://github.com/jasen215/dsh-continual-harness"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["dsh", "deepseek", "deepseek-harness", "dsh-plugin", "self-evolution", "agent-memory", "ai-agent", "continual-learning", "self-improving-agents"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-17T12:11:38Z"
lastCommitAt: "2026-08-28T12:23:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 46
maintainers: ["jasen215"]
openGraphImageUrl: "https://opengraph.githubassets.com/2db75b0baeca1b8582dbabd64e36d7705d135e069567c1e490870a54fe05ce52/jasen215/dsh-continual-harness"
---

# dsh-continual-harness

English | [中文](https://github.com/jasen215/dsh-continual-harness/blob/HEAD/docs/readme/README.zh.md)

<p>
</p>

A **DeepSeek Harness (DSH) plugin for self-improving AI agents**, providing continual learning through persistent memory, periodic review and refinement, cross-session knowledge sharing, and automatic rollback on failure. It forms a closed loop of plan → validate → apply → rollback.

The design is inspired by the open-source [prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) from Prime Intellect, a self-improving coding harness.

## Capabilities

A single npm package (`dsh-continual-harness`) takes effect through the following extension points once mounted:

| Capability | Mechanism |
| --- | --- |
| State projection (inject harness context each step) | `agent/pre-step` waterfall listener; incremental injection when the content digest changes |
| Review and automatic refinement | `session/event` listener on turn interval / compaction end; runs LLM review → plan → apply automatically |
| Manual refinement tool | Registers the `harness_refine` tool (directly callable by the LLM, supports rollback) |
| Manual refinement command |…
