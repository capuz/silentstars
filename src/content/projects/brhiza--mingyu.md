---
repo: "Brhiza/mingyu"
name: "mingyu"
description: "八字、紫微、星盘、六爻、梅花、奇门、大六壬、小六壬、塔罗、雷诺曼、灵签、择日一站式玄学算命占卜工具包，输出结构化提示词与数据。提供公开 API、MCP Server 与 skill。"
readmeQualityOk: true
url: "https://github.com/Brhiza/mingyu"
homepage: "https://aov.cc"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["ai", "bazi", "da-liuren", "divination", "fortune-telling", "liuyao", "mcp", "mcp-server", "meihua-yishu", "prompt-engineering"]
stars: 422
forks: 117
openIssues: 2
closedIssues: 20
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-04-02T17:08:16Z"
lastCommitAt: "2026-09-16T08:48:00Z"
lastReleaseAt: "2026-09-14T06:35:34Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 32
maintainers: ["Brhiza"]
openGraphImageUrl: "https://opengraph.githubassets.com/4879f0d63d02ec512c6b4b20898da3d8dd20cdffe57e518e1b89292107118dfa/Brhiza/mingyu"
---

</p>

# 命语 (Mingyu)

命语是一套免费开源的在线算命、占卜排盘与 AI 解读提示词工具。输入出生时间或所问之事，即可完成高精度排盘，并生成可直接交给任意大模型解读的完整提示词。

### ⚡ 一键接入（Agent 技能 & 在线 MCP）

- **Agent Skill（推荐 · 免配置一句话安装）**：
  ```bash
  npx skills add Brhiza/mingyu --skill mingyu -g -y
  ```
- **在线 Remote MCP（云端直连 · 零依赖）**：
  - **Claude Code**：`claude mcp add mingyu --transport sse https://aov.cc/mcp`
  - **Cursor / Windsurf / VS Code**：直接添加 SSE 类型的 Server URL：`https://aov.cc/mcp`
- **QQ 交流群**：命语 Mingyu 技术交流群（1080947018）

---

## 📿 功德箱

命语与时月东方均为个人业余维护的免费开源项目。

**为什么叫“功德箱”？**  
本项目收到的全部赞助款项目前均定期**全额捐赠给社会正规慈善与公益事业**（用于爱心助学、困境老人救助与乡村公益等）。感谢每一位支持者的善意！

</p>

---

</p>

---

## 🔮 支持功能

| 分类         | 术数方法                                             | 主要功能                                                                                       |
| :----------- | :--------------------------------------------------- | :--------------------------------------------------------------------------------------------- |
| **命理运势** | 八字命理、紫微斗数、八字紫微合参、西方星盘、七政四余 | 支持真太阳时换算、大运流年流月流日细盘、三方四正、庙旺四化、神煞、合盘分析，以及七政行限与流曜 |
| **周易占卜** | 六爻纳甲、梅花易数                                   | 支持手摇/指定卦象、京房八宫纳甲、六亲六神、世应动变、体用生克与四时旺衰                        |
| **三式绝学** |…
