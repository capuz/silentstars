---
repo: "aaazha686-oss/ktown4u-fansign-tracker"
name: "ktown4u-fansign-tracker"
description: "Ktown4u Live Sales Tracker for Signing Events (Cloud, GitHub Actions)"
originalDescription: "Ktown4u 签售实时销量云端追踪 (GitHub Actions)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/aaazha686-oss/ktown4u-fansign-tracker"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [72, 28]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-25T01:52:18Z"
lastCommitAt: "2026-11-10T11:38:56Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 50
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/03f978f6cda3a2ab4bbc14e4c6f1e78b3f9ac4c69316489e123a83e7bca76400/aaazha686-oss/ktown4u-fansign-tracker"
---

# Ktown4u Cloud Auto-Scraping (GitHub Actions)

Let GitHub scrape Ktown4u signing-event sales automatically in the cloud, 24 hours a day, and store the data in the repository.
Your computer can be offline. When you have internet access, just open the repository to view or download the full history.

## File Structure (place as-is in the repository)
```
your-repo/
├─ .github/workflows/track.yml   # scheduled task (every 5 minutes)
├─ ktown4u_ci.py                 # scraping script
├─ track_config.json             # config: which events to track
└─ data/                         # auto-generated: track_<event-no>.csv
```

## One-Time Setup (about 5 minutes)

1. **Create a GitHub repository** and choose **Public**.
   > Why public: Actions in public repositories are **free with unlimited usage**. Private repositories get only 2,000 minutes per month, which won't last long.
   > Signing-event sales figures are not sensitive data, so making them public is fine.

2. **Upload these three files** (keep the directory structure above): `.github/workflows/track.yml`, `ktown4u_ci.py`, `track_config.json`.
   - Via the web UI: repository page → Add file → Upload files, then drag the contents of…
