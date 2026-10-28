---
repo: "aliyevaladddin/AladdinAI"
name: "AladdinAI"
description: "AladdinAI: open-source BYOI (Bring Your Own Infrastructure) AI Agent platform. Connect your own VMs, NVIDIA NIM, OpenAI, Anthropic, Ollama — build and manage AI agents visually."
readmeQualityOk: true
url: "https://github.com/aliyevaladddin/AladdinAI"
homepage: "https://aladdinai.cc"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [50, 34]
topics: ["ai-agents", "bentoml", "crm", "fastapi", "llm", "mongodb", "nextjs", "nvidia-nim", "ollama", "open-source"]
stars: 20
forks: 9
openIssues: 1
closedIssues: 20
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2026-04-29T21:56:11Z"
lastCommitAt: "2026-10-28T09:56:58Z"
lastReleaseAt: "2026-06-06T06:10:27Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 52
maintainers: ["aliyevaladddin", "dependabot[bot]", "aladdinai-bot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1225029897/e757660c-98e9-47e5-92aa-fdef6e0dc45d"
discussionCount: 1
---

## ◈ What is AladdinAI?

I believe the next wave of AI adoption won't happen in shared clouds. It will happen in companies that need **control over their data, their models, and their customer relationships.**

AladdinAI is the platform that makes that possible — without building everything from scratch.

> **Status:** actively developed. Most features are wired end-to-end and usable locally. See [`docs/ARCHITECTURE.md`](https://github.com/aliyevaladddin/AladdinAI/blob/HEAD/docs/ARCHITECTURE.md) for the full picture.

---
 
## ◈ What's inside

| Module | Description |
|---|---|
| **Agents** | Per-user agents with their own model, system prompt, tool set, and safety stack (NemoGuard / Llama-Guard, PII redaction via GLiNER) |
| **Multi-Agent Swarm** | Orchestration of autonomous sub-agents collaborating to resolve complex multi-step user intents. See [`docs/adr/0011-multi-agent-swarm-and-tools.md`](https://github.com/aliyevaladddin/AladdinAI/blob/HEAD/docs/adr/0011-multi-agent-swarm-and-tools.md) |
| **Memory** | Private + shared stores with vector search (MongoDB Atlas + NIM embeddings). Every recall and write decision is logged via pluggable Gates |
| **CRM** | Contacts, deals,…
