---
repo: "neilalexanderlee/ai-comic-studio"
name: "ai-comic-studio"
description: "Open-source workflow for manju (漫剧) — AI-generated episodic animated shorts."
readmeQualityOk: true
url: "https://github.com/neilalexanderlee/ai-comic-studio"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 16
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-28T16:10:08Z"
lastCommitAt: "2026-09-09T08:19:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 39
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/8af8ca839431776c4401659cd3af3b8b1b9c3825ecc98bd33c4cd16b1ed466d9/neilalexanderlee/ai-comic-studio"
---

# AI漫剧工坊

**AI Comic Studio** (`ai-comic-studio`) — 开源漫剧（manju）工作流：从剧本到分镜、首尾帧、视频与合成。

| | |
|---|---|
| **GitHub** | [github.com/neilalexanderlee/ai-comic-studio](https://github.com/neilalexanderlee/ai-comic-studio) |
| **npm 包名** | `ai-comic-studio` |

AI 驱动的漫剧工坊 — 从剧本到动画视频的全自动流水线。

📺 **系统介绍 / Demo**：[Bilibili — AI漫剧工坊](https://b23.tv/3xzE8uz)

> 基于 [AIComicBuilder](https://github.com/twwch/AIComicBuilder)（Apache-2.0）演进。上游致谢与版权说明见 [NOTICE](https://github.com/neilalexanderlee/ai-comic-studio/blob/HEAD/NOTICE)。

## 功能特性

- **剧本导入** — 支持上传 TXT/DOCX/PDF 文件，AI 自动解析文本、提取角色、智能分集，流程可视化
- **分集管理** — 项目级分集列表，角色按集关联，支持手动创建或导入自动分集
- **角色管理** — 项目级角色管理，主角/配角分区展示，支持跨集复用和按集独立解析
- **剧本创作** — 手动编写或 AI 辅助生成剧本
- **角色提取** — AI 自动从剧本中提取角色并生成详细视觉描述；支持批量生成 9 维标准化音色描述
- **角色四视图** — 为每个角色生成四视图参考图（正面/四分之三/侧面/背面），确保后续帧画面一致性
- **智能分镜** — AI 将剧本拆解为专业镜头列表（含景别、主光、运镜、motionScript 动作链等结构化字段）
- **分镜督导批量重写** — 全集一次性七律视觉连续性审核：LLM 读入全部分镜，批量重写首尾帧描述与动作脚本，保证跨镜场景词一致性
- **首尾帧生成** — 三层决策策略（确定性规则 → LLM 语义判断 → 安全兜底）自动决定每个镜头生成首帧+尾帧还是仅首帧；支持最多 14 张多选参考图
- **视频提示词** — 直出架构：基于 startFrameDesc / motionScript / cameraDirection 零 LLM 费用生成，支持直接编辑
- **视频生成** — 基于首尾帧插值生成动画视频片段；Seedance 多参模式支持 Track 分组（≤15s）+ 音色克隆
- **镜头衔接** —…
