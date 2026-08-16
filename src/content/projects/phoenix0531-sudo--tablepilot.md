---
repo: "Phoenix0531-sudo/TablePilot"
name: "TablePilot"
description: "TablePilot：本地优先的复杂表格智能分析工作台 | Local-first messy table analysis workbench for repair plans, insights, and explainable reports"
readmeQualityOk: true
url: "https://github.com/Phoenix0531-sudo/TablePilot"
homepage: "https://phoenix0531-sudo.github.io/TablePilot/"
language: "C++"
languages: ["C++"]
languagePcts: [92]
topics: ["cpp", "data-analysis", "data-profiling", "data-quality", "desktop-app", "docker", "executive-brief", "fastapi", "python", "qt"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 7
createdAt: "2024-05-22T10:40:51Z"
lastCommitAt: "2026-08-16T03:58:28Z"
lastReleaseAt: "2026-08-14T11:24:28Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 74
maintainers: ["Phoenix0531-sudo", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/678c243bb1aa71154691bd3cd8bdb4cb58c90589c6c4e6a4ff57a43264ebe7cc/Phoenix0531-sudo/TablePilot"
postedAt: "2026-08-11T04:52:57.433Z"
---

<picture>
  </picture>
</p>

  <strong>Local-first messy-table workbench — profile, clean, plan, and report over Excel / CSV / TXT, without shipping your data to the cloud.</strong>
</p>

</p>

</p>

---

## Overview

TablePilot is a **local-first workbench for messy tables**: it takes chaotic Excel / CSV / TXT files off your disk and turns them into a column profile, a cleaning preview, an analysis plan, and an explainable report — without shipping your data to the cloud.

It is a hybrid stack. A **Python FastAPI analysis service** (`analysis_service/`) does the profiling, cleaning, reporting, and optional local-AI narration. A **Qt / C++ desktop shell** (`packaging/`, `qss/`, `Statistical_Analysis/`) gives the local analyst a real keyboard-and-table UI. You can also run the service alone — every capability is reachable over HTTP and the auto-generated Swagger UI.

> Local files only by default. This is not a cloud BI SaaS and never uploads anything on your behalf.

## Features

Real capabilities wired into `analysis_service/app/main.py` (service `v0.5.0`):

- **Dataset directory** — `GET /api/datasets` lists the local data dir; `POST /api/analyze` (and `-upload`) load a table by…
