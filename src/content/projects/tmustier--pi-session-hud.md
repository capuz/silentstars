---
repo: "tmustier/pi-session-hud"
name: "pi-session-hud"
description: "Persistent session HUD widget for Pi"
readmeQualityOk: true
url: "https://github.com/tmustier/pi-session-hud"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-07T19:32:53Z"
lastCommitAt: "2026-10-26T21:00:37Z"
lastReleaseAt: "2026-06-24T21:53:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 38
maintainers: ["tmustier"]
openGraphImageUrl: "https://opengraph.githubassets.com/0eddbaca671a2ea1cb882562031cd9fe2e4cd6a72a7724cb822f2a286604dc27/tmustier/pi-session-hud"
---

# pi-session-hud

`pi-session-hud` replaces [Pi](https://github.com/earendil-works/pi)'s multi-line footer with one compact context/location/session line and gives the input box Amp-style chrome: model and thinking level in the top border, your remaining weekly quota (or session cost) in the bottom border, and provider/reset detail on the footer's right edge.

```text
╭────────────────────── ↯ ultrafast • gpt-6-astra • medium ╮
│ prompt text wraps inside a one-column gutter              │
╰────────────────────────────────────────────── 44% left ╯
 ██░░░░ 36% 98k/272k │ ~/projects/pi-session-hud (main) +12 -3 | Simplify HUD…     openai-codex weekly reset in 3d04h
```

Only the context bar/text, git diff stats, session label, and usage metric use colour, so the line stays scannable. Every colour comes from Pi's active theme, so with Pi's default `system` theme the HUD matches your terminal palette and follows its light/dark switches. The stock footer's separate cwd row, activity status, extension status row, and background fill are gone.

## What it shows

The footer line, left to right:

- colour-coded context usage bar, percentage, and used/window token counts; when compaction…
