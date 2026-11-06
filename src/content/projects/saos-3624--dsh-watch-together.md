---
repo: "SAOS-3624/dsh-watch-together"
name: "dsh-watch-together"
description: "Watch Together: watch videos with an agent. It follows the real playback position and, before each segment ends, hands over that segment's storyboard frames and timestamped subtitle lines. The floating window can speak, and it can hear the room. A DSH plugin that watches a video together, in sync with the real playback: a storyboard image + subtitle lines per segment, spoken replies and live room audio."
originalDescription: "陪看：和智能体一起看视频 —— 跟着真实播放位置，每段结束前把分镜画面 + 带秒台词交过去；悬浮窗里能出声，也听得见房间。A DSH plugin that watches a video together, in sync with the real playback: a storyboard image + subtitle lines per segment, spoken replies and live room audio."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/SAOS-3624/dsh-watch-together"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
topics: ["companion", "deepseek-harness", "dsh", "dsh-plugin", "subtitle", "tts", "video", "watch-together"]
stars: 24
forks: 5
openIssues: 1
closedIssues: 19
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-31T13:23:19Z"
lastCommitAt: "2026-11-06T12:17:08Z"
lastReleaseAt: "2026-11-02T16:24:51Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 51
maintainers: ["SAOS-3624", "DreamDLYY"]
openGraphImageUrl: "https://opengraph.githubassets.com/961cc92eef81ff4aac9ceeac5c6636ddd314992f4b7c24a535ca89b842723b89/SAOS-3624/dsh-watch-together"
---

# dsh-watch-together

> Watch **videos together** with an agent: it follows your real playback progress and, just before you finish a segment, passes along that segment's **storyboard frames** and **timestamped subtitle lines**. It can also speak in the floating window and hear the sounds in the room. What it sees is the picture, not a text transcript.
>
> The name is all lowercase with hyphens, the same style as `dsh-video-storyboard`.

playback position a browser extension reports. Each segment arrives as one storyboard image plus its subtitle
lines just before that segment ends; the floating window carries spoken replies (through whatever voice
adapter you plug in) and live room audio. The agent gets picture, text and sound — not a transcript. Code,
identifiers and the tool schema are English; the docs below are Chinese.</sub>

- **What it is**: a DSH plugin that registers only one tool, `watch_together`
- **What it is not**: not a full-film overview, not a player, and it does not include a TTS engine (bring your own voice, see [§Connect voice](#接声音核心不发声声音你自己接))
- **Dependencies**: `node` + `ffmpeg` + a browser extension (optional but strongly recommended)

## Start in 30…
