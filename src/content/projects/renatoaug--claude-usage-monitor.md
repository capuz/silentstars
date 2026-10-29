---
repo: "renatoaug/claude-usage-monitor"
name: "claude-usage-monitor"
description: "A cute pixel-art desktop pet for macOS that tracks your Claude Code usage — mirroring the official Settings → Usage panel (current session + weekly limits) with animations"
readmeQualityOk: true
url: "https://github.com/renatoaug/claude-usage-monitor"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [72]
stars: 105
forks: 16
openIssues: 1
closedIssues: 11
watchers: 3
contributors: 6
recentReleases: 3
createdAt: "2026-06-18T23:43:29Z"
lastCommitAt: "2026-10-29T14:06:51Z"
lastReleaseAt: "2026-08-03T15:29:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 37
maintainers: ["renatoaug", "FelipeRossato", "thgoas"]
openGraphImageUrl: "https://opengraph.githubassets.com/2306b6218016f2541947ac6df28f93578fc73fe2d5fc105871e43471ac66b903/renatoaug/claude-usage-monitor"
discussionCount: 0
---

# 🟫 Clauddy

A cute pixel-art desktop pet for macOS that tracks your Claude Code usage — mirroring the official **Settings → Usage** panel (current session + weekly limits, in tokens & %), with animations. Use Codex or Cursor too? It can track those alongside (see [Codex](#codex) and [Cursor](#cursor)).

https://github.com/user-attachments/assets/be8d339c-ac69-4980-96a7-8e286f8b080f

## What it shows

- **Current session** — real % used + **"resets in Xh Ym"** + session tokens, and a projection of where that pace is taking you (see [Burn rate](#burn-rate))
- **Weekly · all models** — real % used + tokens over the last 7 days
- **Status line** under the pet: `● working · 1.6M tok/min` (or today's tokens when idle)
- **By model · 7 days** — Opus / Sonnet / Haiku / Fable, in tokens
- **By project · 7 days** — which repo actually ate the week, ranked, with the tail folded into `other`
- **30-day map** — colored squares by daily tokens (green = light → red = heavy), with the monthly total

The **percentages are real**, pulled from your account (you log in once — see below). The token counts, the by-model and by-project breakdowns, activity status, and 30-day map come from your local…
