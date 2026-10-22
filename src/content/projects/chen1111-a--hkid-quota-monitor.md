---
repo: "chen1111-a/hkid-quota-monitor"
name: "hkid-quota-monitor"
description: "Hong Kong smart ID card appointment quota monitoring dashboard: 5-minute-level detection with email/Feishu slot-release notifications (third-party tool, not official)"
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
lastCommitAt: "2026-10-22T08:52:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 34
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/c933c3191b05f2900eb6c64c33612c660fc5574c69fd09ee1fb12ad478b9b697/chen1111-a/hkid-quota-monitor"
---

# Hong Kong ID Card Appointment Quota Dashboard

Monitors the smart ID card appointment quotas at the six Immigration Department registration offices in Hong Kong, checking roughly every 2 minutes, and alerts subscribers via email / Feishu group when slots are released. **A third-party public-interest tool, not an official service of the Immigration Department. It only monitors and sends alerts, and does not automatically grab or book appointments on anyone's behalf.**

## Dashboard Entry

- **Preferred (stable direct access from mainland China):** https://hkid-quota-monitor.pages.dev/
- Backup: https://chen1111-a.github.io/hkid-quota-monitor/
  (Access to github.io from mainland China is intermittent. jsDelivr/raw direct links carry a nosniff header and only display source code, so do not use them as web entry points.)
- The full experience in mainland China without a VPN is through **email subscription + Feishu group**. The notification path runs entirely through direct domestic connections and pushes slot releases to your phone immediately. The dashboard is only a helper.

## How It Works

```
cron-job.org (every 2 minutes) ──▶ GitHub Actions
                            │…
