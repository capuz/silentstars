---
repo: "zheng0625/Clash-Studio"
name: "Clash-Studio"
description: "Clash Studio: a Windows / Linux Mihomo client centered on visual subscription editing and modular, precise traffic routing, with a Liquid Glass style, a floating Dock, and customizable themes."
originalDescription: "Clash Studio：以可视化订阅编辑与模块化精准分流为核心的 Windows / Linux Mihomo 客户端，结合 Liquid Glass 风格、悬浮 Dock 与可定制主题。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/zheng0625/Clash-Studio"
language: "Rust"
languages: ["Rust", "Python", "Vue"]
languagePcts: [23, 23, 23]
stars: 31
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-10-22T16:55:21Z"
lastCommitAt: "2026-11-05T08:04:43Z"
lastReleaseAt: "2026-11-05T08:06:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 26
maintainers: ["zheng0625", "codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d7b7ad68f5cfd8248ce31441527665d4c0fb0d2b4dc835ed0988f3c30028601/zheng0625/Clash-Studio"
discussionCount: 0
---

**Clash Studio is a Windows / Linux Mihomo desktop client centered on visual subscription editing, modular management, and precise traffic routing, while also balancing interface design and daily usage experience.**

It connects the source subscription, personal modifications, routing modules, and the core's runtime configuration. First, organize nodes, policy groups, and rules, then hand traffic for different domains, application processes, and IP subnets to the designated outbound. The interface uses Liquid Glass-style layering, a floating Dock, and a unified card layout, giving complex configurations clear entry points for action.

## Precise routing: every rule has a clear destination

- **Match by domain, domain suffix, process name, process path, and IPv4 / IPv6 subnet**, and assign a policy group or outbound to each module.
- **Modular composition**: reuse modules across different subscription profiles, enable or disable them separately, and adjust their order. Module rules take precedence over source subscription rules.
- **Strict outbound review**: inspects visible nested policy chains, and rejects chains that can reach DIRECT, missing or circular references, and dynamic…
