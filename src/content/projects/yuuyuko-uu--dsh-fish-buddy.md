---
repo: "Yuuyuko-uu/dsh-fish-buddy"
name: "dsh-fish-buddy"
description: "Fish Buddy: a desktop little whale widget + DSH plugin (voice relay, co-watching subtitles, in-game danmaku, screenshots)"
originalDescription: "鱼搭子：桌面小鲸鱼挂件 + DSH 插件（语音送话、陪看字幕、游戏弹幕、截图）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Yuuyuko-uu/dsh-fish-buddy"
language: "Python"
languages: ["Python"]
languagePcts: [81]
topics: ["ai-companion", "deepseek-harness", "dsh", "dsh-plugin", "voice", "watch"]
stars: 28
forks: 2
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-28T10:36:23Z"
lastCommitAt: "2026-11-02T11:36:36Z"
lastReleaseAt: "2026-10-29T10:15:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 42
maintainers: ["Yuuyuko-uu"]
openGraphImageUrl: "https://opengraph.githubassets.com/13027add02f7360ed865e191ae2ce94629703bd5b0571edc4c6c2a541e111136/Yuuyuko-uu/dsh-fish-buddy"
---

# Fish Buddy

A little whale widget on your desktop + a DSH plugin. The widget handles listening, seeing, and speaking (voice, co-watching subtitles, in-game danmaku, screenshots). The plugin connects it to a conversation session you bind it to: what the widget says goes into that session, and the replies from that session are sent back to the widget.

This repository contains **both halves**:

| Directory | What it is |
|---|---|
| `app/` | Desktop widget (Python + tkinter, packaged as a single-file exe) |
| `lib/` | DSH plugin (host side + settings page) |
| `tests/` | Tests for the plugin and the program |

> ⚠️ **Two version numbers, don't mix them up**: `app/` is the widget program and `lib/` is the DSH plugin. Each is versioned independently, so they are not the same number.
> - Current versions: see `app/version.py` and `package.json`. The README **intentionally doesn't hardcode them**, so it doesn't need updating on every release.
> - What changed: see `CHANGELOG.md`. Entries start with either Program or Plugin.
> - Downloads: see [Releases](https://github.com/Yuuyuko-uu/dsh-fish-buddy/releases) (the exe asset names include the version number).

## What the plugin half…
