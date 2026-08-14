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
recentReleases: 6
createdAt: "2024-05-22T10:40:51Z"
lastCommitAt: "2026-08-14T04:03:49Z"
lastReleaseAt: "2026-08-14T04:04:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 74
maintainers: ["Phoenix0531-sudo", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/94c7502cd628f1d308e5817b1c6739ccb297950eb345fc4aca1aa28369ad3649/Phoenix0531-sudo/TablePilot"
postedAt: "2026-08-11T04:52:57.433Z"
---

<picture>
    <source srcset="docs/screenshots/banner.png 1x, docs/screenshots/banner@2x.png 2x" type="image/png">
  </picture>
</p>

  <strong>TablePilot — local-first messy-table workbench.<br>Profile, clean, plan, and report over Excel / CSV / TXT.</strong>
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

- **Dataset directory** — `GET…
