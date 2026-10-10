---
repo: "chen1111-a/hkid-quota-monitor"
name: "hkid-quota-monitor"
description: "Hong Kong Immigration Department smart ID card booking quota monitoring dashboard: detection every 5 minutes, plus email/Feishu notifications when slots are released (third-party tool, not official)"
originalDescription: "香港入境处智能身份证预约配额监控看板：5分钟级检测+邮件/飞书放号通知（第三方工具，非官方）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/chen1111-a/hkid-quota-monitor"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [71, 28]
stars: 47
forks: 11
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-30T04:09:09Z"
lastCommitAt: "2026-10-10T10:04:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 34
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/11fb35545504447f0a6c0d8e3c289875a0787d54c799a8390a89abc0a346e315/chen1111-a/hkid-quota-monitor"
---

# Hong Kong ID Card Booking Quota Dashboard

Monitors smart ID card booking quotas at the six Registration of Persons Offices of the Hong Kong Immigration Department, checking about every 2 minutes, and reminds subscribers via email / Feishu group when slots are released. **A third-party public-interest tool, not an official service of the Immigration Department. It only monitors and sends reminders; it does not do any proxy grabbing or booking.**

## Dashboard entry

- **Preferred (stable direct access from mainland China):** https://hkid-quota-monitor.pages.dev/
- Backup: https://chen1111-a.github.io/hkid-quota-monitor/
  (From mainland networks, github.io is intermittently unreachable. jsDelivr/raw direct links carry a nosniff header and will only display source code, so do not use them as web entry points.)
- The full experience in mainland China without a VPN is **email subscription + Feishu group**. The notification pipeline is entirely direct domestic access, pushing slot releases to your phone the moment they happen. The dashboard is only a supplement.

## How it works

```
cron-job.org (every 2 minutes) ──▶ GitHub Actions
                            │  python -m…
