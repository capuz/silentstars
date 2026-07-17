---
repo: "dennykim123/claude-codex-battery"
name: "claude-codex-battery"
description: "macOS menu bar widget showing Claude Code & Codex usage limits as battery icons 🔋"
readmeQualityOk: true
url: "https://github.com/dennykim123/claude-codex-battery"
language: "Swift"
languages: ["Swift", "JavaScript"]
languagePcts: [56, 32]
topics: ["anthropic", "bun", "claude-code", "codex", "developer-tools", "macos", "menubar", "swiftbar", "usage-tracker", "menu-bar-widget"]
stars: 76
forks: 11
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-08T12:50:55Z"
lastCommitAt: "2026-07-17T06:00:14Z"
lastReleaseAt: "2026-07-14T06:54:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 31
maintainers: ["dennykim123"]
openGraphImageUrl: "https://opengraph.githubassets.com/52681d2fdf7657518a967cf94d6ca8a3b32e974986513759e6c9603997846001/dennykim123/claude-codex-battery"
---

# 🔋 Claude & Codex Usage Battery

</p>

> A macOS menu bar widget that shows your remaining **Claude Code** and **Codex** usage limits as battery icons — so you never have to open `/usage` again.

</p>

`C` = Claude · `X` = Codex. Each battery shows the **remaining %** of a limit window — full & green means plenty left, red means almost out. Click for a detailed breakdown with reset times.

Ships two ways: a **notarized native app** (double-click install, zero prerequisites) and a single [SwiftBar](https://github.com/swiftbar/SwiftBar) plugin — one self-contained script, **no third-party libraries**. The battery icons are rendered as PNGs from scratch in pure JavaScript (`node:zlib` only), so there's no image library and no `npm install`. Network calls: **two official usage endpoints** — Anthropic's and OpenAI's — each fetched with your own local Claude Code / Codex login (the same data `/usage` and Codex's `/status` show — [see Privacy](#privacy--security)), plus an **optional once-a-day update check** ([see Updating](#updating)). (`ccusage` is an optional extra for the cost breakdown.)

---

## What it shows

| Group | Batteries | Source |
|-------|-----------|--------|
| **`C`…
