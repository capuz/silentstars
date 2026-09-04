---
repo: "chenw2759-wq/dsh-IDE"
name: "dsh-IDE"
description: "dsh-IDE 把 DeepSeek Harness（DSH）网页版升级成一站式 IDE：JupyterLab 式文件树、带语法高亮的代码编辑、多格式预览、Trae 风格红绿 diff 和内置终端，再加上「本地大脑、远程手脚」的 SSH 远程工作区，让 AI 直接在本机操控远程服务器，全程零配置文件改动。"
readmeQualityOk: true
url: "https://github.com/chenw2759-wq/dsh-IDE"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["dsh-plugin", "dsh"]
stars: 33
forks: 2
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-14T04:24:15Z"
lastCommitAt: "2026-09-04T08:12:04Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 22
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/a55568241ab4c52bd8a60ead55223a5d9e150165f379c2f0aaf176367db0a91d/chenw2759-wq/dsh-IDE"
---

# dsh-IDE — DSH Web GUI 一体化开发环境（JupyterLab 风格工作区 + SSH 远程开发）

> **当前版本：v0.2.0**（Notebook 阅读与编辑 · 2026-08）— 完整版本历史见 [CHANGELOG.md](https://github.com/chenw2759-wq/dsh-IDE/blob/HEAD/CHANGELOG.md)

</p>

> **中文** | [English](https://github.com/chenw2759-wq/dsh-IDE/blob/HEAD/README.en.md)

把 DeepSeek Harness（DSH）Web GUI 升级为**一体化开发环境**，四大核心能力：

- 🖥️ **右侧边栏**：可停靠的右栏抽屉——文件树 + 预览/编辑同框；**拖 tab 拖出成浮窗，拖回右缘自动停靠**（下框 / 右栏 / 浮动 / 三栏 IDE 四态切换）
- 📄 **预览**：Markdown / HTML / 图片 / CSV / **Notebook（.ipynb，结构化 cells + 输出渲染，可逐 cell 编辑）** / Office（docx / xlsx / pptx）/ 日志等多格式直接预览
- ✏️ **编辑**：代码即时编辑（语法高亮 + 行号 + 斑马纹）+ Markdown/HTML **Word 式可视化编辑** + Office 框内富文本编辑
- 🧩 **IDE**：文件树、命令行终端、Trae 风格红绿 diff、类型颜色标签、Git 角标、监视路径——开箱即用的 JupyterLab 式工作区

同时内置 **SSH 远程工作区模式**：右上角（session log 左侧）配置 SSH 主机（密码 / 密钥，复用
`~/.dsh/dsh-ssh.json`），进入后右侧面板自动切换为远程文件树，**模型本机的
read / write / edit / glob / grep 与 bash / 终端在 SSH 模式下透明地在远程服务器执行**，LLM 与 Agent
循环仍在本机——「本地大脑、远程手脚」。

## 功能总览

### ⚙️ 右边栏工作区设置（系统设置内）

「设置」→「右边栏工作区」栏目集中管理右栏工作区的**功能开关**（8 项：自动 diff / 监视圆点 / Git 角标 / 语法高亮 / 缩放预览 / 三栏 IDE / 终端停靠 / 会话隔离）与**编辑工具栏工具**（9 项，供富文本编辑选用），圆角卡片 + 开关，改动即时生效并持久化。

### 🖼️ Markdown 预览（三种布局）

Markdown 文件在面板中直接渲染预览（青色标签），并支持三种布局随意切换：

-…
