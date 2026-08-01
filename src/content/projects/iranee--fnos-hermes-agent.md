---
repo: "iranee/fnos-hermes-agent"
name: "fnos-hermes-agent"
description: "Fnos 原生 Hermes Agent"
readmeQualityOk: true
url: "https://github.com/iranee/fnos-hermes-agent"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [47, 46]
stars: 47
forks: 7
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-07-14T12:06:45Z"
lastCommitAt: "2026-08-01T06:13:06Z"
lastReleaseAt: "2026-07-25T15:32:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 37
maintainers: ["iranee"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4403b71f1e49feb7bbfc8c2058488c616d4a024ad26274064da6dc3bae8f680/iranee/fnos-hermes-agent"
---

# Hermes Agent for fnOS

Hermes Agent 是专为适配飞牛 NAS（fnOS）的 AI 助手应用，通过原生`fpk` 应用中心部署。采用基于 Node.js 的 Monitor 服务进行进程管理，提供基于 Web 的控制面板用于配置和对话交互。

## 更新提醒
* 我们有另一个全新的版本，支持一键配置微信Claw以及各种bot，请关注：https://github.com/veenyi/fnos-hermes-agent
* 本项目不定期更新，也可能只留存长期稳定版本

  
## 功能特性

支持多模型供应商接入（OpenRouter、OpenAI、Anthropic、Kimi、MiniMax 等）、跨平台消息网关集成（微信、Telegram、Discord、Slack、QQ、钉钉、飞书等）、带图片识别的文件操作功能，以及跨会话的对话记忆能力。
* 支持网页端对话，支持完整的Markdown输出
* 支持js版转换url为二维码方便扫码
* 支持对话传入图片、文件供AGENT分析

## 安装与配置

### 环境要求

- 可用存储空间：约 1GB（含 Python 依赖包和缓存）
- 依赖项：bunjs（安装时自动处理）

### 安装步骤

1. 在飞牛应用中心添加第三方源或直接上传 `.fpk` 安装包
2. 等待安装完成，桌面出现应用图标
3. 点击图标打开控制面板
4. 在「配置」页选择模型供应商并填入 API Key
5. 在「概览」页面，点击启动即可进行对话

应用启动后自动监听内部端口，无需手动配置网络，通过应用中心的快捷入口进入。

## 目录结构

```
/app/home/data/                    # 应用数据目录（持久化）
├── venv/                          # Python 虚拟环境
│   └── bin/                       # Python 可执行文件（python3、uv、hermes）
├── .uv-cache/                     # uv 包缓存
├── config.yaml                    # 主配置文件
├── .env                           # 环境变量（API Key 等）
├── sessions/                      # 会话历史记录
├── skills/                        # 技能库（随版本更新）
├── workspace/                     # 工作区文件（生成的报告、代码等）
├── weixin/accounts/…
