---
repo: "zhangsijie03/AstraBridge"
name: "AstraBridge"
description: "AstraBridge · 星桥: A local BPS Responses desktop relay for AiMaMi, supporting macOS, Windows, and native image attachments."
originalDescription: "AstraBridge · 星桥：面向 AiMaMi 的本地 BPS Responses 桌面中转，支持 macOS、Windows 和原生图片附件。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/zhangsijie03/AstraBridge"
language: "Go"
languages: ["Go"]
languagePcts: [85]
topics: ["golang", "macos", "responses-api", "windows"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-09-26T15:04:18Z"
lastCommitAt: "2026-09-29T10:04:35Z"
lastReleaseAt: "2026-09-28T12:21:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 20
maintainers: ["zhangsijie03"]
openGraphImageUrl: "https://opengraph.githubassets.com/40096859969eebc097f61a7ad8da00b10acfb9e1c6e2b1781608e81490f7dbf1/zhangsijie03/AstraBridge"
---

# AstraBridge · 星桥

**Let AiMaMi connect to BPS through the local Responses interface.**

macOS / Windows · Manual start/stop · Fixed `gpt-6-astra` · Native image attachments

[Download Latest Version](https://github.com/zhangsijie03/AstraBridge/releases/latest) · [Integration Guide](#快速开始) · [Image Instructions](https://github.com/zhangsijie03/AstraBridge/blob/HEAD/docs/native-images.md) · [Report Issues](https://github.com/zhangsijie03/AstraBridge/issues)

</div>

AstraBridge is a lightweight desktop relay tool. It reads the ChatGPT login account from the current Codex on your machine, provides an independent local address and API Key, and allows AiMaMi to manage client routing. After opening the application, you manually start it; closing the window stops the relay.

```text
Codex / Responses Client
          │
          ▼
       AiMaMi
          │  Local API Key
          ▼
  AstraBridge · 星桥       ← Read current Codex login on machine
  127.0.0.1:17861
          │  Access credentials of current account
          ▼
       BPS Upstream
```

> This is a community protocol adaptation tool, not an official OpenAI product or "intelligence degradation fix switch," and does not…
