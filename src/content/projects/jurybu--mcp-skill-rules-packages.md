---
repo: "JuryBu/MCP-SKILL-RULES_packages"
name: "MCP-SKILL-RULES_packages"
description: "个人自用的MCP+SKILL+RULES"
readmeQualityOk: true
url: "https://github.com/JuryBu/MCP-SKILL-RULES_packages"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [70]
stars: 48
forks: 3
openIssues: 15
closedIssues: 10
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-18T07:50:45Z"
lastCommitAt: "2026-09-12T08:05:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 77
undervaluedScore: 31
maintainers: ["JuryBu"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a78b110af180ad443f237910b083de5854ea2b5b057325fcf39a55f156992c3/JuryBu/MCP-SKILL-RULES_packages"
---

# MCP-SKILL-RULES Packages

面向 Windows AI 编程环境的可移植 MCP、Skills 与 Rules 工具包。

这套项目最初用于 Antigravity，后来扩展为 Codex、Claude Code 与 Windsurf 共用同一套 MCP 源码、数据目录约定和模型路由。当前版本同时保留「单独安装一个宿主也能使用」与「多个宿主共享数据」两种模式。

> 2026-08-02 refresh：NapCat 自动唤醒接入 Codex Desktop 当前 App Server 连接，新增原生未读状态、任务级幂等、上游自恢复、自动化暂停告警、候选验证、局部 backend 热重载和可回滚升级流程。

## 这套工具解决什么问题

- 同一台电脑上的 Codex、Antigravity、Claude Code、Windsurf 可以访问同一份便携 MCP 数据，而不需要复制多套记忆库。
- `dataChain` 负责选择对话数据来源，`modelChain` 负责选择执行摘要、审查或搜索的模型，两者可以分开。
- 只有 Codex 时也能运行，默认数据写入 `%USERPROFILE%\.codex-toolkit`，不会依赖 Antigravity 目录。
- 安装多个宿主后，可按能力启用跨宿主对话读取与模型 fallback；缺失的宿主不会被伪装成可用。
- 公开包只包含源码、模板、说明和测试，不包含登录态、真实记忆、对话、密钥、日志或数据库。

## 当前组件

| 组件 | 版本 | 主要用途 |
| --- | ---: | --- |
| `memory-store` | 1.24.0 | 记忆、五宿主 Conversation/Recall、Record、Golden Extract、Stage Guard、调度恢复与跨宿主路由 |
| `sandbox` | 1.17.3 | 隔离执行、动态内存调度、流式搜索隔离、Windows 进程树硬限制、按需 artifact、持久会话、Codex 任务与多模型 Council |
| `web-fetcher` | 7.0.0 | 无头浏览、登录态浏览、本地多格式文件、截图、视觉检查与桌面交互 |
| `broker` | 0.1.0 | 将本地 stdio MCP 暴露为稳定的 Streamable HTTP endpoint |
| `mcp-subagent` | 1.1.0 | Windsurf Cascade 专属异步子代理控制器，可选安装 |
| `napcat-mcp` | 0.3.14 | 可选 QQ 群通知、任务账本、双机送达回执、可信路由、Codex 原生未读唤醒、自然私聊回复路由、热升级历史基线、群文件传输、监督器与安全更新 |
|…
