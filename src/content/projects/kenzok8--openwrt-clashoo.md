---
repo: "kenzok8/openwrt-clashoo"
name: "openwrt-clashoo"
description: "Simple, stable, out-of-box LuCI proxy app based on mihomo sing-box"
readmeQualityOk: true
url: "https://github.com/kenzok8/openwrt-clashoo"
language: "JavaScript"
languages: ["JavaScript", "Shell"]
languagePcts: [40, 37]
stars: 250
forks: 22
openIssues: 7
closedIssues: 25
watchers: 2
contributors: 7
recentReleases: 6
createdAt: "2026-04-04T06:11:58Z"
lastCommitAt: "2026-07-15T05:52:32Z"
lastReleaseAt: "2026-07-14T19:16:23Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 85
undervaluedScore: 30
maintainers: ["kenzok8", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b6bb26921e29632e7569df22c2ff4c76d248503141297e2eb3d4854ff720718/kenzok8/openwrt-clashoo"
---

> 我维护 luci-app-clashoo，不是为了证明代码有多优秀，
> 而是想把经典重新带回来。
>
> 在代理软件越来越复杂的今天，
> 我更希望它依旧是一款 简单易用、稳定可靠、开箱即用 的插件。
>
> 把复杂留给自己，把简单留给用户。

</p>
<h1 align="center">Clashoo</h1>
</div>

---

## 界面预览

<details open>
<summary><b>Desktop Screenshots</b></summary>
<br>
<table>
<tr>
<td align="center"><b>Mihomo</b><br><img width="400" src="https://raw.githubusercontent.com/kenzok8/kenzok8/main/screenshot/clashoo/clashoo-mihomo.png"></td>
<td align="center"><b>Smart</b><br><img width="400" src="https://raw.githubusercontent.com/kenzok8/kenzok8/main/screenshot/clashoo/clashoo-smart.png"></td>
</tr>
<tr>
<td align="center"><b>Sing-box</b><br><img width="400" src="https://raw.githubusercontent.com/kenzok8/kenzok8/main/screenshot/clashoo/clashoo-singbox.png"></td>
<td align="center"><b>System</b><br><img width="400" src="https://raw.githubusercontent.com/kenzok8/kenzok8/main/screenshot/clashoo/clashoo%23system.png"></td>
</tr>
</table>
</details>

---

## 功能特性

**双内核，一个界面**
- **mihomo（Clash Meta）** — 稳定版 / Alpha 版 / Smart 版三选一，走 YAML 订阅
- **sing-box** — 稳定版 / Alpha 版可切，走 JSON 配置文件
- 内核切换无需重装，同一套 UCI 配置自动适配两端

**概览面板**
- 运行状态与健康检查（DNS / 显式代理 / 透明代理三项检测）实时可见
- 秒级响应启停开关，点击即反馈
- 内核切换（Mihomo / Smart /…
