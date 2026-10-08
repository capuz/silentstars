---
repo: "chen1111-a/hkid-quota-monitor"
name: "hkid-quota-monitor"
description: "Hong Kong Immigration Department smart ID card appointment quota monitoring dashboard: detection every 5 minutes + email/Feishu release notifications (third-party tool, not official)"
originalDescription: "香港入境处智能身份证预约配额监控看板：5分钟级检测+邮件/飞书放号通知（第三方工具，非官方）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/chen1111-a/hkid-quota-monitor"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [71, 28]
stars: 46
forks: 10
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-30T04:09:09Z"
lastCommitAt: "2026-10-08T10:51:27Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 34
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/d8472d3b4e23b41e37c6d687e907f7036a3f36110505d97fa253e4cadcb20ef1/chen1111-a/hkid-quota-monitor"
---

# HKID Appointment Quota Dashboard

Monitors the smart ID card appointment quotas at the six Hong Kong Immigration Department registration offices, checking roughly every 2 minutes, and notifies subscribers via email / Feishu group when slots are released. **A third-party public-interest tool, not an official Immigration Department service. It only monitors and sends alerts, and does not snatch or book appointments on anyone's behalf.**

## Dashboard entry

- **Preferred (stable direct access from mainland China):** https://hkid-quota-monitor.pages.dev/
- Backup: https://chen1111-a.github.io/hkid-quota-monitor/
  (access to github.io from mainland China is intermittent; jsDelivr/raw direct links carry a nosniff header and only display source code, so don't use them as web entry points)
- For the full experience in mainland China without a VPN, use **email subscription + Feishu group**. The notification path is entirely reachable directly within China, so releases reach your phone immediately; the dashboard is only a supplement

## How it works

```
cron-job.org (every 2 minutes) ──▶ GitHub Actions
                            │  python -m quota_monitor.run…
