---
repo: "onlyoyrao999/proxyipsinpSynchronization-tool"
name: "proxyipsinpSynchronization-tool"
description: "这是在 GitHub Actions 上运行的 Cloudflare IP 扫描与 DNS 同步工具。它会自动生成大量 CF IP 并通过 API 测速挑选出Proxyip IP（默认只选择10 个 USA 节点），并自动更新到您的 Cloudflare DNS 记录中。"
readmeQualityOk: true
url: "https://github.com/onlyoyrao999/proxyipsinpSynchronization-tool"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 60
forks: 57
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-19T06:25:16Z"
lastCommitAt: "2026-09-11T08:14:52Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 80
undervaluedScore: 40
maintainers: ["github-actions[bot]", "onlyoyrao999"]
openGraphImageUrl: "https://opengraph.githubassets.com/3efff5c0d45d7efec7228445a9a6120be4f23384c35c14e727feca0fc5659011/onlyoyrao999/proxyipsinpSynchronization-tool"
---

# Cloudflare IP Auto Scanner & Sync (CF Proxyip 扫描 自动同步器)

这是一个运行在 GitHub Actions 上的全自动 Cloudflare  IP 扫描与 DNS 同步工具。
它会自动生成大量 CF IP 并通过 API 测速挑选出最优的 Proxyip，并自动更新到你的 Cloudflare DNS 记录中。同时具备**自适应热点网段学习**功能，大幅提升扫描效率。

---

## 🚀 部署与配置

### 1. 配置 GitHub Secrets (必须)
要想让脚本正常运行，你需要进入你的 GitHub 仓库：
点击右上角的 **Settings** -> **Secrets and variables** -> **Actions** -> **New repository secret**，依次添加以下 4 个环境变量：

| Secret 名称 | 说明 | 示例 |
| --- | --- | --- |
| `CF_EMAIL` | 你登录 Cloudflare 的邮箱账号 | `your@email.com` |
| `CF_API_TOKEN` | Cloudflare 的 Global API Key (全局 API 密钥) | `8a9b...` |
| `CF_ZONE_ID` | 你域名的 区域 ID (在 CF 域名概述页面右下角，32位字符串) | `9841...` |
| `CF_TARGET_DOMAIN` | 你的主域名（程序不仅会将所有神仙 IP 同步到主域名，还会根据地区自动拼接子域名，如 `sjc.yourdomain.com`） | `yourdomain.com` |

配置好后，你可以点击仓库顶部的 **Actions** -> 选中 **Cloudflare IP Auto Scanner & Sync** -> 点击 **Run workflow** 来手动触发一次运行，检查是否正常。

---

## ⚙️ 高级自定义设置

### 🌍 1. 全局负载均衡：主域名+子域名双重同步 (新功能!)
现在的同步逻辑更加强大，并且你拥有绝对的控制权：
- **子域名细分**：扫出来的极品 IP，依然会自动根据地区推送到对应的子域名上（例如 `lax.yourdomain.com`、`sjc.yourdomain.com`）。
- **主域名汇总开关**：你可以通过代码里的 `SYNC_MAIN_DOMAIN` 开关自由控制。开启后，**所有地区**扫出来的神仙节点会被全盘汇总，并统一推送到你的**主域名**上，让主域名拥有全球负载均衡的能力！如果设置为 `NO` 则不会影响你的主域名。

### 🧠 2. 核心亮点：自适应热点网段追踪…
