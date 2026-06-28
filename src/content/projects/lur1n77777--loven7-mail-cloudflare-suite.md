---
repo: "Lur1N77777/loven7-mail-cloudflare-suite"
name: "loven7-mail-cloudflare-suite"
description: "Enhanced admin and webmail frontends for Cloudflare Temp Mail / cloudflare_temp_email"
url: "https://github.com/Lur1N77777/loven7-mail-cloudflare-suite"
language: "TypeScript"
languages: ["TypeScript", "CSS"]
languagePcts: [53, 37]
topics: ["cloudflare-pages", "cloudflare-workers", "react", "temp-mail", "vite"]
stars: 15
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-05-23T16:02:44Z"
lastCommitAt: "2026-06-28T02:01:10Z"
lastReleaseAt: "2026-06-27T14:01:28Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 46
maintainers: ["Lur1N77777"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7e861bb086091691ff1dc2d94205eef678c0849b5190246c11286bc281b5b77/Lur1N77777/loven7-mail-cloudflare-suite"
---

# Loven7 Mail Cloudflare Suite

接入 Cloudflare Temp Mail / `cloudflare_temp_email` 的现代化前端套件。

管理后台、用户邮箱站、分享链接、验证码识别、移动端体验和 PWA 都整理在一个仓库里。

<p>
</p>

<p>
  ·
  ·
  ·
</p>

</div>

> 本仓库不包含上游 Worker 后端源码，不内置私人 API、密码、Token、KV ID 或个人域名。部署后在网页界面里填写自己的连接信息即可。

## 它是什么

Loven7 Mail Cloudflare Suite 是给 Cloudflare Temp Mail / `cloudflare_temp_email` 用的增强前端，不替代上游 Worker。

| 应用 | 用途 |
| --- | --- |
| `apps/admin` | 管理邮箱地址、用户、收件箱、未知邮件、发件箱、分享链接和系统设置 |
| `apps/webmail` | 用户邮箱站 / 分享站，支持 JWT 登录、单邮箱分享、多邮箱聚合分享 |

## 主要能力

- 管理后台：邮箱地址、用户、邮件、发件箱、分享链接和维护工具。
- 用户站：单邮箱登录、分享访问、自动刷新、验证码快捷复制。
- 分享：单邮箱、多邮箱、聚合分享、仅新增邮件、撤回/恢复、访客隐藏邮件。
- 体验：中英切换、浅/深色模式、PWA、移动端操作菜单、品牌头像。
- 部署：Cloudflare Pages + Pages Functions + KV Namespace。

## 快速开始

如果你已经有 Cloudflare Temp Mail / `cloudflare_temp_email` 上游 Worker，可以直接让 AI Agent 自动部署。

```text
请帮我自动部署这个 GitHub 项目到我的 Cloudflare 账号：https://github.com/Lur1N77777/loven7-mail-cloudflare-suite 。我已经有 Cloudflare Temp Mail / cloudflare_temp_email 上游 Worker。请创建两个 Cloudflare Pages 项目：管理后台使用 apps/admin，构建命令 npm ci && npm run build，输出目录 dist；用户站使用 apps/webmail，构建命令 npm ci && npm run build，输出目录 dist。不要让我在公开 Prompt 里填写 Cloudflare Token、GitHub Token、管理员密码、站点密码、Worker API…
