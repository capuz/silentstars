---
repo: "chen1111-a/hkid-quota-monitor"
name: "hkid-quota-monitor"
description: "Hong Kong ID card smart ID appointment quota monitoring dashboard: 5-minute detection + email/Feishu slot-release notifications (third-party tool, not official)"
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
lastCommitAt: "2026-11-04T13:05:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 34
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/ad787c68fbb66b41936265574ca89a4ac38c5a687c48d4dc5d512c064e78d22a/chen1111-a/hkid-quota-monitor"
---

# HKID Appointment Quota Dashboard

Monitors smart ID card appointment quotas at the six Registration of Persons offices of the Hong Kong Immigration Department, checking about every 2 minutes, and notifies subscribers via email / Feishu group when slots are released. **This is a third-party public-interest tool, not an official Immigration Department service. It only monitors and sends alerts; it does not snatch or book appointments on anyone's behalf.**

## Dashboard entry

- **Preferred (stable direct access from mainland China)**: https://hkid-quota-monitor.pages.dev/
- Backup: https://chen1111-a.github.io/hkid-quota-monitor/
  (Access to github.io from mainland networks is intermittent; jsDelivr/raw direct links carry a nosniff header and only display source code, so don't use them as web entry points)
- The full experience in mainland China without a VPN is email subscription + Feishu group. The notification path is entirely direct within China and pushes releases to your phone right away; the dashboard is only a helper

## How it works

```
cron-job.org (every 2 minutes) ──▶ GitHub Actions
                            │  python -m quota_monitor.run…
