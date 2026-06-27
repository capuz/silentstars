---
repo: "jgamblin/NVDAnalysisStatus"
name: "NVDAnalysisStatus"
description: "NVD CVE Analysis Status Data "
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
lastCommitAt: "2026-06-27T00:46:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 69
maintainers: ["github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd2ab51ef2299f875c1190611a1de59966e7b613cb9156c3f25f0eddd0db9857/jgamblin/NVDAnalysisStatus"
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

Open **[NVDVulnStatus.ipynb](NVDVulnStatus.ipynb)** to see the latest analysis with interactive charts and statistics.

## 🛠️ Local Setup

```bash
# Clone the repo
git clone…
