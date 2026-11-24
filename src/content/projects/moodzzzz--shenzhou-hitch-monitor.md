---
repo: "Moodzzzz/shenzhou-hitch-monitor"
name: "shenzhou-hitch-monitor"
description: "Shenzhou Hitch Monitor: a ride-share (顺风车) monitoring tool for Shenzhou Car Rental (神州租车), including an API reverse-engineering report, lifecycle determination, email notifications, and a visual dashboard."
originalDescription: "神州顺风车监控：神州租车顺风车盯盘工具，含接口逆向报告、生命周期判定、邮件通知与可视看板"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Moodzzzz/shenzhou-hitch-monitor"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [62, 22]
stars: 6
forks: 3
openIssues: 3
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-20T13:23:19Z"
lastCommitAt: "2026-11-24T14:10:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 52
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8f706fa9c908bc31a584736f77ae55a144d4bb827344b2668d95e28658f4809/Moodzzzz/shenzhou-hitch-monitor"
---

# 神州车价 · 顺风车监控 + 长租行情

Monitors two types of cars in the Shenzhou Car Rental (神州租车) app:

1. **Hitch cars (顺风车)**: special-offer cross-city repositioning cars. The car needs to be driven from one city back to another. You take it at a fixed price of 1 / 50 / 100 CNY and drive it there, with a rental period of 1 to 13 days. These are usually grabbed quickly, so a program is needed to monitor them.
2. **Weekly / half-month / monthly rentals**: data is fetched separately for 7 / 15 / 30-day terms. Daily averages from the list are only candidate references. The price calendar is checked separately with day-by-day totals. Fees are not fabricated until the order's payable fee breakdown is obtained.

What the program does: **periodically fetches the full dataset → compares lifecycle (newly listed / locked / returned to order pool / expired and removed) → filters by conditions → sends email and other notifications**, and syncs the results to a searchable **visual dashboard**.
