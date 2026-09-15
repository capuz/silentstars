---
repo: "ZengLiangl/FlashShell"
name: "FlashShell"
description: "跨平台桌面运维工作台 — YAML 驱动流水线 × 多会话 SSH/SFTP × 实时终端"
readmeQualityOk: true
url: "https://github.com/ZengLiangl/FlashShell"
language: "Go"
languages: ["Go", "Vue"]
languagePcts: [41, 38]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-14T01:22:09Z"
lastCommitAt: "2026-09-15T08:54:52Z"
lastReleaseAt: "2026-07-21T03:21:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 59
maintainers: ["1607lucky"]
openGraphImageUrl: "https://opengraph.githubassets.com/5805f6f7bf54c38643856f9cd5ffe290a9f5f9f71d747d0716bfaddfb0410b21/ZengLiangl/FlashShell"
---

</p>

<h1 align="center">FlashShell</h1>
<h3 align="center">多会话 SSH / SFTP 桌面终端</h3>

  <strong>YAML 驱动任务流水线 × 多会话 SSH / SFTP 终端 × 本地 Shell</strong><br/>
  把构建、发布、联调、登舰运维收进<strong>同一个桌面港</strong>——任务与 Shell 并行，互不抢舵。
</p>

</p>

  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
</p>

---

```text
                         ╔════════════════ FlashShell ════════════════╗
                         ║                                           ║
    config.yaml ────────►║   任务模式          Shell 模式            ║◄──── SSH / SFTP / PTY
    本地 & 远程混排       ║   一键流水线        多 Tab · 分屏 · 广播    ║      本机终端
                         ║   实时 ANSI 日志    SFTP · 监控 · 隧道      ║
                         ║                                           ║
                         ╚══════════════════ 同港出海 ═════════════════╝
```

## FlashShell 是什么

**FlashShell** 是一款跨平台桌面 Shell 工作台。多会话 SSH / SFTP 是主业，YAML 任务流水线是边上的一键脚本：

| | 传统做法 | FlashShell |
|:--|:--|:--|
| 发布脚本 | 散落各处的 shell / bat | **YAML 编排**，图形化一键执行 |
| 远程运维 | 另开 Xshell / iTerm | **内置多会话 Shell**，Tab / 分屏 / 广播 |
| 文件传输 | 再开一个 SFTP 客户端 | **任务 upload** + Shell 侧 SFTP 面板 |
| 配置管理 | 环境变量靠记忆 | **全局变量表** + `${KEY}` 自动替换 |
| 任务与终端 | 二选一，来回切窗口 |…
