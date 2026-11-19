---
repo: "ferretgeek/prokbot-plus"
name: "prokbot-plus"
description: "Run Grok Bot on your own server with the models you choose; supports Windows, Android, web and other clients (unofficial). Self-host Grok Bot with the models you choose (unofficial)."
originalDescription: "在自己的服务器上运行 Grok Bot，用自己选的模型；支持 Windows、Android、网页版等客户端（非官方）。Self-host Grok Bot with the models you choose (unofficial)."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ferretgeek/prokbot-plus"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [68]
topics: ["anthropic", "docker", "grok-bot", "llm", "macos", "openai", "self-hosted", "windows", "android", "arm64"]
stars: 97
forks: 31
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 9
createdAt: "2026-11-09T18:03:05Z"
lastCommitAt: "2026-11-19T11:58:08Z"
lastReleaseAt: "2026-11-19T07:35:54Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 37
maintainers: ["ferretgeek", "jun9100", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4813c8103ed7f843b37019b7ff3870a8a559d8bd25213d4197b28c6c825d0d8c/ferretgeek/prokbot-plus"
---

# ProkBot Plus

**Run Grok Bot on your own server, with the models you choose.**

**Simplified Chinese** · [English](https://github.com/ferretgeek/prokbot-plus/blob/HEAD/README.en.md)

## What is this

Grok Bot is xAI's AI assistant app. Besides chatting, its Bot has its own Linux computer: it can run commands, open a browser, handle files, and has memory and scheduled tasks. The original only connects to the official cloud.

[ProkBot](https://gitee.com/ahaduoduoduo/ProkBot) moves the server side onto your own server using Docker, then patches the official client so it connects to your server. **ProkBot Plus** builds on this and adds:

- **More clients**: a Windows client, a self-developed Android app, and a web version (works when opened in a browser);
- **More model interfaces**: Anthropic Messages, OpenAI Responses, and OpenAI Chat formats; you can assign each Bot a primary model, thinking intensity, and fallback model;
- **Fixed features**: web search, image generation, message ordering, automatic review, etc.;
- **Deployment tools**: one command to check, start, upgrade, and back up, plus a deployment manual that an AI can follow step by step.
