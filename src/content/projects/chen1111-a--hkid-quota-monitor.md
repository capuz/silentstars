---
repo: "chen1111-a/hkid-quota-monitor"
name: "hkid-quota-monitor"
description: "Hong Kong Immigration Department smart ID card appointment quota monitoring dashboard: 5-minute-level detection + email/Feishu slot-release notifications (third-party tool, not official)"
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
lastCommitAt: "2026-11-07T10:36:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 34
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/b8a3bdb3f6e049c1f6707cec6311e369ee47450570103697d04af27370bcf760/chen1111-a/hkid-quota-monitor"
---

# Hong Kong ID Card Appointment Quota Dashboard

Monitors smart ID card appointment quotas at the six Registration of Persons Offices of the Hong Kong Immigration Department, checking about every 2 minutes, and alerts subscribers via email / Feishu group when slots are released. **A third-party public-interest tool, not an official Immigration Department service. It only monitors and sends alerts, and does not grab or book appointments on anyone's behalf.**

## Dashboard entry

- **Preferred (stable direct access from mainland China):** https://hkid-quota-monitor.pages.dev/
- Backup: https://chen1111-a.github.io/hkid-quota-monitor/
  (github.io is intermittently unreachable from mainland networks; jsDelivr/raw direct links carry a nosniff header and only display source code, so do not use them as web entry points)
- The full experience in mainland China without a VPN is through **email subscription + Feishu group**. The notification path is entirely domestic and direct, so slot releases are pushed to your phone immediately. The dashboard is only a supplement.

## How it works

```
cron-job.org (every 2 minutes) ──▶ GitHub Actions
                            │  python -m…
