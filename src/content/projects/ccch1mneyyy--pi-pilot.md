---
repo: "ccch1mneyyy/pi_pilot"
name: "pi_pilot"
description: "PiPilot - pi coding agent 的手机远程控制端：Flutter 应用 + Source Hub 桥接 + 桌面 TUI 中继"
readmeQualityOk: true
url: "https://github.com/ccch1mneyyy/pi_pilot"
language: "Dart"
languages: ["Dart", "TypeScript"]
languagePcts: [55, 34]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-07-28T11:38:51Z"
lastCommitAt: "2026-09-01T08:52:02Z"
lastReleaseAt: "2026-08-13T16:30:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 48
maintainers: ["CikeSeven", "ccch1mneyyy"]
openGraphImageUrl: "https://opengraph.githubassets.com/30cdbda180c393cd12c411588c55afea75412ba85250fb75b93aff6eaf9a3762/ccch1mneyyy/pi_pilot"
---

# PiPilot

PiPilot 是 pi coding agent 的手机控制端。Flutter app 连接电脑上的 Source Hub，可观察并控制当前桌面 pi TUI；也可在桌面 TUI 未连接时显式启动 headless RPC source。

```text
Flutter App (手机)
        |
        | WebSocket + mobile token
        v
PiPilot Source Hub (bridge/)
        |                         |
        | loopback + desktop token| stdin/stdout JSONL
        v                         v
Desktop TUI Relay             Headless pi --mode rpc
(extension/,默认路径)          (必须显式启动)
```

## 主要能力

- 桌面当前会话同步：消息、思考、tool 生命周期、队列、模型、thinking、会话元数据。
- 断线恢复：`hubId + sourceId + epoch + seq` cursor，ring replay 不可用时回退 snapshot。
- 多窗口：每个 desktop pi 进程是独立 source；手机明确选择，不依赖不可靠的 OS 窗口焦点。
- 两端对等：任意一端、任意时刻都能发消息和打断，另一端实时跟随。租约仍在，但**完全不可见**——自动获取、可强制抢占，UI 里没有“接管/释放”。
- 并发会话：bridge 维护一个 pi 进程池（默认 4 个）。电脑跑 A 会话的同时，手机可以新建并跑 B；切换会话是 attach 或 spawn，**从不打断正在生成的一端**。
- 三种回退：回到某条消息重开、撤销上一轮、分支间自由切换。都基于同一个原语 `navigateTree`，两端同步收敛。
- 三种投递：插队（本轮结束后处理）、排队（全部结束后处理）、中断并发送。
- 防过期写入：lease 带 fencing token；旧 socket、旧 epoch、旧 fence 会被拒绝。
- 会话与目录管理：目录切换/新建/fork 只在 bridge 侧会话上提供——那些操作会把人正在用的会话从电脑上抽走。

## 快速开始

前置要求：电脑端需要已安装的 [pi coding agent](https://github.com/earendil-works/pi-coding-agent)；手机端为 **Android 8.0+**。

### 1. 下载并运行 bridge

从 [GitHub…
