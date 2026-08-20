---
repo: "suifei/shownet"
name: "shownet"
description: "抓包 · HTTPS 证书 · 协议逆向 · AI 分析· JA3。 AI-native desktop traffic capture, protocol analysis, AI evidence reports, request replay, and code generation."
readmeQualityOk: true
url: "https://github.com/suifei/shownet"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [58, 31]
topics: ["ai", "api-reverse-engineering", "ja3", "mitm-proxy", "packet-capture", "tauri", "tls-fingerprint"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 34
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-08-02T15:57:24Z"
lastCommitAt: "2026-08-20T04:08:32Z"
lastReleaseAt: "2026-08-07T23:36:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 63
maintainers: ["suifei"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1320337958/c8f4d0d7-46d8-442d-8b6d-2f94d34f89f6"
---

</p>

<h1 align="center">ShowNet</h1>

  <strong>简体中文</strong> · <a href="./README.en.md">English</a>
</p>

<blockquote>
<p><strong>For international readers.</strong> Login works in a normal browser, then dies the moment you capture? Requests show up, but replay never lands? ShowNet keeps traffic, certificates, TLS fingerprints, and AI analysis on one local path so the protocol actually runs.</p>
<p>This page is the Chinese homepage. Please read the <a href="./README.en.md"><strong>English README</strong></a> for the full product story, setup path, and honesty bounds.</p>
</blockquote>

</p>

</p>

当前发布版：[v0.4.35](https://github.com/suifei/shownet/releases/tag/v0.4.35)。更细的能力边界见 [功能全景](https://github.com/suifei/shownet/blob/HEAD/docs/feature-map.md)。

## 它解决什么

抓包工具很多。痛点通常不在「能不能看见一条 HTTP」，而在看见之后还是还原不了。

- **登录在系统浏览器里好好的，套上代理就掉线。** 源站看的是 TLS 指纹、Cookie 是否被拆碎、语言头是否重复、出站是不是还带着无头痕迹。ShowNet 用内嵌 Chrome + MITM + 与 Chrome 对齐的出站握手，把这些一起落进同一个会话。
- **列表里有请求，自己重放永远 403。** 签名往往在页面脚本里现算：时间戳、挑战码、HMAC、国密。ShowNet 可以按请求顺序留下 Hook 与代码片段，再让 AI 只根据这份证据写出可复查的步骤。
- **手机 App 只能看到 CONNECT，看不到正文。** 本机一键装 CA，或让设备扫码装证并指向代理；证书锁定的 App 仍然只能看到元数据——产品不会假装能解开它。
- **分析完了还是得手抄客户端。**…
