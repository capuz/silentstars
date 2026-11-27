---
repo: "fragkakis/prty-time"
name: "prty-time"
description: "A macOS menu-bar app that lists the GitHub pull requests waiting on you, and notifies you when something happens on them."
readmeQualityOk: true
url: "https://github.com/fragkakis/prty-time"
language: "Swift"
languages: ["Swift"]
languagePcts: [99]
topics: ["github", "macos", "productivity", "pull-requests", "swift", "code-review", "github-api", "macos-app", "menu-bar-app", "menubar"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-11-16T14:40:04Z"
lastCommitAt: "2026-11-27T12:58:50Z"
lastReleaseAt: "2026-11-24T14:02:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 43
maintainers: ["fragkakis"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1460144520/ff0cf21b-dea1-498c-8971-7964c03e6cd3"
---

# PRty Time

A macOS menu-bar app that lists the GitHub pull requests waiting on you, and notifies you when something happens on them. A small replacement for [Trailer](https://github.com/ptsochantaris/trailer).

## Features

- **To review:** PRs requesting your review (marked *You*) or your teams' review, newest first, then open PRs you've already reviewed. Team requests idle for 30+ days are hidden.
- **My PRs:** your open PRs with their review state (approved, changes requested, awaiting review).
- **Grouped by repo:** click a repo to collapse it; remembered across launches. To put repos in your own order, turn on *Drag repos into your own order* in Settings and drag a repo onto another; repos you haven't moved go below, newest activity first.
- **Right-click a PR** to open its checks, mark it read or unread (or everything in the tab read), snooze it, or copy its link, branch name or `gh pr checkout` command.
- **Snooze:** right-click a PR to hide it until there's new activity, tomorrow morning or next week. It waits, dimmed, in a *Snoozed* section at the bottom of its tab and leaves the badge.
