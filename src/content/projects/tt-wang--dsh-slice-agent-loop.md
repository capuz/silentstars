---
repo: "TT-Wang/dsh-slice-agent-loop"
name: "dsh-slice-agent-loop"
description: "A drop-in DeepSeek Harness agent loop whose context engine is a bounded slice instead of a growing transcript"
readmeQualityOk: true
url: "https://github.com/TT-Wang/dsh-slice-agent-loop"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [65, 23]
topics: ["dsh-plugin"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-11T15:38:16Z"
lastCommitAt: "2026-09-03T08:15:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 46
maintainers: ["TT-Wang"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ae787f8f32514863d6c61b4f43c837ef3ae02f3abc700199d58e802e4b5d4a8/TT-Wang/dsh-slice-agent-loop"
---

# dsh-slice-agent-loop

English | [中文](https://github.com/TT-Wang/dsh-slice-agent-loop/blob/HEAD/README.zh.md)

> **Every turn, hand the model exactly the context it needs. No more, no less.**

That sounds like common sense, but today's mainstream coding agents replay the
entire conversation history back to the model every call: the excess is never
trimmed, and what falls short can never be recovered. This plugin brings a
slice loop built around that one sentence into the
[DeepSeek Harness](https://github.com/dsh2026): **same harness, same model,
same tools and persistence — only the agent loop is swapped**, so in every
comparison below the loop itself is the only variable.

Early beta; tracks DSH `0.1.2-alpha.4` (`snapshotEvents`, typert `/api/<ns>/<method>` RPC with cookie auth; the bundled bench drivers speak the new protocol).

## One sentence, two constraints

| | Constraint | Transcript (full-history) status quo |
|---|---|---|
| **No more** | Context has an upper bound | Context grows to the window limit, then compacts; attention dilutes, the bill grows with every turn |
| **No less** | Information stays recoverable | After compaction, detail is gone and cannot be brought…
