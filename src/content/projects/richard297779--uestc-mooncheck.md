---
repo: "richard297779/UESTC-MoonCheck"
name: "UESTC-MoonCheck"
description: "An ESP32 embedded solution for UESTC check-in scenarios that refactors the reporting logic at the firmware layer, bypassing GPS location verification and manual interaction to achieve a fully automated, scheduled attendance loop."
originalDescription: "面向电子科技大学打卡场景的 ESP32 嵌入式方案，通过固件层重构上报逻辑，绕过 GPS 定位校验与人工交互，达成全自动、可定时的考勤闭环。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/richard297779/UESTC-MoonCheck"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [42, 36]
stars: 19
forks: 1
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-14T18:36:08Z"
lastCommitAt: "2026-11-27T16:30:09Z"
lastReleaseAt: "2026-11-27T13:15:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 48
maintainers: ["richard297779", "muyuhuanghun"]
openGraphImageUrl: "https://opengraph.githubassets.com/253cfb4742ab7783b7ed003c4767add4340bcbbb3a1d9c3a7282fe16b237a32e/richard297779/UESTC-MoonCheck"
discussionCount: 1
---

# MoonCheck

MoonCheck provides automatic check-in for UESTC's 晚安成电 (Good Night UESTC). It keeps the ESP32 powered and connected, so the device runs on schedule and you no longer need to manually open the page at a set time and place every day. It supports group leader team confirmation and individual location check-in.

[Download v0.9.0 firmware and PC Bluetooth console](https://github.com/richard297779/UESTC-MoonCheck/releases/tag/v0.9.0)

## Safety Notes

- **Group leaders** confirm every day that each group member can be reached. When someone cannot be contacted or their situation needs verification, pause that round's automatic task first, then verify and report as the school requires.
- **Individual check-in** uses your own account. Make sure you can be reached that night. When your location or actual circumstances change, handle it promptly and manually as the school requires.
- Use in accordance with school regulations. Configure your own device only in a controlled environment, and safeguard your passwords, browser fingerprints, WeChat credentials, and push keys.
