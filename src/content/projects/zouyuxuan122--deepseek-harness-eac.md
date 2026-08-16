---
repo: "zouyuxuan122/Deepseek-Harness-EAC"
name: "Deepseek-Harness-EAC"
description: "DeepSeek Harness (dsh) Windows desktop client - bundled Node.js + dsh CLI, one-click launch, 10 built-in UI skins. EAC: Embracing All Creation 揽尽万象"
readmeQualityOk: true
url: "https://github.com/zouyuxuan122/Deepseek-Harness-EAC"
homepage: "https://github.com/zouyuxuan122/Deepseek-Harness-EAC/releases"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [93]
topics: ["ai-agent", "deepseek", "desktop-app", "dsh", "electron", "windows"]
stars: 314
forks: 8
openIssues: 11
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-08-14T16:29:54Z"
lastCommitAt: "2026-08-16T03:19:25Z"
lastReleaseAt: "2026-08-16T03:40:49Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 60
undervaluedScore: 12
maintainers: ["zouyuxuan122"]
openGraphImageUrl: "https://opengraph.githubassets.com/9fb39eb11fd915d84835f068f37ecf4231edad68c0e733ea3f74a49463f1625c/zouyuxuan122/Deepseek-Harness-EAC"
---

<p><a href="README.md">中文</a> | <a href="README.en.md">English</a></p>

<h1>Deepseek Harness EAC — 揽尽万象</h1>

<p><strong>EAC = Embracing All Creation（揽尽万象）</strong></p>

<p>
</p>

<p>把官方 <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a>（<code>@deepseek-ai/dsh</code>，一切皆插件的 agent harness）
封装为<strong>开箱即用的 Windows 桌面客户端</strong>，并在其上拥抱社区万象：皮肤、插件、工具、记忆——你所能想到的，一键皆可装。</p>

<p><a href="docs/screenshot-preview.jpg"><img src="docs/screenshot-preview.jpg" alt="Deepseek Harness EAC 界面预览"></a></p>

</div>

---

## 相比原版 DeepSeek Harness 的优势

| 能力 | 原版 dsh（官方 deepseek-harness） | Deepseek Harness EAC |
| --- | --- | --- |
| 运行方式 | 需先安装 Node.js，`npx @deepseek-ai/dsh web` + 浏览器访问 | **免装 Node**：内置独立 Node 运行时与 npm CLI，双击即用 |
| 界面皮肤 | 仅官方默认外观 | **内置 10 款 Web UI 皮肤**（XP / QQ98 / 初音未来 / 我的世界 / 同花顺 / 鲸歌…），设置页一键互斥切换，默认不启用保持原生 |
| 窗口体验 | 浏览器标签页 | **原生无边框窗口**（自绘玻璃栏）+ **系统托盘常驻**，关闭不打断任务 |
| 便携性 | 无 | **便携版**数据跟随 exe，拷到 U 盘即用 |
| 余额查看 | 手动上官网查 | 对话底部内联「**本轮 ¥X · 余额 ¥Y**」实时小部件，点击跳转充值 |
| 文件管理 | 手动翻目录 | **会话文件更改追踪**（行级 diff）+ **一键还原**，全部/逐文件 |
| 会话内终端 | 无 | **终端标签页**：会话项目目录内持久 PowerShell，SSE 流式，断线重连 |
| 配置上手 | 手编 YAML | **设置页可视化**：视觉模型一键选择、`soul.md` 人设可视化编辑、**从 Codex…
