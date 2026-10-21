---
repo: "jgamblin/NVDAnalysisStatus"
name: "NVDAnalysisStatus"
description: "NVD CVE Analysis Status Data "
readmeQualityOk: true
url: "https://github.com/jgamblin/NVDAnalysisStatus"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [100]
stars: 9
forks: 3
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-05-21T19:18:21Z"
lastCommitAt: "2026-10-21T21:15:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 69
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0e4027c1307da5dfe94e24a22759fb9f5171d539e68fc767960da87e7a99596/jgamblin/NVDAnalysisStatus"
---

# NVD CVE Analysis Status Tracker

An automated tracker monitoring the National Vulnerability Database (NVD) CVE analysis backlog since February 15, 2024 — the date NIST [announced reduced capacity](https://nvd.nist.gov/general/news/nvd-program-transition-announcement) for CVE enrichment and analysis.

## 📊 What This Tracks

On February 15, 2024, NVD announced they would be reducing their CVE analysis efforts, creating a growing backlog of unanalyzed vulnerabilities. This project provides:

- **Total CVEs published** since the announcement
- **Complete status breakdown** of all CVE states (Analyzed, Awaiting Analysis, Undergoing Analysis, Modified, Rejected, Received)
- **Backlog metrics** showing work remaining and estimated days to clear
- **Calendar heatmaps** visualizing daily analysis and publication rates

## 🔄 Auto-Updated Every 6 Hours

Data is automatically refreshed via GitHub Actions, pulling the latest CVE data from the NVD. 
t
## 📈 View the Report

Open **[NVDVulnStatus.ipynb](https://github.com/jgamblin/NVDAnalysisStatus/blob/HEAD/NVDVulnStatus.ipynb)** to see the latest analysis with interactive charts and statistics.

## 🛠️ Local Setup

```bash
# Clone the repo…
