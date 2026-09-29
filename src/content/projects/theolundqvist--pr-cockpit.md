---
repo: "theolundqvist/pr-cockpit"
name: "pr-cockpit"
description: "An extremely fast GitHub for pull request review: PRs open in 20 ms. Keyboard-first, macOS and Linux, CLI for coding agents."
readmeQualityOk: true
url: "https://github.com/theolundqvist/pr-cockpit"
homepage: "https://prcockpit.com/"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [52, 26]
topics: ["ai-agents", "cli", "code-review", "developer-tools", "electron", "github", "keyboard-shortcuts", "macos", "productivity", "pull-requests"]
stars: 46
forks: 5
openIssues: 6
closedIssues: 25
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2026-08-20T13:52:07Z"
lastCommitAt: "2026-09-29T08:10:22Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 39
maintainers: ["theolundqvist", "Macludde", "moritzcodes"]
openGraphImageUrl: "https://opengraph.githubassets.com/de6685e169be6e1c05264cf391ae20caa49b83c3cc2620daef5170c29dc25502/theolundqvist/pr-cockpit"
---

# PR Cockpit

**An extremely fast GitHub for pull request review.** PRs open in 20 ms instead of 1.4 s ([benchmark](https://github.com/theolundqvist/pr-cockpit/blob/HEAD/docs/BENCHMARKS.md)).

PR Cockpit is a desktop app for GitHub pull requests on **macOS and Linux**. A local mirror, kept current by webhooks, holds every PR you care about, so the queue, the diff, the failed check logs and the review threads paint from disk. Keyboard for everything; GitHub stays the source of truth.

[Install](#install) · [See the workflow](#from-finding-the-pr-to-finishing-the-review) · [CLI for humans and agents](#the-same-pr-context-in-your-terminal) · [Website](https://prcockpit.com/)

The queue separates **ready to merge**, **your move**, and **waiting**. Failed merge attempts appear under **FAILED TO MERGE** above pinned PRs in every grouping mode, until retried, dismissed, merged, or closed. Checks, conflicts, unresolved threads, and review state give you the context to decide what to open next. Stacked pull requests stay together.

## Install

Run this in your terminal as your normal user, **not with `sudo`**:

```sh
curl -fsSL…
