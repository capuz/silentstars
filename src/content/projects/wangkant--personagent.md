---
repo: "wangkant/personagent"
name: "personagent"
description: "Persona LLM agent for group chat that learns from real user reactions — a correction becomes a preference pair, a genuine laugh becomes an example; LLM self-scoring is only the fallback channel. OneBot/QQ primary; Telegram/Discord/Slack via AstrBot gateway."
readmeQualityOk: true
url: "https://github.com/wangkant/personagent"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["agent", "anthropic", "chatbot", "deepseek", "llm", "onebot", "prompt-engineering", "qq-bot", "few-shot-learning", "human-feedback"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-05-16T10:02:15Z"
lastCommitAt: "2026-07-25T05:53:57Z"
lastReleaseAt: "2026-07-25T02:22:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 48
maintainers: ["wangkant"]
openGraphImageUrl: "https://opengraph.githubassets.com/f159d445ae59f1c013b778577b981a7eb7d3fbbfafe417de1072c71bde6f0255/wangkant/personagent"
---

# personagent

**English** | [中文](https://github.com/wangkant/personagent/blob/HEAD/README.zh-CN.md)

> **A self-evolving persona agent for group chats and DMs — built to sound like a regular, not a help desk.**

`personagent` turns an OpenAI-compatible model into a selective, bilingual chat persona that learns from the room.

- **Human-shaped conversation.** Persona and style constraints, content understanding, stickers, proactive messages, and the option to stay quiet.
- **Feedback that hot-reloads.** Corrections become preference pairs; good reactions add evidence, and only corroborated replies become proven examples; LLM self-evaluation is the fallback.
- **One guarded pipeline.** Structured JSON is parsed and validated before a reply is sent through OneBot / QQ or the AstrBot gateway to Telegram, Discord, Slack, Lark, and KOOK.

### Try it in 60 seconds

Bring Python 3.10+ and one OpenAI-compatible API key. QQ and NapCat are not required:

```bash
python quickstart.py
```

That one command creates `.venv`, installs dependencies, writes `.env`, and offers to open the terminal trial immediately. To return later, use the platform-specific `.venv` interpreter commands in the…
