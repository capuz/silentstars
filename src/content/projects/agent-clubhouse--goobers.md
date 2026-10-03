---
repo: "Agent-Clubhouse/Goobers"
name: "Goobers"
description: "Workflow orchestration for agent teams "
readmeQualityOk: true
url: "https://github.com/Agent-Clubhouse/Goobers"
language: "Go"
languages: ["Go"]
languagePcts: [94]
stars: 7
forks: 15
openIssues: 703
closedIssues: 2970
watchers: 2
contributors: 22
recentReleases: 10
createdAt: "2026-07-13T00:06:56Z"
lastCommitAt: "2026-10-03T22:03:46Z"
lastReleaseAt: "2026-09-02T21:20:49Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 96
undervaluedScore: 71
maintainers: ["jeffstei", "masra91", "krishnapatel17"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a06d0faa2f5b68ccbf53d4016ac1cc90128edbf2d776de09ee92596650f389d/Agent-Clubhouse/Goobers"
---

**Goobers is an open, self-hosted platform for running an AI workforce against
your repositories and backlog.** Instead of giving one agent an open-ended
prompt, you define a team of roles (a *gaggle*) and the workflow, permissions,
checks, retry limits, and human handoffs that govern its work.

## Contents

- [What is Goobers?](#what-is-goobers)
- [How it works](#how-it-works)
- [Install](#install)
- [Quick start](#quick-start)
- [Documentation](#documentation)
- [Shell completion](#shell-completion)
- [Development and contributing](#development-and-contributing)

## What is Goobers?

Goobers is for a solo builder who wants dependable issue-to-PR automation, a
team that wants agents to work within its existing review and CI policy, or an
organization that wants the same workforce definitions to remain useful as its
execution infrastructure grows.

The shipped runner is one Go binary that runs on one machine. Cloud-scale
orchestration is an explicit design goal, not a current product claim. The
configuration and run contract are designed to stay constant as execution
scales, so the workforce does not need to be redefined for a different runtime.

The core concepts are:

- A…
