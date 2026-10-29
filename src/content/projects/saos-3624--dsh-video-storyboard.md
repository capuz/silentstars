---
repo: "SAOS-3624/dsh-video-storyboard"
name: "dsh-video-storyboard"
description: "Scene-aware storyboard for DeepSeek Harness: 9-16 numbered cells with timestamps + transcript + an audio envelope, packed into ONE image (384 tokens). Two tools: video_storyboard and video_zoom."
originalDescription: "Scene-aware storyboard for DeepSeek Harness: 9-16 numbered cells with timestamps + transcript + an audio envelope, packed into ONE image (384 tokens). Two tools: video_storyboard and video_zoom."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/SAOS-3624/dsh-video-storyboard"
homepage: "https://github.com/SAOS-3624/dsh-video-storyboard"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["asr", "contact-sheet", "deepseek-harness", "dsh-plugin", "ffmpeg", "llm-agent", "multimodal", "storyboard", "video", "video-understanding"]
stars: 153
forks: 14
openIssues: 2
closedIssues: 5
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-26T22:00:04Z"
lastCommitAt: "2026-10-29T12:26:07Z"
lastReleaseAt: "2026-10-28T16:47:05Z"
status: "newborn"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 89
undervaluedScore: 34
maintainers: ["SAOS-3624"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee31eb4957656e695943ada50a1b93f7a503a7d09847999ed1bdf014de5e5b50/SAOS-3624/dsh-video-storyboard"
fundingLinks: ["CUSTOM:https://raw.githubusercontent.com/SAOS-3624/dsh-video-storyboard/main/docs/assets/wechat-reward.png"]
discussionCount: 1
---

# dsh-video-storyboard

> Let AI truly "watch" a video: **one storyboard image + a text list with timecodes**, so the model can answer "what happens at minute 3" and "which cell does this line correspond to".
>
> English: [README.en.md](https://github.com/SAOS-3624/dsh-video-storyboard/blob/HEAD/README.en.md)
>
> Listed in [awesome-dsh-plugin](https://github.com/awesome-dsh-plugin).

---

## What problem it solves

Multimodal models have two clumsy ways of watching video:

- **Frame-by-frame extraction** — extracting at 1 fps from a 10-minute video yields 600 images, and the tokens explode.
- **Subtitles only** — all visual information (composition, actions, scene changes) is lost.

This plugin takes a third route: **compress the visuals into one grid image** (capped at 384 tokens), accompanied by a **time-aligned text list** (start and end time of each cell + the dialogue within that cell + how many cuts it contains).

The model gets "what happened in these 90 seconds and roughly at which second". When it needs detail, it uses `video_zoom` to enlarge a specific segment.

## Four tools

| Tool | What it does | When to use it |
|---|---|---|
| `video_probe` | Read-only container…
