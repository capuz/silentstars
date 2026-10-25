---
repo: "Eganchiyu/Yuki-Chan-Bot"
name: "Yuki-Chan-Bot"
description: "🌸 An asynchronous AI assistant based on DeepSeek-V3: an \"electronic little sister\" featuring a \"biologically-inspired\" energy system, dual-pool RAG long-term memory, and multimodal visual perception"
originalDescription: "🌸 基于 DeepSeek-V3 的异步 AI 助手：集成“生物感”精力系统、双池 RAG 长效记忆与多模态视觉感知的电子妹妹"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Eganchiyu/Yuki-Chan-Bot"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [62, 36]
topics: ["asyncio-python", "deepseek-v3", "multimodal", "napcatqq", "rag-chatbot"]
stars: 6
forks: 1
openIssues: 2
closedIssues: 15
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-12T07:08:23Z"
lastCommitAt: "2026-10-25T08:36:31Z"
lastReleaseAt: "2026-06-05T04:39:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 59
maintainers: ["Eganchiyu"]
openGraphImageUrl: "https://opengraph.githubassets.com/8683736ed1ad25215206632cf9fc54ef010d1e3a6d6a6312921e7d70ff1e6291/Eganchiyu/Yuki-Chan-Bot"
---

# YukiV6 — AI Virtual Assistant · A Smart Little Steward Living in Your Computer

> **"Though still clumsy for now, Yuki will grow slowly. So... don't you dare leave me behind!"**

Yuki is a personal intelligent assistant system built on a Python asynchronous architecture. It interacts with its owner and group chats through the QQ platform (NapCat framework). Yuki has dynamic long-term memory, biologically-inspired energy simulation, an autonomous sub-agent (little maid) system, multimodal sticker management, tool-chain invocation, and many other capabilities. It is a highly personified "electronic little sister" character.

---

## Core Features

### 🧠 Autonomous Little Maid System (Maid Agent)

Yuki uses the Function Call tool `delegate_to_maid`, through which Yuki can hand complex tasks to a background "little maid" for processing.

- **Autonomous programming and evolution**: The little maid has its own virtual environment (`maid_venv`) and can autonomously write, debug, and solidify Python skill scripts for tasks.
- **Execution backend**: By default, execution is handed to the host-side DeepSeek Harness (`deploy/maid_runner.py`), which provides tool quality, context…
