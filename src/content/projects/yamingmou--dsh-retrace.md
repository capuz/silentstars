---
repo: "yamingmou/dsh-retrace"
name: "dsh-retrace"
description: "Recall (撤回), edit-and-resend (编辑重发) and regenerate (重新生成) for DeepSeek Harness conversation messages — Web and Desktop plugin"
readmeQualityOk: true
url: "https://github.com/yamingmou/dsh-retrace"
homepage: "https://github.com/yamingmou/dsh-retrace#readme"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["chat", "deepseek", "deepseek-harness", "dsh", "edit", "plugin", "recall", "dsh-plugin", "dsh-plugins", "message-editor"]
stars: 6
forks: 2
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-19T09:58:39Z"
lastCommitAt: "2026-11-03T12:48:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 53
maintainers: ["yamingmou"]
openGraphImageUrl: "https://opengraph.githubassets.com/087ae7606bba6f809b3882f44102f4184c2037476643217bec6d7a00494e77e2/yamingmou/dsh-retrace"
---

# 🧭 dsh-retrace

**Recall · Resend (restart from here) · Regenerate**, plus **write-safe** in-conversation
versioning — the **Agent business layer (production-grade guarantees)** for
DeepSeek Harness.

**English** · [简体中文](https://github.com/yamingmou/dsh-retrace/blob/HEAD/README.zh.md)

**Recall / resend / regenerate** — the three moves every conversation
deserves. But rewinding is not just "delete a message": DeepSeek Harness stores
conversations in an append-only event log, so a recall only rewinds the context
while changed **artifact files stay changed**. dsh-retrace versions the
conversation **and its artifacts** together, and keeps **every new rewind legal** —
it cannot dirty the log, and new markers create **no token-meter pairing debt**
(two-segment atomic pairs land by construction).

> ⚠️ **Honest scope (matches the companion contract's own note)**: sessions that
> already contain **legacy single-segment markers** — written by older versions —
> are **known design debt**. Before `/compact`, run the companion `check` and
> clean them up (`fix --remove-markers`); otherwise the host's own pre-compaction
> self-check blocks compaction. New rewinds do not add to that debt.…
