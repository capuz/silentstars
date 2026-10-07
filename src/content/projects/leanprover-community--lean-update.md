---
repo: "leanprover-community/lean-update"
name: "lean-update"
description: "GitHub Action which automatically updates Lean projects"
readmeQualityOk: true
url: "https://github.com/leanprover-community/lean-update"
language: "Lean"
languages: ["Lean"]
languagePcts: [100]
topics: ["github-actions", "lean4"]
stars: 7
forks: 7
openIssues: 12
closedIssues: 127
watchers: 3
contributors: 9
recentReleases: 0
createdAt: "2025-02-24T14:51:15Z"
lastCommitAt: "2026-10-07T10:31:08Z"
lastReleaseAt: "2025-03-16T20:33:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 87
maintainers: ["Seasawher", "kim-em", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/a66f920f0b00557061445748e67374a318f3b5c1d235d661c159a86ca84295fe/leanprover-community/lean-update"
---

# Lean Update

A GitHub Action that attempts to update Lean and dependencies of a Lean project. This is basically a fork of [oliver-butterley/lean-update](https://github.com/oliver-butterley/lean-update) but more feature-rich.

## Quick Setup

Create a file named `update.yml` in the `.github/workflows` directory.

### If you want to keep dependencies always up-to-date

To keep dependencies always up-to-date, you might want to configure as follows:

```yml
name: Update Lean Project

on:
  schedule:
    - cron: "0 0 * * *" # every day
  workflow_dispatch: # allows workflow to be triggered manually

jobs:
  update_lean:
    # this is needed for private repositories
    permissions:
      contents: write
      pull-requests: write
      issues: write

    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v6

      - name: Update Lean project
        uses: leanprover-community/lean-update@main
```

### When you only want to update when there is a new Lean version

If you want to skip updates unless there is a change to the `lean-toolchain` file, you might want to configure as follows:

```yml
name: Update Lean Project

on:
  schedule:
    -…
