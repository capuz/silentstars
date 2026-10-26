---
repo: "xiaohuzai/browsa"
name: "browsa"
description: "Side-panel AI chat for any webpage — attach the page, talk to your LLM, video notes with clickable timestamps for YouTube & Bilibili. Bring your own API key. Browser side-panel AI assistant; timestamps in video notes are clickable to jump to that point."
originalDescription: "Side-panel AI chat for any webpage — attach the page, talk to your LLM, video notes with clickable timestamps for YouTube & Bilibili. Bring your own API key. 浏览器侧边栏 AI 助手，视频笔记时间戳可点击跳转。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/xiaohuzai/browsa"
homepage: "https://xiaohuzai.github.io/browsa/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [94]
topics: ["ai-chat", "bilibili", "browser-extension", "chrome-extension", "edge-extension", "llm", "sidepanel", "youtube"]
stars: 14
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-09T12:57:35Z"
lastCommitAt: "2026-10-26T03:02:32Z"
lastReleaseAt: "2026-07-10T09:18:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 45
maintainers: ["xiaohuzai", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/818e32c33c2f78107b4e8f2257bc97fad3c2992df1d890a005656713e01151e4/xiaohuzai/browsa"
discussionCount: 1
---

---

# browsa

**Ask wherever you read.**

browsa is a Chrome / Edge side-panel extension: bring the article, video, or PDF you're reading into a conversation and let **your own AI** help you understand it alongside. No copy-pasting, and no leaving the page. It connects to **Codex / Claude Code / pi / Gemini CLI / dsh / ZCode** through Agent Bridge, connects to **opencode / Hermes / OpenSquilla**, or configures model APIs such as OpenAI, Anthropic, and Ollama.

**The extension is free and open source under the MIT license.** Bring your own model or agent. API keys are stored locally and are used to authenticate with the services you configure.

## Highlights

### 1. Connect the agent you already use

Connect existing local agents through Agent Bridge, reusing their configured login methods and tools. browsa passes the page content to the agent, shows tool progress in real time, and presents approval requests it issues in the panel. Specific tool capabilities and permissions depend on the agent's configuration.

| Agent | Connection method | Login |
|---|---|---|
| **Codex** (OpenAI) | [agent-bridge](https://github.com/xiaohuzai/agent-bridge) local bridge | Uses the auth already…
