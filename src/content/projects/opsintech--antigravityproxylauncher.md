---
repo: "OpsinTech/AntigravityProxyLauncher"
name: "AntigravityProxyLauncher"
description: "Provides a transparent SOCKS5 proxy injection solution for Antigravity / IDE / Gemini: based on DYLD injection that intercepts getaddrinfo / connect, FakeIP multi-process synchronized domain mapping, and stable support for Electron / Go subprocesses. Includes a MITM proxy that translates AI model requests across vendors, and a native GUI for one-click repair/launch."
originalDescription: "为 Antigravity / IDE / Gemini 提供透明的 SOCKS5 代理注入方案：基于 DYLD 注入拦截 getaddrinfo / connect，FakeIP 多进程同步域名映射，稳定支持 Electron / Go 子进程。附带 MITM 代理实现 AI 模型请求跨厂商转译，原生 GUI 一键修复/启动。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/OpsinTech/AntigravityProxyLauncher"
homepage: "https://github.com/OpsinTech/AntigravityProxyLauncher/wiki"
language: "C++"
languages: ["C++", "Swift"]
languagePcts: [61, 24]
topics: ["antigravity", "claude-code", "codex", "gemini", "google", "macos", "proxy"]
stars: 110
forks: 16
openIssues: 1
closedIssues: 14
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2026-01-31T14:58:33Z"
lastCommitAt: "2026-11-04T02:57:02Z"
lastReleaseAt: "2026-05-26T11:01:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 40
maintainers: ["MeehanCole", "chenmiaoming"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f54e23d9e05e1f83584b7241cba0fb89426ad8a36f5573b3dc2b7cc50b16745/OpsinTech/AntigravityProxyLauncher"
discussionCount: 0
---

# Antigravity Proxy Launcher

Routes the Antigravity / Gemini desktop app through a custom proxy, with support for cross-vendor translation of AI model API requests.

> Supported: Antigravity, Antigravity IDE, Gemini, Agy CLI (Claude Code / Codex in later versions)

---

## What problems it solves

| Pain point | Solution |
|------|---------|
| Antigravity / Gemini desktop does not use the system proxy | dylib injection forces all traffic through a SOCKS5/HTTP proxy |
| Claude API is too expensive, want to switch to DeepSeek | MITM proxy intercepts API requests and translates them to the specified vendor according to rules |
| Manually editing config files is too troublesome | Native macOS GUI, WYSIWYG |
| Checking quota requires visiting a web page | Built-in OAuth login, real-time display of remaining quota for each model |

---

## Quick start

1. **Download** the `.dmg` and drag it into `/Applications/`
2. Before **opening**, make sure the proxy client (Clash / Mihomo) is running
3. Go to **Proxy settings**, confirm the node, and click **Detect** to verify connectivity
4. Return to **Running status**, select the target app, and click **Repair**
5. After repair completes, click…
