---
repo: "theolundqvist/pr-cockpit"
name: "pr-cockpit"
description: "An extremely fast GitHub for pull request review: PRs open in 20 ms. Keyboard-first, macOS and Linux, CLI for coding agents."
readmeQualityOk: true
url: "https://github.com/theolundqvist/pr-cockpit"
homepage: "https://prcockpit.com/"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [51, 26]
topics: ["ai-agents", "cli", "code-review", "developer-tools", "electron", "github", "keyboard-shortcuts", "macos", "productivity", "pull-requests"]
stars: 47
forks: 5
openIssues: 0
closedIssues: 24
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2026-08-20T13:52:07Z"
lastCommitAt: "2026-09-22T08:45:53Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 41
maintainers: ["theolundqvist", "Macludde", "umgbhalla"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb34f80b0327afede706536ad68e2d0cdf15c9c4da6bc8eb68e096b8b40d57d5/theolundqvist/pr-cockpit"
---

# PR Cockpit

**An extremely fast GitHub for pull request review.** PRs open in 20 ms instead of 1.4 s ([benchmark](https://github.com/theolundqvist/pr-cockpit/blob/HEAD/docs/BENCHMARKS.md)).

PR Cockpit is a desktop app for GitHub pull requests on **macOS and Linux**. A local mirror, kept current by webhooks, holds every PR you care about, so the queue, the diff, the failed check logs and the review threads paint from disk. Keyboard for everything; GitHub stays the source of truth.

[Install](#install) · [See the workflow](#from-finding-the-pr-to-finishing-the-review) · [CLI for humans and agents](#the-same-pr-context-in-your-terminal) · [Website](https://prcockpit.com/)

The queue separates **ready to merge**, **your move**, and **waiting**. Checks, conflicts, unresolved threads, and review state give you the context to decide what to open next. Stacked pull requests stay together.

## Install

Run this in your terminal as your normal user, **not with `sudo`**:

```sh
curl -fsSL https://raw.githubusercontent.com/theolundqvist/pr-cockpit/main/scripts/bootstrap | bash
```

[Read the installer first](https://github.com/theolundqvist/pr-cockpit/blob/HEAD/scripts/bootstrap). It…
