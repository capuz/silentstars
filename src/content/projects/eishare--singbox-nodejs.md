---
repo: "eishare/Singbox-nodejs"
name: "Singbox-nodejs"
description: "翼龙面板node.js环境 部署：Argo双模固定隧道quic/http2、临时隧道；直连hy2、tuic、reality"
readmeQualityOk: true
url: "https://github.com/eishare/Singbox-nodejs"
language: "JavaScript"
languages: ["JavaScript", "Shell"]
languagePcts: [65, 35]
stars: 327
forks: 294
openIssues: 5
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-11-21T14:18:15Z"
lastCommitAt: "2026-09-08T08:16:02Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 60
undervaluedScore: 31
maintainers: ["eishare"]
openGraphImageUrl: "https://opengraph.githubassets.com/c3896aef9fa81adaca28c0a1c6c80feca07d3af0a4d207dd58d2ffc163ec6e07/eishare/Singbox-nodejs"
---

# 🚀 http2/quic双模Argo Tunnel & 直连 sing-box部署方案

极致轻量化代理节点部署方案，确保在低配置环境中稳定运行。底层架构采用 **Sing-box + Cloudflared**

---

## 💡 特性与适用场景

### 1. 🌐 http2/quic 双模Argo Tunnel 方案 (内网穿透与穿墙)

* **TCP/UDP双模**：隧道类型手动切换http2/quic、连接数可调。
* **精简 Sing-box 架构**：极低资源占用。
* **高稳定 Guardian 启动器**：内置 `start.sh` 内存与进程守护机制，精准控制垃圾回收（GC），在 64MB 低内存环境稳定运行。
* **📌 适用场景**：
  * 直连线路质量差、UDP 被 QoS 限速或阻断。
  * 服务器未开放公网端口。
### Argo Tunnel-64MB Ram适用于64MB低内存环境，如Freecloudpanel。

---

### 2. ⚡ 直连协议方案 (Hysteria2 / TUIC / REALITY)

  * **面板仅开放单端口**：可选 hy2+reality 或 tuic+reality不同组合。
    
  * **面板开放了多端口（≥ 2个）**：支持一键同时部署 Hysteria2 + TUIC v5 + VLESS-REALITY。
    
* **📌 适用场景**：
  
  * 直连 线路良好、UDP极少被QoS。
  * 平台已开放外部映射端口。

---

### 📌兼容环境测试记录（持续更新中......）

## 🌐 以下平台仅用于验证 Docker 容器与面板架构的兼容性：

| 平台名称 | 核心配置 (RAM / Disk / CPU) | 续期机制 / 存活规则 | ⚠️ 注意事项与网络限制 | 部署状态 |
| :--- | :--- | :--- | :--- | :---: |
| **Lunes Host** | `128 MB` / `512 MB` / `15%` | 🔄 每 15 天登录控制台=续期 |  | 🟢 正常 |
| **Katabump** | `308 MB` / `716 MB` / `25%` | 🔄 每 4 天手动续期 |  | 🟢 正常 |
| **Bot Hosting** | `256 MB` / `1 GB` / `20%` | 🔄 每日最多赚取 10 金币，自动扣费 | ❌ 不开放 7844 端口<br>❌ 不支持 Cloudflare Argo | 🟢 正常 |
| **Pella.app** | `100 MB` / `5 GB` / `10%` | 🔄 每 24 小时手动续期…
