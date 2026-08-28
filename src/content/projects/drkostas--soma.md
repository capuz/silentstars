---
repo: "drkostas/soma"
name: "soma"
description: "Open-source, science-driven personal health intelligence platform"
readmeQualityOk: true
url: "https://github.com/drkostas/soma"
homepage: "https://soma-demo.gkos.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 11
forks: 0
openIssues: 23
closedIssues: 269
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-20T21:34:56Z"
lastCommitAt: "2026-08-28T15:34:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 97
undervaluedScore: 52
maintainers: ["drkostas"]
openGraphImageUrl: "https://opengraph.githubassets.com/828d50b9a6a2c57e36ae78eaf63cdcc651132dd1175c966e895bd63bfea79fd3/drkostas/soma"
discussionCount: 0
---

<br>
  <br><br>
  <h2>soma</h2>
  <p>Your health stack, finally unified.<br>
  Garmin · Hevy · Strava — one self-hosted dashboard, your data, your server.</p>
  <br>

  **[Live Demo →](https://soma-demo.gkos.dev)**

  <br>

  <br>

  <br><br>
</div>

---

## Overview

Daily steps, resting heart rate, stress trend, body composition, recovery status, weekly training load, activity streaks — your full health picture on one page.

---

## Running

Pace progression across every run, monthly mileage history, VO2max trend, training zones, HR vs pace scatter, split analysis, shoe mileage tracking.

---

## Workouts

Muscle activation map (front & back) with volume by muscle group across all sessions. Exercise progression, personal records, gym frequency heatmap.

---

## Sleep & Recovery

Sleep stages over time (deep, light, REM, awake), score trend, sleep schedule, HRV, blood oxygen, respiration rate, body battery, training readiness.

---

## Sync Hub

See exactly what synced, configure push rules (e.g. Hevy strength → Strava), and monitor the live data pipeline.

---

## Architecture

```
Garmin Connect ──┐
                 ├──▶  TS sync (Actions + Vercel crons)  ──▶  Neon PostgreSQL…
