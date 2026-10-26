---
repo: "chen1111-a/hkid-quota-monitor"
name: "hkid-quota-monitor"
description: "Hong Kong Immigration Department smart ID card appointment quota monitoring dashboard: detection every 5 minutes, plus email/Feishu notifications when quotas are released (third-party tool, not official)"
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
lastCommitAt: "2026-10-26T18:06:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 34
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/c5db5efbb8cea77e22bf6b14f53b1ea75a0a4049c38d701d294a7853f352ccc1/chen1111-a/hkid-quota-monitor"
---

# Hong Kong ID Card Appointment Quota Dashboard

Monitors smart ID card appointment quotas at the six Registration of Persons Offices of the Hong Kong Immigration Department, checking about every 2 minutes, and alerts subscribers via email / Feishu group when quotas are released. **This is a third-party public-interest tool, not an official service of the Immigration Department. It only monitors and sends alerts, and does not grab or book appointments on anyone's behalf.**

## Dashboard Entry

- **Preferred (stable direct access from mainland China):** https://hkid-quota-monitor.pages.dev/
- Backup: https://chen1111-a.github.io/hkid-quota-monitor/
  (Access to github.io from mainland China is intermittent. jsDelivr/raw direct links carry a nosniff header and only display source code, so do not use them as web entry points.)
- The full experience in mainland China without a VPN is email subscription + Feishu group. The notification pipeline is reachable directly within China, so releases reach your phone right away. The dashboard is only a supplementary aid.

## How It Works

```
cron-job.org (every 2 minutes) ──▶ GitHub Actions
                            │  python -m…
