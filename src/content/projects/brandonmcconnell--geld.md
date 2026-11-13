---
repo: "brandonmcconnell/geld"
name: "geld"
description: "Browser extension to hide tests when reviewing PRs on Github"
readmeQualityOk: true
url: "https://github.com/brandonmcconnell/geld"
homepage: "https://geld.sh"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 115
forks: 13
openIssues: 5
closedIssues: 7
watchers: 0
contributors: 11
recentReleases: 10
createdAt: "2026-09-04T19:52:33Z"
lastCommitAt: "2026-11-13T11:25:04Z"
lastReleaseAt: "2026-09-08T21:51:30Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 82
undervaluedScore: 35
maintainers: ["brandonmcconnell", "hunterchen7", "hosmelq"]
openGraphImageUrl: "https://opengraph.githubassets.com/42e0c1f50d44879f92ca0bb2bb6a4eeef696b5b065763777be096755be28d0cf/brandonmcconnell/geld"
---

Geld is a browser extension that hides test files from GitHub diffs so you can review the code that matters first. Tests are not deleted from the page; they are collected into a tidy, collapsible section at the bottom of the diff, removed from the file tree, and excluded from the line and file counts in the header. Hover the counts to see the full breakdown.

Built with [WXT](https://wxt.dev) and shipped for **Chrome, Edge, Firefox and Safari** from a single codebase. This repository is a small pnpm monorepo: the extension lives in `apps/extension`, shared logic in `packages/core` and `packages/review`, the GitHub Action in `apps/action`, and the geld.sh website in `apps/site`.

## What it does

Anywhere GitHub shows a list of changed files (pull request _Files changed_ tab, commit pages, compare pages), Geld:

- **Hides diffs for test files** and moves them to the bottom of the list, behind a borderless _"17 test files hidden"_ row with a _Show test files_ toggle that matches GitHub's own collapse/expand affordances. Expanding reveals the tests in place, below the real changes.
- **Adjusts the header counts** (`+400 −120`, _Files changed 17_, _"18 files changed"_, compare-page…
