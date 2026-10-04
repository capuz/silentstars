---
repo: "chen1111-a/hkid-quota-monitor"
name: "hkid-quota-monitor"
description: "Hong Kong Immigration Department Smart ID Card Appointment Quota Monitoring Dashboard: 5-minute level detection + email/Feishu quota release notifications (third-party tool, unofficial)"
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
lastCommitAt: "2026-10-04T10:01:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 34
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/24be9b3e209ba098e9a13e03e913c1ddfbf739caf4215227d40dd346a24231b8/chen1111-a/hkid-quota-monitor"
---

# Hong Kong ID Card Appointment Quota Monitoring Dashboard

Monitors the smart ID card appointment quotas of six of the Hong Kong Immigration Department's personnel registration offices, detecting approximately once every 2 minutes. When quotas are released, subscribers are notified via email / Feishu group. **Third-party public service tool, not an official Immigration Department service; only provides monitoring and notifications, does not engage in any proxy booking or quota grabbing.**

## Dashboard Entrance

- **Preferred (stable mainland China direct connection)**: https://hkid-quota-monitor.pages.dev/
- Backup: https://chen1111-a.github.io/hkid-quota-monitor/
  (Mainland China networks have intermittent connectivity to github.io; jsDelivr/raw direct links include nosniff headers and will only display source code, do not use as a web entrance)
- For a complete experience without VPN on mainland China, use **email subscription + Feishu group** — the notification path is entirely mainland China direct connections, quota releases are pushed to your phone immediately, the dashboard is just supplementary

## How It Works

```
cron-job.org (every 2 minutes) ──▶ GitHub Actions…
