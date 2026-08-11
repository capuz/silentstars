---
repo: "lixiansky/x2ding"
name: "x2ding"
description: "Twitter (X) 智能监控机器人，并将内容推送到钉钉"
readmeQualityOk: true
url: "https://github.com/lixiansky/x2ding"
language: "Python"
languages: ["Python"]
languagePcts: [87]
stars: 7
forks: 9
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-28T06:42:33Z"
lastCommitAt: "2026-08-11T04:49:50Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 70
undervaluedScore: 55
maintainers: ["github-actions[bot]", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/86e9ab70ce79ce34133b1dbdd880bcfff4228c128413b26b84523b3c3a4571b2/lixiansky/x2ding"
---

# Twitter (X) 智能监控机器人 🤖

这是一个基于 **Playwright Stealth** 技术的工业级推文监控方案。它通过模拟真实浏览器行为,完美绕过屏蔽与机器人检测,将 Twitter 动态(含文字、图片、翻译、转发)实时推送到您的钉钉。

本项目专为 **GitHub Actions** 设计,全自动运行,无需自备服务器,同时也支持本地循环模式。

> 📖 **[快速开始指南](https://github.com/lixiansky/x2ding/blob/HEAD/DEPLOYMENT.md)** | 🔧 **[Cloudflare Worker 部署教程](https://github.com/lixiansky/x2ding/blob/HEAD/cloudflare-worker.js)**

## ✨ 核心亮点

*   **🛡️ 强力反检测**: 放弃传统的 RSS 接口,采用 **Playwright 浏览器自动化** + Stealth 插件。自动模拟人类点击,轻松穿透 Nitter 验证码与访问限制。
*   **🌐 自动翻译与清理**: 
    *   **一键翻译**: 集成 Google Translate (GTX) 接口,自动将推文翻译为中文,方便快速阅读。
    *   **智能清洗**: 自动识别并移除推文中的装饰性乱码(如 `€∋` 等),提供纯净的阅读体验。
*   **🖼️ 完美图文展示**: 
    *   **高级图片解析**: 内置复杂的 URL 还原逻辑,能够识别并从 Nitter 的加密/代理路径(如 `xcancel` 的 hex 编码 URL)中还原出原始 `pbs.twimg.com` 地址。
    *   **Cloudflare 图片代理**: 支持使用 Cloudflare Workers 作为图片代理,确保国内钉钉客户端能够稳定加载推文配图。
*   **🎥 视频完美支持**:
    *   **自动提取封面**: 智能识别视频封面图并上传图床，确保在钉钉中完美展示。
    *   **直达链接**: 消息中自动附加视频观看链接，一键跳转播放。
*   **📡 自动发现可用节点**: 集成实例探测逻辑,定期自动扫描全球 Nitter 节点,动态优选最稳、最快的"健康实例"。
*   **🧠 智能过滤逻辑**: 自动识别并跳过博主的**置顶推文 (Pinned Tweets)**,确保只在发布真正的"新鲜项"时才报警。
*   **⚡ 高频监控**: 每 10 分钟独立执行一次,避免传统循环任务的延迟累积问题。

## 📊 功能特性

| 特性 | 本项目 | 传统方案 |
|------|--------|---------|
| 监控频率…
