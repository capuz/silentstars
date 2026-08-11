---
repo: "PeterGuy326/ai-ops-auto"
name: "ai-ops-auto"
description: "AI 运营自动化中台 - 内容生产 + 视频自动剪辑 + 全平台多账号分发（小红书/抖音/知乎/头条/B站/视频号/快手/TikTok/YT/GitHub Pages）"
readmeQualityOk: true
url: "https://github.com/PeterGuy326/ai-ops-auto"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-17T13:58:16Z"
lastCommitAt: "2026-08-11T04:48:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 36
maintainers: ["PeterGuy326"]
openGraphImageUrl: "https://opengraph.githubassets.com/a09dc72d974cf656d48599f45daf2407c1a5054038d3410188adcf50990da3fd/PeterGuy326/ai-ops-auto"
---

# ai-ops-auto

**Agent-native, self-hosted, China-first Creator Ops Control Plane.**

`ai-ops-auto` 不是另一个通用 AI 智能体。它让 Codex、Claude、OpenClaw 或你自己的
Agent 能在一个有持久状态、审核状态流、账号策略和执行留痕的运行面上管理内容运营。

> 当前状态：**Alpha**。控制面、数据模型和适配器已有实现，但目前没有任何平台被标记为
> Stable。真实平台能力以 [平台能力矩阵](https://github.com/PeterGuy326/ai-ops-auto/blob/HEAD/docs/platform-capabilities.md) 为唯一信源。

## 既然已经有 Codex，为什么还需要它？

Codex 是大脑，不应该同时充当你的长期任务数据库、发布审批系统和账号策略引擎。

| 层 | 职责 |
|---|---|
| Codex / 其他 Agent | 选题、生成、计划、复盘和异常诊断 |
| `ai-ops-auto` | 保存内容与任务状态，维护审核状态、限流、查重、排程、重试和留痕 |
| Publisher / 外部工具 | 把标准化内容翻译成具体平台操作 |
| 人 | 通过组织权限边界授权不可逆操作，处理登录、风控与最终责任 |

当前 Alpha 的管理 API 共用一个 `API_KEY`，因此项目自身不能区分调用者是 Agent 还是人；
`approve` 是可审计的状态迁移，不是强制的 human gate。要把发布批准真正留给人，需要在项目外
保管管理 key，或由反向代理/工作流系统增加身份、角色和审批策略。

偶尔发一条内容时，直接让 Codex 调一个上传脚本就够了。当任务变成多平台、多账号、
定时发布、审核、失败恢复和指标回流时，这个项目才有价值。

## 现在已有什么

- Topic → Article / Asset → Review → PublishJob → Metrics 的领域模型。
- 内容入库、审核状态流、按账号分发、历史回填和服务端运营界面。
- 数据库凭证字段的 Fernet 加密、账号健康、限流、内容查重与 Publisher Registry / fallback；
  外部 CLI/浏览器的 profile、cookie 和 OAuth 文件仍由部署机文件权限保护。
- API 与唯一 APScheduler worker 分进程，以持久化 `PublishJob` 为任务真相；当前**不支持 Celery**。
- social-auto-upload、Playwright…
