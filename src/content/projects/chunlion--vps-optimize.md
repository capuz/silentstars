---
repo: "Chunlion/VPS-Optimize"
name: "VPS-Optimize"
description: "VPS 优化与节点管理脚本合集，集成系统初始化、Nginx Stream + Caddy + REALITY 443 单入口分流、3x-ui 反代、端口流量统计与 Telegram 查询等功能。"
url: "https://github.com/Chunlion/VPS-Optimize"
language: "Shell"
languages: ["Shell"]
languagePcts: [95]
topics: ["vps", "vps-managment", "vps-setup", "3x-ui", "mihomo", "sing-box", "xray"]
stars: 46
forks: 6
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-04-16T12:00:02Z"
lastCommitAt: "2026-06-28T02:01:15Z"
lastReleaseAt: "2026-05-09T09:12:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 44
maintainers: ["Chunlion"]
openGraphImageUrl: "https://opengraph.githubassets.com/597be75f91ac1c78cd0fc4ebbfb15d7e0c94f61b0cf32380905d34a2748017de/Chunlion/VPS-Optimize"
---

# 🚀 VPS-Optimize

VPS-Optimize 是一个面向 VPS 日常运维的 Bash 控制面板，通过 `cy` 命令集中处理系统初始化、安全加固、面板部署、443 单入口、订阅工具、备份回滚和故障排查。

完整文档：https://chunlion.github.io/VPS-Optimize/

## ⚡ 快速运行

国内：

```bash
wget -qO vps.sh https://ghfast.top/https://raw.githubusercontent.com/Chunlion/VPS-Optimize/main/dist/vps.sh && chmod +x vps.sh && ./vps.sh
```

国外：

```bash
wget -qO vps.sh https://raw.githubusercontent.com/Chunlion/VPS-Optimize/main/dist/vps.sh && chmod +x vps.sh && ./vps.sh
```

首次运行后会注册快捷命令：

```bash
cy
```

## 🖥️ 支持系统

| 系统 | 状态 |
|---|---|
| Debian 11/12 | 推荐 |
| Ubuntu 20.04/22.04/24.04 | 推荐 |
| Rocky / Alma / CentOS Stream | 可用 |
| Alpine | 不支持 |
| OpenVZ 老系统 | 不建议 |

## ✨ 主要特点

| 场景 | 功能 |
|---|---|
| 系统初始化 | 预检、常用工具、时区、基础 BBR |
| 安全加固 | SSH、公钥登录、Fail2ban、防火墙、端口并发限制 |
| 面板与订阅 | 3x-ui、S-UI、Sing-box、Xray、SublinkPro、Sub-Store、Dockge、Komari |
| 443 单入口 | Web、面板、订阅和节点共用公网 `443`，按 SNI 分流 |
| 诊断与回滚 | 服务健康、443 链路体检、配置备份、恢复和隔离归档 |

## 🧭 面板预览

## 💬 反馈联系

- Issues：https://github.com/Chunlion/VPS-Optimize/issues
- Telegram：https://t.me/cutyy_github
- GitHub：https://github.com/Chunlion

## 📜 开源协议

本项目使用 [GNU General Public License v3.0](LICENSE)。
