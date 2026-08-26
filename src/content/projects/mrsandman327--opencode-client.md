---
repo: "Mrsandman327/OpenCode-Client"
name: "OpenCode-Client"
description: "OpenCode可视化客户端"
readmeQualityOk: true
url: "https://github.com/Mrsandman327/OpenCode-Client"
language: "Go"
languages: ["Go"]
languagePcts: [80]
stars: 21
forks: 4
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-05-06T03:01:22Z"
lastCommitAt: "2026-08-26T04:15:55Z"
lastReleaseAt: "2026-05-31T13:06:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 65
undervaluedScore: 35
maintainers: ["Mrsandman327"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b0e411aa56ed0dfa532a7e8a967b006b3459f850234e010f6e23c9399a28914/Mrsandman327/OpenCode-Client"
---

# 🧩 OC Manager

> OpenCode 全能工作台——让 AI 编程更优雅

</p>

**OC Manager** 是一个精心打造的 [OpenCode](https://github.com/anomalyco/opencode) 可视化管理桌面应用。告别命令行，用直觉操作 AI。

---

## ✨ 一览

<table>
<tr>
<td width="50%">

### 🎯 一站式工作台
启动服务、管理会话、浏览项目树——**一个窗口搞定全部**。左侧项目树、中间对话区、右侧信息面板，经典三栏布局，信息密度恰到好处。

### 🎨 优雅的对话体验
用户消息右对齐蓝边气泡，AI 回复左对齐卡片。推理过程、工具调用、文件操作**智能折叠**，想看才展开。Markdown 完整渲染，代码块语法高亮。**桌面端支持多会话 Tab 并行**，切换零卡顿，各会话独立滚动、独立渲染。

</td>
<td width="50%">

### 📁 文件浏览器 + Git
站内文件预览、编辑、上传、删除。左侧支持**懒加载文件树**展开/折叠，右侧支持文本/代码、Markdown、HTML、图片、PDF 预览。**内置 Git 面板**——查看变更、暂存提交、推送拉取，支持代理连接。拖拽调整面板宽度。

### 📱 三端通吃
桌面端（Wails WebView2）支持多会话 Tab；Web 端（内置 HTTP 服务）；手机端（自适应布局，单会话模式）——一套代码，随处使用。

</td>
</tr>
</table>

---

## 🔥 配置管理

<table>
<tr>
<td width="50%">

### ⚙️ OMO 模型配置
agent / category 粒度的模型映射，方案**导出·导入·入库·应用**一气呵成。JSONC 编辑器实时预览，修改即生效。

### 📡 供应商管理
一键拉取供应商模型列表，批量管理。支持自定义 API 地址和密钥。

</td>
<td width="50%">

### 📁 项目级配置管理
在项目树中点击 ⚙️ 即开——管理 `.opencode/` 下的**核心配置、技能、命令、规则、AGENTS.md**。Markdown 渲染预览，代码语法高亮，一键切换编辑。

### 🔗 技能管理
全局技能聚合扫描，冲突自动检测，一键启用/停用。**方案入库·一键切换**，支持嵌套技能。项目级技能**软链接导入**，来源目录自动识别已有和全局存在。

</td>
</tr>
</table>

---

## 🪄 更多亮点

| 🚀 功能 | 💡 说明 |
|----------|---------|
| **实时 SSE 事件流** | OpenCode…
