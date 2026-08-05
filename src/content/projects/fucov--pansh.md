---
repo: "Fucov/Pansh"
name: "Pansh"
description: "爱数AnyShare云盘命令行工具；北航云盘(bhpan)；支持经典unix指令对云盘文件管理"
readmeQualityOk: true
url: "https://github.com/Fucov/Pansh"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 3
openIssues: 7
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-14T10:26:09Z"
lastCommitAt: "2026-08-05T06:07:25Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 71
undervaluedScore: 24
maintainers: ["Fucov", "dependabot[bot]", "TripleCamera"]
openGraphImageUrl: "https://opengraph.githubassets.com/30afa71acf0bd3f4a7695b400516afdb0246ef074ef0d12369a8b234a8929ae8/Fucov/Pansh"
---

# pansh

`pansh` 是一个面向 AnyShare / 网盘的命令行工具，支持交互式 shell 和单行命令两种使用方式，提供登录、目录浏览、查找、上传、下载等稳定能力。

## Python 版本

已明确兼容并优先测试：

- Python 3.10
- Python 3.11
- Python 3.12
- Python 3.13

推荐优先使用 Python 3.11 或 3.12。更老版本未支持；更新版本如果没有在 release note 中说明，视为“未专门验证”。

## 安装

PyPI 安装：

```bash
pip install pansh
```

更推荐用 `pipx` 隔离安装，能减少和现有科研/工程环境的依赖冲突：

```bash
pipx install pansh
```

安装后可验证：

```bash
pansh --help
python -m pansh --help
pansh --version
```

开发安装：

```bash
pip install -e .
```

## 快速开始

进入交互式 shell：

```bash
pansh
```

或显式进入 shell：

```bash
pansh shell
```

单行命令示例：

```bash
pansh ls .
pansh find 报告 --path .
pansh upload README.md .
pansh download /home/file.pdf ./downloads
```

## 登录模式

`pansh` 支持两种登录模式：

### 1. 持久化登录

这是默认模式。登录成功后会写入本地凭据和 token cache，后续命令可复用：

```bash
pansh login
```

### 2. 一次性登录 / session-only

只在当前进程或当前 shell 会话有效，不写入本地 token：

```bash
pansh --once
```

或：

```bash
pansh --once ls .
pansh --no-store-login
pansh login --no-store
```

说明：

- `--once` 是更短的入口，`--no-store-login` 也可继续使用。
- `--once` / `--no-store-login` 适合直接进入 shell，或执行单条命令时临时登录。
- `login --no-store` 只验证并建立当前进程会话，不更新本地缓存。
- `whoami` 在 session-only 登录后同样可用。
- 在交互式 shell 里，临时 token 会在整个会话期间保留；`exit` /…
