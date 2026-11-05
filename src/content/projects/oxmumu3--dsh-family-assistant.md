---
repo: "oxmumu3/dsh-family-assistant"
name: "dsh-family-assistant"
description: "Family assistant: a multi-member, independent WeChat assistant built on DeepSeek Harness, with reminders, personalized daily digests, and an Owner workspace. Preview release."
originalDescription: "家庭助手：基于 DeepSeek Harness 的多成员独立微信助手、提醒、个性化日报与 Owner 工作台。预览版。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/oxmumu3/dsh-family-assistant"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["dsh-plugin"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-10-23T20:08:11Z"
lastCommitAt: "2026-11-05T00:23:32Z"
lastReleaseAt: "2026-11-04T22:38:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 55
maintainers: ["oxmumu3"]
openGraphImageUrl: "https://opengraph.githubassets.com/c09588e11a9bfdd8f4f20d471bcbafd54d81f14fb8347cb47536b8c6c18eea3b/oxmumu3/dsh-family-assistant"
---

# Lele Family Assistant · AI Avatar Family Edition

📖 Design reflections and ecosystem review: [“Will DeepSeek Harness Head Toward a Geek Toy or Universal Access?”](https://mp.weixin.qq.com/s/RIAYNqo8OsUVx2JpR8MPyA)

A DeepSeek Harness Host that serves several elders at once. Each elder chats in WeChat, sets reminders, and receives a personalized daily digest. The Owner manages everything in a workspace and receives the daily service briefing in their own WeChat.

Target hosts: **0.2.1-rc.2 / rc.3 / rc.4 / rc.5 / 0.2.2-rc.1**. The fixed distribution entry is the [npm public package](https://www.npmjs.com/package/@oxmumu3/dsh-family-assistant) `@oxmumu3/dsh-family-assistant@latest`. Each time a new version is published to npm, `latest` is updated, and the package name used when sharing does not change. This is a community plugin and is not listed in the official Harness plugin marketplace.

## What it can do now

- If a daily-report or weather-tool subscription misses its scheduled time, it fires again within two hours. Each schedule is deduplicated by its original date and time. Runs that already executed, or whose outcome is unknown, are not repeated. Creating or changing a…
