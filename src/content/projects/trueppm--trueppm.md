---
repo: "TruePPM/trueppm"
name: "trueppm"
description: "TruePPM - open-core P3M. Mirror of gitlab.com/trueppm/trueppm"
readmeQualityOk: true
url: "https://github.com/TruePPM/trueppm"
homepage: "https://www.trueppm.com"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [49, 45]
topics: ["critical-path-method", "django", "gantt", "gantt-chart", "jira-alternative", "kanban", "model-context-protocol", "monte-carlo", "open-source", "project-management-tool"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-16T00:10:02Z"
lastCommitAt: "2026-11-14T21:00:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 53
maintainers: ["kellyhair"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4d6e6b77f1379ff18a8c979b59763e4a9b4c3f78d3f3f690042f504c74c7624/TruePPM/trueppm"
---

# TruePPM

> **Canonical source: [gitlab.com/trueppm/trueppm](https://gitlab.com/trueppm/trueppm)** — issues and merge requests are handled there. The GitHub repository is a read-only mirror for discovery; it does not accept issues or pull requests.

**Most project tools store dates. This one computes them.**

At the center of TruePPM is a real Critical Path Method engine — all four dependency types, lead/lag on every link, cycle detection, float on every task — with Monte Carlo risk analysis on top. Not a Gantt chart that draws bars where you drag them: an engine that works out which tasks actually drive your deadline, and what date you are 80% likely to hit.

You don't have to take that on faith, and you don't have to install a platform to check. The engine is a **separate Apache-2.0 Python package**. Verify the math in sixty seconds — no signup, no Docker, no account:

```bash
pip install trueppm-scheduler
```

```python
from datetime import date, timedelta
from trueppm_scheduler import schedule, Project, Task, Dependency

result = schedule(Project(
    id="p-1", name="Verify me", start_date=date(2026, 1, 5),
    tasks=[
        Task(id="design", name="Design",…
