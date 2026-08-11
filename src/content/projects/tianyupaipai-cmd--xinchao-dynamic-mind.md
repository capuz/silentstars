---
repo: "tianyupaipai-cmd/xinchao-dynamic-mind"
name: "xinchao-dynamic-mind"
description: "独立、可自托管的 AI 动态心智状态引擎：驱动力、念头池、疲惫、睡眠与意图。"
readmeQualityOk: true
url: "https://github.com/tianyupaipai-cmd/xinchao-dynamic-mind"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
topics: ["ai-agent", "mcp", "nodejs", "self-hosted", "state-machine"]
stars: 154
forks: 60
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2026-07-22T09:09:33Z"
lastCommitAt: "2026-08-11T04:50:11Z"
lastReleaseAt: "2026-08-04T09:20:39Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 74
undervaluedScore: 14
maintainers: ["tianyupaipai-cmd"]
openGraphImageUrl: "https://opengraph.githubassets.com/f14aefaba74f3bb5e9bc585358cc991f09be6288ea6abafcec5008c665a0497f/tianyupaipai-cmd/xinchao-dynamic-mind"
---

# 心潮动态心智系统 2.4.0

心潮是一个独立、可自托管的 AI 动态状态层。它在对话之外持续维护驱动力、念头池、疲惫、睡眠、梦境余韵与短期窗口状态，并通过 HTTP API 或远程 MCP 接入不同模型、设备和前端。

> 心潮模拟可解释的动态状态，不宣称产生意识、情感或生命。核心状态机可离线运行；模型、长期记忆、OAuth 和通知均为可选适配器。

## 2.4.0 更新重点

- **用户互动连接桥服务端**：新增 `/bridge/v1/*` 耐久队列、SSE 通知、一次性投递读取与严格 ACK。
- **只供用户互动**：只接受用户主动发出的互动、便签和预约；梦境、思念、内部状态与 AI 自主行动不会自动注入窗口。
- **独立机器凭据**：Bridge 使用独立于 `SERVICE_TOKEN` 和 Dashboard 口令的机器 Token，默认关闭。
- **持久、幂等、可恢复**：投递按 `event_id` 去重，离线时继续保存，失败 ACK 不会把消息误标为送达。

- **HTTP 便签闭环**：补齐 `POST /v1/handoff-note`，HTTP 前端与 MCP 客户端现在使用同一套有界、幂等的短期交接。
- **在场时间修复**：heartbeat 和真实 `xinchao_event` 都会刷新 `lastHeartbeatAt`，避免在线时被自主推送误判为长期离线。
- **隐私版窗口 hook**：提供只发送会话 ID 与随机事件 ID 的 Claude Code 脚本，不上传提示词正文。
- **稳定 MCP 窗口**：初始化时由服务端签发 `Mcp-Session-Id`，不再依赖模型临时编写窗口 ID。
- **近期连续性**：Context Envelope 只携带动态短态、近期交接和可选的长期记忆召回，不替代客户端自己的核心指令或人物基岩。
- **短期交接便签**：`xinchao_handoff_note` 最多 1200 字、默认 72 小时过期，不保存整段聊天原文。
- **远程 MCP + OAuth 2.1**：支持动态客户端注册、授权码 + PKCE、刷新令牌以及标准发现端点。
- **幂等互动结算**：`xinchao_event` 使用 `event_id` 防止网络重试造成重复结算。
- **隐私审计**：转换日志只保存结构化变化、摘要指纹和交付元数据，不保存聊天正文或认证令牌。
- **2200 tokens 默认预算**：用于短期状态和近期连续性；稳定核心资料仍由客户端单独完整读取。

完整差异见…
