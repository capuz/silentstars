---
repo: "scavio-ai/skills"
name: "skills"
description: "51 Agent Skills for the Scavio web data API: one umbrella skill plus one per platform for Google, Amazon, TikTok, LinkedIn, YouTube, Instagram, Reddit and 40 more, as structured JSON"
readmeQualityOk: true
url: "https://github.com/scavio-ai/skills"
homepage: "https://scavio.dev"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-skills", "ai-agents", "api", "claude", "serp-api", "structured-data", "web-data", "web-scraping", "api-mercado-livre"]
stars: 107
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-08-19T12:15:37Z"
lastCommitAt: "2026-11-23T10:27:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 29
maintainers: ["phanarch"]
openGraphImageUrl: "https://opengraph.githubassets.com/714abefc5217113b9794a2a8022c403023f22539fde8c94febb0b8566b83d6d1/scavio-ai/skills"
---

# Scavio Agent Skills

**Give your AI agent live data from 78 platforms as structured JSON, through one API key**

[Overview](#overview) | [Install](#install) | [Setup](#setup) | [Skills](#skills) | [Which skill](#which-skill-do-i-want) | [Links](#links)

---

## Overview

[Scavio](https://scavio.dev) is a unified web data API: one key, 78 platforms, structured JSON instead of HTML. This repo holds 81 Agent Skills: one per platform, a website crawler skill, plus `scavio`, an umbrella that covers all of them from a single install. A skill teaches your agent which Scavio endpoints exist for a platform, what parameters they take, what the response looks like, and what each call costs in credits, so the agent can call the API correctly without you writing an integration. Every skill is in the open Agent Skills format and loads in Claude Code, Cursor, Codex, OpenCode, Goose, OpenHands, Hermes Agent, OpenClaw, and any other client that reads the format.

## Install

One skill for everything:

```
npx skills add scavio-ai/skills --skill scavio
```

Or one skill per platform, picking the ones you use:
