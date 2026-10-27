---
repo: "panqing0313/dsh-plugin-weixin"
name: "dsh-plugin-weixin"
description: "WeChat (iLink) channel plugin: send messages to the DSH Agent in WeChat, run sessions on this machine, and send replies back to WeChat. Text, images, files and voice notes."
originalDescription: "微信（iLink）通道插件：在微信里给 DSH Agent 发消息，在本机跑会话并把回复发回微信。Text, images, files and voice notes."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/panqing0313/dsh-plugin-weixin"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [98]
topics: ["cordis-plugin", "dsh", "dsh-plugin", "ilink", "wechat", "weixin"]
stars: 5
forks: 0
openIssues: 3
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-14T05:01:51Z"
lastCommitAt: "2026-10-27T12:40:07Z"
lastReleaseAt: "2026-10-19T01:18:30Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 75
undervaluedScore: 51
maintainers: ["panqing0313"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d3085267eeb9b5ef4505cb4fd2ea63d7837dad26392d897b3129f636a5a0115/panqing0313/dsh-plugin-weixin"
---

# dsh-plugin-weixin

Turns **personal WeChat** into a remote control surface for DeepSeek Harness (DSH): send a single message in WeChat, and the DSH Agent opens a session locally to carry it out and sends the result back to you.

## Highlights

- **0.9.8** — **Memory now has structure, and the sticker pack has thirty-six images**: long-term memory has moved from a string of facts to structured memory: **person profiles** (form of address / schedule / likes / dislikes / important dates, filled in by the model during summarization and editable on the card), **events and to-dos** (with dates; expired items are cleaned up automatically and can be marked done), and **character biographies** (once facts reach 10 and more than 6 hours have passed since the last consolidation, a background job merges and deduplicates them into a biography of under 200 characters; facts are also trimmed to 10, and the biography is injected first). Injection is governed by **importance (1–5) + a character budget**, so blocks don't grow without limit. Summarization / extraction / consolidation can also use **a separately specified model** (`memoryProvider` + `memoryModel`), so overnight memory consolidation…
