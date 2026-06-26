---
repo: "Alvin9999-newpac/Sing-Box-Plus"
name: "Sing-Box-Plus"
description: "一键搭建Sing-Box多协议脚本，无需域名，开箱即用 20 个节点（直连 10 + WARP 10），节点：VLESS Reality（Vision 流）、VLESS gRPC Reality、Trojan Reality、VMess WS、Hysteria2、Hysteria2 + OBFS(salamander)、Shadowsocks 2022（2022-blake3-aes-256-gcm）、Shadowsocks（aes-256-gcm）、TUIC v5（ALPN h3，自签证书）、AnyTLS，WARP 节点，Gemini+Netflix/Disney+/YouTube 等流媒体解锁"
url: "https://github.com/Alvin9999-newpac/Sing-Box-Plus"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["anytls", "hysteria2", "proxy", "reality", "shadowsocks", "sing-box", "trojan", "tuic", "v2ray", "vless"]
stars: 214
forks: 45
openIssues: 2
closedIssues: 6
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-12-20T00:06:16Z"
lastCommitAt: "2026-06-26T23:41:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 18
maintainers: ["Alvin9999-newpac"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6a4cc3fa401384b5553c5f75e0008881d196681a364284a68ab5ffd3568fded/Alvin9999-newpac/Sing-Box-Plus"
---

# 🚀 Sing-Box-Plus 一键管理脚本（20 节点：直连 10 + WARP 10）

开箱即用 20 个节点（直连 10 + WARP 10），含端口一键切换、BBR 加速、分享链接导出等。

* ✅ 已适配 **sing-box v1.13.x**（已固定为 v1.13.7）
* ✅ 支持 **WARP 出站**（官方 warp-cli，更高兼容性，非 wgcf）
* ✅ 一键生成证书（自签），一键 systemd 托管
* ✅ **更换端口**后自动重写配置与放行
* ✅ 分享链接分组打印（直连 10 / WARP 10），导入即用
* ✅ WARP 节点，将服务器 IP "变身" 为 Cloudflare 的中性出口，Gemini/Netflix/Disney+/YouTube 等流媒体解锁
* ✅ **新增 AnyTLS 协议**（直连 + WARP 各一个），抗流量分析能力更强

**🔔 2026年6月17日更新提醒：** 搭建好后最下面的hysteria2 节点改用 pinnedPeerCertSha256，适配 Xray-core v26.2.6+ 移除 allowInsecure 后旧节点无法启动的问题（自 2026-06-01 起生效）。若新节点在 v2rayN  下仍连不上，可在 v2rayN 中把该节点内核切回 sing-box / 原生 Hysteria2。

---

## ✨ 默认部署内容（20 个节点）

**直连 10：**

* VLESS Reality（Vision 流）
* VLESS gRPC Reality
* Trojan Reality
* VMess WS
* Hysteria2（直连证书）
* Hysteria2 + OBFS(salamander)
* Shadowsocks 2022（2022-blake3-aes-256-gcm）
* Shadowsocks（aes-256-gcm）
* TUIC v5（ALPN h3，自签证书）
* **AnyTLS**（自签证书，sing-box v1.12+ 引入的新协议，抗流量分析）

**WARP 10：**（同上 10 种，出站经 Cloudflare WARP）

> WARP 出站更利于流媒体解锁与回程质量。

**注意：Shadowsocks 2022 和 Shadowsocks 协议可能容易被封，不推荐使用。**

**关于 AnyTLS：** 这是 sing-box v1.12 起加入的新协议，使用标准 TLS 流量伪装，并通过 Padding 抵抗流量分析。客户端需要 sing-box 1.12+、Mihomo (Clash.Meta) 较新版本、Hiddify 较新版本，老版本 v2rayN/Shadowrocket…
