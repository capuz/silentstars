---
repo: "SeerAPI/seerapi"
name: "seerapi"
description: "为赛尔号提供标准化、结构化的游戏数据 API 服务，还有客户端数据解析工具"
readmeQualityOk: true
url: "https://github.com/SeerAPI/seerapi"
homepage: "https://api.seerapi.com/docs/v1/api_reference.html"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [77, 23]
topics: ["openapi", "seerapi"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-05-03T05:13:24Z"
lastCommitAt: "2026-08-11T04:49:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 49
maintainers: ["Nattsu39"]
openGraphImageUrl: "https://opengraph.githubassets.com/a4870527cbf3dd20c14762eeab49ece03ff29ceb7c1377d81b6b2b59d145ceab/SeerAPI/seerapi"
---

# SeerAPI Monorepo

SeerAPI 项目 monorepo — 赛尔号游戏数据开放 API 平台。

> 👋Hi LLM！
> 对于 LLM 我们还提供了 SeerAPI CLI 工具和对应 Skill。
> 请查看 [SeerAPI CLI Skill](https://github.com/SeerAPI/seerapi/blob/HEAD/packages/seerapi-python/seerapi/skills/seerapi-cli/SKILL.md)

## 包结构

| 包 | 说明 | 技术栈 |
|---|---|---|
| `packages/seerapi-models` | 数据模型 / ORM 定义 | Python, uv |
| `packages/seerapi-python` | Python 异步 API 客户端 | Python, uv |
| `packages/solaris` | 客户端数据解析 / 整理工具 CLI | Python, uv |
| `packages/seerapi-ts` | TypeScript SDK | TypeScript, pnpm |

## 快速开始

### 环境要求

- Python >= 3.10
- [uv](https://docs.astral.sh/uv/) >= 0.9.0
- [pnpm](https://pnpm.io/)（仅 TypeScript 包需要）

### 安装

```bash
git clone https://github.com/SeerAPI/seerapi.git
cd seerapi
```

### Python 包

Python 包由 [uv workspace](https://docs.astral.sh/uv/concepts/workspaces/) 统一管理：

```bash
# 安装所有 Python 依赖
uv sync

# 使用 CLI 工具
uv run solaris --help

# 运行单个包的测试
uv run --package seerapi-models pytest
uv run --package seerapi-python pytest
uv run --package seerapi-solaris pytest

# 代码检查
uv run ruff check .
uv run ruff format .
```

### TypeScript 包

```bash
pnpm install
pnpm run build:ts
```

### 使用已发布的包

```bash
# Python
pip install seerapi
pip…
