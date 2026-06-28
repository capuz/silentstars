---
repo: "flyingrobots/echo"
name: "echo"
description: "Echo is a WARP optic runtime for witnessed causal history, Continuum-compatible suffixes, bounded observation, and holographic readings."
url: "https://github.com/flyingrobots/echo"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["confluence", "deterministic-simulation", "experimental", "formal-methods", "graph-rewriting", "rust", "time-travel-debugging", "dpo-rewriting", "aion", "causal-models"]
stars: 8
forks: 1
openIssues: 176
closedIssues: 191
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-10-23T17:32:41Z"
lastCommitAt: "2026-06-28T03:12:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 90
undervaluedScore: 54
maintainers: ["flyingrobots"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1082070703/3921ac78-83a8-4f11-afb6-9fa83edda756"
discussionCount: 3
---

</p>

  <strong>State is a reading. Echo makes readings lawful, witnessed, and replayable.</strong>
</p>

  &middot;
  &middot;
  &middot;
  &middot;
</p>

> Echo owns time, admission, scheduling, and witnessed causal history so
> application code can stay focused on domain semantics.

# Echo

**Echo** is a deterministic runtime for building applications on witnessed
causal history instead of mutable in-memory state.

Traditional runtimes treat "current state" as the source of truth. Echo does
not. In Echo, the durable territory is admitted causal history: submissions,
frontiers, receipts, witnesses, retained artifacts, and replayable evidence.
State-like things such as files, graphs, UI models, build outputs, debugger
snapshots, and query results are **readings** over that history.

Application code does not mutate Echo state directly, and it does not decide
when Echo ticks. Applications submit canonical intents. Echo admits, schedules,
settles, and executes them at runtime-owned tick boundaries, then emits receipts
and evidence-carrying observations.

## A Concrete Problem

Consider a collaborative editor, game simulation, build graph, or contract host
where two users submit…
