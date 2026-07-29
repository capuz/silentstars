---
repo: "AIsouler/MyClash"
name: "MyClash"
description: "Mihomo（Clash Meta）配置文件和覆写脚本，分别提供全量版和精简版，无DNS泄露，内置多项分流策略、地区策略，实现全局排除节点、自动识别节点倍率功能，解决机场使用私有DNS导致无法解析节点域名的问题"
readmeQualityOk: true
url: "https://github.com/AIsouler/MyClash"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["clash", "mihomo", "mihomo-config"]
stars: 412
forks: 28
openIssues: 0
closedIssues: 17
watchers: 7
contributors: 2
recentReleases: 0
createdAt: "2025-12-19T12:10:20Z"
lastCommitAt: "2026-07-29T05:39:56Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 27
maintainers: ["AIsouler", "Mugzx", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3fec83157f8291fe50c54d37d135ee382ddcc82177406a33e0f09eb7a1e524db/AIsouler/MyClash"
---

# MyClash

Mihomo（Clash Meta）配置文件和覆写脚本，分别提供全量版和精简版，无DNS泄露，内置多项分流策略、地区策略，实现全局排除节点、自动识别节点倍率功能，解决机场使用私有DNS导致无法解析节点域名的问题

友情推荐，非常好用、省电且内存占用低的代理软件：[Bettbox](https://github.com/appshubcc/Bettbox)

**全量版脚本已适配 Bettbox，可通过图形化界面自定义启用策略组或其他配置项，具体可看下方效果预览图6。**

## 覆写脚本

> [!IMPORTANT]
>
> - _注意⚠️：该脚本仅适用于覆写机场提供的配置文件，请勿用于覆写自己编写的配置文件_
> - _脚本已解决机场使用私有DNS导致无法解析节点域名的问题_
> - _地区策略组根据是否匹配到节点来生成_
> - _全量版脚本内的分流策略组均支持自定义是否启用（默认启用），支持自定义是否过滤高倍率节点（默认禁用）_

### 使用方法（脚本）

复制以下任意一个链接或者复制完整代码后按如图所示步骤导入到代理客户端，以 [Bettbox](https://github.com/appshubcc/Bettbox) 为例

- [mihomoScript.js（全量版）](https://github.com/AIsouler/MyClash/blob/HEAD/Script/mihomoScript.js)

```txt
https://raw.githubusercontent.com/AIsouler/MyClash/main/Script/mihomoScript.js
```

- [Script.js（精简版）](https://github.com/AIsouler/MyClash/blob/HEAD/Script/Script.js) （仅包含少量分流策略组）

```txt
https://raw.githubusercontent.com/AIsouler/MyClash/main/Script/Script.js
```

|                                                                                   |
| --------------------------------------------------------------------------------- |
|  |

## 配置文件

> [!IMPORTANT]
>
> - _配置文件实现的效果和脚本基本一致_
> - _不支持自定义是否启用策略组，不支持自定义是否过滤高倍率节点_
> -…
