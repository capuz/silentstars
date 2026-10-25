---
repo: "chen1111-a/hkid-quota-monitor"
name: "hkid-quota-monitor"
description: "Hong Kong ID card appointment quota monitoring dashboard for the Immigration Department's smart ID card: 5-minute-level detection + email/Feishu alerts on slot releases (third-party tool, not official)"
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
lastCommitAt: "2026-10-25T02:47:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 34
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/04e40f4cdd5d8ab612224e27ce24e64277a94e45fd171e012053102f321a4c37/chen1111-a/hkid-quota-monitor"
---

# Hong Kong ID Card Appointment Quota Dashboard

Monitors the smart ID card appointment quotas at the six Registration of Persons Offices of the Hong Kong Immigration Department, checking roughly every 2 minutes, and alerts subscribers via email / Feishu group when slots are released. **A third-party public-interest tool, not an official service of the Immigration Department. It only monitors and sends alerts, and does not book or grab appointments on anyone's behalf.**

## Dashboard entry

- **Preferred (stable direct access from mainland China):** https://hkid-quota-monitor.pages.dev/
- Backup: https://chen1111-a.github.io/hkid-quota-monitor/
  (Access to github.io from mainland China is intermittent. jsDelivr/raw direct links send a nosniff header and only display source code, so don't use them as web entry points.)
- For the full experience in mainland China without a VPN, use **email subscription + Feishu group**. The notification pipeline is fully reachable domestically, pushing slot releases to your phone immediately; the dashboard is just a helper.

## How it works

```
cron-job.org (every 2 minutes) ──▶ GitHub Actions
                            │  python -m…
