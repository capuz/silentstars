---
repo: "Fly143/ultimate-novel-creation-skill"
name: "ultimate-novel-creation-skill"
description: "面向 AI Agent 的全流程长篇小说创作技能。从书名生成到千章完稿，配备三大自动系统（记忆系统/强约束/叙事质量管理）确保长篇连贯性。支持 AI 全自动和分步引导双模式。"
readmeQualityOk: true
url: "https://github.com/Fly143/ultimate-novel-creation-skill"
language: "Perl"
languages: ["Perl", "PowerShell"]
languagePcts: [55, 36]
stars: 43
forks: 9
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-10T13:43:50Z"
lastCommitAt: "2026-08-29T10:22:19Z"
lastReleaseAt: "2026-05-11T05:06:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 29
maintainers: ["Fly143"]
openGraphImageUrl: "https://opengraph.githubassets.com/de12e16381d4fe1cae1cfc017142f9503c3a306da6e7917b7696fd31b58a8a78/Fly143/ultimate-novel-creation-skill"
---

# 全能小说作家

面向 AI Agent 的全流程长篇小说创作技能。从书名生成到千章完稿，配备三大自动系统（记忆系统/强约束/叙事质量管理）确保长篇连贯性。支持 AI 全自动和分步引导双模式。

## ⚠️ 使用前必读（先看这里）

本技能是**内容包**：加载后是否被严格执行，取决于宿主 agent 的 system prompt。**直接把仓库加载为技能就开写，agent 很可能会自由发挥、跳过流程，体验大打折扣。**请按以下三步使用：

1. **配置 system prompt**：将仓库根目录的 [system_prompt.md](https://github.com/Fly143/ultimate-novel-creation-skill/blob/HEAD/system_prompt.md) 整段复制，配置为宿主软件的 system prompt（Claude Code / Cursor / API 接入 / Dify·Coze 等均适用，该文件顶部有各平台用法说明）
2. **加载技能**：将本仓库作为技能/上下文加载
3. **开始创作**：说「写小说」「继续」或任一触发词，技能会按场景路由引导

> 所有流程约束（强制执行协议、写后流水线、记忆系统维护等）都以技能文件为准；system prompt 只负责让宿主 agent 强制遵守它们。

## 三大场景入口

| 场景 | 什么时候用 | 触发方式 |
|:----:|-----------|:--------:|
| **A. 新开小说** | 从零开始构思一本新书 | 说 `写小说` / `新开一本` |
| **B. 继续创作** | 已有进行中的小说接着写 | 说 `继续` / `接着写` / `继续写《XXX》` |
| **C. 单个功能** | 只需某个特定功能（含记忆系统工作流） | 直接说功能名（见下方） |

---

## 27 大功能模块总表

### 🎯 立项类

| 编号 | 功能名称 | 能做什么 | 🗣️ 触发命令 |
|:----:|:---------|:---------|:-----------|
| **1** | **项目初始化** | 生成书名、创建立项定位单、选择文风（通用/指定作者/指定作品）、推荐创作模式 | `书名` / `立项` / `初始化` |
| **2** | **世界观构建** | 设定世界规则、力量体系、社会结构 | `世界观` / `世界设定` |
| **3** | **人物设计** | 创建人设卡、人物关系图谱 | `人设` / `人物` / `角色` |
| **4** | **情节大纲** | 生成故事主线、章节规划表、百万字规划 | `大纲` / `情节` / `章节规划` |

### ✍️…
