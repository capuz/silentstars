---
repo: "iansokolskyi/stemtrace"
name: "stemtrace"
description: "A lightweight Celery task flow visualizer"
readmeQualityOk: true
url: "https://github.com/iansokolskyi/stemtrace"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 12
forks: 3
openIssues: 6
closedIssues: 6
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2025-12-27T22:18:38Z"
lastCommitAt: "2026-11-02T13:38:19Z"
lastReleaseAt: "2026-10-09T20:25:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 63
maintainers: ["iansokolskyi", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c5fd91fd11a86c4b6d8aadb3a231e5c1b5dc3b21f4585d055e54aea6b321dc6f/iansokolskyi/stemtrace"
discussionCount: 0
---

# stemtrace

**Zero-infrastructure Celery task flow visualizer**

---

> **Flower shows you what exists. Stemtrace shows you what happened.**

Stemtrace captures your task executions as a graph: visualize parent→child flows, see retry chains, track groups and chords, all without adding any new infrastructure.

It records each task's lifecycle (sent, started, retried, finished) with its arguments, result
and exception, and sends these events through the Redis or RabbitMQ broker you already run. The
dashboard runs as its own server or inside your FastAPI app. No database is needed.

## What it helps you debug

| Question | Where stemtrace answers it |
|----------|----------------------------|
| What called this task? | The flow graph links each task to the task that started it, and draws groups and chords as containers. |
| Why did it retry, and which attempt worked? | The task page lists every attempt, with the reason for each retry and the exception and traceback of a failure. |
| Was it slow to start, or slow to run? | The task page shows how long the task spent in each state. |
| Why didn't my chord callback run? | The chord shows each header task's state. A chord whose body…
