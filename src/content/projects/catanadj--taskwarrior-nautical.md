---
repo: "catanadj/taskwarrior-nautical"
name: "taskwarrior-nautical"
description: "Real-world recurrence for Taskwarrior."
readmeQualityOk: true
url: "https://github.com/catanadj/taskwarrior-nautical"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 29
forks: 3
openIssues: 1
closedIssues: 15
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-12-01T15:13:51Z"
lastCommitAt: "2026-08-30T09:25:41Z"
lastReleaseAt: "2026-01-25T17:30:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 49
maintainers: []
openGraphImageUrl: "https://repository-images.githubusercontent.com/1107756029/17a6f770-30c4-4618-9767-f6e119145782"
fundingLinks: ["GITHUB:https://github.com/catanadj", "CUSTOM:https://paypal.me/catanadj", "CUSTOM:https://buymeacoffee.com/catanadj"]
---

# Taskwarrior Nautical

Nautical is a full recurrence engine for Taskwarrior. Give it a compact routine
rule, then complete tasks as usual; Nautical creates each next occurrence as a
normal Taskwarrior task that remains visible, editable, and in sync with the
regular `task` command.

Simple routines stay simple. When a routine follows business days, exception
dates, multiple times, changing intervals, or a fixed end point, the same system
scales with it. If you can describe when something should happen, Nautical is
designed to express it.

## Install

Install or upgrade the current stable release:

```bash
curl -fsSL https://raw.githubusercontent.com/catanadj/taskwarrior-nautical/main/bootstrap.sh | bash
```

The installer detects Linux or Termux, configures the launcher, hooks, and
Taskwarrior fields, then verifies the result. It preserves existing settings
and reports any manual action that remains.

Create a first task:

```bash
task add "Weekly review" anchor:"w:mon"
```

Complete it with `task <id> done`; Nautical queues the next Monday review.

When hooks are interrupted or a task is changed outside Nautical, the system
can audit the chain and safely recover missing links…
