---
repo: "nalgeon/pokitoki"
name: "pokitoki"
description: "Humble AI Telegram Bot"
readmeQualityOk: true
url: "https://github.com/nalgeon/pokitoki"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["bot", "chatbot", "telegram", "chat-gpt", "ai", "gpt", "deepseek", "openai"]
stars: 342
forks: 60
openIssues: 3
closedIssues: 34
watchers: 10
contributors: 7
recentReleases: 0
createdAt: "2023-01-31T16:57:44Z"
lastCommitAt: "2026-10-24T08:20:26Z"
lastReleaseAt: "2023-04-10T14:21:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 73
undervaluedScore: 25
maintainers: ["nalgeon", "Mukller"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/595713846/39177388-8a07-433c-8056-2f7caea4cc6a"
---

# Humble AI Telegram Bot

This is a Telegram chat bot (AI assistant) that uses large language models from [OpenAI](https://platform.openai.com/), [Claude](https://platform.claude.com/), [Gemini](https://ai.google.dev/gemini-api/docs) or any OpenAI-compatible provider (like [OpenRouter](https://openrouter.ai/docs/) or [Nebius](https://docs.nebius.com/)).

Notable features:

- Both one-on-one and group chats.
- Direct questions, mentions, follow-ups.
- Web search and access to external links (articles, code, data).
- Shortcuts (custom AI commands).
- Custom per-chat prompts and models.
- On-the-fly configuration.

Read on for a detailed feature description or jump to [setup](#setup).

## Personal chats

The bot acts as your personal assistant:

> 🧑 Explain Apache Kafka to a three year old
>
> 🤖 Apache Kafka is like a big mailbox that helps different toys (computers) send messages to each other. When one toy has something to say, it puts a message in the mailbox, and other toys can take that message out and read it. This way, they can talk and share things quickly!

To allow other users to use the bot, list them in the `telegram.usernames` config property.

The bot has a terrible…
