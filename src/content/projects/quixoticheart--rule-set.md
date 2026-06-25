---
repo: "QuixoticHeart/rule-set"
name: "rule-set"
description: "面向 mihomo/clash.meta、surge、loon、stash、shadowrocket、quantumultx、egern 和 sing-box 多个代理工具的定制规则集"
url: "https://github.com/QuixoticHeart/rule-set"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["clash", "clash-meta", "gfwlist", "loon", "mihomo", "openclash", "quantumultx", "ruleset", "shadowrocket", "shellcrash"]
stars: 447
forks: 34
openIssues: 2
closedIssues: 1
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2025-04-09T06:32:44Z"
lastCommitAt: "2026-06-19T17:18:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 74
undervaluedScore: 17
maintainers: ["QuixoticHeart", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/539635a646c28176947f6f08f6197093c1d8125f9fff5fe06312f08ba4fcecae/QuixoticHeart/rule-set"
---

# rule-set

> [!CAUTION]
>
> **禁止任何形式转载或发布至中国大陆地区**

## 项目简介

每天早上 7:30（北京时间 UTC+8）自动构建，保持规则最新

收集于互联网，面向 mihomo/clash.meta、surge、loon、stash、shadowrocket、quantumultx、egern 和 sing-box 多个代理工具的定制 [规则集](https://github.com/QuixoticHeart/rule-set/tree/ruleset)

- **[规则说明](#规则说明)**
- **[surge、loon、shadowrocket、quantumultx、egern、mihomo/clash.meta 和 stash 完整规则集目录](#surgeloonshadowrocketquantumultxegernmihomoclashmeta-和-stash-完整规则集目录)**
- **[mihomo/clash.meta 和 stash 类型拆分规则集目录](#mihomoclashmeta-和-stash-类型拆分规则集目录)**
- **[sing-box 规则集目录](#sing-box-规则集目录)**

## 项目背景

mihomo/clash.meta 和 stash 对 domain 和 ipcidr 类型的规则集优化更加出色，尤其对于性能受限的设备 (硬路由) 使用 clash 系软件代理时，应避免使用 classical 类型规则集

mihomo/clash.meta 独有的 mrs 二进制格式，以及 sing-box 独有的 srs 二进制格式，能够减少启动内核时的硬件资源占用，也能减少一半以上规则文件大小，对于性能受限的设备十分友好

surge，loon 等支持 DOMAIN-SET 的 iOS 端代理工具，目前在使用 RULE-SET 和 DOMAIN-SET 时，性能和内存占用已没有明显区别，因此细分规则不再必要，转而使用 RULE-SET 可以更方便地管理规则集

### 文件结构

在 mihomo/clash.meta 和 stash 的 classical 目录中，是排除了 domain 和 ipcidr 类型后的其余规则，非必要不创建

```
meta/
   ├── dmca.list
   ├── domain/
   │      ├──dmca.mrs
   │      └──dmca.list
   ├── ipcidr/
   │      ├──dmca.mrs
   │      └──dmca.list
   └── classical/
          └──dmca.list

stash/
   ├──…
