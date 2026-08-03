---
repo: "liyan-lucky/rustdesk-api-server-pro"
name: "rustdesk-api-server-pro"
description: "RustDesk API Server Pro 兼容增强版，提供自托管 API 服务与管理后台"
readmeQualityOk: true
url: "https://github.com/liyan-lucky/rustdesk-api-server-pro"
language: "TypeScript"
languages: ["TypeScript", "Go", "Vue"]
languagePcts: [39, 35, 22]
topics: ["rustdesk-api-server", "rustdesk-server"]
stars: 21
forks: 7
openIssues: 5
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-03-09T23:54:19Z"
lastCommitAt: "2026-08-03T06:43:07Z"
lastReleaseAt: "2026-07-24T05:44:05Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 39
maintainers: ["liyan-lucky", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4bb71c3f2c96793d2934492f649bcfb8c8890d24c8ec549f11242eb3e9a905f3/liyan-lucky/rustdesk-api-server-pro"
---

# RustDesk API Server Pro（兼容增强版）

[English](https://github.com/liyan-lucky/rustdesk-api-server-pro/blob/HEAD/README_EN.md)

RustDesk API Server Pro 是一个面向 RustDesk 客户端的第三方 API 服务端实现，包含管理后台前端（`soybean-admin`）。当前版本以“兼容增强”为目标，优先覆盖最新客户端主流程所需的 API，并尽量保持部署轻量与可维护。

🚨 <span style="color:red;">本项目部分内容由 ChatGPT 生成，仅供参考；请在生产环境前务必自行验证、严格测试，并依据业务需求谨慎调整。</span>

本文档为中文详细版，包含功能清单、架构图、部署步骤、配置说明、截图、FAQ 与 License。更细的专项文档请见文末文档索引。

## 最近更新

- 兼容 RustDesk 客户端 1.4.9 主流程 API
- 补齐地址簿兼容别名：`/api/ab/get`、`/api/ab/shared-profiles`、`/api/ab/shared/profiles`、`/api/ab/shared_profiles`
- 修复共享地址簿跨用户读取和写入归属：共享读取可访问 owner 数据，写入需 owner 或 `rule >= 2`
- 对齐官方客户端新增 peer 时的 `same_server` 布尔/null/缺省请求形态
- 修复心跳响应 `modified_at`：未分配策略时回显客户端值，避免触发持续策略重同步
- 新增"我的同步设备"菜单：管理员可查看所有设备，普通用户可登录查看自己的同步设备
- 完善“通讯录”菜单：联系人和标签一次展示当前账户下全部地址簿数据，以地址簿名称列和表头筛选切换视图；地址簿、联系人、标签支持 CSV 批量导入导出
- 管理员可为指定用户创建地址簿；普通用户只能创建自己的地址簿，且不能删除管理员代建的地址簿
- 新增“关于与更新”页面：显示运行版本和兼容版本，在线更新检查地址可修改并保存在浏览器
- 新增版本自动递增系统：每次 CI 构建自动递增 PATCH 版本号（VERSION 文件为单一事实来源）
- 首页更新日志区域显示服务端版本号与构建时间，方便确认是否更新成功
- Docker 镜像发布改为质量门禁后执行：推送到 `main` 后，线上流程全部成功才自动推送 GHCR（`latest` + `main` + `sha-xxx` 标签）
- 修复管理员 `/userinfo` API 未返回 `roles` 导致前端菜单过滤异常的问题
- 修复 `CompatSysinfoVersion` 从常量改为函数后…
