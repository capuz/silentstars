---
repo: "RapierCraftStudios/ForgeDock"
name: "ForgeDock"
description: "ForgeDock — autonomous AI dev pipeline for Claude Code. GitHub as agent memory: issue in, PR out."
readmeQualityOk: true
url: "https://github.com/RapierCraftStudios/ForgeDock"
homepage: "https://rapiercraftstudios.github.io/ForgeDock/"
language: "JavaScript"
languages: ["JavaScript", "Shell"]
languagePcts: [69, 31]
topics: ["agentic-ai", "ai-agents", "ai-pipeline", "anthropic", "autonomous-coding", "ci-cd", "claude", "claude-code", "code-review", "developer-tools"]
stars: 117
forks: 14
openIssues: 67
closedIssues: 2154
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-06-04T14:57:20Z"
lastCommitAt: "2026-10-13T10:58:03Z"
lastReleaseAt: "2026-06-13T11:53:17Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 99
undervaluedScore: 34
maintainers: ["rapiercraft-forgedock[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a09251c733f66daf45f0fb56cf82200336d07e7658c94f2365d8937d29a07757/RapierCraftStudios/ForgeDock"
fundingLinks: ["GITHUB:https://github.com/RapierCraftStudios"]
discussionCount: 3
---

**This repository builds itself with ForgeDock.** In its first 30 days (June 4 → July 4, 2026): **693 issues filed, 605 closed, 603 PRs merged — median 56 minutes from open to merged-and-closed.** 57% of those issues were filed by the pipeline itself; 49% are findings its own review agents raised, filed, and then fixed. Every run leaves a public audit trail — [click through the receipts](#watch-the-machine-work), or count them yourself:

```bash
gh issue list -R RapierCraftStudios/ForgeDock --state closed --limit 1000 --json number --jq 'length'
```

**A single run, up close** — a real one, [issue #1230](https://github.com/RapierCraftStudios/ForgeDock/issues/1230):

```console
$ /work-on #1230        "orchestrate: Layer 5 co-change signal is dead code"

  ✓ investigate    CONFIRMED/HIGH — feature shipped 3h earlier (PR #1204) reads a
                   never-populated variable; the co-change query can never fire
  ✓ build          fix branch, 1 file
  ✓ review         caught a defect in the fix itself: stray backticks in the grep
                   meant every git-log pathspec silently matched zero commits —
                   "the fix would not have actually worked." Corrected.…
