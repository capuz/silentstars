---
repo: "LX-u0/glm2api"
name: "glm2api"
description: "GLM2API - OpenAI/Anthropic compatible reverse-engineered API adapter for ChatGLM (chatglm.cn) with admin panel"
url: "https://github.com/LX-u0/glm2api"
language: "Python"
languages: ["Python"]
languagePcts: [81]
stars: 12
forks: 4
openIssues: 3
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-06-17T04:49:38Z"
lastCommitAt: "2026-07-03T12:22:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 42
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/109d14ba1b8cd9d498531cc2cdb180bec266c0901f175c3bccd5bb6ba1fa37bd/LX-u0/glm2api"
---

# ChatGLM 2 API

`glm2api` 是一个本地代理服务，用来把 `chatglm.cn` 的网页接口转换成 OpenAI 兼容接口，方便你直接接入 OpenAI SDK、Cherry Studio、Open WebUI、LobeChat 或其他兼容 OpenAI API 的工具。

支持的主要接口：

- `POST /v1/chat/completions` — OpenAI Chat Completions（含流式 / 工具调用 / n>1）
- `POST /v1/messages` — Anthropic Messages API
- `POST /v1/responses` — OpenAI Responses API
- `POST /v1/images/generations` — 文生图（走 GLM cogView）
- `GET /v1/models` — 模型列表
- `GET /health` — 健康检查
- `/admin` — 内置管理面板（Dashboard / 账号管理 / 请求日志 / device_id 轮换审计 / 配置查看 / 系统监控）

## 项目结构

```
glm2api/
├── .github/workflows/    # CI 配置
├── configs/              # 配置示例 + systemd unit
├── docs/                 # 项目文档（架构 / API 兼容 / 管理面板 / 部署）
├── scripts/              # 启动 / 停止 / 状态脚本
├── src/glm2api/          # 源码
│   ├── core/             # 核心层：模型 / OpenAI 兼容 / tokenizer
│   ├── services/         # 服务层：上游对接 + 协议适配
│   ├── protocol/         # 协议层：工具调用解析
│   └── admin/            # 管理面板（前后端）
├── tests/                # 单元测试
├── main.py               # 入口
└── pyproject.toml
```

详细架构见 [docs/architecture.md](./docs/architecture.md)。

## 1. 使用前准备

启动前请确认：

- 你已经登录过 `https://chatglm.cn`
> 其实不登陆也行,但是会有部分限制?
- 你能获取到有效的 `refresh_token`，或者接受游客模式的能力限制
- 本地已准备好 Python 虚拟环境…
