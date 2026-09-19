---
repo: "chen1111-a/hkid-quota-monitor"
name: "hkid-quota-monitor"
description: "Hong Kong Immigration Department Smart ID Card Appointment Quota Monitoring Dashboard: 5-minute-level detection + email/Feishu release notifications (third-party tool, non-official)"
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
lastCommitAt: "2026-09-19T02:48:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 34
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/c12dfae69532e8a95a9748dbb3693bfddad5da6e37993f8ef709bfd01cd86bf3/chen1111-a/hkid-quota-monitor"
---

# Hong Kong ID Card Appointment Quota Dashboard

Monitors the smart ID card appointment quotas of six major civil registration offices of the Hong Kong Immigration Department, detecting approximately every 2 minutes. When quotas are released, subscribers are reminded via email / Feishu groups. **Third-party public welfare tool, not an official service of the Immigration Department; only provides monitoring and notifications, does not perform any quota-snatching or appointment-making on behalf of users.**

## Dashboard Access

- **Preferred (mainland direct connection, stable)**: https://hkid-quota-monitor.pages.dev/
- Backup: https://chen1111-a.github.io/hkid-quota-monitor/
  (mainland networks have intermittent GitHub.io connectivity; jsDelivr/raw direct links with nosniff headers will only display source code, do not use as webpage entry points)
- For a complete experience in mainland China without requiring VPN, use **email subscription + Feishu groups** — the notification pathway is entirely domestic direct connection, quota releases are pushed to your phone immediately, the dashboard is auxiliary only

## How It Works

```
cron-job.org (every 2 minutes) ──▶ GitHub Actions…
