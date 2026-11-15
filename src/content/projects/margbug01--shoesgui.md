---
repo: "margbug01/ShoesGUI"
name: "ShoesGUI"
description: "MyShoes (formerly ShoesGUI) · Native Windows/macOS proxy client: shoes core, subscriptions, speed testing and rule-based routing. Native Go + MyGo GUI for shoes."
originalDescription: "MyShoes（原 ShoesGUI）· Windows/macOS 原生代理客户端：shoes 内核、订阅、测速和规则分流。Native Go + MyGo GUI for shoes."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/margbug01/ShoesGUI"
homepage: "https://margbug01.github.io/ShoesGUI/"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["anytls", "golang", "gui", "proxy", "shadowsocks", "trojan", "vless", "windows", "macos", "desktop-app"]
stars: 8
forks: 1
openIssues: 2
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-25T09:49:10Z"
lastCommitAt: "2026-11-15T08:25:43Z"
lastReleaseAt: "2026-11-15T07:08:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 81
undervaluedScore: 51
maintainers: ["margbug01-cyber"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4d5eacde34b201520f9ece6bc2ddcc7cdc9c4b71dcf9d9f500804992fac7919/margbug01/ShoesGUI"
---

# MyShoes

A native Windows and macOS GUI for the shoes proxy core, with subscriptions, latency testing and rule-based routing.

[Website](https://margbug01.github.io/ShoesGUI/) · [English](https://margbug01.github.io/ShoesGUI/en.html) · [Download](https://github.com/margbug01/ShoesGUI/releases/latest)

A pleasant Windows / macOS proxy client

A native GUI for the [shoes](https://github.com/cfal/shoes) core: one-click subscription updates, v2rayN-style speed testing, rule-based routing, and tray residency.

     

## Why use it

**Ready to use on launch.** The core runs resident with MyShoes. The "Connect" button on the dashboard only takes over the system proxy. You can test latency without connecting, and enter `127.0.0.1:10808` directly into other programs.

**Subscriptions stay live.** Subscription URLs are bound to groups. When you click "Update subscription", nodes with the same name are replaced in place with the new config, new nodes are added, and removed nodes are deleted. Nodes you manually added to that group are left untouched. When reading subscriptions, it sends v2rayN's User-Agent, because airports return share links rather than a full Clash YAML.

**Speed testing…
