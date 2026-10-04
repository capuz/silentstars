---
repo: "Gsjsjzhznsz/BandQQ"
name: "BandQQ"
description: "Xiaomi Mi Band 9 QQ Message Assistant v1.1.1: Band Vela quickapp (rpk) + Android synchronizer (APK), OneBot v11 (NapCat/Lagrange/go-cqhttp) Bluetooth synced QQ messages, @me reminders, quick replies, pinyin input (full CJK 21197 characters), history pagination, reconnection push recovery | Xiaomi Mi Band 9 QQ chat assistant with Vela quickapp + OneBot sync"
originalDescription: "小米手环9 QQ消息助手 v1.1.1：手环Vela快应用(rpk)+安卓同步器(APK)，OneBot v11 (NapCat/Lagrange/go-cqhttp) 蓝牙同步QQ消息，@我提醒、快捷回复、拼音输入(CJK全量21197字)、历史翻页、断连补推 | Xiaomi Mi Band 9 QQ chat assistant with Vela quickapp + OneBot sync"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Gsjsjzhznsz/BandQQ"
language: "Kotlin"
languages: ["Kotlin", "JavaScript"]
languagePcts: [66, 23]
topics: ["android", "bluetooth", "chat", "go-cqhttp", "kotlin", "message-sync", "mi-band", "mi-band-9", "napcat", "onebot"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-09T00:39:52Z"
lastCommitAt: "2026-10-04T10:01:38Z"
lastReleaseAt: "2026-10-03T10:26:07Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 62
maintainers: ["Gsjsjzhznsz"]
openGraphImageUrl: "https://opengraph.githubassets.com/56b94c05c1479bb2241668ca758d126b69ac3f885f6446551571367d37672cf7/Gsjsjzhznsz/BandQQ"
---

# 💬 BandQQ Wrist Messenger: Distant Lone Star

**QQ message assistant on Xiaomi Mi Band / Redmi Watch / Xiaomi Watch · Vela quickapp + Android synchronizer dual-platform solution**

**View QQ, reply to QQ, browse history, receive images directly on the band.**
The band runs a Vela quickapp (rpk), the phone runs an Android synchronizer (APK), syncing in real-time through Xiaomi's interconnected Bluetooth channel, with the protocol end connecting to OneBot v11 (NapCat / Lagrange / LLOneBot / go-cqhttp all supported).

---

## 📱 Device Branches (v2.10.0+ single main branch + build-time packaging)

A single source tree generates independent adaptation packages for each series through `band-qq/tools/branch-release.js` during build——designWidth aligned to physical screen width, styles calculated by visual density coefficient, **keyboard unified across all branches with single component NEORUAA/Vela_input_method adapted by screen shape** (v2.13.0), round screen safety margins, eliminating git multi-branch drift:

| Branch Package | Adapted Devices | Screen | designWidth | Keyboard (NEORUAA single component · v2.13.0) |
|---|---|---|---|---|
| `bandqq-band` | Mi Band 8 / 9 / 10 / 11 |…
