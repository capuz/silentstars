---
repo: "wrenyard/wrenyard"
name: "wrenyard"
description: "Local-first agent orchestration with a unified CLI, runtime, Pet, and Desktop app."
readmeQualityOk: true
url: "https://github.com/wrenyard/wrenyard"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["agent-orchestration", "ai-agents", "electron", "golang", "task-graph", "typescript"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-16T04:22:52Z"
lastCommitAt: "2026-10-17T07:58:47Z"
lastReleaseAt: "2026-08-22T14:21:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 53
maintainers: ["Dluckxx"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8a95ce9fef3df42517866b2d1f973dec1b06605a6829d16ab73d989243d8e73/wrenyard/wrenyard"
---

# Wrenyard

**A local-first desktop workbench for orchestrating AI engineering work.**

One conversation reasons about the goal; exploration, edits, tests and commits
run as parallel tasks on the models you already pay for — with every token,
quota window and task visible.

[中文](https://github.com/wrenyard/wrenyard/blob/HEAD/README.zh-CN.md) · [Download](https://github.com/wrenyard/wrenyard/releases)

> **Development preview.** Wrenyard ships rolling plain patch releases
> (`1.0.57`, then `1.0.58`, `1.0.59`, …). It is used daily by its authors, but
> it is not production-ready yet — see [Status](#status).

## Why Wrenyard

- **Reasoning stays expensive, everything else stays cheap.** The main model
  only reasons and declares what should happen; cheap models and the task
  runtime gather context, dispatch work and write the reply.
- **Context you can audit.** A session is one append-only ledger, and each
  reasoning request is the previous one with a segment appended, so prompt
  caches keep hitting. Before you send, Wrenyard shows how large the *next*
  request will be for the model you picked, what fills it, and how it has grown.
- **Your providers, your quota.** Claude,…
