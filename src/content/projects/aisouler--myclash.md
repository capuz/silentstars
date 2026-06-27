---
repo: "AIsouler/MyClash"
name: "MyClash"
description: "Mihomo（Clash Meta）配置文件和覆写脚本，分别提供全量版和精简版，无DNS泄露（图一乐），内置多项分流策略、地区策略，实现全局排除节点、自动识别节点倍率等功能"
url: "https://github.com/AIsouler/MyClash"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["clash", "mihomo", "mihomo-config"]
stars: 242
forks: 18
openIssues: 0
closedIssues: 9
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2025-12-19T12:10:20Z"
lastCommitAt: "2026-06-27T06:24:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 28
maintainers: ["AIsouler", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b8a5dfedd84576c51a91f09da7a6c414d25ca7db462b236a188cc71b0c9351c/AIsouler/MyClash"
---

# MyClash

Mihomo（Clash Meta）配置文件和覆写脚本，分别提供全量版和精简版，无DNS泄露（图一乐），内置多项分流策略、地区策略，实现全局排除节点、自动识别节点倍率等功能

友情推荐，非常好用、省电且内存占用低的代理软件：[Bettbox](https://github.com/appshubcc/Bettbox)

## 配置文件

> - _配置文件实现的效果和脚本基本一致_
> - _不支持自定义 **启用/禁用** 策略组_
> - _无法像脚本那样实现不生成未匹配到节点的策略组_

复制以下任意一个链接或者复制完整代码后导入代理客户端

- [mihomoConfig.yaml（全量版）](/Config/mihomoConfig.yaml)

```txt
https://raw.githubusercontent.com/AIsouler/MyClash/main/Config/mihomoConfig.yaml
```

- [mihomoConfigLite.yaml（精简版）](/Config/mihomoConfigLite.yaml)

```txt
https://raw.githubusercontent.com/AIsouler/MyClash/main/Config/mihomoConfigLite.yaml
```

## 覆写脚本

### 使用方式

> [!IMPORTANT]
> **注意⚠️：该脚本仅适用于覆写机场提供的配置文件，请勿用于覆写自己编写的配置文件**

#### 通过链接导入

复制以下任意一个脚本链接后按如图所示步骤导入到代理客户端，以 [Bettbox](https://github.com/appshubcc/Bettbox) 为例

- 全量版（包含全部分流策略组）

```txt
https://raw.githubusercontent.com/AIsouler/MyClash/main/Script/mihomoScript.js
```

- 精简版（仅包含小部分分流策略组）

```txt
https://raw.githubusercontent.com/AIsouler/MyClash/main/Script/Script.js
```

|                                                                                   |
| --------------------------------------------------------------------------------- |
|  |

#### 通过复制代码导入…
