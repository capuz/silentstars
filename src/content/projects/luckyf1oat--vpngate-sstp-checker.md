---
repo: "luckyf1oat/vpngate-sstp-checker"
name: "vpngate-sstp-checker"
description: "Tests public VPN Gate relays every 2 hours using real MS-SSTP connections, outputs usable nodes + exit IP details"
originalDescription: "每 2 小时用真实 MS-SSTP 连接测试 VPN Gate 公共中继，输出可用节点 + 出口 IP 详情"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/luckyf1oat/vpngate-sstp-checker"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-31T06:04:12Z"
lastCommitAt: "2026-11-08T14:14:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 48
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e24e8a11fc9eed904abbce8b3de82fc47929db841c4f0e8d5bd8ce4d25866326/luckyf1oat/vpngate-sstp-checker"
---

# vpngate-sstp-checker

Two jobs, both running in GitHub Actions:

| Workflow | Frequency | Purpose |
|---|---|---|
| **collect.yml** | Hourly at :05 | Pulls the official API and list page, merges the currently visible SSTP servers into the `sstpall.txt` library (deduplicated, cumulative) |
| **check.yml** | Every 2 hours at :30 | Calls `https://cks5.115567.xyz/check?sstp=vpn:vpn@host:port` to test "last valid + full library"; **about 42 seconds for 200 servers** |
| check-local.yml | Manual | Local-connection version using pppd/sstpc (backup, for when cks5 is down) |

## Outputs

**`sstpall.txt`**: cumulative library, one per line:

```
sstp://vpn:vpn@public-vpn-114.opengw.net:443
sstp://vpn:vpn@vpn849985359.opengw.net:1773
```

**`result.txt`**: nodes verified usable in this run (link + exit IP details):

```
sstp://vpn:vpn@public-vpn-114.opengw.net:443  {"ip":"219.100.37.236","country":"JP","countryName":"Japan","region":"Tokyo","city":"Tokyo","asn":"AS36599","org":"SoftEther Corporation","timezone":"Asia/Tokyo","colo":"NRT"}
```

`result.json` includes connection time `connect_s`; `sstpall.json` includes, for each server, `first_seen / last_seen / last_checked / last_ok /…
