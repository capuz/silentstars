---
repo: "hoooou/my_yml"
name: "my_yml"
description: "Self-use clash"
originalDescription: "自用clash"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/hoooou/my_yml"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-11-29T17:15:02Z"
lastCommitAt: "2026-10-10T10:05:23Z"
lastReleaseAt: "2022-02-15T04:05:44Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 67
maintainers: ["hoooou", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9625ac1b0fc7b41afd1378ce432194fda72546882b3efaa21871337b2061fcf/hoooou/my_yml"
---

# Clash Node Optimization

`聚合配置.yaml` is the input for the original subscription source and split-routing rules. `节点来源.yaml` is the newly added list of public free sources. `优选配置.yaml` is the complete configuration produced by automatic filtering and can be imported directly. It is intended for Clash Meta / Mihomo clients.

## Usage

Add the remote configuration in your client:

```
https://raw.githubusercontent.com/hoooou/my_yml/main/%E4%BC%98%E9%80%89%E9%85%8D%E7%BD%AE.yaml
```

Set the client's remote configuration refresh interval to 24 hours. After GitHub updates the file, the client still needs to refresh before it loads the new nodes.

Phones keep **5 groups**. By default, use “⭐ 综合优选” under “🚀 全局选择”. If you need Taiwan or Singapore, switch to “🌏 台湾／新加坡”. Refreshing the original subscription makes the change take effect.

| Group | Purpose |
|---|---|
| 🚀 全局选择 | Chooses which type of node is in use; defaults to 综合优选 |
| ⭐ 综合优选 | Fully passes a 1 MB download and meets the quality threshold for overseas responses across three rounds. Sorted by website response time and stability; does not fall back to failed nodes |
| ⚡ 高速下载 | From the comprehensive qualified pool, nodes…
