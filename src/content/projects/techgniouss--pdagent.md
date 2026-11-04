---
repo: "techgniouss/pdagent"
name: "pdagent"
description: "Self-hosted Telegram bot — remote control your Windows PC with Gemini AI, OCR automation, live desktop streaming & scheduling."
readmeQualityOk: true
url: "https://github.com/techgniouss/pdagent"
homepage: "https://pypi.org/project/pocket-desk-agent/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai-agent", "automation", "computer-use", "computer-vision", "gemini-ai", "python", "python-telegram-bot", "remote-control", "rpa", "telegram-bot"]
stars: 15
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-11T16:52:09Z"
lastCommitAt: "2026-11-04T08:03:13Z"
lastReleaseAt: "2026-05-02T16:05:08Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 83
undervaluedScore: 49
maintainers: ["techgniouss", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/baaa4ba82ce54204699145d418ef9bf914b4630127a4bab80a72e389b3cf387a/techgniouss/pdagent"
fundingLinks: ["GITHUB:https://github.com/techgniouss", "KO_FI:https://ko-fi.com/srikanthreddy"]
---

# PDAgent (Pocket Desk Agent) - Control Your PC from Anywhere via Telegram

**Pocket Desk Agent** is a self-hosted Telegram bot that gives you full remote control of your Windows PC from any device. Unlike TeamViewer, AnyDesk, or RDP — it needs no account, no open inbound ports, no router config, and no subscription. It runs entirely on your machine; only Telegram's message relay and the optional Gemini API touch the internet.

## Quick start (about two minutes)

1. Create a Telegram bot with [@BotFather](https://t.me/BotFather) and copy its token (details in [Before You Start](#before-you-start)).
2. On your Windows PC:

```bash
pip install pocket-desk-agent
pdagent
```

3. Follow the setup wizard, then message your bot from your phone. Try `/screenshot`.

## Why not TeamViewer, AnyDesk or RDP?

| | Pocket Desk Agent | TeamViewer / AnyDesk | RDP |
| :--- | :---: | :---: | :---: |
| Account or subscription | None | Required | None |
| Open inbound ports / router setup | None (outbound only) | None | Required |
| Works from any Telegram client | ✅ | ❌ | ❌ |
| Scheduled and repeating tasks | ✅ | ❌ | ❌ |
| OCR click-by-text and macros | ✅ | ❌ | ❌ |
| Natural-language PC control…
