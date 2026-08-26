---
repo: "xbzbing/dsh-auth-gateway"
name: "dsh-auth-gateway"
description: "为 DeepSeek Harness 增加远程访问能力，并通过密码和 OTP 进行安全加固。 Adds secure remote access to DeepSeek Harness with password auth and TOTP two-factor authentication (2FA)."
readmeQualityOk: true
url: "https://github.com/xbzbing/dsh-auth-gateway"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [98]
topics: ["dsh-plugin", "auth-gateway", "deepseek-harness", "security", "2fa"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 8
createdAt: "2026-08-14T19:39:20Z"
lastCommitAt: "2026-08-26T04:15:29Z"
lastReleaseAt: "2026-08-26T04:15:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 57
maintainers: ["xbzbing", "adra2n", "meowtech"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1270d13299f90c7a35b095bddd5539d58f93b1ec954a5b4d3709b1a6f2ec384/xbzbing/dsh-auth-gateway"
---

# dsh-auth-gateway

</p>

</p>

为 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) Web 提供认证门禁的 Cordis 插件：**密码认证 + TOTP 双因素认证 + 多层防爆破 + 会话管理 + 登录审计**，并在网关层**真实拦截每一个请求**（HTTP 与 WebSocket），未认证流量无法触及后端。

`dsh web` 本身没有任何认证层；配置平面（settings/credentials RPC）被 dsh 钉死在 loopback——官方注释写道"直到真实认证层存在"（until a real authentication layer exists），但从未实现或指定方案。本插件以进程内网关形态自行承担该角色补齐认证面：对外端口由网关独占，内部 webserver 由 bundle patch 钉在回环地址，网关是唯一入口。

本项目已支持最新的 dsh 0.1.1-rc.2 版本。

## 安装和卸载

```bash
# 安装（从 npm registry）
dsh plugin --profile web add dsh-auth-gateway

# 启动（对外端口 8080，内部 webserver 自动挪到 8081）
dsh web --port 8080

# 卸载（先清凭据，再移除插件）
~/.dsh/profiles/web/node_modules/.bin/dsh-auth-gateway-uninstall
dsh plugin --profile web remove dsh-auth-gateway
```

- 支持从 GitHub / 本地目录安装，见 [docs/zh/INSTALL.md](https://github.com/xbzbing/dsh-auth-gateway/blob/HEAD/docs/zh/INSTALL.md)；
- 忘记密码用 `dsh-auth-gateway-reset` 重置（重启后控制台打印新初始密码）；
- 部署指南：[docs/zh/DEPLOYMENT.md](https://github.com/xbzbing/dsh-auth-gateway/blob/HEAD/docs/zh/DEPLOYMENT.md)

## 功能特性

- **密码认证**：首次部署自动生成初始密码（控制台打印，一次性），登录后引导设置个人密码（scrypt 哈希存储），之后每次访问需登录；
- **双因素认证（TOTP）**：可选启用，兼容 Google Authenticator、Authy、1Password 等主流认证器；含一次性备份代码（scrypt…
