---
repo: "riverscn/singbox-confgen"
name: "singbox-confgen"
description: "sing-box config generator: enter your nodes, and DNS, IPv6 and routing are set up following best practices. A sing-box 1.14+ config generator with battle-tested DNS, IPv6 and routing; runs entirely in your browser."
originalDescription: "sing-box 配置生成器：填入节点，DNS、IPv6 与分流按最佳实践配好。A sing-box 1.14+ config generator with battle-tested DNS, IPv6 and routing; runs entirely in your browser."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/riverscn/singbox-confgen"
homepage: "https://sing-box-confgen.riverleaf.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["config-generator", "dns", "gfwlist", "ipv6", "proxy", "sing-box", "singbox", "tailscale"]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-15T11:44:57Z"
lastCommitAt: "2026-10-17T07:59:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 39
maintainers: ["riverscn"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd8a33c50faa4a2a289c7cf37559e168043fe5670ce893a14d1c827a3267e5b3/riverscn/singbox-confgen"
---

# sing-box Config Generator

**Enter your nodes, and DNS, IPv6 and routing are configured according to best practices.**

**Online: <https://sing-box-confgen.riverleaf.dev>**

When a sing-box configuration feels off, the problem is usually not the nodes but things you can't see. This generator tests each of these pitfalls and provides a countermeasure for it. You only need to enter your nodes to get a complete `config.json`, which you can import into SFM, SFI, SFA, or the command-line version to use.

## What It Solves

| Symptom | Cause | Approach here |
|---|---|---|
| Domestic sites resolve to overseas addresses, or blocked domains won't open | DNS doesn't follow routing: domestic domains are queried through overseas DNS, and blocked domains get polluted addresses | Direct connections use local DNS; proxied connections query remote DNS through the proxy; for uncertain domains, both are queried, and the domain connects directly only if the answer is a domestic IP ([DNS policy](https://github.com/riverscn/singbox-confgen/blob/HEAD/DESIGN.md#2-dns-策略)) |
| Some connections bypass the proxy or fail to connect after enabling it | Apps prefer IPv6, but the proxy server has no IPv6,…
