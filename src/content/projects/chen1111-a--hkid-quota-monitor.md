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
lastCommitAt: "2026-10-24T08:07:29Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 34
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/0088607b1f9b00cc09fa82e285a8954b706ccb4578f8a24c8fca31dcb3f4c85f/chen1111-a/hkid-quota-monitor"
---

# Hong Kong ID Card Appointment Quota Dashboard

Monitors smart ID card appointment quotas at the six Hong Kong Immigration Department registration offices, checking about every 2 minutes. When slots are released, it alerts subscribers via email / Feishu group. **A third-party public-interest tool, not an official Immigration Department service. It only monitors and sends alerts, and does not snap up or book appointments on anyone's behalf.**

## Dashboard entry

- **Preferred (stable direct access from mainland China)**: https://hkid-quota-monitor.pages.dev/
- Backup: https://chen1111-a.github.io/hkid-quota-monitor/
  (github.io is intermittently unreachable from mainland networks. The jsDelivr/raw direct links carry a nosniff header and only display source code, so don't use them as web entry points.)
- The full experience in mainland China without a VPN is **email subscription + Feishu group**. The notification path is directly reachable domestically throughout, pushing slot releases to your phone at the first moment. The dashboard is only auxiliary.

## How it works

```
cron-job.org (every 2 minutes) ──▶ GitHub Actions
                            │  python -m…
