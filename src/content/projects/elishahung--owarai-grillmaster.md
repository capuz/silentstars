---
repo: "elishahung/owarai-grillmaster"
name: "owarai-grillmaster"
description: "Japanese variety show subtitle generation"
originalDescription: "日綜字幕生成"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/elishahung/owarai-grillmaster"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 54
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-29T08:53:37Z"
lastCommitAt: "2026-11-04T13:04:37Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 40
maintainers: ["elishahung"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c59c687eaeb4d4fbf4fd8b9a7405f7b65efc94dad1dc866cb783ac1f10a8c48/elishahung/owarai-grillmaster"
---

# Owarai GrillMaster

Downloads Japanese variety shows and generates Traditional Chinese SRT / ASS subtitles for easy personal viewing.

So far, [1020 items have been translated](https://space.bilibili.com/277428027/upload/video), and the pipeline is fairly stable.

## Notes

- The goal is to be able to watch in one shot without proofreading (to avoid spoilers)
- Translation and post-processing both use agent subscriptions. Only ElevenLabs ASR is billed, at $0.22 USD/hour. (With `proofread_watch_clip` enabled, Azure MAI-Transcribe-2 and Meta Muse are also used. One final proofreading pass costs about $0.02.) For a 20-plus-minute episode, the time from download to output subtitles is about 30 minutes.
- Configuration preferences are personal and subjective. If you want to change them, please fork the project yourself.
- For more detailed explanations, see the following, or simply hand this repo to your agent:
  - [Reflections 1](https://www.bilibili.com/video/BV1ZwRQB5ETf)
  - [Reflections 2](https://www.bilibili.com/video/BV1X5bu6REDU)

## Models

After various experiments, the following setup seemed most suitable:

- **ASR**: `ElevenLabs Scribe v2`. It can recognize speech even…
