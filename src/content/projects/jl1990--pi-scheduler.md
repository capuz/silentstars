---
repo: "jl1990/pi-scheduler"
name: "pi-scheduler"
description: "Give Pi coding agents a clock: schedule reminders, shell commands, and self-waking prompts for CI polling and autonomous follow-ups"
readmeQualityOk: true
url: "https://github.com/jl1990/pi-scheduler"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [81]
stars: 6
forks: 5
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-07-05T10:31:03Z"
lastCommitAt: "2026-09-29T08:11:21Z"
lastReleaseAt: "2026-09-13T18:16:10Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "fork_magnet"]
healthScore: 88
undervaluedScore: 66
maintainers: ["jl1990", "aseba"]
openGraphImageUrl: "https://opengraph.githubassets.com/893fbfe2c5cab266c3f2722d120031e665a68d161fffea45c947a86ab6b47177/jl1990/pi-scheduler"
---

# Pi Scheduler

**Run checks on a schedule. Wake the agent when there’s something to do.**

Schedule shell commands, agent prompts, and reminders inside [Pi](https://github.com/earendil-works/pi). Commands run directly and bring their output back to the agent when your wake policy matches.

> “Run the tests every five minutes. Wake yourself if they fail. Stop after ten runs.”

## Why this package?

Pi Scheduler focuses on **scheduled actions**: run a command, capture stdout/stderr, and trigger a follow-up on success or failure. Execution limits, persistent tasks, and atomic claims let multiple Pi processes share scheduled work.

Prompt loops suit checks that need agent judgment every time. Broader packages such as [pi-loop](https://github.com/trvon/pi-loop) also provide workflows, event triggers, orchestration, and command monitoring. Choose Pi Scheduler when you want a focused scheduler for commands, prompts, and reminders.

**Pi must be running for tasks to fire.** Tasks persist across restarts, but this package does not run an always-on daemon.

## Get started

```bash
pi install npm:@jl1990/pi-scheduler
```

Restart Pi or run `/reload`. Ask for a scheduled task in plain…
