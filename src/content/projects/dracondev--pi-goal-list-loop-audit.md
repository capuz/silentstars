---
repo: "DraconDev/pi-goal-list-loop-audit"
name: "pi-goal-list-loop-audit"
description: "Goal. Loop. Audit. Done. — a pi-coding-agent extension that supervises long-running work, with isolated auditor on each completion. Beat bamboozling by design: the auditor runs in a fresh session with no extensions, no skills, no editor — only the read tools needed to verify your goal."
readmeQualityOk: true
url: "https://github.com/DraconDev/pi-goal-list-loop-audit"
homepage: "https://pi.dev/packages/pi-goal-list-loop-audit"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["agent-loop", "ai-agents", "automation", "continuous-audit", "goal-tracking", "llm", "pi-coding-agent", "pi-extension", "task-supervisor", "typescript"]
stars: 21
forks: 15
openIssues: 1
closedIssues: 24
watchers: 0
contributors: 7
recentReleases: 10
createdAt: "2026-07-20T18:05:27Z"
lastCommitAt: "2026-09-18T14:03:20Z"
lastReleaseAt: "2026-08-13T17:03:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 99
undervaluedScore: 63
maintainers: ["DraconDev"]
openGraphImageUrl: "https://opengraph.githubassets.com/22c01fc705f5c4f3a0d12de42fcc7490aa8ac87f26a57b3753825c58d86cce94/DraconDev/pi-goal-list-loop-audit"
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
