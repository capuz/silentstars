---
repo: "Yuuyuko-uu/dsh-fish-buddy"
name: "dsh-fish-buddy"
description: "Fish Buddy: a desktop little whale widget + DSH plugin (voice relay, companion subtitles, game danmaku, screenshots)"
originalDescription: "鱼搭子：桌面小鲸鱼挂件 + DSH 插件（语音送话、陪看字幕、游戏弹幕、截图）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Yuuyuko-uu/dsh-fish-buddy"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [79, 21]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-10-28T10:36:23Z"
lastCommitAt: "2026-10-29T05:49:03Z"
lastReleaseAt: "2026-10-29T05:42:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 42
maintainers: ["Yuuyuko-uu"]
openGraphImageUrl: "https://opengraph.githubassets.com/82d0575b1a01cc75f9e2ddb689bc267356061462d08e581dbb32b4b843dda01d/Yuuyuko-uu/dsh-fish-buddy"
---

# Fish Buddy

A little whale widget on your desktop, plus a DSH plugin. The widget handles listening, seeing, and speaking (voice, companion subtitles, game danmaku, screenshots). The plugin connects it to a chat session you bind it to: what the widget says goes into that session, and the replies from there are sent back to the widget.

This repository contains **both halves**:

| Directory | What it is |
|---|---|
| `app/` | Desktop widget (Python + tkinter, packaged as a single-file exe) |
| `lib/` | DSH plugin (host side + settings page) |
| `tests/` | Tests for the plugin and the program |

> ⚠️ **Two version numbers, don't mix them up**: `app/` is the widget program, `lib/` is the DSH plugin. They increment independently and are not the same number.
> - Current versions: see `app/version.py` and `package.json`. The README intentionally does not hardcode them, so it doesn't need updating on every release.
> - What changed: see `CHANGELOG.md`. Entries are headed 程序 (program) or 插件 (plugin).
> - Downloads: see [Releases](https://github.com/Yuuyuko-uu/dsh-fish-buddy/releases). The exe asset names include the version number.

## What the plugin half does

1. Opens a port on this…
