---
repo: "muyouzhi6/astrbot_plugin_gitee_aiimg"
name: "astrbot_plugin_gitee_aiimg"
description: "接入 Gitee AI 图像生成模型，支持lmm调用（让bot自拍给你看）。"
readmeQualityOk: true
url: "https://github.com/muyouzhi6/astrbot_plugin_gitee_aiimg"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 80
forks: 14
openIssues: 5
closedIssues: 25
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-12-05T06:19:42Z"
lastCommitAt: "2026-08-25T04:09:51Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 36
maintainers: ["muyouzhi6", "siciyuanweilai"]
openGraphImageUrl: "https://opengraph.githubassets.com/3072d358ba514adf65a8df5aa452f523b7696fe158d8b1576353e800ee84b187/muyouzhi6/astrbot_plugin_gitee_aiimg"
---

# AstrBot Gitee AI 图像生成插件

多服务商文生图 / 改图 / 自拍参考照 / 视频生成插件。`v5` 的核心升级是 **LLM 生图不再阻塞对话**：Bot 接下单图或批量任务后可以继续聊天，期间始终知道任务状态和安全摘要，完整提示词按需查询，任务完成或失败后还会按当前人格主动回来回应。

> [!IMPORTANT]
> 这份文档对应 `v5.1.13` 配置结构。
>
> - `v5` 延续 `v4` 配置结构；从 `v3 / v2` 升级时仍需重新检查 WebUI 配置。
> - 插件主维护场景是 `QQ / aiocqhttp`，并针对个人微信 `weixin_oc` 增加了发送图片前优化。
> - 批量结果的“合并转发”当前只有 `aiocqhttp` 原生支持；其他平台会在开启回退时自动改为普通消息逐条发送。
> - 历史更新内容见 [CHANGELOG.md](https://github.com/muyouzhi6/astrbot_plugin_gitee_aiimg/blob/HEAD/CHANGELOG.md)。

## v5.0 核心升级：Bot 可以边聊天边拍照

传统 LLM Tool 生图会把整条对话管线卡到 Provider 返回，慢模型动辄等待几分钟。`v5.0` 将单图、自拍、改图和批量 planner/child 执行放入插件自己的持久化后台任务系统：Tool 接单后立即把真实任务事实交还给 LLM，对话可以继续，图片完成后再由 Bot 主动发送并自然接上话题。

- **不阻塞聊天**：单图和 `aiimg_batch_generate` 从 planner 阶段后台执行，用户与 Bot 在等待期间可以继续正常对话
- **Bot 知道自己在做什么**：临时上下文包含任务阶段、状态摘要和图片发送结果；完整 effective prompt 通过只读 Tool `aiimg_task_status` 按需查询
- **像人一样回来交代**：图片完成、部分成功、失败、取消或重启中断后，Bot 会按当前人格主动回应，而不是悄悄发图或无声失败
- **单图和多图都能并发后台跑**：SQLite 事务账本、全局有界并发和 parent round-robin 调度共同限制资源占用，batch 不会长期霸占 Provider
- **会话边界清楚**：`/stop`、`/reset`、`/new`、conversation 漂移与 ContextAware session 清理都会收敛旧任务，避免图片和提示词串进新会话
- **异常不乱重发**：发送超时或断线无法确认时记录为 `unknown`，禁止自动重发，避免 QQ / 微信收到重复图片
- 输出参数统一支持精确尺寸、比例、分辨率和组合形式, 例如…
