---
repo: "HogaStack/magic-dash"
name: "magic-dash"
description: "🎩💫 面向纯Python全栈应用开发的快捷构建脚手架，内置多种通用应用模板"
url: "https://github.com/HogaStack/magic-dash"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["dash", "plotly-dash", "python"]
stars: 119
forks: 20
openIssues: 2
closedIssues: 2
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2024-11-24T11:58:41Z"
lastCommitAt: "2026-06-29T07:21:40Z"
lastReleaseAt: "2025-05-06T02:40:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 72
undervaluedScore: 39
maintainers: ["CNFeffery"]
openGraphImageUrl: "https://opengraph.githubassets.com/06308891b0c02d832dfcbfa9fe7a3fb6e95af9bb1f36b180540d896194e84fe7/HogaStack/magic-dash"
---

</p>

<h1 align="center">magic-dash</h1>

</p>

`magic-dash`是面向[Dash](https://github.com/plotly/dash)应用开发的命令行脚手架，用于快速生成可运行、可扩展的`Python`数据应用项目。它内置单页面工具、多页面持续扩展应用和支持复杂用户与部门关系的管理系统模板，覆盖路由、菜单、配置、回调组织、状态页、数据库模型、用户登录、管理与鉴权等常见工程起点。

## 1 快速开始

### 安装&更新

- 最新正式版本

```bash
pip install magic-dash -U
```

- 最新预发布版本

```bash
pip install magic-dash -U --pre
```

查看当前安装版本：

```bash
magic-dash --version
```

### 查看内置模板项目列表

```bash
magic-dash list
```

当前可直接创建的内置模板包括：

- `simple-tool`
- `magic-dash`
- `magic-dash-pro`

### 以magic-dash模板为例创建项目

```bash
magic-dash create --name magic-dash --backend fastapi
```

等价的简写形式为：

```bash
magic-dash create -n magic-dash -b fastapi
```

也可以省略`--backend`或`-b`，通过交互式菜单选择后端类型。随后命令会继续提示输入项目名称，直接回车时，默认生成名为`magic-dash`的项目目录。

### 进入已创建项目，安装依赖并启动应用

```bash
cd magic-dash
pip install -r requirements.txt
python app.py
```

默认访问地址：

```text
http://127.0.0.1:8050
```

更多命令细节见[`CLI`命令说明](./docs/cli.md)。

### 内置模板公共静态资源

`magic-dash-pro`相关模板共用的登录页视频和背景图片由包内`public_assets`统一维护。通过`magic-dash create`创建`magic-dash-pro`项目时，`CLI`会自动把这些资源复制到生成项目的`assets/`目录。

源码开发时，可使用以下命令同步或清理内置模板目录下的公共静态资源副本：

```bash
magic-dash init-assets
magic-dash remove-assets
```

## 2 内置模板列表

| 模板 |…
