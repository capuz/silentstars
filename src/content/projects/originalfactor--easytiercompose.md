---
repo: "originalFactor/EasyTierCompose"
name: "EasyTierCompose"
description: "EasyTier for Android, VpnService+Root TUN. Jetpack Compose MD3E UI."
readmeQualityOk: true
url: "https://github.com/originalFactor/EasyTierCompose"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [93]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-08-02T17:30:19Z"
lastCommitAt: "2026-11-01T10:44:56Z"
lastReleaseAt: "2026-10-28T13:07:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 55
maintainers: ["originalFactor"]
openGraphImageUrl: "https://opengraph.githubassets.com/aadb39f6f78cf1975c6739d2b11a900a77a1aa7c6a7ff1038ca5980dba78b468/originalFactor/EasyTierCompose"
---

# EasyTier Compose


一个基于 Jetpack Compose 的 Android 客户端，封装 [EasyTier](https://github.com/ECSDevs/EasyTier)（Rust + Tokio 实现的去中心化 VPN）核心，提供原生的配置管理、网络编排与两种 TUN 接入模式。

> ✨ Decentralized mesh VPN, reborn as a first-class Android citizen.

## 功能特性

- 📱 **纯 Compose UI** — Material 3 + 自适应布局（手机 NavigationBar / 平板 NavigationRail）
- 🔌 **双 TUN 模式** — `VPN_SERVICE`（免 root，系统 VPN 授权）与 `ROOT_TUN`（root 进程 + 真实 `easytier0` 接口）
- 🛡️ **JNI 门面架构** — 应用层不直接接触原生符号，统一通过 `core.EasyTierJni` 访问
- 💾 **DataStore 持久化** — 多 profile 管理 + 选中态，含损坏数据自动恢复
- 🎛️ **全配置项表单** — 覆盖 EasyTier Core 全部字段的分区编辑器（General / Network & Peers / Routing / IPv6 / Port Forwards / VPN Portal / Secure Mode / STUN & Whitelists / Flags — General / P2P / KCP / QUIC），生成结构化 TOML 并经原生 `parseConfig` 校验
- 🌐 **Magic DNS** — 两种 TUN 模式均支持 EasyTier 内置 DNS（`100.100.100.101`）；ROOT_TUN 额外通过 root shell 切换系统 DNS
- 👥 **Peers 屏幕** — 列出运行时 peer，展示虚拟 IP / 延迟 / 隧道协议 / 丢包率 / NAT 类型 / cost（直连/中继）
- 🌍 **Global overrides** — 全局共享的 TUN 设备名 / `no_tun` / SOCKS5（端口与监听地址）
- 🏷️ **Hostname 自动补全** — profile 留空时取 Android 设备名（与 EasyTier Core `get_hostname` 行为一致）
- ⚡ **协程编排** — `SupervisorJob + Mutex` 串行化运行时状态机，避免竞态

## 界面截图


## 系统要求

|…
