---
repo: "arschlochnop/VulnWatchdog"
name: "VulnWatchdog"
description: "VulnWatchdog 是一个自动化的漏洞监控和分析工具。它可以监控 GitHub 上的 CVE 相关仓库,获取漏洞信息和 POC 代码,并使用 GPT 进行智能分析,生成详细的分析报告。"
url: "https://github.com/arschlochnop/VulnWatchdog"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 99
forks: 24
openIssues: 0
closedIssues: 2
watchers: 6
contributors: 2
recentReleases: 0
createdAt: "2025-03-16T08:53:56Z"
lastCommitAt: "2026-06-23T23:17:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 48
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1c57c6a285c27a6c39f14e7a3dd7142594971a7afa4aff2a919a3c857d02e51/arschlochnop/VulnWatchdog"
---

# VulnWatchdog

VulnWatchdog 是一个自动化的 CVE 漏洞监控和分析工具，通过监控 GitHub 上的 CVE 相关仓库，获取漏洞信息和 POC 代码，并使用 GPT 进行智能分析，生成结构化的分析报告。

## ✨ 主要特性

- 🔍 **自动监控** - 每小时监控 GitHub CVE 相关仓库更新
- 📊 **漏洞解析** - 自动获取并解析 CVE 漏洞详细信息
- 🤖 **智能分析** - 使用 GPT 分析漏洞信息和 POC 代码
- 📝 **报告生成** - 生成结构化的 Markdown 分析报告
- 🔔 **实时通知** - 支持飞书等 Webhook 实时通知
- 🎯 **风险评估** - 自动评估漏洞风险等级和投毒风险
- 🔄 **多引擎搜索** - 支持多个 SearXNG 实例并发搜索，自动故障转移

## 📦 快速开始

### 方式一：GitHub Actions 部署（推荐）

#### 1. Fork 本仓库到你的 GitHub 账号

#### 2. 配置 Secrets

在仓库 Settings → Secrets and variables → Actions 中添加以下配置：

| Secret 名称 | 说明 | 是否必需 |
|------------|------|---------|
| `WEBHOOK_URL` | 飞书机器人 Webhook 地址 | 启用通知时必需 |
| `GPT_SERVER_URL` | GPT API 服务地址 | 启用 GPT 分析时必需 |
| `GPT_API_KEY` | GPT API 密钥 | 启用 GPT 分析时必需 |
| `GPT_MODEL` | GPT 模型名称（默认：gemini-2.0-flash） | 可选 |
| `GH_TOKEN` | GitHub Personal Access Token | 可选，推荐配置 |

#### 3. GitHub Token 配置（重要）

GitHub API 调用频率限制对比：

| 配置方式 | API 限制 | 推荐度 | 说明 |
|---------|---------|--------|------|
| 未配置 | 60次/小时 | ❌ | 容易触发限制 |
| GITHUB_TOKEN | 1000次/小时 | ✅ | Actions 自动提供 |
| GH_TOKEN | 5000次/小时 | ⭐ | 推荐配置 |

**配置 GH_TOKEN 步骤：**
1. 访问 [GitHub Settings → Tokens](https://github.com/settings/tokens)
2. 点击 "Generate new token…
