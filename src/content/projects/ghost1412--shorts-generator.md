---
repo: "ghost1412/shorts-generator"
name: "shorts-generator"
description: "Self-hosted Opus Clip / Klap / Vizard alternative: turn long videos into captioned 9:16 Shorts with local Whisper, face tracking, active-speaker cuts and Remotion captions. MCP-ready, MIT."
readmeQualityOk: true
url: "https://github.com/ghost1412/shorts-generator"
homepage: "https://shorts-generator-projects.vercel.app"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [72, 25]
topics: ["manim", "open-source", "opus-clip-alternative", "remotion", "self-hosted", "shorts-generator", "video-editing", "whisper-ai", "youtube-shorts-bot", "ai-agents"]
stars: 8
forks: 0
openIssues: 15
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-16T05:56:16Z"
lastCommitAt: "2026-11-02T15:17:47Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "under_pressure"]
healthScore: 78
undervaluedScore: 47
maintainers: ["ghost1412"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a54824c4698b1d49062876027399772932c5281b79bf8e3909aad9d5a50eb0c/ghost1412/shorts-generator"
---

# ⚡ ShortsFlow AI Studio

> **The self-hosted Opus Clip alternative.**  
> Paste a podcast or YouTube link, get captioned 9:16 Shorts that cut to whoever is talking. Free, local, no watermark, no credit caps.

**Clip long videos** with local Whisper, an LLM that scores the hooks, face-tracked 9:16 crops, a stacked two-speaker split or active-speaker switching, and Remotion spring captions.
**Or generate from an idea** with 30+ formats (facts quizzes, explainers, top-5 lists, stories) and drive everything from a browser UI, the CLI, Docker, Colab or an MCP agent.

  🎬 <b>Running in production:</b> the YouTube channel <a href="https://www.youtube.com/@spottheliee">@spottheliee</a> is generated and posted
  entirely by ShortsFlow - 6 "spot the lie" Shorts a day from <a href=".github/workflows/daily_generate.yml">one GitHub Actions workflow</a>.

---

## ✂️ Clipping demo: the crop follows whoever is talking

The first GIF above is a real run of `py main.py --source_video interview.mp4 --layout active --use_remotion` on a 4:3, 480p two-person
interview: the shot cuts to the speaker, found by voice pitch plus face detection, and Whisper word captions are burned in.
Source footage:…
