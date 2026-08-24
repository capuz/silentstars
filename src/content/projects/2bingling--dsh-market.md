---
repo: "2BingLing/dsh-market"
name: "dsh-market"
description: "DeepSeek Harness 插件市场 · 持续收录 1500+ DSH 插件：中文搜索 + 实用五维评分 + 一键安装。Web 版与 DSH 侧边栏插件双形态。Plugin marketplace for DeepSeek Harness: 1500+ plugins, Chinese search, 5-dim scoring, one-click install."
readmeQualityOk: true
url: "https://github.com/2BingLing/dsh-market"
homepage: "https://dsh.market/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [78]
topics: ["deepseek-harness", "dsh", "marketplace", "plugin-market", "plugin-registry", "deepseek-harness-plugin", "dsh-bundle", "dsh-plugin", "dsh-skill", "deepseek-harness-plugins"]
stars: 63
forks: 2
openIssues: 8
closedIssues: 61
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-13T16:26:50Z"
lastCommitAt: "2026-08-24T04:23:17Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 37
maintainers: ["2BingLing"]
openGraphImageUrl: "https://opengraph.githubassets.com/1350b9745eb9354b2ea450d10decfe235469efc4532cc379f8410d96ef7ffbf9/2BingLing/dsh-market"
discussionCount: 0
---

<b>中文</b> · <b><a href="./README.en.md">English</a></b>
</p>

</p>

</div>

---

## 两种形态

</p>

DSH 生态增长极快，插件与技能散落在 GitHub 各处 —— **不知道哪个好用、怎么装、怎么组合成一套能干活的环境**。DSH Market 用一个平台收齐它们，并提供两种消费入口：

| | <img src="./assets/readme/logo-web.svg" width="26" alt="Web 版 Logo"> **Web 版**（已上线） | <img src="./assets/readme/logo-plugin.svg" width="26" alt="插件版 Logo"> **DSH 插件版**（开发完成） |
|---|---|---|
| **位置** | 浏览器 · GitHub Pages 纯静态站 | DSH 侧边栏 · cordis 插件 |
| **定位** | 发现与评估 | 安装与管理 |
| **内容** | 插件（cordis/skill）+ 整合包分区（生态内容市场） | 5-Tab 面板 · 一键安装 · 新手推荐 · 个性化推荐 · 场景推荐 · AI 代理安装（详见 [DSH 插件版](#dsh-插件版)）+ 整合包 Tab |
| **安装** | 零安装，浏览器打开即用 | `npx @deepseek-ai/dsh plugin --profile web add @dsh-market/plugin` |
| **资源消耗** | — | 零 token 被动运行，不参与日常对话 |

> **两者的关系：仅共享同一份 `plugins.json` 数据**（每日 06:00 自动刷新星星与描述），除此之外没有直接关联——Web 版是独立的浏览站，插件版是独立的 cordis 插件，可分别使用、互不依赖：**用 Web 版不一定要装插件，装插件也不影响 Web 站**。

## 演示

| Web 版 | DSH 插件版 |
|---|---|
|  |  |

## 快速开始

### Web 版

无需安装，直接访问：

<https://dsh.market/>

### 安装插件版

```bash
npx @deepseek-ai/dsh plugin --profile web add @dsh-market/plugin
```

装完**重启 harness**，侧边栏底部出现「插件市场」入口。

## DSH 插件版

装进 DSH 侧边栏的插件市场：**新手 3 分钟上手，越用越懂你**。

**新手友好 · 零门槛**

-…
