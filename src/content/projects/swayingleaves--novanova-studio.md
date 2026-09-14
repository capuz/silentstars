---
repo: "Swayingleaves/novanova-studio"
name: "novanova-studio"
description: "NovaNova Studio 是一个 Agent 驱动的 AI 创作工作台，集图片生成、视频生成、无限画布与多模型 API 、漫剧短剧生成于一体，为独立创作者和视觉团队打造更智能、更高效的创作体验。"
readmeQualityOk: true
url: "https://github.com/Swayingleaves/novanova-studio"
homepage: "https://www.novanovastudio.cn/"
language: "Java"
languages: ["Java", "TypeScript"]
languagePcts: [54, 45]
topics: ["agent", "agentscope-java", "image-generation-ai", "infinite-canvas", "open-source", "springboot", "video-generation", "workflow"]
stars: 269
forks: 30
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 9
createdAt: "2026-07-22T10:28:58Z"
lastCommitAt: "2026-09-14T09:13:16Z"
lastReleaseAt: "2026-09-14T03:38:37Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 89
undervaluedScore: 30
maintainers: ["Swayingleaves"]
openGraphImageUrl: "https://opengraph.githubassets.com/75e0f8bfc9f6dba36f84b36043be63ae32499ff401e8fa19d160d63fdf7fbff3/Swayingleaves/novanova-studio"
---

</p>

<h1 align="center">Novanova Studio</h1>

  AI Agent 驱动的视觉创作工作台：在一个持续保留上下文的空间里完成构思、生成、编辑、编排与沉淀。
</p>

</p>

</p>
</p>
</p>

## 联系我
- 商业授权
- 技术支持

<table align="center">
  <thead>
    <tr>
      <th align="center">联系作者</th>
      <th align="center">加入交流群</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center" width="33%">
      </td>
      <td align="center" width="33%">
      </td>
    </tr>
  </tbody>
</table>

## ✨ 项目定位

Novanova Studio 是面向独立创作者与视觉团队的 AI 创作工作台。它不是把图片、视频、提示词和生成记录拆散在多个工具中的集合，而是以**无限画布**作为创作上下文，以 **AI Agent** 作为理解意图、选择工具和推进任务的中枢。

创作者可以从一句自然语言目标或一组参考素材开始，在图片、视频和画布场景中持续对话、生成、编辑、比较与复用结果；生成记录、资产、提示词和画布节点会保留在同一条创作链路中。

## 🧠 Agent 贯穿创作链路

Agent 不是单独的聊天窗口，也不是一次性转发模型请求的接口。它贯穿从意图理解到结果沉淀的完整流程：

```mermaid
flowchart LR
    Creator[创作者] --> Workbench[Next.js 创作工作台]
    Workbench --> Agent[AgentScope Agent 编排]
    Agent --> Tools[工具调用与任务决策]
    Tools --> TaskService[AI 任务服务]
    TaskService --> Database[(PostgreSQL 任务与记录)]
    TaskService --> Stream[(Redis Stream)]
    Stream --> Consumer[任务消费者]
    Consumer --> Provider[AI 渠道适配器]
    Provider --> Events[SSE 实时事件]
    Events --> Workbench
    Workbench --> Context[画布、资产与生成记录]
```

| 阶段 | Agent 与系统职责 | 创作体验…
