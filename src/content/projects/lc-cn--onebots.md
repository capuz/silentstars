---
repo: "lc-cn/onebots"
name: "onebots"
description: "多平台多协议机器人应用框架"
readmeQualityOk: true
url: "https://github.com/lc-cn/onebots"
homepage: "http://onebots.pages.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["onebot", "onebot12", "onebot11", "chatbot", "cqhttp", "oicq"]
stars: 227
forks: 23
openIssues: 3
closedIssues: 50
watchers: 3
contributors: 13
recentReleases: 0
createdAt: "2022-06-24T01:59:42Z"
lastCommitAt: "2026-08-30T00:43:18Z"
lastReleaseAt: "2023-06-04T03:59:12Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 99
undervaluedScore: 42
maintainers: ["rdc-dev-liucl"]
openGraphImageUrl: "https://opengraph.githubassets.com/faf7a83fe7f72e17d35d20c4751e9d9775bc484059bd5e148886ee1ac852dfa3/lc-cn/onebots"
fundingLinks: ["CUSTOM:https://ifdian.net/a/lc-cn"]
discussionCount: 2
---

# OneBots

**多平台、多协议的即时通讯机器人网关与框架（TypeScript / Node.js）**

*One multi-platform bot gateway: one `CommonEvent` model, many adapters, many wire protocols (OneBot / Satori / Milky).*

**[📚 在线文档](https://onebots.pages.dev)** · **[English README](https://github.com/lc-cn/onebots/blob/HEAD/README.en.md)** · **[Issues](https://github.com/lc-cn/onebots/issues)** · **QQ 群 [860669870](https://jq.qq.com/?_wv=1027&k=B22VGXov)**

</div>

---

## 它解决什么问题？

你想做的往往是这件事：

> **在一个进程里接多个 IM 平台，又用同一套（或多套）开放协议暴露给下游插件 / 业务**——而不是每个平台写一遍胶水代码。

OneBots 提供：

| 层次 | 作用 |
|------|------|
| **Adapter（适配器）** | 把各平台原始事件与 API，变成统一的 **`CommonEvent` + 通用 Adapter API** |
| **Protocol（协议）** | 把 `CommonEvent` 转成 **OneBot v11/v12、Satori、Milky** 等对外报文，并处理入站调用 |
| **`@onebots/core`** | 账号、ID 映射（`createId` / `resolveId`）、路由、协议注册等 **共用内核** |
| **`onebots` 主包** | 配置、加载插件、HTTP/WS 网关、可选 **Web 管理端** |

### 架构一瞥

```mermaid
flowchart LR
  subgraph IM["IM 平台"]
        A1[QQ / 微信 / 飞书 / …]
  end
  subgraph OB["OneBots"]
        B[Adapter]
        C[Account + id_map]
        D[Protocol]
  end
  subgraph Down["下游"]
        E[OneBot 客户端]
        F[Satori / Milky 客户端]
        G[自研业务]
  end
  A1 --> B --> C --> D
  D --> E
  D -->…
