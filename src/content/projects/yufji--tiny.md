---
repo: "YufJi/tiny"
name: "tiny"
description: "Mini-program engine"
originalDescription: "小程序引擎"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/YufJi/tiny"
homepage: "https://yufji.github.io/tiny/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [76]
topics: ["miniapp", "miniprogram", "tiny"]
stars: 26
forks: 8
openIssues: 1
closedIssues: 24
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-04-18T13:19:56Z"
lastCommitAt: "2026-11-06T02:41:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 67
maintainers: ["YufJi"]
openGraphImageUrl: "https://opengraph.githubassets.com/80361d48c8c656d1f54b914796d5907891f6bd51f248dea6b655fb2e54227bf2/YufJi/tiny"
discussionCount: 1
---

# Tiny - Mini-program Engine

A mini-program engine based on [glass-easel](https://github.com/wechat-miniprogram/glass-easel): dual-side tree (service logic tree + host render tree), versioned bridge protocol, standalone compiler, and a browser debugger.

**Online demo**: [Tiny debugger online](https://yufji.github.io/tiny/devtool/index.html), no local build required. You can directly select the sample apps under `tests/apps` to run.

## Architecture

The kernel is strictly pure: `packages/runtime` does not depend on any host. The browser, iOS, and test hosts share the same kernel, and all environment capabilities are injected from the boundary.

```text
  Source (WXML / WXSS / JS / TS)
        │
        ▼
  tools/cli ──► manifest + service.js + templates.js + styles
        │
        ├───────────────────┬───────────────────┐
        ▼                   ▼                   ▼
  browser host          iOS host            test host
  iframe / port    JSCore / WKWebView  in-memory transport
        └───────────────────┼───────────────────┘
                            │ Injected: transport / canvas / renderer / API / resources…
