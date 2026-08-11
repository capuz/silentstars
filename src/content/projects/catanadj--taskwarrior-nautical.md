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
openIssues: 0
closedIssues: 14
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-12-01T15:13:51Z"
lastCommitAt: "2026-08-11T04:49:12Z"
lastReleaseAt: "2026-01-25T17:30:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 48
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

## Start Here

Download Nautical and run the installer:

```bash
git clone --depth 1 https://github.com/catanadj/taskwarrior-nautical.git
cd taskwarrior-nautical
./nautical install --dry-run
./nautical install
```

The same `./nautical install` command handles first installation, upgrades,
repairs, and safe re-runs. For later upgrades, update the checkout and run it
again:

```bash
git pull --ff-only
./nautical install
```

The installer uses `$TASKDATA` when set, otherwise `~/.task`. It validates the
complete runtime before switching releases, keeps the previous release
available during upgrades, and leaves an already-current installation…
