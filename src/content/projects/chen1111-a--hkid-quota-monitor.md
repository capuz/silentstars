---
repo: "chen1111-a/hkid-quota-monitor"
name: "hkid-quota-monitor"
description: "Hong Kong Immigration Department Smart ID Card Appointment Quota Monitoring Dashboard: 5-minute detection + email/Feishu release notification (third-party tool, not official)"
originalDescription: "香港入境处智能身份证预约配额监控看板：5分钟级检测+邮件/飞书放号通知（第三方工具，非官方）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/chen1111-a/hkid-quota-monitor"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [71, 28]
stars: 47
forks: 10
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-30T04:09:09Z"
lastCommitAt: "2026-09-22T08:45:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 34
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/63fa35b205957c066bc2a9af5528d0fb2af085b8d0dacdd88f82c9e84f7e0d0d/chen1111-a/hkid-quota-monitor"
---

# Hong Kong ID Card Appointment Quota Dashboard

Monitor the smart ID card appointment quota of the Hong Kong Immigration Department's six registration offices, with detection approximately every 2 minutes. When quotas are released, subscribers are reminded via email/Feishu group. **Third-party public welfare tool, not an official Immigration Department service; only provides monitoring and reminders, does not perform any proxy booking or appointment.**

## Dashboard Entry Points

- **Preferred (stable direct connection within mainland China)**: https://hkid-quota-monitor.pages.dev/
- Backup: https://chen1111-a.github.io/hkid-quota-monitor/
  (Mainland China network access to github.io is intermittent; jsDelivr/raw direct links with nosniff headers will only display source code, do not use as web entry point)
- For complete experience within mainland China without VPN, use **email subscription + Feishu group** — notification path is entirely domestic direct connection, releases are pushed to phone immediately, dashboard is auxiliary only

## How It Works

```
cron-job.org (every 2 minutes) ──▶ GitHub Actions
                            │  python -m quota_monitor.run…
