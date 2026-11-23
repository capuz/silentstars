---
repo: "aaazha686-oss/ktown4u-fansign-tracker"
name: "ktown4u-fansign-tracker"
description: "Ktown4u Live Signing Sales Cloud Tracking (GitHub Actions)"
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
lastCommitAt: "2026-11-23T10:32:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 50
maintainers: ["github-actions[bot]", "aaazha686-oss"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a5a9076643f85d88ba429d76dd0d97d61b60ffdfa1b35547bb1b59ee9c41fca/aaazha686-oss/ktown4u-fansign-tracker"
---

# Ktown4u Cloud Auto-Scraping (GitHub Actions)

Let GitHub automatically scrape Ktown4u signing-event sales 24/7 in the cloud, with the data stored in the repository.
Even if your computer loses its internet connection, you can view or download the full history by opening the repository whenever you're online.

## File structure (place as-is in the repository)
```
your-repo/
├─ .github/workflows/track.yml   # Scheduled task (every 5 minutes)
├─ ktown4u_ci.py                 # Scraping script
├─ track_config.json             # Config: which events to track
└─ data/                         # Auto-generated: track_<event number>.csv
```

## One-time setup (about 5 minutes)

1. **Create a GitHub repository** and select **Public**.
   > Why public: Actions in public repositories are **free with unlimited usage**; private repositories only get 2000 minutes per month, which won't last long.
   > Signing sales data is not sensitive, so making it public is fine.
