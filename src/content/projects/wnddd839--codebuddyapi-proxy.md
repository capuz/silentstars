---
repo: "wnddd839/codebuddyapi-proxy"
name: "codebuddyapi-proxy"
description: "proxy-codebuddy"
readmeQualityOk: true
url: "https://github.com/wnddd839/codebuddyapi-proxy"
homepage: "https://wnddd839.github.io/codebuddyapi-proxy/"
language: "Go"
languages: ["Go"]
languagePcts: [97]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 17
recentReleases: 1
createdAt: "2026-05-26T12:34:35Z"
lastCommitAt: "2026-08-29T10:22:26Z"
lastReleaseAt: "2026-08-29T02:22:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 45
maintainers: ["wnddd839"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ee2cadf78a4bf13ab4a41f3efdf4b2eb7c7ed528b0e4c71d2e33ae292c94e21/wnddd839/codebuddyapi-proxy"
---

</p>

<h1 align="center">CodeBuddy Proxy</h1>

  <strong>把你的 CodeBuddy 账号，变成任何 OpenAI 客户端都能直连的 <code>/v1</code> 渠道。</strong>
</p>

</p>

</p>

---

## 一件事

你有一个 CodeBuddy 账号。你有一堆只认 OpenAI `/v1` 格式的工具——NewAPI、ZCode、Sub2API、各类 SDK 和客户端。

**CodeBuddy Proxy 是中间那一层协议翻译器。**

它用你自己的账号（OAuth 登录）直连 CodeBuddy 上游，对外暴露标准 OpenAI 接口。你不需要改客户端，不需要 `codebuddy --serve`，不需要碰任何浏览器插件。

```text
你的客户端  ──►  CodeBuddy Proxy  ──►  CodeBuddy 上游
(OpenAI格式)      (协议翻译/账号池)      (protocol_direct)
```

一个 Go 写的单文件二进制，跑在你自己的机器上。

---

## 它做了什么

| 能力 | 说明 |
| :--- | :--- |
| **协议直连** | OAuth 登录后直连上游，不依赖 `codebuddy --serve` 等本地中间进程 |
| **标准 OpenAI 形状** | `GET /v1/models` · `POST /v1/chat/completions`，流式与非流式都支持 |
| **多账号轮询** | 账号池按区域分组，失败自动换号；凭据以 `0600` 权限落盘 |
| **真实余额** | 管理台直读官网 Credits，显示「剩余 / 总额」 |
| **国内 / 国际** | 一键切换号池；**端点以账号自身区域为准**，不会把国内号打到海外 |
| **模型列表** | 走协议 `/v3/config`，60 秒缓存，可强制刷新 |
| **Token 用量透传** | 流式收尾补 usage chunk，含缓存命中统计（缓存字段兼容多上游别名） |
| **开箱即用** | 预编译二进制，无运行时依赖；首次启动自动生成 API Key |

---

## 快速开始

### 方式 A：下载即用（推荐）

从 [GitHub Releases](https://github.com/wnddd839/codebuddyapi-proxy/releases/latest) 下载对应平台文件，直接运行。

```powershell
# Windows
.\codebuddy-proxy-windows-amd64.exe
```

```bash
# Linux /…
