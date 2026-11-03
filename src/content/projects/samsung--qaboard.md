---
repo: "Samsung/qaboard"
name: "qaboard"
description: "Experiment tracker: organize, visualize, compare and share runs. Removes toil from algorithm/performance R&D and tuning."
readmeQualityOk: true
url: "https://github.com/Samsung/qaboard"
homepage: "https://samsung.github.io/qaboard"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [45, 38]
topics: ["visualizations", "algorithms", "continuous-quality", "performance-engineering", "mlops"]
stars: 55
forks: 16
openIssues: 6
closedIssues: 8
watchers: 5
contributors: 8
recentReleases: 1
createdAt: "2019-12-02T07:24:31Z"
lastCommitAt: "2026-11-03T10:51:43Z"
lastReleaseAt: "2026-10-08T18:33:22Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 74
undervaluedScore: 55
maintainers: ["claude", "arthur-flam"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/225311240/1f4f6380-c619-11ea-93b8-cc19f4a1d4e6"
discussionCount: 2
---

> It's an open-source project: https://github.com/samsung/qaboard

## Features
- **Organize, View and Compare Results**, **Tuning/Optimization**
- **Web-based:** sharable URLs, no install needed.
- **Visualizations:** support for quantitative metrics, and many file formats: advanced image viewer, support for videos, plotly graphs, text, pointclouds, HTML...
- **Integrations:** direct access from Git and CI tools, easily exportable results, API, links to the code, trigger gitlabCI/jenkins/webhooks...
- **Agnostic** to your language/framework: run your existing code, write files, view them.

> For screenshots check [our website](https://samsung.github.io/qaboard).

## Benefits
QA-Board across many projects enables us to:
- **Scale R&D:** enable engineers to achieve more and be more productive.
- **Faster Time-to-Market:** collaboration across teams, workflow integration..
- **Quality:** uncover issues earlier, KPIs, tuning, reporting...

## Deployment

```bash
# Open-source, zero-downtime upgrades (see deployments/production.env)
deployments/deploy.py deployments/production.env up --build --init  # first time
deployments/deploy.py deployments/production.env up --build         #…
