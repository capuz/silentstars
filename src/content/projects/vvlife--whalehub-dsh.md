---
repo: "vvlife/whalehub-dsh"
name: "whalehub-dsh"
description: "WhaleHub 🐋 — DeepSeek Harness 插件市场：发现、搜索、一键安装 DSH 社区插件"
readmeQualityOk: true
url: "https://github.com/vvlife/whalehub-dsh"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [61, 32]
stars: 6
forks: 1
openIssues: 7
closedIssues: 19
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-13T16:29:42Z"
lastCommitAt: "2026-08-20T04:07:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 41
maintainers: ["vvlife"]
openGraphImageUrl: "https://opengraph.githubassets.com/cee039d77a57d15ea550225b5e7c3933337235ab720dd7eb147cc9ae6628ba66/vvlife/whalehub-dsh"
---

# 🐋 WhaleHub

**DeepSeek Harness 的社区插件市场 —— 发现、搜索、一键安装，不用再到处翻仓库。**

**[🌐 在线访问 WhaleHub](https://whalehub-dsh.vercel.app)**（国内备用镜像：[GitHub Pages](https://vvlife.github.io/whalehub-dsh/)） · [提交插件](https://github.com/vvlife/whalehub-dsh/issues/new?template=submit-plugin.yml) · [PRD](https://github.com/vvlife/whalehub-dsh/blob/HEAD/docs/PRD.md)

</div>

---

## 为什么做 WhaleHub？

[DeepSeek Harness (DSH)](https://github.com/deepseek-ai/deepseek-harness) 的信条是 **"Everything is a Plugin"**。发布一天之内社区就涌出了几十上百个插件——皮肤、TUI、视觉工具、工作流……但它们散落在各个 GitHub 仓库里：**找到一个插件要搜半天，装对一个插件要翻半天 README**。

WhaleHub 把整个生态聚到一个页面里：打开网站 → 搜索/浏览 → 复制一条 `dsh plugin add` 命令 → 粘贴进终端 → 重启，完成。

## ✨ 功能一览

### 首页：精选 + 分类导航 + 全局搜索

### 插件列表：搜索 / 分类筛选 / 排序

支持按名称、描述、作者、标签模糊搜索，按热度（Stars）、最近更新、名称排序。

### 插件详情：一键安装面板

每个插件都有安装面板：**选 Profile → 一键复制安装命令**，同时提供 `--dump-config` 校验命令和 `cordis.yml` 配置片段；有坑点的插件附实测安装须知。

### 提交插件：Issue 表单 / PR 两种姿势

### 移动端自适应

## 📦 更进一步：把 WhaleHub 装进 DSH Web

装上 `whalehub-market` 插件后，连"复制命令"都省了——DSH Web 的 **Settings → Plugins** 会多出「🐋 插件市场」Tab，浏览、搜索、**点一下就装好**（host 半直接执行 `dsh plugin add`，装完重启生效）：

```sh
dsh plugin --profile web add "github:vvlife/whalehub-dsh#main&path:/plugin"
# 重启 dsh web → Settings →…
