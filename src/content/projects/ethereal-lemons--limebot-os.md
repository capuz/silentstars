---
repo: "Ethereal-Lemons/LimeBot-OS"
name: "LimeBot-OS"
description: "LimeBot Open Source a self-hosted, agentic AI assistant with multi-channel support, persistent memory, and a real-time web dashboard."
readmeQualityOk: true
url: "https://github.com/Ethereal-Lemons/LimeBot-OS"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [57, 35]
topics: ["ai-assistant", "chatbot", "self-hosted", "tools"]
stars: 16
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-02-21T19:37:52Z"
lastCommitAt: "2026-07-05T06:32:18Z"
lastReleaseAt: "2026-04-01T06:58:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 37
maintainers: ["LemonMantis5571"]
openGraphImageUrl: "https://opengraph.githubassets.com/ffb86c74cd6b40d087a8fe3b0198818789522523edbf9cb8e4b96db71680d0c0/Ethereal-Lemons/LimeBot-OS"
---

</div>

# 🍋 LimeBot

> A persistent, self-evolving agentic AI that lives across your devices  with a soul, a memory, and a personality that's actually yours. Inspired by the powerful [OpenClaw](https://github.com/openclaw/openclaw) and the lightweight architecture of [Nanobot](https://github.com/HKUDS/nanobot).

LimeBot is not a wrapper around an API. It's a full agentic system  event-driven, multi-channel, and built to remember who you are. It browses the web, manages your files, schedules reminders, spawns sub-agents for complex tasks, and evolves its personality through every conversation. All of it runs on your hardware.

---

## 🏛️ How It Works (Architecture Overview)

LimeBot operates on an **event-driven agentic loop**. When you send a message, it flows through the system as follows:

```mermaid
graph TD
    User([User Inbound Message]) --> Channel[Channel: Web / Discord / WhatsApp / Telegram]
    Channel --> Queue[MessageBus Queue]
    Queue --> Loop[Agent Loop]
    Loop --> RAG[Auto-RAG: LanceDB Vector Search + Grep]
    RAG --> SystemPrompt[Compile Stable + Volatile Prompts]
    SystemPrompt --> LLM[LLM Inference]
    LLM --> XML[XML Tag Interceptor: save_soul /…
