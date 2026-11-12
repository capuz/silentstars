---
repo: "xiaohuzai/browsa"
name: "browsa"
description: "Side-panel AI chat for any webpage — attach the page, talk to your LLM, video notes with clickable timestamps for YouTube & Bilibili. Bring your own API key. Browser sidebar AI assistant with clickable video note timestamps."
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
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-09T12:57:35Z"
lastCommitAt: "2026-11-12T11:39:05Z"
lastReleaseAt: "2026-07-10T09:18:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 36
maintainers: ["xiaohuzai", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c02bba62f0d1ea038d6df195d1698534482aa91759e3c595d2aba6ab38dacfe8/xiaohuzai/browsa"
discussionCount: 1
---

---

# browsa

**Ask wherever you read.**

browsa is a Chrome / Edge side-panel extension: it brings the article, video, or PDF you're viewing into a conversation, so **your own AI** can help you understand it alongside you. No copy-pasting, and no leaving the page. It connects to **Codex / Claude Code / pi / Gemini CLI / dsh / ZCode** through Agent Bridge, connects to **opencode / Hermes / OpenSquilla**, or configures model APIs such as OpenAI, Anthropic, and Ollama.

**The extension is free and MIT open source.** Bring your own model or agent. API keys are stored locally and used to authenticate with the services you configure.

## Highlights

### 1. Connect the agent you already use

Connect existing local agents through Agent Bridge, reusing their configured login methods and tools. browsa hands the page content to the agent, shows tool progress in real time, and displays approval requests it issues in the panel. Specific tool capabilities and permissions depend on the agent's configuration.

| Agent | Connection method | Login |
|---|---|---|
| **Codex** (OpenAI) | [agent-bridge](https://github.com/xiaohuzai/agent-bridge) local bridge | Uses the CLI's configured…
