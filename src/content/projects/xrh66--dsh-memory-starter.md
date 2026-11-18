---
repo: "XRH66/dsh-memory-starter"
name: "dsh-memory-starter"
description: "A personal long-term memory plugin for DeepSeek Harness: enabled per conversation, saves verbatim, full-text plus vector retrieval, optional reranking; supports DSH 0.2.1 and 0.2.2."
originalDescription: "给 DeepSeek Harness 用的个人长期记忆插件：按对话开启、原话保存、全文加向量检索、可选重排；支持 DSH 0.2.1 和 0.2.2。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/XRH66/dsh-memory-starter"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-10-25T11:57:23Z"
lastCommitAt: "2026-11-18T12:03:07Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 50
maintainers: ["XRH66"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca5d5ed1ea82676288f1aec4a326b3b9c9f748fa4871aaa8276f8fcc86706113/XRH66/dsh-memory-starter"
---

dsh-memory-starter is a memory plugin for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (DSH). When memory is turned on for a conversation, what you and the assistant say is saved locally exactly as written. Later, in any conversation with memory turned on, the model can look up these original words and pick up where you left off. This is an unofficial plugin, licensed under MIT.

## What it can do

- **Enable per conversation**: By default it neither reads nor records memory. Only conversations where memory is turned on are saved. You can also have new conversations turn it on automatically.
- **Saves original wording verbatim**: User and assistant message text is stored turn by turn in a local verbatim library, with role and time, without model summarization or rewriting.
- **Recovers things said before**: Full-text search works out of the box. With vectors and reranking added, you can find things even when you ask in different words.
- **Attaches relevant memories before answering**: Each turn runs a lookup first and attaches up to 3 relevant original passages. The model can also search again on its own.
