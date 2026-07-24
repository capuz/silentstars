---
repo: "cbuijs/sdproxy"
name: "sdproxy"
description: "DNS Proxy that is simple and fast with not so simple features. Focused on routed DNS forwarding, filtering and parental control."
readmeQualityOk: true
url: "https://github.com/cbuijs/sdproxy"
language: "Go"
languages: ["Go"]
languagePcts: [91]
topics: ["control", "dns", "doh", "doh3", "doq", "filtering", "forwarding", "proxy", "quic", "tcp"]
stars: 55
forks: 3
openIssues: 4
closedIssues: 13
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2026-02-27T20:12:16Z"
lastCommitAt: "2026-07-24T06:10:16Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 85
undervaluedScore: 12
maintainers: ["cbuijs"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1168799796/7b9c4c3f-62ec-4fe3-80d8-e70588869357"
---

# sdproxy

A DNS proxy that gives you real control over your home network.

---

# Intro

I spent years as a consultant in the "big boy" networking and security "arena". DNS security was/is my daily work, but also a favorite hobby to tinker with. Because I have kids now, and need to be a responsible parent, I took it on myself to filter the big bad internet for them. So I built **sdproxy** (Simple DNS Proxy). It brings enterprise/big-boy protections/methods/precision to the home network level (kind of).

The proxy is written in Go and compiles to a lean binary for cheap routers. There are **NO** cloud subscriptions or monthly fees. It speaks every flavor of DNS and includes adaptive admission control to stay stable. It is just lean (kind of), mean, Dutch-engineered precision for the living room. Just you, one executable and a yaml file.

And remember... It's always DNS!

---

**Note:** The [full_reference_config.yaml](https://github.com/cbuijs/sdproxy/blob/main/full_reference_config.yaml) is always more up to date than this README. When in doubt, check there.

---

DNS is the [phonebook of the internet](https://en.wikipedia.org/wiki/Domain_Name_System) - every device on your…
