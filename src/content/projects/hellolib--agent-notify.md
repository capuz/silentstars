---
repo: "hellolib/agent-notify"
name: "agent-notify"
description: "一个面向 AI Agent 的通知配置工具。支持将 Claude Code、Codex、Grok Build 等 Agent 的事件通知推送到飞书、企业微信、钉钉和系统通知。"
readmeQualityOk: true
url: "https://github.com/hellolib/agent-notify"
language: "Go"
languages: ["Go"]
languagePcts: [91]
stars: 120
forks: 24
openIssues: 1
closedIssues: 28
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-04-28T09:59:31Z"
lastCommitAt: "2026-09-18T08:23:11Z"
lastReleaseAt: "2026-06-11T13:58:53Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 32
maintainers: ["hellolib", "ChuckWe", "ipfred"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd7d8eff96928d0437668b18d833525821596f0124d79d9bd5d4cb3873ad479f/hellolib/agent-notify"
---

# Agent Notify

</div>

## Overview

Agent Notify hooks into the lifecycle events of AI coding agents (Claude Code, Codex, OpenCode, ZCode, Grok, Droid, OMP/oh-my-pi, etc.) and pushes them to your phone and desktop. Get notified the moment your agent needs permission, finishes a task, or fails — so you never have to babysit a running agent.

Supported delivery channels: **OS-native system notifications**, **Feishu/Lark**, **WeChat Work (企业微信)**, **DingTalk (钉钉)**, **Bark (iOS)**, and **ntfy**.

</p>

## Quick Start

Run it without installing anything:

```bash
npx agent-notify
```

Or install it globally, which puts the `agent-notify` command on your `PATH`:

```bash
npm install -g agent-notify
agent-notify
```

Both routes run the same launcher: it downloads the platform binary into `~/.agent-notify/` on first run, so the npm package itself is only a bootstrap. The global install is the better fit if you plan to call `agent-notify` directly — `agent-notify doctor`, `agent-notify send`, `agent-notify freeze` — rather than going through `npx` every time. Pin a version with `npm install -g agent-notify@0.17.0`.

You can also send a custom message directly through a configured…
