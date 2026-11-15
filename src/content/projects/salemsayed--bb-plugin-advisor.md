---
repo: "salemsayed/bb-plugin-advisor"
name: "bb-plugin-advisor"
description: "A second model reviews bb coding threads before the final answer and tracks each finding until it is fixed. A bb port of oh-my-pi's advisor."
readmeQualityOk: true
url: "https://github.com/salemsayed/bb-plugin-advisor"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["ai-code-review", "bb-plugin", "code-review", "developer-tools", "getbb"]
stars: 10
forks: 7
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 8
recentReleases: 10
createdAt: "2026-08-10T10:27:50Z"
lastCommitAt: "2026-11-15T08:29:03Z"
lastReleaseAt: "2026-11-12T14:44:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 96
undervaluedScore: 67
maintainers: ["salemsayed", "GEFNENEN", "jonolee-kr"]
openGraphImageUrl: "https://opengraph.githubassets.com/20c92f76dbac91cef05e97ed56ae99f706c490393fa184b052d91ccfb30acc95/salemsayed/bb-plugin-advisor"
---

# Advisor

> A persistent, independent reviewer for bb coding threads.

Advisor pairs every coding thread with a second model that reviews the work —
before the agent finishes its answer, and again after the turn completes. The
reviewer runs in its own hidden thread with its own context, remembers what it
has already flagged, and escalates when the same defect comes back. A review
that cannot run reports as *unavailable*, never as approval.

Advisor is a bb port of the advisor from
[oh-my-pi](https://github.com/can1357/oh-my-pi) — the design is theirs. See
[Credits](#credits).

| Finding, evidence, and decisions | Closed and decided |
| --- | --- |
|  |  |

## Why

An agent grading its own work has every incentive to pass it. Advisor adds an
outside opinion without changing bb core:

- **Independent.** Reviews run in a separate, hidden reviewer thread — a
  different context, optionally a different model per machine, spawned into the
  same environment so it can inspect the actual workspace.
- **Persistent.** Findings are chains with memory, not one-off comments. The
  same unresolved defect raised again joins its chain, counts as *re-raised*,
  and is held at its strongest…
