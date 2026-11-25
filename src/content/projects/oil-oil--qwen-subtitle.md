---
repo: "oil-oil/qwen_subtitle"
name: "qwen_subtitle"
description: "Corrects video subtitles by combining speech with the actual on-screen footage, supports subtitle translation, and offers voice-cloned dubbing with explicit user authorization."
originalDescription: "结合语音与真实画面纠正视频字幕，支持字幕翻译，以及用户明确授权后的声音克隆配音。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/oil-oil/qwen_subtitle"
homepage: "https://www.oiloil.org"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [50, 44]
stars: 9
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-28T08:12:10Z"
lastCommitAt: "2026-11-25T03:19:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 65
undervaluedScore: 24
maintainers: ["oil-oil"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ce5c7fc5d5b691a4fea3c7b1bb5ef2e42bfe65f19554f3c3143d78769813334/oil-oil/qwen_subtitle"
---

# qwen-subtitle

Corrects video subtitles by combining speech with the actual on-screen footage, supports subtitle translation, and offers voice-cloned dubbing with explicit user authorization.

## What it solves

For screen recordings / tutorials / lecture-style videos, subtitles **always mishear proper nouns regardless of which ASR is used** (`Claude`→`cloud`, `Codex`→`class q`, `html2pptx`→`html to ppt`). The core approach: **have a vision model that accepts video input read the real footage alongside the ASR time ranges, and return minimal replacements directly**—something a speech-only tool cannot do.
