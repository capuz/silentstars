---
repo: "abai569/flox"
name: "flox"
description: "Flox转发面板"
readmeQualityOk: true
url: "https://github.com/abai569/flox"
homepage: "https://abai569.github.io/flvx/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [54, 43]
stars: 17
forks: 4
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 12
recentReleases: 4
createdAt: "2026-05-21T03:31:48Z"
lastCommitAt: "2026-08-25T03:55:58Z"
lastReleaseAt: "2026-06-01T01:22:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 45
maintainers: ["abai569"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e7ade0558be6271eb3d1d245f33822408190d13935c31c2a2304ea6375d9b29/abai569/flox"
---

# FLOX

> **联系我们**: [Telegram 群组](https://t.me/floxpanel) | [文档](https://abai569.github.io/flvx/)

## 特性

- 支持按 **隧道账号级别** 管理流量转发数量，可用于用户/隧道配额控制
- 支持 **TCP** 和 **UDP** 协议的转发
- 支持两种转发模式：**端口转发** 与 **隧道转发**
- 可针对 **指定用户的指定隧道进行限速** 设置
- 提供灵活的转发策略配置，适用于多种网络场景
- 面板分享，支持将节点分享给其他人，面板对接面板
- 支持分组权限管理，隧道分组、用户分组
- 支持批量功能，可以批量下发配置，启停等
- 支持隧道修改配置、转发修改隧道
- 🔐 **正式授权系统** - License 验证、域名绑定、过期控制

## 面板部署流程
---
### Docker Compose部署

**交互式安装（最新版）：**
```bash
bash <(curl -L https://raw.githubusercontent.com/abai569/flox/main/panel_install.sh)
```

**指定版本安装：**
```bash
bash <(curl -L https://raw.githubusercontent.com/abai569/flox/main/panel_install.sh) 3.6.5
```

**一键升级（无交互）：**
```bash
bash <(curl -L https://raw.githubusercontent.com/abai569/flox/main/panel_install.sh) update
```

**一键卸载（无交互）：**
```bash
bash <(curl -L https://raw.githubusercontent.com/abai569/flox/main/panel_install.sh) uninstall
```

## 节点卸载命令
---
### 国外节点卸载

**卸载命令（交互式）：**
```bash
bash <(curl -L https://raw.githubusercontent.com/abai569/flox/main/install.sh) uninstall
```

### 国内节点卸载

**卸载命令（交互式）：**
```bash
bash <(curl -L https://chfs.646321.xyz:8/chfs/shared/flox/install.sh) uninstall
```

> ⚠️ 升级时会自动检测并兼容带 `v` 或不带 `v` 的版本号格式。

####…
