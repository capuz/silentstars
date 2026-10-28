---
repo: "SuInk/Diana"
name: "Diana"
description: "Lives in group chats and speaks up on its own: it chimes in naturally without needing @, and can also search, pick songs, send memes, and remember group agreements. It's a self-hosted single binary, so your data never leaves your machine. It runs on OneBot v11, Telegram, QQ Official Bot, DingTalk, Feishu, and WeCom at the same time."
originalDescription: "住在群聊里、会主动搭话的 AI Agent —— 不用 @ 也能自然插话，还会搜索、点歌、发表情包、记住群里的约定；自托管单二进制，数据不出你的机器。OneBot v11 / Telegram / QQ 官方机器人 / 钉钉 / 飞书 / 企业微信同时在线。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/SuInk/Diana"
homepage: "https://suink.github.io/Diana/"
language: "Go"
languages: ["Go"]
languagePcts: [87]
stars: 32
forks: 6
openIssues: 3
closedIssues: 65
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-07-02T14:45:26Z"
lastCommitAt: "2026-10-28T09:57:09Z"
lastReleaseAt: "2026-09-03T18:25:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 51
maintainers: ["SuInk", "EchoPing07"]
openGraphImageUrl: "https://opengraph.githubassets.com/49f9fa131f2daa7889ac37d88bcdd5184cf42abc902bcc578574243ecd622ef7/SuInk/Diana"
---

# Diana

**An AI Agent that lives in group chats and speaks up on its own. It chimes in naturally without needing @, and can also search, pick songs, send memes, and remember group agreements. It's a self-hosted single binary, so your data never leaves your machine.**

[Website & docs](https://suink.github.io/Diana/) · [Live demo](https://suink.github.io/Diana/demo/) · [Download latest release](https://github.com/SuInk/Diana/releases/latest) · [English](https://github.com/SuInk/Diana/blob/HEAD/README.en.md)

## What is Diana

You have an AI you want to plug into a group chat: have it chime in on a QQ group, pick songs on Telegram, or answer your colleagues' questions on Feishu. Diana is the middle layer. It's a single binary service written in Go. On one side it connects to large language models (OpenAI-compatible APIs, Gemini, and Anthropic all work). On the other side it connects to six chat platforms at once. A web console in the middle manages everything.

It's designed for people who want to "raise their own bot":

- **Works right after install.** One command installs it, and a few clicks in the browser complete the setup. No coding required.
- **Your data stays with you.**…
