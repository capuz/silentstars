---
repo: "1345695/edcloudwasm"
name: "edcloudwasm"
description: "edcloud_wasm"
readmeQualityOk: true
url: "https://github.com/1345695/edcloudwasm"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 195
forks: 210
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2026-03-01T19:37:40Z"
lastCommitAt: "2026-09-12T08:05:16Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 78
undervaluedScore: 31
maintainers: ["1345695"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a058888a8ac8ce25d228567f5ddb247055d8639d1d4a3418626805d160db85b/1345695/edcloudwasm"
---

## 项目简介 🚀

本项目是一个部署在 **Cloudflare Workers** 上的高性能多协议代理入口 / 订阅面板。

### 功能特性 ✨

- **多入站协议支持**
  - VLESS
  - Trojan
  - Shadowsocks
  - SOCKS5
  - HTTP
- **多传输方式与性能优化**
  - 同时支持 **WebSocket** 和 **xHTTP**传输方式；
  - 独家采用优化的 `manualPipe` 函数进行流量转发，相比传统stream流式的 `pipeTo` ，CPU 开销大幅降低 **6 倍**。
- **WASM 加速解析**
  - 将复杂的协议解析、节点模板拼装、订阅转换前处理等逻辑封装在 `protocol.wasm` 中；
  - 使用 Rust 编写并编译为 WebAssembly，由 `_worker.js` 在 Worker 侧调用；
  - 在兼顾体积与性能的同时彻底隐藏各个代理协议头部固定特征增强cloudflare代码审查难度。
- **订阅与面板一体化**
  - 访问 `/UUID` 或 `/PASSWORD` 即可打开管理面板页面，需要在代码或者环境变量配置uuid或者trojan密码
  - 订阅后端基于 cmliu 的实现，支持 Clash / SingBox / Surge / Quantumult / Loon / Stash 等多客户端订阅。

---

## 部署到 Cloudflare Workers ☁️

项目根目录下的 `wrangler.toml` 已提供基础配置，推荐的部署流程如下。

### 1. 准备工作

- **Fork 本仓库**
  - 在 GitHub 上 Fork 本仓库到你自己的账号。
- **连接到 Cloudflare Workers**
  - 在 Cloudflare Dashboard 中创建 Worker；
  - 将该 Worker 连接到你 Fork 之后的 GitHub 仓库，可选开启自动部署。

### 2. 核心配置（`wrangler.toml`）

- **入口文件**
  - `main = "_worker.js"`
- **兼容日期**
  - `compatibility_date = "2026-02-26"`
- **环境变量 `vars`**

  | 变量名       | 说明                                                                 |
  | ------------ | --------------------------------------------------------------------…
