---
repo: "ssfun/CLIProxyAPI-Pro"
name: "CLIProxyAPI-Pro"
description: "CLIProxyAPI Pro is a minimal customization-layer for CLIProxyAPI with SQLite usage service and account-inspection scheduler."
readmeQualityOk: true
url: "https://github.com/ssfun/CLIProxyAPI-Pro"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [44, 33]
stars: 80
forks: 16
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-08T03:13:53Z"
lastCommitAt: "2026-08-14T05:15:42Z"
lastReleaseAt: "2026-05-29T04:29:42Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 40
maintainers: ["ssfun", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/baf054c9845709383a9e1ad7e5b9b1c76b620b0e590dffa64b18c2c86a011f28/ssfun/CLIProxyAPI-Pro"
---

# CLIProxyAPI Pro

CLIProxyAPI Pro 是对两个 upstream 项目的最小化定制层集合：

- `cliproxyapi-pro-core/`：基于 `router-for-me/CLIProxyAPI` 的后端 Docker 构建定制。
- `cliproxyapi-pro-management/`：基于 `router-for-me/Cli-Proxy-API-Management-Center` 的前端管理中心定制。

本项目不维护 upstream 的完整 fork，而是维护可重复应用的 patch、overlay 和构建流程。发布时会拉取 upstream 最新 release，应用本项目定制层，再生成 Pro 版本产物。

## 核心特色

- 持久化保存请求数据，支持导入、导出、webdav 备份
- 账号巡检支持 Codex、Claude、Antigravity、Gemini CLI、Kimi、xAI
- 账号巡检结果（配额和账号异常状态）支持持久化到配额管理和认证文件
- 账号巡检支持自动化启用、禁用、删除、主动刷新令牌
- 账号巡检针对 Antigravity 软封禁和 xAI 可用性异常提供可选深度检测
- 路由策略页面统一管理 upstream 路由行为与按 provider 配置的请求状态保护
- 二进制内建代理池，把多个 HTTP/SOCKS 节点汇聚为固定的本地 SOCKS5 地址，支持轮询、加权、健康隔离与故障转移
- 二进制内建 OAuth 账号策略，可按多个提供商的账号套餐配置模型排除、前缀、优先级和调度权重，并同步约束模型列表和账号调度

## 项目结构

```text
.
├── cliproxyapi-pro-core/
│   ├── Dockerfile
│   ├── Dockerfile.runtime
│   ├── QUOTA_PROVIDER.md
│   ├── entrypoint.sh
│   ├── embeddedusage/
│   └── patches/
│
├── cliproxyapi-pro-management/
│   ├── apply.sh
│   ├── apply_customizations.py
│   ├── monitoring-locales.json
│   └── overlay/
│
├── scripts/validation/
└── .github/workflows/
    ├── ci.yml
    ├── release-core.yml
    └── release-management.yml
```

## 子项目说明

### cliproxyapi-pro-core

后端定制层，用于构建…
