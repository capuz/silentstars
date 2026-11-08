---
repo: "pickeld/pick-a-recipe"
name: "pick-a-recipe"
description: "Pick-a-Recipe: AI-powered recipe extraction from TikTok, YouTube & Instagram videos with automatic import to Tandoor/Mealie recipe managers."
readmeQualityOk: true
url: "https://github.com/pickeld/pick-a-recipe"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [53, 30]
topics: ["ai", "automation", "cooking", "docker", "flask", "food", "gemini", "instagram", "llm", "mealie"]
stars: 55
forks: 9
openIssues: 0
closedIssues: 32
watchers: 1
contributors: 9
recentReleases: 7
createdAt: "2025-11-09T14:29:36Z"
lastCommitAt: "2026-11-08T10:42:11Z"
lastReleaseAt: "2026-10-04T08:58:00Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 57
maintainers: ["pickeld", "ibebez", "nichtlegacy"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe39172c7d7cd31fa54c6a6b3de2c392e795c544d704072eb16a525ca64483f3/pickeld/pick-a-recipe"
---

# Pick-a-Recipe

Extract recipes from social media videos (TikTok, YouTube, Instagram, etc.) and automatically import them into your self-hosted recipe manager.

## Overview

Pick-a-Recipe is a Python application that:

1. **Downloads videos** from TikTok, YouTube, Instagram, and other platforms using `yt-dlp`
2. **Transcribes audio** using Whisper AI (via `faster-whisper`)
3. **Extracts on-screen text** (ingredients, instructions) using vision-capable LLMs
4. **Generates structured recipes** using an AI provider you configure (OpenAI, Google Gemini, Anthropic, or any OpenAI-compatible endpoint)
5. **Uploads to recipe managers** - supports [Tandoor](https://tandoor.dev/) and [Mealie](https://mealie.io/)

### Features

- 🎥 Multi-platform video support (TikTok, YouTube, Instagram, etc.)
- 🎙️ Audio transcription with language detection
- 👁️ Visual text extraction from video frames
- 🤖 AI-powered recipe generation with structured ingredients
- 🍽️ Automatic nutrition and serving size estimation, backed by [Open Food Facts](https://world.openfoodfacts.org/)
- 🖼️ Dish image extraction with manual selection option
- 🌐 Web UI with real-time progress updates
- 🔐 User authentication…
