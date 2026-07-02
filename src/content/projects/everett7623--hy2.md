---
repo: "everett7623/hy2"
name: "hy2"
description: "这是一个专为 Hysteria 2 与 Shadowsocks 协议设计的 Linux 一键部署管理脚本集合，旨在将繁琐的服务器配置流程压缩到 1 分钟以内，即使没有 Linux 基础的新手也能轻松完成部署。"
url: "https://github.com/everett7623/hy2"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 10
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-08-27T08:25:26Z"
lastCommitAt: "2026-07-02T06:34:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 67
undervaluedScore: 51
maintainers: ["everett7623"]
openGraphImageUrl: "https://opengraph.githubassets.com/70b8452c9d2422ce9f886f9d8d03505d954463dc9b2921bc289bedcd48f6f39b/everett7623/hy2"
---

# 🚀 Sing-box Multi-Protocol Tools

> 功能闭环 · 极低占用 · 全系统兼容 · 交互友好
> 无需域名，无需复杂配置，一键开启高速且安全的网络体验。

---

## 📖 项目简介

这是一个基于 **sing-box** 和主流代理协议的 Linux VPS 一键安装、管理、导出、二维码、诊断、备份与恢复工具集。

| 协议 | 核心优势 | 适用场景 |
| --- | --- | --- |
| **Hysteria 2** | UDP 超速 · 自签证书 · 无需域名 | 主力节点，绝大多数网络环境 |
| **Shadowsocks** | 支持 SS-2022 · musl 静态编译 · 全平台兼容 | 备用节点，IPv6 / 双栈环境尤佳 |
| **AnyTLS** | sing-box 原生入站 · TCP/TLS · 自签证书 | 需要 TCP/TLS 传输的轻量节点 |
| **EUserv Hysteria 2** | IPv6-only 专属 · 自动适配 · Warp 集成 | EUserv 免费德鸡专用 |

---

## ✨ 核心特性

- **⚡️ 一键部署**：支持 `curl | bash` 极速安装，自动识别系统包管理器，全自动穿透系统防火墙（兼容 firewalld / ufw / iptables）。
- **🪶 轻量无依赖**：彻底移除 `jq` 等外部依赖，纯 Bash 实现 URI 转义，极低配置 VPS 也能稳定运行。
- **🛠️ 终极系统兼容**：Shadowsocks 端强制采用 `musl` 静态编译，彻底免疫 CentOS 8 / Rocky 8 等老旧系统的 GLIBC 报错问题。
- **🌐 NAT 与双栈支持**：自动检测 IPv4 / IPv6 网络状态，完美支持 NAT 机器（内外端口映射）及纯 IPv6 环境。
- **🔐 Hysteria 2 免域名**：采用自签证书 + SNI 伪装 `amd.com`，自动配置 `skip-cert-verify`，零门槛开箱即用。
- **🔐 SS 双协议自由选**：安装时可选择 100% 连通率的经典 `aes-256-gcm`，或强抗主动探测的 `2022-blake3-aes-256-gcm`（自动生成 32 字节规范密钥并尝试同步系统时间）。
- **🔧 服务器工具内置**：一键开启 BBR 加速、定时自动更新（每天 03:00）、系统信息总览，开箱即用。
- **📱 全客户端节点输出**：自动生成适配 Loon / Surfboard / Clash Meta / Stash / Shadowrocket / v2rayN / Quantumult X…
