---
repo: "chen1111-a/hkid-quota-monitor"
name: "hkid-quota-monitor"
description: "Hong Kong Immigration Department Smart ID Card Appointment Quota Monitoring Dashboard: 5-minute-level Detection + Email/Feishu Release Notifications (Third-party Tool, Unofficial)"
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
lastCommitAt: "2026-09-28T10:07:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 34
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/314991e8d6c9a3116e788a7860a2c88af2b63e569736638c5a4c04497c3f1703/chen1111-a/hkid-quota-monitor"
---

# Hong Kong ID Card Appointment Quota Dashboard

Monitors the smart ID card appointment quotas across six major immigration registration offices of the Hong Kong Immigration Department, with detection approximately every 2 minutes. When quotas are released, subscribers are notified via email/Feishu groups. **Third-party public welfare tool, not an official Immigration Department service; only provides monitoring and reminders, does not engage in any quota-grabbing or appointment-substituting services.**

## Dashboard Entrance

- **Recommended (stable direct connection from mainland)**: https://hkid-quota-monitor.pages.dev/
- Backup: https://chen1111-a.github.io/hkid-quota-monitor/
  (Mainland network connection to github.io is intermittent; jsDelivr/raw direct links with nosniff headers will only display source code, do not use as webpage entrance)
- For full experience without VPN on mainland China, use **Email Subscription + Feishu Groups** — notification path has direct domestic connections throughout, releases pushed to phone immediately, dashboard is only supplementary

## How It Works

```
cron-job.org (every 2 minutes) ──▶ GitHub Actions
                                  │…
