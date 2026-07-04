---
repo: "jvcByte/twitter_bot"
name: "twitter_bot"
description: "An automated Twitter bot that posts tech-related content 5 times daily using GitHub Actions."
url: "https://github.com/jvcByte/twitter_bot"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["automate-tweets", "automate-twitter-posts", "twitter", "twitter-api", "twitter-bot"]
stars: 12
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-03-27T09:06:24Z"
lastCommitAt: "2026-07-04T19:19:51Z"
lastReleaseAt: "2026-05-05T11:48:53Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 74
undervaluedScore: 45
maintainers: ["jvcByte", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4fba6a783a2d607cd4d1eee925ec481c69aec4c97db160b17f43f32048b63a3/jvcByte/twitter_bot"
---

# Twitter AI & Security Bot

An automated Twitter/X bot focused on **AI and cybersecurity** content. It monitors curated RSS feeds, generates AI-enhanced tweets, posts memes with AI-generated images, builds reply-chain threads, and self-engages after every post to boost algorithmic reach — completely free using GitHub Actions. No server required.

---

## What It Does

Every 6 hours the bot:
- Polls 40 curated AI + cybersecurity RSS feeds
- Writes engaging AI-powered tweets via Groq (llama-3.3-70b)
- Generates contextual images via Pollinations.ai (free, unlimited)
- Posts with reply-chain threads, link replies, and self-engagement (like + repost + comment)
- Never posts the same article twice

---

## Feed Sets

| File | Feeds | Categories |
|---|---|---|
| `data/ai_security_feeds.json` | 40 | AI, Cybersecurity (default) |
| `data/rss_feeds.json` | 290 | World, Tech, Cybersecurity, Business, Science, Environment, Health, Space, Africa |
| `data/tech_feeds.json` | 143 | Tech, Cybersecurity, Science |

AI sources: OpenAI, Anthropic, DeepMind, Google AI, Hugging Face, MIT Tech Review, VentureBeat, Wired AI, and more.

Security sources: Krebs on Security, BleepingComputer, The Hacker…
