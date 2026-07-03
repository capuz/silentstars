---
repo: "bling-yshs/douyin-auto-spark"
name: "douyin-auto-spark"
description: "抖音自动续火花 github action，基于 Typescript + Playwright"
url: "https://github.com/bling-yshs/douyin-auto-spark"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 9
forks: 12
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-18T03:51:03Z"
lastCommitAt: "2026-07-03T06:23:36Z"
status: "newborn"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 75
undervaluedScore: 18
maintainers: ["bling-yshs", "reiasu2"]
openGraphImageUrl: "https://opengraph.githubassets.com/24d9808a14ce746b2d77b81d9ba5800cea295665536582c0a5d5aa450d4758f8/bling-yshs/douyin-auto-spark"
---

<h1 align="center">🔥 Douyin Auto Spark</h1>

  <strong>抖音聊天续火脚本 · Playwright 自动化 · GitHub Actions 定时运行</strong>
</p>

</div>
<br>

</div>
<br>

## ✨ 项目简介

本项目是一个基于 **Playwright + TypeScript** 的抖音聊天自动化脚本。它会携带你配置的抖音 Cookie 打开聊天页，按配置的会话名称依次定位聊天对象，并从 `assets/yiyan.json` 中随机挑选一句 `hitokoto` 发送出去。

适合放到 GitHub Actions 中定时运行，也可以在本地用 `pnpm dev` 手动执行。

## 🚀 功能特性

- 🎭 **Cookie 登录** - 通过 `DOUYIN_COOKIE` 注入抖音登录态，无需脚本内输入账号密码
- 🎯 **多会话发送** - 通过 `DOUYIN_TARGET_NAMES` 配置多个聊天对象
- 💬 **随机一言** - 每次从 `assets/yiyan.json` 随机挑选一条 `hitokoto` 作为消息内容
- 🤖 **定时续火** - 通过 Github Action 每天 0 点自动续火（但是 Github 定时任务要排队，可能会延迟几个小时）

## 🧰 准备工作

在配置 GitHub Actions 或本地 `.env` 之前，需要先准备抖音 Cookie 和要发送消息的会话名称。

### 1️⃣ 获取抖音 Cookie

1. 使用 Chrome 打开 [Cookie-Editor 插件页面](https://chromewebstore.google.com/detail/cookie-editor/hlkenndednhfkekhgcdicdfddnkalmdm)，安装 Cookie-Editor。

2. 打开 [抖音聊天页](https://www.douyin.com/chat)，并登录你的抖音账号。

3. 登录成功后，点击浏览器右上角的 Cookie-Editor 插件图标。

4. 点击 `Export`，选择 `JSON`，复制导出的完整数组内容。

   

导出的内容大概长这样：

```json
[
  {
    "domain": ".douyin.com",
    "expirationDate": 1800175766.87008,
    "hostOnly": false,
    "httpOnly": false,
    "name": "UIFID",
    "path": "/",
    "sameSite":…
