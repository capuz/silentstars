---
repo: "figitaki/reviews"
name: "reviews"
description: "Code review tool for arbitrary diffs"
readmeQualityOk: true
url: "https://github.com/figitaki/reviews"
homepage: "https://reviews.figitaki.dev"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [69]
topics: ["agent-skills", "code-review", "elixir", "phoenix", "rust"]
stars: 9
forks: 3
openIssues: 55
closedIssues: 49
watchers: 0
contributors: 6
recentReleases: 2
createdAt: "2026-05-12T03:28:47Z"
lastCommitAt: "2026-11-19T04:46:02Z"
lastReleaseAt: "2026-11-18T07:41:40Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 58
maintainers: ["ampagent", "figitaki"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f796da3bb57e016daa33e4525c4e9d8de937641f2fc4f85df5db6878103080e/figitaki/reviews"
---

# Reviews

Reviews is a code-review tool for arbitrary diffs. It gives agents and humans a
shareable review surface before, during, or outside a GitHub PR workflow.

The app is Phoenix 1.8 + LiveView, with diffs rendered by vanilla
`@pierre/diffs` from a LiveView hook, and a Rust CLI (`reviews push`) for
uploading diffs.

Current version: `0.0.2`.

## What It Provides

- Link-based reviews for any uploaded diff.
- Patchsets for iterating on the same review as the work changes.
- Review packets: markdown guides that group hunks with prose for humans.
- Lazy hunk rendering so large diffs do not eagerly mount every diff island.
- Explicit hunk viewed state shared between packet and Changes views.
- Packet section decisions for approve, deny, or ignore.
- Line and token comments that every viewer sees as soon as they are posted.
