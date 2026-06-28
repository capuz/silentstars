---
repo: "josephrocca/is-vpn"
name: "is-vpn"
description: "Check if an IP is a VPN or datacenter. Based mainly on daily-updated public VPN/datacenter IP lists. Free, open source, no API subscriptions required 😌 (at the cost of accuracy 😳)"
url: "https://github.com/josephrocca/is-vpn"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["vpn-detection"]
stars: 62
forks: 7
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2023-12-08T08:53:20Z"
lastCommitAt: "2026-06-28T01:46:07Z"
lastReleaseAt: "2026-01-17T20:09:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 51
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc3f9cb7cbc8ad07d93c97c2c652a983a482d01e5d12ee56d6512e15a867d319/josephrocca/is-vpn"
---

# `isVpn(ip)`
This repo holds a daily-updated VPN/datacenter/bot IP list for a binary, simple, `isVpn` check. I use this extensively in my own projects, so (luckily for you) I have a strong incentive to keep this list up to date. I recommend testing it against your own data/traffic, and comparing it to paid services to see if it's accurate enough for your use case.

It's based on these data sources:

* https://github.com/X4BNet/lists_vpn - VPN and datacenter IPs
* https://github.com/stamparm/ipsum - list of suspected malicious/bot IPs (I'm using >= 3 flags as threshold)
* Daily-updated private data from my own analytics (double-checked against paid API)

These all go into [`vpn-or-datacenter-ipv4-ranges.txt`](https://raw.githubusercontent.com/josephrocca/is-vpn/main/vpn-or-datacenter-ipv4-ranges.txt), and I will *never* change the location/format of that file.

## Caveats:
* There are some commercial companies which provide VPNs for e.g. schools, universities, and companies. An example of this that I've found is "iboss". Just be aware that you may be detecting that a user is using a VPN, when they're actually just using their school/company/etc. internet. So if you show them a…
