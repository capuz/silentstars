---
repo: "kenn-io/middleman"
name: "middleman"
description: "Local-first GitHub dashboard for maintainers to triage, review, and merge PRs and issues across repos without needing GitHub's built-in notification emails or dashboard"
url: "https://github.com/kenn-io/middleman"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [52, 31]
stars: 135
forks: 17
openIssues: 12
closedIssues: 34
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2026-03-30T14:04:06Z"
lastCommitAt: "2026-06-27T00:47:40Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 29
maintainers: ["mariusvniekerk", "wesm", "cpcloud"]
openGraphImageUrl: "https://opengraph.githubassets.com/f65fbce9b922208f1c29cc22a948aade75803fa8bb1f3d232a6424c7f13d2e94/kenn-io/middleman"
---

# middleman

A local-first maintainer console. The original core syncs PRs and issues from your repos into SQLite, serves a fast Svelte 5 frontend from a single binary, and keeps you out of provider notification inboxes.

Middleman runs entirely on your machine -- no hosted service, no account to create. One binary, one config file, and you're up.

This workstream expands middleman beyond provider PR/MR triage with first-class
modes for external Kata task daemons, local markdown docs, and msgvault-backed
message search. Those domains stay owned by their source systems: Kata task
data remains in Kata daemons, docs remain on disk, and msgvault data remains in
msgvault.

## Features

### Activity feed

A unified timeline of comments, reviews, and commits across all your repos. Switch between flat and threaded views. Threaded view groups events by PR/issue and collapses long commit runs for readability.

Filter by time range (24h / 7d / 30d / 90d), event type, repo, item type (PRs vs issues), or free-text search. Hide closed items and bot noise with a toggle.

### Pull request management

Browse, search, and filter PRs across repos. Group by repo or show a flat list. From the detail…
