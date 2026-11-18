---
repo: "wahhheee/aint"
name: "aint"
description: "A locally run AI interactive fiction runtime. Import works, connect models, and read in the browser, choosing actions or entering free-form input. Supports memory, state, branching, and work creation."
originalDescription: "本地运行的 AI 互动小说运行时。导入作品、连接模型，在浏览器中阅读、选择行动或自由输入；支持记忆、状态、分支与作品创作。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/wahhheee/aint"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [65, 34]
topics: ["ai-storytelling", "golang", "interactive-fiction", "llm", "react", "self-hosted", "text-adventure"]
stars: 22
forks: 3
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2026-10-21T02:09:07Z"
lastCommitAt: "2026-11-18T12:02:06Z"
lastReleaseAt: "2026-11-14T04:15:12Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 52
maintainers: ["wahhheee", "Mooooooon", "GuraQwQ"]
openGraphImageUrl: "https://opengraph.githubassets.com/17417e748b38d88611d677ce0404339ad843a0ef9f0f706e5798bc0e7846f96e/wahhheee/aint"
---

# AINT

**AINT Is Not Tavern**, also read as **Agentic Interactive Narrative Theatre**.

[Introduction video](https://www.bilibili.com/video/BV1GRxF6dEd5) · [AINT format work creation guide](https://www.bilibili.com/video/BV1Bd4A61EQV)

AINT is an AI interactive fiction runtime that runs on your local machine. Players import works, configure model APIs, and read in the browser, choosing actions or entering free-form input. The program uses a Go backend and a React frontend, is distributed as a single executable, and stores works, settings, and saves locally.

A work is a directory containing YAML, Markdown, Liquid templates, and assets. Authors can write writing instructions, character and world settings, multiple opening scenes, states, commands, panels, and themes. The model uses tools to consult materials, maintain memory and state, and generate narrative text and options. When the context reaches its budget, the runtime consolidates memory and keeps recent turns.
