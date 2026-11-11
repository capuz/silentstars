---
repo: "LeilaoMi/AutoMergePublicNodes-Optimized"
name: "AutoMergePublicNodes-Optimized"
description: "Automatically aggregates public proxy nodes, uses sing-box real-connection tests to filter verified subscriptions, and outputs multi-format Clash/sing-box/V2Ray subscriptions with a health report"
originalDescription: "自动聚合公开代理节点，使用 sing-box 真测筛选 verified 订阅，输出 Clash/sing-box/V2Ray 多格式并带健康报告"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/LeilaoMi/AutoMergePublicNodes-Optimized"
homepage: "https://github.com/LeilaoMi/AutoMergePublicNodes-Optimized"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["auto-update", "clash", "free-nodes", "hysteria2", "karing", "proxy", "sing-box", "subscription", "trojan", "v2ray"]
stars: 46
forks: 16
openIssues: 0
closedIssues: 17
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-17T21:45:33Z"
lastCommitAt: "2026-11-11T19:48:35Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 44
maintainers: ["actions-user", "LeilaoMi"]
openGraphImageUrl: "https://opengraph.githubassets.com/e36b169bda5ff41010e914de435cc03e3a08fb659220a5638c503bc444b154e3/LeilaoMi/AutoMergePublicNodes-Optimized"
---

# AutoMergePublicNodes-Optimized

Every 6 hours, collects nodes from over 100 public subscription sources, runs a real proxy connection test on each one with sing-box, checks whether they can be reached from mainland China using probes, and finally outputs subscriptions that can be imported directly into clients.

> For learning and research only. Public node sources have unknown origins, can disappear at any time, and may log traffic. Do not use them to log into important accounts or transmit sensitive information, and assess the compliance risks yourself.

---

## How to choose a subscription

| Where you are | Which to use | Notes |
|---|---|---|
| **Mainland China** | `verified` | Passed real tests from overseas, and the mainland China probe can complete a TCP handshake with the node's port. The quantity is small (usually a few dozen), but these are the most likely to work directly |
| Overseas, or verified is not enough | `global` | Passing real tests from overseas is enough. Up to 300 nodes, sorted by composite score. Not guaranteed to be reachable from mainland China |
| Want to test yourself | `all` (on the `data` branch) | The full deduplicated candidate pool, about…
