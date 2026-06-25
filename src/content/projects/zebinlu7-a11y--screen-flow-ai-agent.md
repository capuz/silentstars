---
repo: "zebinlu7-a11y/screen-flow-ai-agent"
name: "screen-flow-ai-agent"
description: "智能截图解析悬浮窗 — 截图 + 多模态大模型 = 即时 AI 回答，基于LangGraph"
url: "https://github.com/zebinlu7-a11y/screen-flow-ai-agent"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 122
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-06-09T07:23:07Z"
lastCommitAt: "2026-06-25T02:11:12Z"
lastReleaseAt: "2026-06-14T13:10:27Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 24
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/6bb0a01d0916cfafe704c5e174b21b698405517f89f5156da164dd82d3645bf2/zebinlu7-a11y/screen-flow-ai-agent"
---

</p>

<h2 align="center">Ai_Flow — 截图解析悬浮窗</h2>

  <b>截图 + 多模态大模型 / OCR → 流式输出到悬浮窗</b>
</p>

---

## 这是什么

启动后桌面常驻悬浮窗，底部输入框可直接打字对话。按下快捷键截取屏幕任意区域，大模型解析或 OCR 识别后结果流式显示。

- 纯文本对话：底部输入框打字，Enter 发送
- 截图提问：`Ctrl+D` 连续截图，缩略图累积，点发送统一提交
- OCR 识别：`Ctrl+R` 截图，腾讯云 OCR 返回可复制文字

## 操作演示

悬浮窗常驻桌面，底部随时打字。`Ctrl+F` 隐藏/显示。

`Ctrl+D` 进入截图，拖拽松手自动确认变绿，连续多框。`Ctrl+Z` 撤销。

框选完 Enter 放入对话框，缩略图累积，可删除单张。输入文字点发送。

## 快捷键

| 快捷键 | 功能 |
|--------|------|
| `Ctrl+D` | 截图发送 |
| `Ctrl+R` | OCR 文字识别 |
| `Ctrl+F` | 隐藏/显示窗口 |

## 功能

| 功能 | 说明 |
|------|------|
| 常驻悬浮窗 | 启动即显示，可拖拽移动、四角缩放、半透明置顶 |
| 连续截图 | 松手自动确认，多框同时提交，Ctrl+Z 撤销 |
| 缩略图预览 | 截图累积显示在输入框上方，可单独删除 |
| 多模态 AI | 豆包 VL，支持多图 + 文字混合输入 |
| 流式输出 | 逐字显示，Markdown 渲染 |
| 多轮对话 | 上下文自动管理 |
| OCR 识别 | 腾讯云 OCR，免费 1000 次/月 |
| 模型切换 | mini / lite / pro 三档随时切换 |
| 即时设置 | 悬浮窗底部按钮，随时配置 API Key / OCR 凭证 |
| 系统托盘 | 最小化到托盘，右键菜单操作 |
| 跨平台 | Windows / Mac / Linux |

## 快速上手

### 安装

```bash
git clone https://github.com/zebinlu7-a11y/screen-flow-ai-agent.git
cd screen-flow-ai-agent
pip install -r requirements.txt
pip install volcenginesdkarkruntime
```

### 配置

启动后点悬浮窗底部设置按钮，填写：

| 配置项 | 获取地址 |
|--------|----------|
| API Key |…
