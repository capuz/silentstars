---
repo: "deepseekv41flash/dsh-context-truth"
name: "dsh-context-truth"
description: "Feeds the DSH model each turn with the host-measured context occupancy, and prevents the false judgment that \"context is nearly exhausted\" from being inherited by compaction summaries."
originalDescription: "给 DSH 模型每轮回填宿主实测的上下文占用，并阻止\"上下文快用尽\"的错判被压缩摘要继承。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/deepseekv41flash/dsh-context-truth"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["ai-agents", "compaction", "context-window", "deepseek-harness", "dsh", "dsh-plugin", "token-meter"]
stars: 7
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-02T15:20:04Z"
lastCommitAt: "2026-11-16T04:25:30Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 64
undervaluedScore: 11
maintainers: ["deepseekv41flash"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7b9dbb615cd2379e791bcee07ccf8c9e12f13be595dbdc6be0aee94c3ad62b6/deepseekv41flash/dsh-context-truth"
---

# dsh-context-truth

[English](https://github.com/deepseekv41flash/dsh-context-truth/blob/HEAD/README-en.md) · [Simplified Chinese](https://github.com/deepseekv41flash/dsh-context-truth/blob/HEAD/README.md)

> Let the model know its **actual** context occupancy: the host measures it and backfills it every turn, and the false claim "context is nearly used up" is kept from being passed down through compaction summaries.

DSH (DeepSeek Harness) plugin · single peer dependency (the host-bundled `schemastery`) · requires host services `tokenMeter` and `compaction` (included in the standard `dsh-base` deployment) · handoff mode adds 1 tool (`handoff_ready`) · 1 client settings card · no build step · MIT

---

## What problem it solves

**DSH never tells the model its token usage.** The model can only guess from "this session feels long," so in a long session it may declare "the context is running out" at a real occupancy of **17%**, stop write operations, and hand work off to subagents.

Worse, this false judgment **survives compaction**:

1. The model writes "my context is nearly used up";
2. That sentence enters the compaction summary (one measured session summary reads: `- Session…
