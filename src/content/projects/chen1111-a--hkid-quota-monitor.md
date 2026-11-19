---
repo: "chen1111-a/hkid-quota-monitor"
name: "hkid-quota-monitor"
description: "Hong Kong Immigration Department smart ID card booking quota monitoring dashboard: 5-minute-level detection with email/Feishu slot-release notifications (third-party tool, not official)"
originalDescription: "香港入境处智能身份证预约配额监控看板：5分钟级检测+邮件/飞书放号通知（第三方工具，非官方）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/chen1111-a/hkid-quota-monitor"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [71, 28]
stars: 74
forks: 11
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-30T04:09:09Z"
lastCommitAt: "2026-11-19T05:06:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 30
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/f1c1438154f61c9f114106732a213c954b625900b1ddc8d037bbed3bbaf39d62/chen1111-a/hkid-quota-monitor"
---

# Hong Kong ID Card Booking Quota Dashboard

Monitors smart ID card booking quotas at the six Hong Kong Immigration Department Personal Registration Offices, checking about every 2 minutes, and notifies subscribers via email / Feishu group when slots are released. **A third-party public-benefit tool, not an official service of the Immigration Department. It only monitors and sends reminders, and does not grab or book on anyone's behalf.**

## Dashboard entry

- **Preferred (stable direct access from mainland China)**: https://hkid-quota-monitor.pages.dev/
- Backup: https://chen1111-a.github.io/hkid-quota-monitor/
  (From mainland networks, github.io is intermittently unreachable. jsDelivr/raw direct links carry a nosniff header and only display source code, so do not use them as web entry points.)
- The full experience in mainland China without a VPN is through **email subscription + Feishu group**. The notification path is entirely direct within China and pushes to your phone the moment slots are released. The dashboard is only a helper.
