---
repo: "lint-md/cli"
name: "cli"
description: "Command tool of @lint-md, used in CI."
readmeQualityOk: true
url: "https://github.com/lint-md/cli"
homepage: "https://github.com/lint-md"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["lint-md", "markdown", "lint"]
stars: 28
forks: 4
openIssues: 0
closedIssues: 65
watchers: 1
contributors: 6
recentReleases: 2
createdAt: "2020-01-19T01:58:47Z"
lastCommitAt: "2026-08-22T04:07:41Z"
lastReleaseAt: "2026-07-30T14:37:49Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 69
maintainers: ["luojiyin1987", "hu-qi", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e92ea6667e47a2caf6d9b0e1a8c90095cd379bd6d98424b1737b95f9cb157604/lint-md/cli"
---

# @lint-md/cli

[English](https://github.com/lint-md/cli/blob/HEAD/README.en-US.md) | 简体中文

`@lint-md/cli` 是 [Lint Markdown](https://github.com/lint-md/lint-md) 的命令行工具，用于检查和修复中文 Markdown 文档中的格式问题。

## 项目定位

- 面向对象：中文技术文档、博客、知识库等 Markdown 内容。
- 核心能力：批量扫描、规则校验、自动修复（`--fix`）、CI 失败拦截。
- 运行方式：本包提供 CLI；规则引擎由 `@lint-md/core` 提供。

## 上下游关系

- **上游（依赖）**：[`@lint-md/core`](https://github.com/lint-md/lint-md/tree/master/packages/core)（规则定义与 lint/fix 能力）。
- **当前仓库职责**：参数解析、文件收集、并行执行、结果汇总与退出码控制。
- **下游（使用方）**：文档仓库、写作流水线、CI/CD（如 GitHub Actions）中调用 `lint-md`。

## 安装

```bash
npm i -D @lint-md/cli
```

或全局安装：

```bash
npm i -g @lint-md/cli
```

## 快速开始

```bash
# 检查单个文件
lint-md README.md

# 检查目录内所有 Markdown 文件
lint-md "docs/**/*.md"

# 自动修复
lint-md "docs/**/*.md" --fix
```

## Docker 使用

先构建镜像：

```bash
docker build -t lint-md .
```

只读检查场景：

```bash
docker run --rm \
  -v "$PWD:/work:ro" \
  -w /work \
  lint-md "docs/**/*.md"
```

对挂载目录执行 `--fix` 时，建议显式传入当前用户，避免把宿主文件写成容器内用户的属主：

```bash
docker run --rm \
  -u "$(id -u):$(id -g)" \
  -v "$PWD:/work" \
  -w /work \
  lint-md "docs/**/*.md" --fix
```

镜像默认使用非 root 用户运行；如果挂载目录权限较严格，`--user` 是最稳妥的用法。

## 常用参数

- `-c, --config…
