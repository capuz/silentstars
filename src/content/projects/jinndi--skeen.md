---
repo: "jinndi/SKeen"
name: "SKeen"
description: "Lightweight transparent proxy for Keenetic/Netcraze routers, powered by sing-box. Supports TProxy, Redirect, TUN, DNS and Fake IP."
readmeQualityOk: true
url: "https://github.com/jinndi/SKeen"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["entware", "keenetic", "sing-box", "fakeip", "tproxy", "opkgtun", "redirect", "netcraze", "proxy"]
stars: 58
forks: 2
openIssues: 0
closedIssues: 12
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2026-01-06T19:31:54Z"
lastCommitAt: "2026-09-18T08:26:45Z"
lastReleaseAt: "2026-01-17T08:53:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 41
maintainers: ["jinndi"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1129222796/04bbf951-2a4b-49f8-a3d1-49b15d079bb3"
---

</p>

<h1 align="center">SKeen</h1>

> Lightweight transparent proxy for Keenetic/Netcraze routers, powered by sing-box.

🇺🇸 **English** | [🇷🇺 На русском](https://github.com/jinndi/SKeen/blob/HEAD/README-RU.md)

SKeen configures transparent proxying on Keenetic and Netcraze routers using sing-box. It manages firewall rules, service lifecycle and configuration synchronization.

<details>
  <summary>Why sing-box?</summary>
<br>

**sing-box** is an open-source universal proxy engine written in Go. It is focused on maximum performance, low resource consumption, and support for the most modern protocols

**Comparison: Proxy Engines for Routers & Embedded**

|Feature                 |sing-box         |Xray              |mihomo          |
|------------------------|-----------------|------------------|----------------|
|Resource Usage (RAM/CPU)|✅ Minimal        |⚠️ Moderate       |❌ High          |
|Protocol Support        |✅ Advanced       |⚠️ Limited        |✅ Extensive     |
|Multiplexing            |✅ Superior       |⚠️ Legacy         |✅ Good          |
|DNS Logic               |🥇 Native (+Fake-IP)|🥉 Sniffing (+FakeDNS)|🥈 Fake-IP (+Real)|
|TUN efficiency          |✅ High…
