---
repo: "hefy2027/cf-manager"
name: "cf-manager"
description: "An all-in-one multi-account dashboard for Cloudflare. Manage Workers, DNS, KV/D1/R2 storage, AI inference & browser rendering visually, with an OpenAI-compatible API for external integration."
url: "https://github.com/hefy2027/cf-manager"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [61, 36]
stars: 75
forks: 44
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-06-13T02:37:19Z"
lastCommitAt: "2026-07-03T06:24:49Z"
lastReleaseAt: "2026-06-23T02:26:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 79
undervaluedScore: 36
maintainers: ["hefy2027"]
openGraphImageUrl: "https://opengraph.githubassets.com/6701ed3d17410fe5bd14233fcad99d24f605a5ca937244c721e77ad16bbdb1cb/hefy2027/cf-manager"
---

# CF Manager

一站式 Cloudflare 多账户管理平台。提供可视化界面统一管理 Workers、Pages、DNS、KV、D1、R2、AI 推理、浏览器渲染等服务，同时暴露 OpenAI 兼容 API 供外部项目调用。

## 在线演示

| | |
|---|---|
| 地址 | [https://mgrcf.pages.dev/admin/](https://mgrcf.pages.dev/admin/) |
| 密码 | `mgrcfbest` |

> 演示站部署在 Cloudflare Pages + D1，无需 Docker。根路径显示伪装的 nginx 欢迎页，管理界面通过 `/admin/` 访问。

---

## 功能特性

### 多账户管理
- 支持 API Token 和 Global API Key 两种认证方式，详见 [账户认证文档](docs/account-auth.md)
- 多账户统一管理，自动加密存储凭证
- AI 推理和浏览器渲染支持多账户自动轮换，配额耗尽自动切换

### 仪表盘
- 实时展示各账户今日配额使用量（Workers 请求数、AI 神经元、浏览器渲染时长）
- 可视化进度条和最近操作审计日志

### Workers / Pages 管理
- 查看、部署、删除 Workers 脚本和 Pages 项目
- 支持单个部署和跨账户批量部署（Workers + Pages）
- 管理脚本绑定、环境变量、路由、自定义域名
- Pages 部署历史查看和回滚

### DNS 管理
- 按域名查看和管理 DNS 记录（A / AAAA / CNAME / MX / TXT 等）
- 一键切换 Cloudflare 代理状态
- 批量操作支持

### 存储管理
- **KV 命名空间**：浏览键值对，支持创建/编辑/删除命名空间和键
- **D1 数据库**：管理数据库，SQL 查询执行，表结构创建/修改（添加列、重命名列、删除列、删除表）
- **R2 存储桶**：管理对象，支持文件上传/下载/删除，图片在线预览

### AI 推理
- 支持所有 Cloudflare Workers AI 模型
- 流式对话界面，Reasoning 模型思考过程实时展示
- 历史对话上下文支持
- 多账户自动轮换，配额耗尽无缝切换

### 浏览器渲染
- 支持 5 种渲染模式：截图、HTML 内容、Markdown 转换、PDF 生成、链接提取
- 多账户限速和配额管理
- 渲染时长实时统计

### OpenAI 兼容 API
- 暴露 `/v1/chat/completions` 和 `/v1/models` 接口
- 完全兼容 OpenAI SDK，可直接对接…
