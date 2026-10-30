---
repo: "user1-prajwal/driftwatch"
name: "driftwatch"
description: "Detects anomalies in CSVs and Google Sheets using an ensemble of Z-score, Chi-square, and Isolation Forest, explains root cause via AI, and sends alerts automatically"
readmeQualityOk: true
url: "https://github.com/user1-prajwal/driftwatch"
homepage: "https://driftwatchai.vercel.app/"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [67, 31]
topics: ["ai", "anomaly-detection", "apscheduler", "data-monitoring", "data-observability", "data-quality", "fastapi", "gemini-api", "isolation-forest", "jwt-authentication"]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-18T09:42:26Z"
lastCommitAt: "2026-10-30T11:02:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 74
undervaluedScore: 26
maintainers: ["user1-prajwal"]
openGraphImageUrl: "https://opengraph.githubassets.com/948416ac0511ca5b41d8bb6da95377b194af83e3febd70bc7ca02ec58ce14ee8/user1-prajwal/driftwatch"
---

# DriftWatch — Data Anomaly Monitoring Platform

Detect unusual changes in tabular data and get a plain-English explanation of what changed. Upload a CSV for a one-off scan, or connect a Google Sheet and let DriftWatch check it on a schedule and email you when something looks wrong.

[Live demo](https://driftwatchai.vercel.app/) · [Backend API docs](https://driftwatch-backend.onrender.com/docs) · [Interactive architecture map](https://github.com/user1-prajwal/driftwatch/blob/HEAD/docs/architecture-map.html)

> The backend runs on Render's free tier, so the first request after a period of inactivity can take about 30 seconds.

## What it does

- **One-time scan (no login).** Upload a CSV on the landing page and get results inline. Nothing is saved, and the uploaded file is deleted when the scan finishes.
- **Auto monitors (login required).** Connect a Google Sheet, choose columns, sensitivity and an interval in hours. Each run is stored in scan history. An email alert is sent only when the overall result is not NORMAL.
- **Plain-English explanations.** Findings with severity above 30 are explained by Gemini (what changed, why it may matter, what to do). Statistical terms stay out…
