---
repo: "AskTheWay/dsh-auto-memory"
name: "dsh-auto-memory"
description: "Claude Code-style auto-memory plugin for DeepSeek Harness (dsh): typed memory files + MEMORY.md index auto-injected into the system prompt. File-only, no external services."
readmeQualityOk: true
url: "https://github.com/AskTheWay/dsh-auto-memory"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["agent-harness", "agent-memory", "ai-agent", "ai-tools", "auto-memory", "claude-code", "coding-agent", "context-engineering", "deepseek", "deepseek-harness"]
stars: 122
forks: 7
openIssues: 5
closedIssues: 7
watchers: 1
contributors: 3
recentReleases: 9
createdAt: "2026-09-22T12:05:34Z"
lastCommitAt: "2026-11-03T19:05:17Z"
lastReleaseAt: "2026-10-29T20:52:28Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 91
undervaluedScore: 32
maintainers: ["AskTheWay", "JadeLab8", "hh-wu"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d2d1217bb148b1cb1f26381a02f60a589edc969b182d555f951f130f1df1efd/AskTheWay/dsh-auto-memory"
---

# dsh-auto-memory

[English](https://github.com/AskTheWay/dsh-auto-memory/blob/HEAD/README.md) | [中文](https://github.com/AskTheWay/dsh-auto-memory/blob/HEAD/README.zh.md)

> ### Your dsh agent forgets everything you tell it. Every. Single. Session.
> **Fix it with one command.** Claude Code-style persistent memory for
> [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) — native,
> zero servers, zero embeddings, zero setup.

```sh
dsh plugin --profile web add dsh-auto-memory
```

Say *"Remember: I'm a Python backend engineer preparing for interviews"* today —
open a brand-new session tomorrow, ask *"what do you know about me?"*, and it
**remembers**.

---

## Highlights

**1.x — trustworthy memory + measured end-to-end**: consolidation products are
born `candidate` with verbatim evidence quotes; only *you* can grant
`verified`; disputed memories are never re-injected; every write passes an
injection-pattern guard at the store choke point. And it's measured: four
evaluation layers (deterministic / recall / consolidation / end-to-end) plus a
LongMemEval-S alignment run — including an honestly published off-target score.
Full history:…
