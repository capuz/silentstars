---
repo: "DraconDev/pi-goal-list-loop-audit"
name: "pi-goal-list-loop-audit"
description: "Long-running autonomy for Pi: draft goals, build projects from specs, run audited task queues, and recover interrupted work. Independent auditors verify completion."
readmeQualityOk: true
url: "https://github.com/DraconDev/pi-goal-list-loop-audit"
homepage: "https://pi.dev/packages/pi-goal-list-loop-audit"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["agent-loop", "ai-agents", "automation", "continuous-audit", "goal-tracking", "llm", "pi-coding-agent", "pi-extension", "task-supervisor", "typescript"]
stars: 27
forks: 15
openIssues: 0
closedIssues: 28
watchers: 0
contributors: 7
recentReleases: 10
createdAt: "2026-07-20T18:05:27Z"
lastCommitAt: "2026-10-08T10:53:37Z"
lastReleaseAt: "2026-08-13T17:03:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 100
undervaluedScore: 58
maintainers: ["DraconDev"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c521b1faf28b2decaa1bb1537f23c0ebcd56fd795e2847be1464be2d82b6ece/DraconDev/pi-goal-list-loop-audit"
---

# pi-goal-list-loop-audit

> **Build, recover, and verify long-running work in Pi.**
>
> Give pi a meaningful outcome. GLLA helps it research, plan, execute,
> recover, and prove the result over hours or days instead of treating one
> chat turn as the whole job.

`pi-goal-list-loop-audit` (GLLA) is mission control for autonomous work in
[pi](https://github.com/badlogic/pi-mono). It fits work that is too broad,
too long, or too important to leave to a single uninterrupted prompt:
repo-wide changes, migrations, audits, research, documentation overhauls,
large refactors, and continuous improvement.

Build a project from its spec:

```bash
pi install npm:pi-goal-list-loop-audit
```

In Pi, run `/reload` if the session is already open, then:

```text
/loop respec Build the missing capabilities in SPEC.md and prove the result
```

GLLA researches the project, drafts requirements for your confirmation, builds
increments, and sends completion claims to an independent auditor. Unmet
requirements return to work; verified completion retains its evidence.
Use `/goal` for one outcome or `/list` for a queue of outcomes.
See the [command guide](#choose-the-work-surface) and
[recovery…
