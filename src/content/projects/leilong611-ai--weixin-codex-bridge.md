---
repo: "leilong611-ai/weixin-codex-bridge"
name: "weixin-codex-bridge"
description: "不依赖 OpenClaw routing 的微信到 Codex standalone bridge，支持扫码登录、消息转发、会话隔离"
readmeQualityOk: true
url: "https://github.com/leilong611-ai/weixin-codex-bridge"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
topics: ["acpx", "bridge", "codex", "nodejs", "weixin", "agent", "chatbot", "openclaw", "wechat"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-03-22T06:46:21Z"
lastCommitAt: "2026-08-11T04:48:02Z"
lastReleaseAt: "2026-08-11T04:49:37Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 68
undervaluedScore: 28
maintainers: ["leilong611-ai"]
openGraphImageUrl: "https://opengraph.githubassets.com/1fd919895ccfa540963153f7a863facc77be00f88b6465509b0e0b4b75662987/leilong611-ai/weixin-codex-bridge"
discussionCount: 0
---

# Weixin Codex Bridge

一个将微信消息安全转发到本地 Codex Desktop 或 Codex CLI 的独立桥接器。

适合想通过微信触发个人 Codex 工作流，又需要用户授权、会话隔离、沙箱限制、消息持久化和本地数据控制的用户。

> **重要说明：** 微信消息属于外部不可信输入。项目默认拒绝未授权用户，默认关闭高权限 Codex 参数和本地控制台。但使用者仍需为 Codex 配置独立工作目录，并理解本地自动执行带来的风险。

---

English: [README.en.md](https://github.com/leilong611-ai/weixin-codex-bridge/blob/HEAD/README.en.md)

---

## 项目解决什么问题

Codex 通常运行在电脑本地，而高频沟通入口往往在微信中。

本项目在两者之间建立一个边界明确的桥接层：

- 从已登录的微信机器人账号读取消息
- 对微信用户进行白名单和角色鉴权
- 为不同微信会话建立隔离的本地 session
- 将允许的文本消息交给 Codex Desktop 或 Codex CLI
- 将执行结果安全回复到微信
- 使用 SQLite 持久队列避免消息因程序重启而静默丢失
- 对控制台、日志、工作目录和本地数据实施默认安全限制

## 架构

```mermaid
flowchart LR
    A[微信用户] --> B[微信机器人 API]
    B --> C[授权与角色检查]
    C --> D[SQLite Durable Inbox]
    D --> E[Session Scheduler]
    E --> F[Codex Desktop / CLI]
    F --> G[安全回复处理]
    G --> B

    C --> H[拒绝 / 只读响应]
    D --> I[去重、租约、重试、崩溃恢复]
```

**信任边界：**

| 边界 | 信任等级 |
|------|----------|
| 微信用户 | **不可信** — 需要授权检查 |
| 微信消息 | **不可信** — 外部输入 |
| Codex 输出 | **可能含敏感内容** — 需脱敏 |
| SQLite 数据 | 只保存于本地私有状态目录，定期清理 |

## 默认安全策略

项目采用默认拒绝和最小权限原则：

| 能力 | 默认状态 |
|------|----------|
| 未授权微信用户 | 拒绝 |
| `--full-auto` | 关闭 |
| `--skip-git-repo-check` | 关闭 |
| 本地控制台 | 关闭 |
| 完整 transcript | 关闭 |
|…
