---
repo: "Hokken/mod-llm-guide"
name: "mod-llm-guide"
description: "An AI-powered in-game assistant for AzerothCore"
url: "https://github.com/Hokken/mod-llm-guide"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["azeroth-module", "azerothcore", "azerothcore-module", "function", "world-of-warcraft", "wotlk", "wotlk-wow", "chatbot", "game-assistant", "wow-335a"]
stars: 8
forks: 2
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-08T19:17:50Z"
lastCommitAt: "2026-06-28T06:57:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 62
undervaluedScore: 10
maintainers: ["Hokken"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6252da2e8110b131f6d462c34e0766c80884d39fca6d90574792b0563b7b242/Hokken/mod-llm-guide"
---

</p>

# mod-llm-guide

An AI-powered in-game assistant for AzerothCore that actually queries your game database.

---

</p>

> See my other module: **[mod-llm-chatter](https://github.com/Hokken/mod-llm-chatter)**, AI-powered ambient bot conversations for mod-playerbots

---

Ask a question, get an answer with clickable item/quest/spell links, all backed by live data from your server.

## Latest Updates

### May 2026 - Google Gemini and OpenRouter Support

- Added Google Gemini support through Google's OpenAI-compatible API,
  including Gemini 3.1 Flash-Lite defaults and Gemini reasoning/thinking
  config options.
- Added OpenRouter support through its OpenAI-compatible API, with
  optional attribution headers. Recommended OpenRouter models include
  `anthropic/claude-haiku-4.5`, `openai/gpt-4o-mini`, and
  `openai/gpt-4.1-mini`.
- Clarified that Azeroth Guide requires models with reliable
  tool/function calling, regardless of provider. Plain-chat models or
  models with weak function argument handling are not suitable for
  factual guide answers.

## What It Does

**It knows where things are, relative to you:**
```
You: .ag where's the closest leatherworking trainer?
Azeroth…
