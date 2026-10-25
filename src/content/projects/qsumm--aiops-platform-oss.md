---
repo: "qsumm/aiops-platform-oss"
name: "aiops-platform-oss"
description: "AI Operations Monitoring Platform · AIOps monitoring platform: alerting, AI diagnosis, guard-railed recovery, log forensics — AGPL-3.0"
originalDescription: "AI 运维监控平台 · AIOps monitoring platform: alerting, AI diagnosis, guard-railed recovery, log forensics — AGPL-3.0"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/qsumm/aiops-platform-oss"
language: "Python"
languages: ["Python"]
languagePcts: [77]
topics: ["agpl", "aiops", "alerting", "fastapi", "incident-management", "llm", "monitoring", "root-cause-analysis", "devops"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-16T16:02:02Z"
lastCommitAt: "2026-10-25T02:45:42Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 9
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/158cdb43b6aba8fedbeea22ec107ba83257c7f743f8f9e759168f5f45e44f729/qsumm/aiops-platform-oss"
---

# AI Operations Monitoring Platform

**The alert fired, AI has already finished investigating, and the evidence chain is laid out in front of you.**

*AI on-call operations for small and mid-sized teams — someone watches the alerts, someone investigates the causes, someone approves the remediation.*

---

## Why This One

Have you ever had a night like this: an alert fires, you SSH in to dig through logs, check processes, and guess at the cause, and half an hour later you realize you've restarted a service that wasn't broken at all?

This platform hands that process over to AI — but it does **not** let AI wander around on production machines. Its philosophy is written into the code:

> The hard part of recovery capability isn't “executing,” it's “**having the nerve not to execute**.”

## At a Glance

| Scenario | What You Can Use |
|---|---|
| Monitoring | Pull-based agent onboarding (0 inbound ports on hosts) · four-piece liveness checks (TCP/HTTP/process/certificate) · real-time multi-dimensional metric queries · Prometheus data source |
| Alerting | Thresholds / 3σ / Isolation Forest · fingerprint-based deduplication and convergence · silencing policy chains · multi-channel…
