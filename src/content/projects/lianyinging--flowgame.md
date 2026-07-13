---
repo: "lianyinging/flowgame"
name: "flowgame"
description: "An AI workflow editing framework focused on business customization. It supports LLM calls, knowledge base retrieval, memory read/write, API orchestration, and other scenarios."
originalDescription: "🎮 An AI workflow editing framework focused on business customization. 专注于业务自定义的 AI 工作流编排框架，支持 LLM 调用、知识库检索、记忆读写、API 编排等场景。⚡ Vue 3 一行接入"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/lianyinging/flowgame"
homepage: "http://flowgame.mgdeep.com"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [58, 39]
topics: ["ai-workflow", "npm-package", "rag", "vue3", "workflow-editor", "flowgame"]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-06-01T07:39:08Z"
lastCommitAt: "2026-07-13T06:38:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 34
maintainers: ["lianyinging"]
openGraphImageUrl: "https://opengraph.githubassets.com/463412106260106ecce98dde805c1e5e86fa1f21e861459d3f5e3432ed734c8f/lianyinging/flowgame"
---

<p>
  <a href="https://image.cscmgg.com/wechatMiniprogramImages/adminImage/bannerImage/20260601/blstxodlnxg66p.png">
    <img src="https://image.cscmgg.com/wechatMiniprogramImages/adminImage/bannerImage/20260601/blstxodlnxg66p.png"
      alt="FlowGame logo"
      width="300"
    />
  </a>
</p>

</p>

Simplified Chinese | [English](https://github.com/lianyinging/flowgame/blob/HEAD/README.en-US.md)

- **FlowGame** is a deep extension of **AI workflows** based on the [Tinyflow](https://github.com/tinyflow-ai/tinyflow) canvas engine: it retains the drag-and-drop orchestration experience of Tinyflow and **adds a batch of custom nodes**, while providing a **Python backend** for real execution and data persistence.

- The frontend can be embedded into any Vue 3 project through `@flowgame/vue`'s `FlowEditor`; capabilities such as **process trial run, saving to Redis, knowledge base vector retrieval** are provided by the independent backend **[flowgame_python](https://github.com/lianyinging/flowgame_python)** (FastAPI + Redis + Qdrant), with a clear separation of frontend and backend, and can be deployed via Docker as needed.

**New nodes added on top of Tinyflow** (registered in…
