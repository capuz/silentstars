---
repo: "aaazha686-oss/ktown4u-fansign-tracker"
name: "ktown4u-fansign-tracker"
description: "Ktown4u Signing Event Real-Time Sales Cloud Tracker (GitHub Actions)"
originalDescription: "Ktown4u 签售实时销量云端追踪 (GitHub Actions)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/aaazha686-oss/ktown4u-fansign-tracker"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [80, 20]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-25T01:52:18Z"
lastCommitAt: "2026-11-22T02:13:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 50
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a5a9076643f85d88ba429d76dd0d97d61b60ffdfa1b35547bb1b59ee9c41fca/aaazha686-oss/ktown4u-fansign-tracker"
---

# Ktown4u Cloud Auto-Scraper (GitHub Actions)

Let GitHub scrape Ktown4u signing-event sales automatically in the cloud, 24 hours a day, and store the data in the repository.
Your computer can be offline. When you have internet access, open the repository to view or download all historical data.

## File structure (place as-is in the repository)
```
your-repo/
├─ .github/workflows/track.yml   # Scheduled job (every 5 minutes)
├─ ktown4u_ci.py                 # Scraping script
├─ track_config.json             # Config: which events to track
└─ data/                         # Auto-generated: track_<event-no>.csv
```

## One-time setup (about 5 minutes)

1. **Create a GitHub repository** and select **Public**.
   > Why public: Actions in public repositories are **free and unlimited**. Private repositories get only 2000 minutes per month, which won't last long.
   > Signing-event sales figures are not sensitive data, so making the repository public is fine.
