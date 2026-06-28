---
repo: "HaveNiceDa/My-Notion"
name: "My-Notion"
description: "基于现代前端与 AI 技术栈构建的个性化 Notion 应用"
url: "https://github.com/HaveNiceDa/My-Notion"
homepage: "https://notion-j9zj.vercel.app/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["ai", "blocknote", "convex", "mcp", "nextjs", "notion", "shadcn-ui", "tailwindcss", "typescript", "vercel"]
stars: 11
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-17T12:50:45Z"
lastCommitAt: "2026-06-28T01:46:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 51
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/5c8bc7620fc854880dabcf4000e78f5ab1800c666c562de740f2ccb5feb5ea50/HaveNiceDa/My-Notion"
---

# My-Notion

定制化个人版 Notion，聚合 Web 文档编辑、移动端工作区、AI Agent、RAG/Memory、CLI/Skills/MCP Agent 生态。

**线上体验：** <https://notion-j9zj.vercel.app/>

## 项目入口

- [Web 应用说明](./apps/web/README.md)：Next.js Web 端、BlockNote 编辑器、AI Agent、CLI 授权页和机器 API。
- [Mobile 应用说明](./apps/mobile/README.md)：Expo 移动端、文档工作区、移动 AI Chat 和跨端共享架构。
- [My-Notion CLI](./packages/my-notion-cli/README.md)：已发布 npm 包 [`@mynotion/cli`](https://www.npmjs.com/package/@mynotion/cli)，提供 `my-notion` 命令。
- [My-Notion MCP Server](./packages/my-notion-mcp/README.md)：独立 MCP STDIO server，提供 Agent 文档工具和 `my_notion_readme`。
- [My-Notion Skills](./packages/my-notion-skills/README.md)：供 Agent 调用 CLI/MCP 的 Skills 源文件与同步规则。
- [里程碑索引](./milestones/README.md)：稳定阶段结论和下一步路线。
- [阶段进展摘要](./progress/README.md)：压缩后的历史过程记录。
- [Docs 索引](./docs/README.md)：当前维护文档、操作手册、历史复盘和外部 AI 参考入口。
- [Web / Mobile 差距](./docs/web-mobile-gap-analysis.md)：当前双端能力差距和后续 backlog。

## 当前能力

- **Web 文档编辑**：Next.js + Convex + Clerk + BlockNote，支持文档树、编辑器 AI、公开预览、收藏、归档、回收站和设置页。
- **Web Agent**：ReAct Loop、结构感知 RAG、Memory MVP、联网搜索、网页抽取、文档读写 dry-run、确认式写入、`task_plan`、受控 MCP adapter、`tool-result-v1` 契约和流式续跑可用闭环。
- **Mobile 工作区**：Expo + React Native，支持移动文档树、文档编辑、AI…
