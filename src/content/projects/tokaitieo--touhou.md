---
repo: "TokaiTieo/touhou"
name: "touhou"
description: "An AI-driven fan-made interactive game based on Touhou Project, where players advance exploration, anomalies (异变), spell card battles, character relationships, and a dynamic world storyline through free-form conversation and actions in Gensokyo (幻想乡)."
originalDescription: "AI 驱动的东方 Project 同人互动游戏，在幻想乡中通过自由对话与行动推进探索、异变、符卡战斗、角色关系和动态世界剧情。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/TokaiTieo/touhou"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [67, 25]
stars: 116
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-01T05:27:43Z"
lastCommitAt: "2026-10-29T14:05:56Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 74
undervaluedScore: 14
maintainers: ["TokaiTieo"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f21f38db17f5a38ff65c94d0da9035b4768499ebcb27a814286872297d51e65/TokaiTieo/touhou"
---

# 东方异变录（TouHou）

《东方异变录》是一款以自然语言对话驱动的 Touhou Project 同人互动游戏。玩家可以在幻想乡自由探索，通过行动与台词影响 NPC、任务、异变、关系、战斗结果和长期世界状态。

当前版本：`v0.17.0`
存档结构：`V13`
运行平台：Windows

## 主要特性

- 自由输入行动与台词，由 AI 生成连续剧情反馈。
- 单一幻想乡世界，包含地点、NPC 日程、世界书、事件和异变内容。
- Vue 3 游戏界面，支持流式对话、角色头像、地图、任务、状态与历史记录。
- NPC 长期记忆与本地语义召回，可结合近期对话和既往事件生成回应。
- 确定性的符卡、疲劳、伤势、灵力、成长、物品和声望结算。
- 关系发展、消息重写、回复评分、剧情分支和存档快照。
- 离屏 NPC 活动与延迟后果，让玩家行动持续影响世界。
- LangGraph Functional API 回合恢复，断线或解析中断时避免重复调用和重复结算。
- V1-V12 旧存档可自动、增量、幂等升级到 V13，并保留未知及自定义字段；旧记忆保留原文并标记归属未核实，明确纠错在回档时继续生效。
- 日常活动、人物实际计划、偏好赠礼、日历约定、事件生命周期和有来源的共同经历；高好感可触发性格化邀约与告白，不会自动确立恋爱关系。
- 完整剧情分块归档，近期窗口与长期历史分离，支持分页查找、完整导出和独立分支。手动备份时应复制完整数据目录（包含 `_history`），跨机器迁移推荐使用“导出角色”。
- 面向开发者的本地诊断、上下文预算、模型运行与恢复状态工具。

## 技术架构

| 层级 | 技术 |
| --- | --- |
| 前端 | Vue 3、原生 ES Modules、HTML/CSS |
| API | FastAPI、Pydantic、Uvicorn |
| AI | OpenAI 兼容客户端，默认连接 DeepSeek |
| 回合编排 | LangGraph Functional API、SQLite checkpoint |
| 桌面端 | pywebview、PyInstaller |
| 测试 | unittest、Playwright、内容 Schema 校验 |

回合中的规则、成长、关系、记忆、任务和世界后果先在内存中结算，再由 `TurnOrchestrator` 统一提交。角色 JSON 与任务 JSON 始终是正式游戏状态的唯一事实源；LangGraph checkpoint 仅用于恢复未完成回合。

## 快速开始

### 运行发布版

1. 双击 `touhou.exe` 或 `启动touhou.bat`。
2. 本地未配置 Key 时优先读取系统环境变量…
