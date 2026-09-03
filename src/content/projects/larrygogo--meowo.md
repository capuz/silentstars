---
repo: "larrygogo/meowo"
name: "meowo"
description: "桌面贴纸：实时显示所有 Claude Code 会话进度"
readmeQualityOk: true
url: "https://github.com/larrygogo/meowo"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [50, 41]
stars: 7
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-06-04T15:52:58Z"
lastCommitAt: "2026-09-03T08:11:59Z"
lastReleaseAt: "2026-06-12T10:28:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 61
maintainers: ["larrygogo"]
openGraphImageUrl: "https://opengraph.githubassets.com/aef11601361f3fc022d4e666b6e61714a9160d586a7d0734be6c00105328ccdb/larrygogo/meowo"
---

<h1>Meowo / 喵呜</h1>
  <p><b>桌面贴纸，集中查看 Claude Code、Codex、Kimi、Gemini CLI、OpenCode 等 AI 编程会话的状态。</b></p>
  <p>
  </p>
  <p><b>中文</b> · <a href="README.en.md">English</a></p>
  <p>Meowo 把各个 AI CLI 的会话事件收集到本地数据库，再用一个小窗口实时展示。<br/>不用在终端之间来回切，也能知道谁在跑、谁在等你、进行到哪一步。</p>
</div>

## 下载

官网：**[meowo.io](https://meowo.io)** —— 点进去会按你的系统直接给对应安装包。

| 平台 | 安装包 | 说明 |
|------|--------|------|
| **Windows** | [最新版 x64 安装包](https://github.com/larrygogo/meowo/releases/latest)（`Meowo_x.y.z_x64-installer.exe`，老版本为 `-setup.exe`） | 一键安装；无 WebView2 环境自动回退经典安装界面 |
| **macOS** | [最新版 DMG](https://github.com/larrygogo/meowo/releases/latest)（Apple 芯片选 `Meowo_x.y.z_aarch64.dmg`，Intel 选 `Meowo_x.y.z_x64.dmg`） | 需 macOS ≥ 14 Sonoma；已签名公证。不确定芯片：苹果菜单 → 关于本机 |

下载对应安装包，双击安装即可。应用内支持检查更新。

> **Windows 首次运行会提示「Windows 已保护你的电脑」**：Meowo 暂未做代码签名，点
> **「更多信息」→「仍要运行」** 即可继续。安装包由 GitHub Actions 从公开源码构建
> （见 [release.yml](https://github.com/larrygogo/meowo/blob/HEAD/.github/workflows/release.yml)），自动更新另有 minisign 签名校验。
> 正在申请开源项目的免费代码签名，后续版本会去掉这个提示。

## 能做什么

### 实时会话看板

- 每个 AI CLI 会话一张卡片，显示项目名、会话标题、最近一条 AI 正文和连接状态。
- Claude Code 会话会显示准确的 **Context 已用百分比**（来自 statusline）。
- 顶部 tab 分类：全部 / 待交互 / 运行中 / 已归档，并显示各自数量。
-…
