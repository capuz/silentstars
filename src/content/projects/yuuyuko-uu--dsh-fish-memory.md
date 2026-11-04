---
repo: "Yuuyuko-uu/dsh-fish-memory"
name: "dsh-fish-memory"
description: "🐋 DSH Fish's Memory: gives sessions a long-term memory that fades over time, with every entry timestamped. The \"fish\" in the name comes from DeepSeek's whale."
originalDescription: "🐋 DSH 鱼的记忆：给会话一份会淡忘的长期记忆，每条都带时间。名字里的「鱼」来自 DeepSeek 的鲸鱼。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Yuuyuko-uu/dsh-fish-memory"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["ai-companion", "deepseek-harness", "dsh-plugin", "long-term-memory", "memory", "whale"]
stars: 467
forks: 13
openIssues: 2
closedIssues: 15
watchers: 2
contributors: 4
recentReleases: 10
createdAt: "2026-09-21T13:50:48Z"
lastCommitAt: "2026-11-04T08:04:10Z"
lastReleaseAt: "2026-10-30T15:21:08Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 89
undervaluedScore: 27
maintainers: ["Yuuyuko-uu", "saigyujikingyo-png", "333zzz33364"]
openGraphImageUrl: "https://opengraph.githubassets.com/2976ecb88895f3c8134b39de01f5e26ba4d8252b8feb2e85a0b7dcbb2584e005/Yuuyuko-uu/dsh-fish-memory"
---

# 🐋 Fish's Memory

**Gives sessions in DSH a long-term memory that fades over time, with every entry timestamped.**

The longer you chat, the more crowded the context gets. Compress it once and what came before fades.
This plugin keeps the memory for it: **what's worth recording gets recorded, things it recalls come back on their own, and unimportant things slowly fade.**

> The "fish" in the name comes from **DeepSeek's whale**. Whales are fish too.
> The other half is the "seven-second memory" meme: fish have poor memories, so someone has to remember for them.
> But it's not a hard drive. **It forgets, just like people do.**

---

## What it does

| | Description |
|---|---|
| **Fades over time** | Each memory has a "vividness" that decreases with age. The default half-life is 30 days. Nothing is deleted; it just becomes harder to recall |
| **Picks out what matters** | Not every sentence is saved. It judges which sentences are worth keeping on a per-turn basis, and there's a daily quota to keep the context from being stuffed |
| **Recall is based on evidence** | When you ask something, it searches by how distinctive the matched words are, then ranks results by vividness,…
