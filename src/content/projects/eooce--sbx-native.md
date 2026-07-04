---
repo: "eooce/sbx-native"
name: "sbx-native"
description: "No child processes running sing-box"
url: "https://github.com/eooce/sbx-native"
language: "Java"
languages: ["Java", "Python", "JavaScript"]
languagePcts: [40, 33, 27]
topics: ["argo", "hysteria2", "tuic", "vless-reality", "antyls", "sing-box"]
stars: 21
forks: 45
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-06-14T04:53:27Z"
lastCommitAt: "2026-07-04T06:13:21Z"
lastReleaseAt: "2026-06-16T06:14:35Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 78
undervaluedScore: 44
maintainers: ["eooce"]
openGraphImageUrl: "https://opengraph.githubassets.com/a09d9d002ed72de06900e213a33aa57a73b309d257ea2e626cf513eff5d84c53/eooce/sbx-native"
---

# Sbx Native

本仓库提供不同运行环境的 sing-box native 启动器，用于部署 VMess Ws + Argo、VLESS Reality、Hysteria2、TUIC、AnyTLS、SOCKS5 等代理，只有主进程，没有子进程。

请选择对应环境查看说明：

| 环境 | 说明文档 | 入口文件 |
| --- | --- | --- |
| Java | [JAVA.md](JAVA.md) | [java/src/main/java/dev/sbxnative/App.java](java/src/main/java/dev/sbxnative/App.java) |
| Node.js | [NODE.md](NODE.md) | [nodejs/index.js](nodejs/index.js) |
| Python | [PYTHON.md](PYTHON.md) | [python/app.py](python/app.py) |

## 环境变量

| 变量 | 默认值 | 说明 |
| --- | --- | --- |
| `UPLOAD_URL` | 空 | Merge-sub 上传地址。填写后可上传订阅或节点。 |
| `PROJECT_URL` | 空 | 项目公网 URL。用于上传订阅和自动保活。 |
| `AUTO_ACCESS` | `false` | 设置为 `true` 时向保活服务提交 `PROJECT_URL`。 |
| `YT_WARPOUT` | `false` | 设置为 `true` 时强制 YouTube 走 WARP 出站规则。 |
| `FILE_PATH` |      | 运行目录，存放动态库、配置、订阅和临时文件。 |
| `SUB_PATH` | `sub` | 订阅token，例如 `/sub`。 |
| `UUID` | `0a6568ff-ea3c-4271-9020-450560e10d63` | 节点 UUID。建议自行修改。 |
| `NEZHA_SERVER` | 空 | 哪吒面板地址。v1：`nezha.xxx.com:8008` v0: `nezha.xxx.com` |
| `NEZHA_PORT` | 空 | 哪吒 v0 agent 端口；v1 留空。 |
| `NEZHA_KEY` | 空 | 哪吒 v1 的 `NZ_CLIENT_SECRET` 或 v0 agent 密钥。 |
| `ARGO_DOMAIN` | 空 | Cloudflare 固定隧道域名。为空时使用临时隧道。 |
| `ARGO_AUTH` | 空 | Cloudflare tunnel token 或 TunnelSecret JSON。 |
| `ARGO_PORT` |…
