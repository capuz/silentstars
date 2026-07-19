---
repo: "AnarchistSid/genlab-platform"
name: "genlab-platform"
description: "Video-first viral content automation platform — finds trending clips, generates captions via LLM, renders branded reels, publishes to 6 platforms with a learning loop"
readmeQualityOk: true
url: "https://github.com/AnarchistSid/genlab-platform"
homepage: "https://review.aspirehub.ai"
language: "Python"
languages: ["Python"]
languagePcts: [88]
topics: ["automation", "content-creation", "instagram-api", "llm", "machine-learning", "python", "social-media", "youtube-api", "content-automation", "ffmpeg"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-14T18:05:12Z"
lastCommitAt: "2026-07-19T06:12:23Z"
lastReleaseAt: "2026-04-04T04:30:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 51
maintainers: ["AnarchistSid"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7ad3bb0d531489be5b9424b143694ea28076d7fa8a2b41b3f9d97459019bda7/AnarchistSid/genlab-platform"
discussionCount: 0
---

# GenLab

Video-first viral content automation platform for short-form video reels.

## Features

- **Video-first pipeline** — Finds trending clips on YouTube, writes platform-native captions via LLM, renders branded reels with FFmpeg
- **5 platform publishing** — Instagram Reels, YouTube Shorts, Facebook Reels, Threads, X/Twitter
  (TikTok ships a stub gated behind `TIKTOK_AUDIT_APPROVED=true`; not counted as live until the
  audit lands. R-06: was previously advertised as "6 platforms" — corrected 2026-06-11.)
- **Learning loop** — LinUCB contextual bandit optimizes content selection based on engagement feedback
- **Engagement engine** — AI-powered comment replies with toxicity filtering, rate limiting, and bot disclosure
- **Affiliate monetization** — Multi-network product matching, CTA injection, A/B testing, revenue attribution
- **Operations dashboard** — React + Flask dashboard for content approval, scheduling, analytics, and monitoring
- **Multi-channel** — Config-driven architecture supports unlimited niches with ~200 lines of niche-specific code each

## Architecture

```
genlab-core/         Shared infrastructure (pipeline, platform clients, learning loop)…
