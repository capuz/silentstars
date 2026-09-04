---
repo: "larkswitch/lark-switch"
name: "lark-switch"
description: "Run many accounts under one Feishu/Lark App. Official lark-cli --profile is an App config, not a person. Unofficial."
readmeQualityOk: true
url: "https://github.com/larkswitch/lark-switch"
language: "Rust"
languages: ["Rust"]
languagePcts: [78]
topics: ["account-switcher", "claude-code", "cli", "coding-agent", "cursor", "developer-tools", "feishu", "feishu-cli", "identity", "lark"]
stars: 15
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-08-18T08:22:09Z"
lastCommitAt: "2026-09-04T08:09:48Z"
lastReleaseAt: "2026-09-04T02:50:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 29
maintainers: ["Xuleileon"]
openGraphImageUrl: "https://opengraph.githubassets.com/d990c08a94bb282f49d34c6f3f7a28d9d8bf0680e83c0edc92bb8ef131044e5e/larkswitch/lark-switch"
---

[English](https://github.com/larkswitch/lark-switch/blob/HEAD/README.en.md) · [文档](https://github.com/larkswitch/lark-switch/blob/HEAD/docs/) · [下载](https://github.com/larkswitch/larkswitch/releases/latest)

# larkswitch

**同一个飞书 App 下挂多个账号，每条命令单独指定用谁执行，不用退出重登。**

<sub>非官方第三方工具，与字节跳动 / 飞书 / Lark 无任何关联。</sub>

<sub>看点：托盘点了「李四」之后，**新起的命令**是李四，**正在跑的命令**仍然是张三。</sub>

```bash
# 一条命令一个身份，全局 active 不动
lark-cli --account alias:bot whoami                      # 机器人号
lark-cli --account alias:me  whoami                      # 本人号
lark-cli --account alias:me  calendar +agenda --as user
```

## 这是什么

官方 `lark-cli --profile` 管的是 **App 配置**。v1.0.5 起可以管多个 App，但**同一个 App ID 下永远只有一套身份**。

写飞书应用的人几乎都会撞到这堵墙：自测至少要两个账号——机器人一个、本人一个；做外包和顾问的还要在几个客户租户之间来回跳。现在的解法是退出、重登、再退出、再重登。

larkswitch 用官方支持的 `LARKSUITE_CLI_CONFIG_DIR`，把每个 `(App, User)` 隔离成独立配置目录，并决定下一条命令用谁：

- **一个 App，多个人** —— 每个账号一个隔离配置目录，互不污染。
- **命令级身份** —— `--account` 只影响这一条命令，不动全局 active。
- **正在跑的命令不被换脸** —— 命令启动时冻结身份快照。并发跑多个身份不会串。
- **Token 不经手** —— 不保存 Access / Refresh Token，OAuth、刷新和钥匙串全部留在官方 [`lark-cli`](https://github.com/larksuite/cli)。详见 [docs/SECURITY.md](https://github.com/larkswitch/lark-switch/blob/HEAD/docs/SECURITY.md)。
- **PATH…
