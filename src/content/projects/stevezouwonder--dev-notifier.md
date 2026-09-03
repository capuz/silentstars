---
repo: "SteveZouWonder/dev-notifier"
name: "dev-notifier"
description: "macOS menu-bar app that watches Jira & GitHub and shows clickable desktop notifications"
readmeQualityOk: true
url: "https://github.com/SteveZouWonder/dev-notifier"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-01T08:06:42Z"
lastCommitAt: "2026-09-03T08:14:11Z"
lastReleaseAt: "2026-07-07T02:48:16Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 51
maintainers: ["SteveZouWonder"]
openGraphImageUrl: "https://opengraph.githubassets.com/7bf4d77be72be91897fc1e77464dac8f1bc677ee3090d0c9b8c5f6ab3aa761a1/SteveZouWonder/dev-notifier"
---

# Dev Notifier

### A tiny macOS & Windows tray app that watches Jira, GitHub & PagerDuty for things relevant to you and shows clickable desktop notifications

[Download](#download--install) · [Configure](#configuration) · [Tutorial](https://github.com/SteveZouWonder/dev-notifier/blob/HEAD/TUTORIAL.md) · [Build from source](#build-from-source)

</div>

---

Dev Notifier lives in your menu bar (macOS) or system tray (Windows) and polls,
every few minutes:

- **Jira** — issues where you are the assignee, reporter, or watcher that were
  recently updated, plus comments mentioning you.
- **GitHub** — review requests, mentions, assignments, and activity on your own
  PRs (via the `gh` CLI notifications API).
- **GitHub CI (fallback)** — the CI rollup of your open PRs, so you get pinged
  on ❌ failures / ⏳ pending even if notification settings suppress them.
- **PagerDuty** — every change on incidents assigned to you or your teams
  (triggered, acknowledged, escalated / reassigned **to you**, resolved, notes,
  priority changes, responder requests), each saying who did it; plus on‑call
  shift reminders (heads‑up before your shift, start, end) and a menu showing
  whether you're on‑call…
