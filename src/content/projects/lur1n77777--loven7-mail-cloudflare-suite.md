---
repo: "Lur1N77777/loven7-mail-cloudflare-suite"
name: "loven7-mail-cloudflare-suite"
description: "Modern Cloudflare Pages admin and webmail suite for cloudflare_temp_email"
readmeQualityOk: true
url: "https://github.com/Lur1N77777/loven7-mail-cloudflare-suite"
homepage: "https://github.com/Lur1N77777/loven7-mail-cloudflare-suite#readme"
language: "TypeScript"
languages: ["TypeScript", "CSS"]
languagePcts: [51, 36]
topics: ["cloudflare-pages", "cloudflare-workers", "react", "temp-mail", "vite"]
stars: 17
forks: 9
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-05-23T16:02:44Z"
lastCommitAt: "2026-07-25T05:59:53Z"
lastReleaseAt: "2026-07-24T17:46:30Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 68
undervaluedScore: 53
maintainers: ["Lur1N77777", "codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c3ca2265566a73c01aab6c6daae3544754f9e24fc21c96ccbeb288ce91b55c3/Lur1N77777/loven7-mail-cloudflare-suite"
---

# Loven7 Mail Cloudflare Suite

一套面向 Cloudflare Temp Mail / `cloudflare_temp_email` 的现代化双站前端：管理后台、用户邮箱、分享链接与 Pages Functions 集中维护。

<p>
</p>

[界面预览](#界面预览) · [5 分钟部署](#5-分钟部署) · [功能](#功能) · [手动部署](#手动部署) · [配置边界](#公开版与自用配置边界) · [文档](#文档)

</div>

> 这是可复用的公开版前端仓库，不包含任何部署者的 Worker 地址、Cloudflare 资源 ID、域名、账号、密码、Token、密钥或生产运维记录。所有私有值都在部署平台或浏览器中注入。

## v0.3.0 · 大前端更新

管理后台完成一次完整的视觉与工作区重构，采用 **Paper, Ink & Sealing Wax** 设计语言：暖灰纸面、墨黑主操作与陶土红强调色贯穿仪表盘、统计、地址、用户、收发件、系统设置和维护页面。

- 桌面端重新组织信息层级、指标卡片、管理表格和工具面板。
- 平板与移动端补齐专用布局、底部导航、快捷操作菜单和无横向溢出体验。
- 深色模式、表单控件、分页、弹层和代码面板使用统一的圆角与表面规范。
- 保持现有 Worker API、Pages 运行时变量和 KV 数据结构不变，可从旧版本平滑升级。

## 界面预览

### Admin · Paper, Ink & Sealing Wax

<table>
  <tr>
    <td width="50%" valign="top">
      <strong>运营概览</strong><br />
      <sub>邮件流量、地址活跃、站点规模与能力状态。</sub><br /><br />
    </td>
    <td width="50%" valign="top">
      <strong>收件箱工作区</strong><br />
      <sub>高密度邮件列表、阅读器与快捷操作。</sub><br /><br />
    </td>
  </tr>
</table>

<table>
  <tr>
    <td width="50%" valign="top">
      <strong>系统设置</strong><br />
      <sub>界面、连接、邮件规则和账户策略分区管理。</sub><br /><br />
    </td>
    <td width="50%" valign="top">
      <strong>移动端地址管理</strong><br />…
