---
repo: "MoonProxyHQ/moonproxy-desktop"
name: "moonproxy-desktop"
description: "MoonProxy Desktop - Cross-platform FRP desktop client (frpc GUI) for macOS and Windows. NAT traversal / intranet penetration made simple. Open-source (MIT). Built with Tauri v2 + Vue 3 + Rust."
readmeQualityOk: true
url: "https://github.com/MoonProxyHQ/moonproxy-desktop"
homepage: "https://moonproxy.app"
language: "Vue"
languages: ["Vue", "Rust"]
languagePcts: [42, 32]
topics: ["cross-platform", "desktop-app", "frp", "frpc", "intranet-penetration", "macos", "nat-traversal", "reverse-proxy", "rust", "tauri"]
stars: 59
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 3
createdAt: "2026-06-14T12:00:03Z"
lastCommitAt: "2026-09-06T08:02:38Z"
lastReleaseAt: "2026-06-30T16:38:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 77
undervaluedScore: 38
maintainers: ["chenxxpro"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1269181498/adb7fbe0-2c01-4031-8d3c-05be4884b352"
fundingLinks: ["CUSTOM:https://github.com/MoonProxyHQ/moonproxy-desktop", "CUSTOM:https://github.com/MoonProxyHQ/moonproxy-desktop/discussions"]
discussionCount: 16
---

# 月神代理（MoonProxy）

> 跨平台、面向非技术用户的 **FRP 桌面客户端**。基于 [Tauri v2](https://tauri.app) 构建，支持 macOS 与 Windows，让 [frp](https://github.com/fatedier/frp) 内网穿透开箱即用。

<br/>

[English](https://github.com/MoonProxyHQ/moonproxy-desktop/blob/HEAD/README.en.md) · **简体中文**

---

面向非技术用户的 **[frp](https://github.com/fatedier/frp) 桌面 GUI 客户端**。
你只需要提供一台运行了 frps 的服务器（自建或社区公开均可），剩下的交给 MoonProxy：
配置生成、子进程生命周期、连接健康检查、实时流量监控、自动更新、托盘常驻等开箱即用。

不需要命令行、不需要编辑 `frpc.toml`、不需要手动管理 frpc 进程——
适合**个人开发者、自建服务玩家、远程办公者**以及所有不想和终端打交道的 frp 用户。

## 核心特性

### 🚀 上手：零配置，开箱即用

- **内置 frpc 二进制**：通过 Tauri sidecar 机制打包，用户无需单独安装 frp
- **可视化管理代理规则**：TCP / UDP / HTTP / HTTPS 一面板搞定，主页实时显示本地端口连通性
- **一键启停 frpc**：启动按钮分 4 态（已停止 / 连接中 / 已连接 / 连接错误），「已连接」由 frpc 自身证据支撑而非乐观标记

### ⚙️ 运行：稳定常驻，省心可靠

- **实时流量监控**：主页展示上下行速率曲线、连接数与累计流量，掌握带宽占用
- **端点健康轮询**：自适应间隔（3→24s 指数退避）探测本地端口可达性，提前发现隧道断裂
- **系统托盘常驻**：关闭窗口默认隐藏到托盘，frpc 继续后台运行
- **开机启动 + 静默启动**：自启时直接隐藏到托盘，不打扰用户
- **定时连接**：按星期多选 + 起止时间，调度器每分钟热加载

### 🔧 维护：自动升级，无需重装

- **核心引擎自更新**：从 frp 上游 GitHub Release 拉取 frpc，SHA256 校验后原子替换，无需重装应用
- **应用本体自更新**：基于 `tauri-plugin-updater` 的「重启并安装」

## 适用场景

- **远程办公**：在家通过 SSH / RDP 连接到公司内网机器，绕开 VPN 的繁琐
- **自建服务公网访问**：NAS、Home Assistant、家庭影音、个人博客的临时对外
-…
