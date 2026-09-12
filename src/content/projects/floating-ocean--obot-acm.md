---
repo: "Floating-Ocean/OBot-ACM"
name: "OBot-ACM"
description: "Source code of the qqbot OBot's ACM a.k.a. O宝的AC梦."
readmeQualityOk: true
url: "https://github.com/Floating-Ocean/OBot-ACM"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["bot", "competitive-programming", "entertainment", "qqbot", "tools", "atcoder", "codeforces", "emoticon", "nowcoder"]
stars: 15
forks: 2
openIssues: 1
closedIssues: 3
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2023-11-04T17:13:03Z"
lastCommitAt: "2026-09-12T08:03:51Z"
lastReleaseAt: "2025-06-21T16:05:21Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 65
maintainers: ["Floating-Ocean", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dcb00f8c2a3c790058e200294faf9529fddb0c18406d6b4a63e9fa8d698b51eb/Floating-Ocean/OBot-ACM"
---

<br>
<h1 align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="/img/obot_logo_inv.png">
    <source media="(prefers-color-scheme: light)" srcset="/img/obot_logo.png">
  </picture>
</h1>
  <strong>A.k.a. O宝的AC梦 · 算竞平台实时做题记录查询和更多功能</strong><br>
</div><br>

</div>
</div><br>

## 开始之前

在运行机器人前，请将 **[`config_example.json`](https://github.com/Floating-Ocean/OBot-ACM/blob/HEAD/config_example.json)** 复制为 **`config.json`**，并根据文件内提示填写相关字段。

> [!CAUTION]
> 
> 项目依赖子模块，以 `git submodule` 的形式被引用在项目中，请在克隆时加上 `--recursive` 参数。

### 部署

请在部署之前，确保系统已安装 [`uv`](https://docs.astral.sh/uv/) 环境。

```bash
git clone https://github.com/Floating-Ocean/OBot-ACM.git --recursive
cd OBot-ACM
uv sync --frozen
```

### 运行

项目实现了一个简单的守护进程，可按需使用。

```bash
python main.py     # 带守护进程
python entry.py    # 直接运行
```

### 其他分支

本仓库包含主项目和一个分支，主项目是一个经过配置后可以独立运行的 **官方 QQ 机器人**，而分支则是一个 **Nonebot 机器人**。

主项目有放弃 `botpy` 并切换到 `Nonebot` 侧继续维护的计划，目前先等待 `Nonebot` 侧分支开发完成。

**[>> 前往 Nonebot 侧开发分支](https://github.com/Floating-Ocean/OBot-ACM/tree/refactor-nonebot)**

## Bot 能做什么

### 算法竞赛

- 训练榜单图片，基于 **[`Peeper-Board-Generator`](https://github.com/qwedc001/Peeper-Board-Generator)** 项目；

- 实用功能，基于算法竞赛平台…
