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
stars: 90
forks: 5
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 7
recentReleases: 10
createdAt: "2026-09-04T19:52:33Z"
lastCommitAt: "2026-11-04T13:05:03Z"
lastReleaseAt: "2026-09-08T21:51:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 41
maintainers: ["brandonmcconnell", "Batuhan1999", "bartvanremortele"]
openGraphImageUrl: "https://opengraph.githubassets.com/ebcbf1c81c7d62032b2c08b3ec006e211cddc7ee5ca3966b748b7f377893c589/brandonmcconnell/geld"
---

Geld is a browser extension that hides test files from GitHub diffs so you can review the code that matters first. Tests are not deleted from the page; they are collected into a tidy, collapsible section at the bottom of the diff, removed from the file tree, and excluded from the line and file counts in the header. Hover the counts to see the full breakdown.

Built with [WXT](https://wxt.dev) and shipped for **Chrome, Edge, Firefox and Safari** from a single codebase. This repository is a small pnpm monorepo: the extension lives in `apps/extension`, shared logic in `packages/core` and `packages/review`, the GitHub Action in `apps/action`, and the geld.sh website in `apps/site`.

## What it does

Anywhere GitHub shows a list of changed files (pull request _Files changed_ tab, commit pages, compare pages), Geld:

- **Hides diffs for test files** and moves them to the bottom of the list, behind a borderless _"17 test files hidden"_ row with a _Show test files_ toggle that matches GitHub's own collapse/expand affordances. Expanding reveals the tests in place, below the real changes.
- **Adjusts the header counts** (`+400 −120`, _Files changed 17_, _"18 files changed"_, compare-page…
