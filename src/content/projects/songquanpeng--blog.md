---
repo: "songquanpeng/blog"
name: "blog"
description: "个人博客系统"
readmeQualityOk: true
url: "https://github.com/songquanpeng/blog"
homepage: "https://justsong.cn"
language: "Go"
languages: ["Go"]
languagePcts: [65]
topics: ["blog", "v2ex", "bulma-css", "w3-css", "bootstrap4", "hexo-theme-next"]
stars: 72
forks: 14
openIssues: 1
closedIssues: 9
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-03-31T09:28:37Z"
lastCommitAt: "2026-08-30T00:44:24Z"
lastReleaseAt: "2020-04-08T15:38:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 38
maintainers: ["songquanpeng"]
openGraphImageUrl: "https://opengraph.githubassets.com/c25aa98729f8bdd6865fd2159d24cbe8f9fb919af31ccfa05e483d44aa69ef9f/songquanpeng/blog"
---

# 个人博客系统

使用 **Gin + GORM + React + Bulma** 的单人博客系统。公开页面保留经典 Bulma 主题并由 Go 服务端渲染，管理后台使用独立的 React 设计系统；旧版 Sequelize SQLite 数据可直接挂载使用。

## 特性

- 公开站点保留兼容旧内容的 Bulma 主题，管理后台使用更适合写作与内容管理的独立界面。
- 服务端输出完整语义化 HTML，包含 canonical、Open Graph、JSON-LD、Atom、sitemap 和 robots。
- 显式沿用旧表名及字段名：`Pages`、`Users`、`Options`、`Files`。旧用户数据只用于显示历史作者，不再参与认证。
- 后台仅支持一个 GitHub OAuth 管理员，推荐使用不可变的 GitHub User ID 建立白名单。
- 内置 `blog-cli`：通过本站 device flow 授权，覆盖页面与微博客 CRUD、正文统一检索、页面发布状态、站点标题与侧边栏、全部设置和文件管理；token 默认有效一年并可随时撤销。
- 内置微博客子功能：公开短内容位于独立路径（默认 `/microblog`），支持 Markdown、公开/私密状态、分页和完整后台 CRUD；启停、访问路径、标题与简介均可即时调整，停用不会删除数据。
- 内置隐私友好的文章统计：后台可查看 PV、UV、每日趋势、文章排行、Referrer、搜索引擎与可见关键词、User-Agent；不保存原始 IP。
- Markdown 经过安全渲染；站点所有者发布的 HTML 会被完整保留，其中独立 HTML 页面运行在无同源权限的沙箱中。应用还包含 CSP、安全 Cookie、OAuth state + PKCE、同源检查、请求体限制和安全文件上传。
- 历史 Raw 工具页在无 `same-origin` 权限的 CSP sandbox 中运行，保留脚本交互但不能读取主站 Cookie、后台 API 响应或父页面 DOM。
- 保留 `PORT`、`SQLITE_PATH`、`UPLOAD_PATH`、3000 端口、`/app/data` 卷、旧 URL 与主要 `/api` 路径。
- 支持 Docker、Makefile、`npm start`，以及旧的 `pm2 start app.js` 启动入口。

## GitHub OAuth 配置

在 GitHub 的 Developer settings → OAuth Apps 中创建 OAuth App，回调地址填写：

```text
https://你的域名/auth/github/callback
```

至少设置以下环境变量：

```dotenv…
