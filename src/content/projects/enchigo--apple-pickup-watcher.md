---
repo: "ENCHIGO/apple-pickup-watcher"
name: "apple-pickup-watcher"
description: "免费开源的苹果直营店到店取货库存监控与到货提醒。Apple Store pickup stock monitor for iPhone, iPad, Mac & Apple Watch in 7 regions. macOS / Windows / Linux · Desktop & Bark alerts · Rust + Tauri."
readmeQualityOk: true
url: "https://github.com/ENCHIGO/apple-pickup-watcher"
homepage: "https://enchigo.github.io/apple-pickup-watcher/"
language: "Rust"
languages: ["Rust"]
languagePcts: [77]
topics: ["apple", "apple-store", "availability-checker", "bark", "cross-platform", "desktop-app", "in-stock-alert", "inventory-tracker", "iphone", "linux"]
stars: 86
forks: 25
openIssues: 3
closedIssues: 11
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-08-06T14:56:46Z"
lastCommitAt: "2026-09-16T08:47:28Z"
lastReleaseAt: "2026-09-13T16:10:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 41
maintainers: ["ENCHIGO", "claude", "mybot102"]
openGraphImageUrl: "https://opengraph.githubassets.com/02aac01b9377feee8397df5e1dbe190eb8ae2167509f9a39bd31ed400196db79/ENCHIGO/apple-pickup-watcher"
---

# Apple Pickup Watcher

**苹果直营店到店取货库存监控与到货提醒**

盯住你想买的 iPhone、iPad、Mac 或 Apple Watch，选定的 Apple Store 一有货就通知你。<br>
桌面应用、命令行 `apw` 和 agent skill 三种形态，免费开源。

<sub>Free, open-source Apple Store pickup stock monitor with restock alerts for macOS, Windows and Linux.</sub>

<br>

[项目主页](https://enchigo.github.io/apple-pickup-watcher/) · [English](https://github.com/ENCHIGO/apple-pickup-watcher/blob/HEAD/README.en.md) · [下载桌面版](https://github.com/ENCHIGO/apple-pickup-watcher/releases/latest) · [CLI 文档](https://github.com/ENCHIGO/apple-pickup-watcher/blob/HEAD/docs/cli.md) · [Agent skill](https://github.com/ENCHIGO/apple-pickup-watcher/blob/HEAD/skills/apple-pickup-watcher/SKILL.md) · [常见问题](#常见问题)

</div>

<br>

</p>

## 它做什么

| 特性 | 说明 |
| --- | --- |
| **三态库存，失败不装无货** | 每个目标只会是「有货 / 无货 / 未知」之一。被拦截、被限流、网络失败或响应结构变化时，显示**带原因的「未知」**并发出「监控当前不可信」告警，绝不静默显示成无货。 |
| **多门店、多型号一起盯** | 同一张表里混合监控不同品类、不同门店的目标。iPhone 按机型 → 容量 → 颜色三步选择，其他品类直接选型号，下拉框都支持搜索。 |
| **关窗不退出** | 关闭窗口收进系统托盘，Rust 后台继续查询与提醒，发售前挂几个小时也不用一直开着窗口。 |
| **多渠道到货提醒** | 系统通知、提示音，可选 [Bark](https://github.com/Finb/Bark) 推送到 iPhone。持续有货不重复提醒；可按设置自动打开购物袋。 |
| **型号目录可在线刷新** | 内置离线快照，一键从 Apple 购买页刷新当前品类的型号列表；已支持购买页里的新型号发售当天就能加入监控。 |
| **CLI 与…
