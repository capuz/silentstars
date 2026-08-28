---
repo: "lioil522/dnshe-manager"
name: "dnshe-manager"
description: "🌐 DNSHE 跨账号多域名集中管理面板"
readmeQualityOk: true
url: "https://github.com/lioil522/dnshe-manager"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 6
forks: 11
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-29T12:57:17Z"
lastCommitAt: "2026-08-28T14:27:37Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 89
undervaluedScore: 59
maintainers: ["lioil522"]
openGraphImageUrl: "https://opengraph.githubassets.com/286ed5d478ecbdaa960a7d109c81d039da16ad3ac8411cf1ce98a9ca1e752d7c/lioil522/dnshe-manager"
---

# 🌐 DNSHE-Manager

> DNSHE 跨账号多域名自动化集中管理系统

DNSHE-Manager 是一个面向 [DNSHE](https://my.dnshe.com) 用户的**多账号域名集中管理面板**，支持域名资产看板、DNS 解析托管、到期自动续期、多平台通知推送等功能。同一套代码同时支持 **Cloudflare Workers** 和 **Docker 自建** 两种部署形态。

---

## ✨ 功能特性

- **多账号管理** — 支持绑定多个 DNSHE API Key，跨账号统一管理域名资产
- **域名资产看板** — 一览所有域名的状态、到期时间、DNS 托管商等信息
- **DNS 解析管理** — 在面板内直接增删改 DNS 记录（A / AAAA / CNAME / MX / TXT 等）
- **自动续期** — 每日定时扫描即将到期的域名并自动续期，无人值守
- **域名同步** — 自动从 DNSHE 上游拉取最新域名列表与状态，支持深度同步
- **DNS 托管商识别** — 通过 DoH 查询 NS 记录，自动识别 Cloudflare / DNSPod / Vercel 等托管商
- **通知推送** — 支持钉钉、飞书、企业微信、Server酱、自定义 Webhook 等多平台通知
- **安全认证** — 用户名 + 密码登录，密码经 PBKDF2 加盐哈希存储；可选 2FA (TOTP) 两步验证
- **AES-GCM 加密** — API Secret 与 2FA 密钥使用 AES-GCM 加密存储，支持密钥自动生成
- **深色 / 浅色主题** — 支持主题切换，刷新无闪白
- **国际化域名** — 支持 Punycode 编码的国际化域名

---

## 🏗️ 架构概览

```mermaid
graph TD
    subgraph DNSHE-Manager
        subgraph 前端 SPA
            A1["React + TypeScript"]
            A2["Vite + Tailwind CSS"]
            A3["Lucide Icons"]
        end

        subgraph 后端 Hono
            B1["src/index.ts — 共享业务"]
            B2["src/db.ts — 数据层"]
            B3["src/cron.ts — 定时任务"]
            B4["src/dnshe.ts — API 客户端"]
        end

        A1 -->|API 调用| B1…
