---
repo: "Felix666-ship-It/aliyun-guard"
name: "aliyun-guard"
description: "Interactive multi-distro Aliyun ECS keepalive, CDT traffic guard, BSS billing, and Telegram notifications"
readmeQualityOk: true
url: "https://github.com/Felix666-ship-It/aliyun-guard"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [47, 45]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-15T19:25:38Z"
lastCommitAt: "2026-08-28T14:37:08Z"
lastReleaseAt: "2026-07-17T19:46:07Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 87
undervaluedScore: 50
maintainers: ["Felix666-ship-It", "codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/259b380606aa09896c62bb50ead4560bb36593b7c7e9621b34f90964d89064d4/Felix666-ship-It/aliyun-guard"
---

# Aliyun Guard：阿里云 CDT 流量保活、自动止损与账单通知

Aliyun Guard 是一个面向阿里云 ECS 的网页、终端与 Telegram 守护工具。它定时查询账号当月 CDT 公网流量、ECS 状态和当前实例税前账单，在计划运行时段且流量安全时确保实例运行，达到阈值或进入计划关机时段后自动关机，并在每轮检测结束后发送 Telegram 汇总。

本项目参考了 [10000ge10000/aliyun_monitor](https://github.com/10000ge10000/aliyun_monitor) 的核心思路，并借鉴 [wang4386/CDT-Monitor](https://github.com/wang4386/CDT-Monitor) 的按实例每日开关机面板设计。项目针对实际部署中遇到的安装兼容、通知缺失、账单 Endpoint 混用、错误来源不清晰和更新困难等问题进行了独立重写。

## 核心能力

- **CDT 流量止损**：流量达到设定阈值后停止 ECS，防止继续产生公网流量。
- **自动保活恢复**：流量低于阈值而实例处于 `Stopped` 时自动启动；次月 CDT 重置后可自动恢复。
- **月度额度重置检测**：网页显示下次 CDT 自然月重置倒计时；进入北京时间每月 1 日后额外检测一次，同月去重且与常规检测、计划动作合并执行。
- **每日定时开关机**：每个实例可独立设置 `HH:MM` 开机和关机时间，支持跨午夜时段、下一动作预览和服务离线后的补偿执行。
- **完整网页控制台**：终端管理面板的检测、演练、实例增删改查、Telegram 与节点、全局设置、服务重启和 GitHub 更新均可在网页完成；更新过程显示真实阶段进度并自动跨服务重启续接。
- **可解释流量趋势**：悬停、键盘聚焦或触摸折线检测点，可查看检测时间、当时流量、ECS 状态变化、执行动作和检测结果。
- **国内站与国际站账单**：分别支持人民币和美元账单 Endpoint，也允许自定义 BSS Endpoint。
- **账单缓存与手动刷新**：BSS 账单默认缓存 1 小时，可在终端或网页调整，并可随时强制刷新；刷新失败时保留最近一次成功金额并明确告警。
- **错误来源分离**：CDT、ECS、BSS 和 Telegram 分别记录结果；账单失败不会阻断保活判断。
- **每轮 Telegram 汇总**：默认每轮都通知，也可切换为仅事件或仅错误通知；临时网络失败自动重试。
- **Telegram 多连接方式**：支持直连、SOCKS5、HTTP/HTTPS、API 反向代理，以及保存、切换多个 VLESS、VMess、Shadowsocks、Trojan、Hysteria2、TUIC、AnyTLS…
