---
repo: "chipi/podcast_scraper"
name: "podcast_scraper"
description: "Simple CLI to download episode transcripts from a podcast RSS feed."
readmeQualityOk: true
url: "https://github.com/chipi/podcast_scraper"
language: "Python"
languages: ["Python"]
languagePcts: [74]
topics: ["faiss", "fastapi", "knowledge-graph", "media-intelligence", "narrative-analysis", "nlp", "open-source", "podcast", "podcast-analytics", "python"]
stars: 7
forks: 3
openIssues: 308
closedIssues: 1273
watchers: 1
contributors: 4
recentReleases: 1
createdAt: "2025-11-04T12:30:12Z"
lastCommitAt: "2026-09-22T08:44:45Z"
lastReleaseAt: "2026-07-07T12:29:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 74
maintainers: ["chipi"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8208bd1105eacf2d7a003e7a4e0f7205a38fdd7193b81acf1b56b8f6100b7fb/chipi/podcast_scraper"
---

# Podcast Scraper

Download, transcribe, and summarize podcast episodes. Fetches transcripts from RSS feeds
(Podcasting 2.0), generates them when missing, detects speakers, creates summaries,
and optionally extracts structured insights (GIL) and knowledge graphs (KG).
Use local models (Whisper, transformers) or cloud APIs (OpenAI, Gemini, Anthropic,
Mistral, DeepSeek, Grok, Ollama) — your choice.

**Learning project:** This is a personal project where I'm exploring AI-assisted coding
and hands-on work with edge and cloud AI/ML technologies.

> **Personal use only.** Downloaded content must remain local and not be redistributed.
> See [Legal Notice](https://github.com/chipi/podcast_scraper/blob/HEAD/docs/LEGAL.md).

---

## Features

- **Transcript Downloads** — Automatic detection and download from RSS feeds
- **Episode selection** — Order (`newest` / `oldest`), optional publish-date window (`--since` / `--until`), offset, and `max_episodes` for large back-catalogs ([CONFIGURATION.md](https://github.com/chipi/podcast_scraper/blob/HEAD/docs/api/CONFIGURATION.md#episode-selection-github-521), GitHub #521)
- **Multi-feed corpus** — One config or CLI invocation for multiple shows:…
