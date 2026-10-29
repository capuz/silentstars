---
repo: "sersert/IncidentGPT"
name: "IncidentGPT"
description: "IncidentGPT — an AIOps assistant for incidents: it enriches alerts with metrics and K8s context, correlates an alert cascade into a single incident, and sends an AI analysis to Telegram."
originalDescription: "IncidentGPT — AIOps-помощник для инцидентов: обогащает алерты метриками и K8s-контекстом, связывает каскад алертов в один инцидент и шлёт AI-разбор в Telegram."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/sersert/IncidentGPT"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [50, 45]
stars: 48
forks: 14
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 2
createdAt: "2026-07-20T10:44:20Z"
lastCommitAt: "2026-10-29T14:07:06Z"
lastReleaseAt: "2026-08-09T18:23:51Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 35
maintainers: ["sersert", "opsmon"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8c85d2c2cec70d9a59be17da11c3bedb4366d9319d235aeeb9461e0bf9def1e/sersert/IncidentGPT"
---

# IncidentGPT — alert enrichment and correlation with AI analysis

> 💡 **Tip:** the secret keys `auth-shared-secret` and `hash-key` are generated with `openssl rand -hex 32`.

Two small Go services on top of your Prometheus/Alertmanager that:

1. **Enrich** each alert with context: metrics from Prometheus (with trends) + status of pods/nodes/events from the Kubernetes API.
2. **Correlate** an alert cascade into a single incident (by namespace + time window).
3. Ask an LLM to write a **draft analysis**: the likely root cause and what to check.
4. Send everything to **Telegram**: raw alerts one by one + the analysis.
5. Show incidents in the **web interface**, if it is enabled.

> This is not 'AI instead of an engineer'. The output is a draft; a human makes the decision.

---

## Documentation

Full documentation and an interactive guide are available on GitHub Pages:

https://sersert.github.io/IncidentGPT/

## Telegram setup

- [Telegram setup in Russian](https://github.com/sersert/IncidentGPT/blob/HEAD/docs/telegram-setup.ru.md)
- [Telegram setup guide in English](https://github.com/sersert/IncidentGPT/blob/HEAD/docs/telegram-setup.en.md)

---

## How it works

```
Cluster /…
