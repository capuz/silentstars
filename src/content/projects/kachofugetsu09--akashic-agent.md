---
repo: "kachofugetsu09/akashic-agent"
name: "akashic-agent"
description: "my akashic"
readmeQualityOk: true
url: "https://github.com/kachofugetsu09/akashic-agent"
language: "Python"
languages: ["Python"]
languagePcts: [88]
stars: 486
forks: 79
openIssues: 11
closedIssues: 5
watchers: 1
contributors: 7
recentReleases: 1
createdAt: "2026-03-04T10:31:48Z"
lastCommitAt: "2026-08-29T17:26:42Z"
lastReleaseAt: "2026-07-15T01:15:44Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 21
maintainers: ["kachofugetsu09", "lfegg"]
openGraphImageUrl: "https://opengraph.githubassets.com/cec9911cf8b49e0927bd074101861b8470130503b0c0fa04ca178deec03d58a3/kachofugetsu09/akashic-agent"
discussionCount: 0
---

# akashic Agent

一个**会主动找你**的 AI 伙伴——不只是被动回答问题，还能根据你订阅的信息源主动判断"现在该不该发消息、发什么"，在空闲时自主执行后台任务。

---

## 先装常用插件

如果你想让自己的 Akashic 具备和作者差不多的扩展能力，先看社区插件组织：

- <https://github.com/orgs/akashic-plugins/repositories>

很多能力现在都不是写死在主仓里，而是做成独立插件仓库，例如：

- `steam-mcp`
- `feed-mcp`
- `huayue-skills`

如果 Akashic 已经在运行，你通常可以直接像聊天一样让它安装：

```text
帮我安装这个插件试试看：
https://github.com/akashic-plugins/steam-mcp
```

或者更自然一点：

```text
steam mcp 我想用插件方式加载，你帮我把这个插件装一下看看能不能用：
https://github.com/akashic-plugins/steam-mcp
```

Akashic 理想上的动作应该是：

```text
┌─ 安装插件
│  ├─ 识别 GitHub 插件仓库
│  ├─ 执行 plugin-install
│  ├─ 检查 manifest.toml 与 plugin.py
│  └─ Runtime 自动发现并原子发布新快照
└─ 不重启，下一次执行使用新代际
```

安装、升级、启停、源码和 `config.local.toml` 修改都会自动热重载。正在执行的请求保持旧代际，新请求统一使用新代际；候选验证失败时继续保留旧版本。

想看完整机制，直接看 [插件系统 Handbook](https://github.com/kachofugetsu09/akashic-agent/blob/HEAD/_handbook/plugins-tutorial.md)。

---

## Quickstart

需要 Python 3.12。

```bash
git clone <this-repo>
cd akashic-agent
uv venv && uv pip install -r requirements.txt
```

没有 uv？先 `pip install uv`。

**1. 启动 Akashic Web**

```bash
uv run python main.py
```

Supervisor 会始终提供唯一的本机 Web 入口：<http://127.0.0.1:2236>。访问后直接进入
Chat；没有模型配置时，Chat 会保留完整界面并引导进入“模型与认证”。…
