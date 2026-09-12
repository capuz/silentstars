---
repo: "kci-lnk/fn-knock-turborepo"
name: "fn-knock-turborepo"
description: "面向 NAS、软路由与家庭服务器的多平台高性能安全网关，采用 Rust + Go 双核心架构，集成反向代理、身份认证、WAF、SSL、DDNS 与内网穿透。"
readmeQualityOk: true
url: "https://github.com/kci-lnk/fn-knock-turborepo"
homepage: "https://www.fnknock.cn/"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [51, 30]
topics: ["fnos", "fn-knock", "access-control", "authentication", "golang", "reverse-proxy", "rust", "self-hosted", "zero-trust"]
stars: 177
forks: 16
openIssues: 0
closedIssues: 52
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-03-12T05:12:24Z"
lastCommitAt: "2026-09-12T08:03:36Z"
lastReleaseAt: "2026-08-17T00:25:54Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 36
maintainers: ["kci-lnk"]
openGraphImageUrl: "https://opengraph.githubassets.com/044fe10bb3c9cfdd1efe55e7486d70aa90dd9993e3c7609343f8b7da077207de/kci-lnk/fn-knock-turborepo"
---

</a>
</p>

<h1 align="center">fn-knock · 敲门</h1>

  <strong>简体中文</strong> ·
</p>

  面向 NAS、软路由与家庭服务器的多平台高性能安全网关
</p>

</p>

</p>

fn-knock 已完成原生化重构，正式运行时采用 **Rust 控制面 + Go 数据面**，内置 SQLite 存储，**不依赖 Node.js，也不需要 Redis**。Node.js 仅用于从源码开发 Vue 前端和编排仓库构建任务。

## 为什么选择 fn-knock

fn-knock 把反向代理、登录鉴权、证书、DDNS、访问控制、WAF、隧道和运行状态集中到一个管理面板中，帮助你更安全、更轻松地把私有服务开放给可信访问者。

| 能力       | 说明                                                                     |
| ---------- | ------------------------------------------------------------------------ |
| 安全网关   | 反向代理、认证前置、访问日志、Host / Path / TCP 映射                     |
| 身份认证   | 密码、TOTP、Passkey、OIDC、LDAP/Active Directory、验证码与精细化认证规则 |
| 域名与证书 | ACME 证书申请、SSL 配置、多服务商 DDNS                                   |
| 主动防护   | IP 白名单、地区可见性、WAF、爬虫拦截、登录退避与限流                     |
| 内网穿透   | Cloudflared、frpc 的配置、启停、日志与状态管理                           |
| 日常运维   | 系统监控、事件审计、在线终端、通知、备份与更新检查                       |
| 多平台交付 | fnOS、OpenWrt、Docker、Windows、macOS、Synology DSM 与通用 Linux         |

Web 终端继续支持管理员显式配置并确认主机指纹的 SSH 目标。完整 FPK、通用 Linux、macOS 与 OpenWrt 还可选择启用本机 PTY；本机终端默认关闭，并始终使用 fn-knock 服务的有效 UID/GID，服务以 root 运行时终端同样拥有 root 权限。FPK Lite、Synology、Docker、Windows…
