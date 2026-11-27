---
repo: "RohiRIK/argus"
name: "argus"
description: "Argus — the all-seeing eye for Microsoft 365. Self-hosted, Dockerized notification & reporting for IT admins and security teams."
readmeQualityOk: true
url: "https://github.com/RohiRIK/argus"
homepage: "https://argus.rohi-lab.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["docker", "m365", "notifications", "security", "self-hosted", "entra-id", "intune", "microsoft-365", "microsoft-graph"]
stars: 34
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-14T05:40:15Z"
lastCommitAt: "2026-11-27T12:57:57Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 38
maintainers: ["RohiRIK", "claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1268941654/1042c78c-66b8-4004-a963-20f54ac075fa"
---

Self-hosted, Dockerized notification &amp; reporting for IT admins and security teams.

---

## What is Argus?

Argus replaces manual Microsoft Graph querying with **scheduled, automated reports** that
land in your inbox only when they matter. It connects to the Graph API with
**app-only permissions** (read reports plus `Mail.Send`; group writes are opt-in), runs report jobs on a schedule, applies
baseline anomaly detection and conditional logic, renders HTML email reports, and delivers
them from a single scoped shared mailbox.

The whole stack — UI, scheduler, database, and worker — runs in **one Docker container**.
The operational model is Jenkins-inspired: **Catalog → Jobs → Executions → Logs**.

> Named after Argus Panoptes, the hundred-eyed giant of Greek myth — the ever-watchful guardian.

---

## Run it with an AI agent

Hand this to any AI coding agent (Claude Code, Cursor, etc.) and it will bring Argus up:
