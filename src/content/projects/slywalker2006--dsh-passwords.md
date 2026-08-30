---
repo: "slywalker2006/dsh-passwords"
name: "dsh-passwords"
description: "Server-grade gateway that turns DeepSeek Harness into a multi-tenant platform: remote access + auto HTTPS, subuser permissions & quotas, sandbox enforcement, encrypted auth, audit log."
readmeQualityOk: true
url: "https://github.com/slywalker2006/dsh-passwords"
homepage: "https://github.com/slywalker2006/dsh-passwords"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["authentication", "deepseek", "deepseek-harness", "dsh-plugin", "security", "self-hosted", "dsh", "gateway", "multi-tenant", "remote-access"]
stars: 34
forks: 10
openIssues: 0
closedIssues: 15
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-08-14T06:35:16Z"
lastCommitAt: "2026-08-30T09:21:46Z"
lastReleaseAt: "2026-08-15T22:06:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 52
maintainers: ["slywalker2006", "ZielonaNoir"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbba69a2dafee047d7802859570f4254bbffbe2a7826a5600db9fa96ecb127dd/slywalker2006/dsh-passwords"
discussionCount: 2
---

# dsh-passwords

[English](https://github.com/slywalker2006/dsh-passwords/blob/HEAD/README_en.md) | 简体中文

</p>

  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
</p>

  <strong>给 DeepSeek Harness 加一层服务器级认证网关，使其成为可公网部署的多租户平台</strong><br>
  <em>登录认证 · 自动 HTTPS · 多租户权限 · 会话授权 · 审计加密 · 中英双语</em>
</p>

[功能](#功能) · [快速开始](#快速开始) · [首次配置](#首次配置) · [自动 HTTPS](#自动-https) · [部署拓扑](#部署拓扑) · [配置参考](#配置参考) · [常见问题](#常见问题) · [安全与隐私](#安全与隐私) · [参与贡献](#参与贡献)

</div>

---

dsh 自带的网页界面没有登录与权限控制，公网部署后任何拿到地址的人都能直接使用。dsh-passwords 在 dsh 前面运行一个网关：未登录访问只见到登录页，登录后按账号执行权限与配额控制。项目收录于 [Awesome DeepSeek Harness](https://github.com/0xsline/awesome-deepseek-harness#security--governance)（Security & Governance）与 [Awesome DSH Plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin#security--permissions)（Security & Permissions）。

## 功能

- **登录认证**：首次配置创建主用户，之后所有访问先过登录页；会话 12 小时有效
- **自动 HTTPS**：向 Let's Encrypt 自动签发并续期证书，80 端口自动跳转 443，无需配置
- **多租户**：一个主用户加任意多个子用户，账号管理全部在 dsh 设置页完成
- **权限与配额**：工作区白名单、逐会话开关、每小时 token 上限、每日时长上限、沙盒三档、上传与下载开关、封禁
- **会话授权**：工作区权限不自动包含其中全部会话，主用户逐会话授予；归档状态在工作区列表与会话列表间保持一致
- **运维视图**：主用户可查看全部工作区与会话，下载非敏感普通文件
-…
