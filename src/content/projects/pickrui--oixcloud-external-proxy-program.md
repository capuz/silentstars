---
repo: "pickrui/oixcloud-external-proxy-program"
name: "oixcloud-external-proxy-program"
description: "oixcloud external-proxy helper — distribution (docs + binaries via Releases)"
readmeQualityOk: true
url: "https://github.com/pickrui/oixcloud-external-proxy-program"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [61, 35]
stars: 113
forks: 10
openIssues: 5
closedIssues: 20
watchers: 3
contributors: 4
recentReleases: 10
createdAt: "2026-06-30T03:45:42Z"
lastCommitAt: "2026-11-11T11:04:08Z"
lastReleaseAt: "2026-11-11T10:11:42Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 94
undervaluedScore: 35
maintainers: ["pickrui", "github-actions[bot]", "quchao"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e9f9f00c0b9b2bee872509cf133d925ecf02901f501cc2bea9461c42a06c5c4/pickrui/oixcloud-external-proxy-program"
---

# oixCloud Helper

把 oixCloud 节点接入 Surge，或使用 OpenSurge GUI 构建 DHCP/DNS 全屋网关<br>Connect oixCloud nodes to Surge, or build a DHCP/DNS gateway with the OpenSurge GUI

**[中文](#中文) · [English](#english)**

## 中文

### 选择部署方式

| 场景 | 文档 |
|---|---|
| 在当前 Mac 使用 Surge | 继续阅读本页 |
| 使用 Homebrew 安装与管理服务 | [Homebrew 安装](https://github.com/pickrui/oixcloud-external-proxy-program/blob/HEAD/docs/configuration.md#homebrew-安装) |
| 使用 OpenSurge GUI 与 DHCP/DNS 接管 | [OpenSurge 接入指南](https://github.com/pickrui/oixcloud-external-proxy-program/blob/HEAD/docs/opensurge.md) |
| 部署到 Linux、NAS 或家用服务器 | [Docker 部署](https://github.com/pickrui/oixcloud-external-proxy-program/blob/HEAD/docs/docker.md) |
| 保留现有 Surge 配置或自定义规则 | [配置参考](https://github.com/pickrui/oixcloud-external-proxy-program/blob/HEAD/docs/configuration.md) |
| 安装或连接失败 | [排错](https://github.com/pickrui/oixcloud-external-proxy-program/blob/HEAD/docs/troubleshooting.md) |

### macOS 快速开始

准备：

- Surge for Mac
- 可用的 oixCloud 账户，支持 Access Token、邮箱密码或 Google 登录
- macOS 12 或更高版本

1. 下载并解压仓库

   [下载 ZIP](https://github.com/pickrui/oixcloud-external-proxy-program/archive/refs/heads/main.zip)

2. 双击 `启动 oixCloud.command`

   选择「常驻启动」可在登录 Mac…
