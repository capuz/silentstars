---
repo: "jazz-it/dline"
name: "dline"
description: "A sleek and simple calendar for terminal enthusiasts."
readmeQualityOk: true
url: "https://github.com/jazz-it/dline"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 286
forks: 6
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-02-09T21:27:16Z"
lastCommitAt: "2026-11-27T16:31:00Z"
status: "thriving"
tags: []
healthScore: 100
undervaluedScore: 22
maintainers: ["jazz-it"]
openGraphImageUrl: "https://opengraph.githubassets.com/d6d712e556a7a33c00983a3b2d0f48dc868209f9bd5357ef95fa2cb8372b5403/jazz-it/dline"
discussionCount: 0
---

# dLine

Designed for developers, dLine makes managing your schedule smooth and efficient.

> **Shell requirement:** dLine needs modern shell features (Bash 4+ or Zsh). On macOS you can simply run `./dline`; it will automatically fall back to `/bin/zsh` when the default Bash 3.2 lacks the required capabilities.

## Features

- Dynamic View:
Run `dline` without arguments to see the current month’s events at a glance. Past dates are shaded, future events are highlighted, and color-coded categories make it easy to navigate. You can even filter out categories for a cleaner view.

- Static View:
Use `dline -m yyyy/mm` to display a simple monthly calendar for any given month. Great for when you just need a clear snapshot without additional details.

- Event Calculator View:
Need to count workdays between two dates? `dline -w start_date end_date` does it for you, categorizing weekdays and weekends automatically.

- Administration:
Easily manage your calendar datasets with `dline -b`. Add, delete, update, and clean your data as needed. Switching between multiple calendars or importing public holidays is simple. There's even a way to terminate all reminder processes.
