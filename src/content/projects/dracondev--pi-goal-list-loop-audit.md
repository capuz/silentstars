---
repo: "DraconDev/pi-goal-list-loop-audit"
name: "pi-goal-list-loop-audit"
description: "Goal. Loop. Audit. Done. — a pi-coding-agent extension that supervises long-running work, with isolated auditor on each completion. Beat bamboozling by design: the auditor runs in a fresh session with no extensions, no skills, no editor — only the read tools needed to verify your goal."
readmeQualityOk: true
url: "https://github.com/DraconDev/pi-goal-list-loop-audit"
homepage: "https://pi.dev/packages/pi-goal-list-loop-audit"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["agent-loop", "ai-agents", "automation", "continuous-audit", "goal-tracking", "llm", "pi-coding-agent", "pi-extension", "task-supervisor", "typescript"]
stars: 19
forks: 11
openIssues: 0
closedIssues: 23
watchers: 1
contributors: 6
recentReleases: 10
createdAt: "2026-07-20T18:05:27Z"
lastCommitAt: "2026-09-04T08:09:30Z"
lastReleaseAt: "2026-08-13T17:03:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 100
undervaluedScore: 62
maintainers: ["DraconDev"]
openGraphImageUrl: "https://opengraph.githubassets.com/a9d32b7a9a6f1a63389ef9f30b309de416ac6229173bf8c1d037f2decb6a1a09/DraconDev/pi-goal-list-loop-audit"
---

# pi-goal-list-loop-audit

</p>

> **Long-running, high-leverage autonomy for pi.**
>
> Give pi a meaningful outcome. GLLA helps it research, plan, execute,
> recover, and prove the result over hours or days instead of treating one
> chat turn as the whole job.

`pi-goal-list-loop-audit` (GLLA) is mission control for autonomous work in
[pi](https://github.com/badlogic/pi-mono). It is for the work that is too broad,
too long, or too important to leave to a single uninterrupted prompt:
repo-wide changes, migrations, audits, research, documentation overhauls,
large refactors, and continuous improvement.

GLLA does not promise that an agent can never make a mistake. It makes the
agent's work **more effective, durable, recoverable, and difficult to declare
finished without evidence**:

- You state the outcome and what “done” means.
- The agent researches, decomposes, and executes across many turns.
- GLLA keeps durable state, checks lifecycle/progress signals continuously, and
  recovers failures with bounded per-attempt backoff plus policy-driven stop rules.
- Every terminal objective leaves a useful six-label recap; missing evidence is
  shown as `not recorded`, never guessed.
-…
