---
repo: "chipi/podcast_scraper"
name: "podcast_scraper"
description: "Simple CLI to download episode transcripts from a podcast RSS feed."
readmeQualityOk: true
url: "https://github.com/chipi/podcast_scraper"
language: "Python"
languages: ["Python"]
languagePcts: [72]
topics: ["faiss", "fastapi", "knowledge-graph", "media-intelligence", "narrative-analysis", "nlp", "open-source", "podcast", "podcast-analytics", "python"]
stars: 8
forks: 3
openIssues: 380
closedIssues: 1337
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-11-04T12:30:12Z"
lastCommitAt: "2026-10-06T10:42:54Z"
lastReleaseAt: "2026-07-07T12:29:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 71
maintainers: ["chipi"]
openGraphImageUrl: "https://opengraph.githubassets.com/73e691ac4e447cbbd8eb0aabff42c060d703b3376e2355318d661d23a939260f/chipi/podcast_scraper"
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
