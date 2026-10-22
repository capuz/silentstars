---
repo: "enif-lee/pr-plus"
name: "pr-plus"
description: "Chrome/Edge extension: stack-aware GitHub PR list + fast in-page review modal"
readmeQualityOk: true
url: "https://github.com/enif-lee/pr-plus"
homepage: "https://chromewebstore.google.com/detail/pr+/iohbbnefenodmnlejjkjjkfkhifnabii"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
topics: ["browser-extension", "chrome-extension", "code-review", "developer-tools", "edge-extension", "github", "github-extension", "graphite", "pr-review", "productivity"]
stars: 22
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2026-07-21T09:02:30Z"
lastCommitAt: "2026-10-22T08:52:22Z"
lastReleaseAt: "2026-07-28T08:42:32Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 53
maintainers: ["enif-lee"]
openGraphImageUrl: "https://opengraph.githubassets.com/c933c3191b05f2900eb6c64c33612c660fc5574c69fd09ee1fb12ad478b9b697/enif-lee/pr-plus"
---

A Chrome/Edge extension for GitHub pull requests:<br />
  so you can review without leaving the pulls page.

  ·

---

## Why pr+?

| Value | What you get |
|-------|----------------|
| **Review without page navigation** | Click a PR on `/pulls` → full **modal** or **side sheet**. Stay on the list; no full PR page hop. |
| **PR page embed** | On `/pull/N`, replace the native PR body with the **same pr+ shell** (full window); restore GitHub UI anytime. |
| **Ultra-fast, progressive open** | **List sketch → durable cache → live network** so the shell paints **synchronously** on click, then **incremental** fills refine the data. |
| **Cache-first, soft revalidate** | Memory + **IndexedDB** cache with background refresh—writes stay snappy without cold remounts. |
| **Butter-smooth Diff** | **Range-gated virtualization**, syntax-highlight **cache**, and zero per-pixel app re-renders while you scroll. |
| **Stack visibility** | List reorders into a base/head **stack tree**; the shell shows a **stacked PR strip** (horizontal scroll) for the current chain. |
| **Review workflow in one place** | Conversation, Diff, leave review, line comments, suggestions, filters, subscribe, merge—without…
