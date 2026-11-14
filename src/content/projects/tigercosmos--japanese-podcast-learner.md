---
repo: "tigercosmos/japanese-podcast-learner"
name: "japanese-podcast-learner"
description: "Learn Japanese from YouTube Japanese podcasts: automatically generate Traditional Chinese subtitles, and organize the vocabulary and grammar of each episode."
originalDescription: " 用 YouTube 日語 Podcast 學日文：自動產生繁體中文字幕，並整理每一集的單字與文法。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/tigercosmos/japanese-podcast-learner"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [56, 37]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-12T09:20:27Z"
lastCommitAt: "2026-11-14T10:48:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 22
maintainers: ["tigercosmos"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ab2e85569ffdab2e7dd95d48fdb6676d81d2cd90724bcc008e2d53c984c8f9b/tigercosmos/japanese-podcast-learner"
---

# Japanese Podcast Learner (日語 Podcast 學習)

A web app for learning Japanese from podcasts, built for Traditional Chinese
speakers. It has a Python backend and a React frontend. The UI and every
explanation are in Taiwanese Traditional Chinese.

## What It Does

Paste the link of a Japanese YouTube video. The backend then:

1. Gets the Japanese transcript. It uses the uploaded Japanese subtitles when
   the video has them. Otherwise it downloads the audio and transcribes it on
   your Mac with Whisper (MLX). Claude then corrects the clear recognition
   errors of the Whisper transcript.
2. Translates every line to Traditional Chinese with Claude Code
   (`claude -p`).
3. Lists the vocabulary (reading, meaning, usage, example) and the grammar
   patterns (explanation, how to connect, examples), also with Claude Code.

Some videos cannot be played on other sites, because the owner turned
embedding off. The app tells you so when you paste the link, before it does
any work, and offers a button to download the video to your Mac. It then
plays the local file with the same subtitles. The watch page offers the same
button when the YouTube player reports an error. A downloaded file stays in…
