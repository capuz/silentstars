---
repo: "yyhoworks/LocalDNS"
name: "LocalDNS"
description: "A Rust DNS core and frosted-glass web console: query logs, upstream management, ad blocking, SRS routing, and multi-level caching. R (from the 折腾日记交流群 discussion group) is responsible for the DNS core, and yyhoworks is responsible for UI design."
originalDescription: "Rust DNS 核心与玻璃质感 Web 控制台：查询日志、上游管理、广告拦截、SRS 分流与多级缓存。R 大（折腾日记交流群）负责 DNS 核心，yyhoworks 负责 UI 设计。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yyhoworks/LocalDNS"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [66, 25]
topics: ["dashboard", "dns", "rust", "self-hosted", "web-ui", "adguard", "dns-over-https", "dns-over-tls", "glassmorphism", "srs"]
stars: 14
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-15T13:24:16Z"
lastCommitAt: "2026-10-18T08:18:35Z"
lastReleaseAt: "2026-10-18T03:56:46Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 37
maintainers: ["yyhoworks", "clone-fan"]
openGraphImageUrl: "https://opengraph.githubassets.com/cfff15837d2171f310d87160e089fa189916536a7fa172e640de7180b7261cdc/yyhoworks/LocalDNS"
---

# LocalDNS

A local DNS project made up of a **Rust DNS core** and a **frosted-glass web console**. View resolution status in one place, investigate queries, and manage upstreams and routing rules, so everyday DNS management is more intuitive.

**The DNS core is mainly written in Rust by R from the 折腾日记交流群 (Tinkering Diary discussion group). [yyhoworks](https://github.com/yyhoworks) is responsible for UI design.**

Current version: **[Backend FJGAC / UI 2026.10.18.11](https://github.com/yyhoworks/LocalDNS/releases/tag/fjgac-ui-v2026.10.18.11)**, which provides a full package, a UI upgrade package, and SHA-256 checksum files. See the [release notes](https://github.com/yyhoworks/LocalDNS/blob/HEAD/docs/releases/fjgac-ui-v2026.10.18.11.md).

This update improves client alias management. It supports search, add, edit, and remove, and checks changes made from other devices before saving. Topology only shows sources with actual queries. At the user's request, wallpaper gallery management has been removed. Single local images, online URLs, presets, and restore-default are kept, and wallpapers used by the existing gallery remain compatible. The core continues to use FJGAC and keeps dual…
