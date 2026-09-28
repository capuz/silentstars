---
repo: "developer-wlj/Windows-MoviePilot"
name: "Windows-MoviePilot"
description: "Running MoviePilot in exe mode"
originalDescription: "exe方式运行MoviePilot"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/developer-wlj/Windows-MoviePilot"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 378
forks: 23
openIssues: 8
closedIssues: 77
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2023-08-28T09:15:21Z"
lastCommitAt: "2026-09-28T06:00:03Z"
lastReleaseAt: "2023-09-03T16:07:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 32
maintainers: ["developer-wlj"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce7008132771ea828d528cb6f074c62fdb3a7ca0df865082e03bd79f08c10be2/developer-wlj/Windows-MoviePilot"
---

# MoviePilot-V3 Service Management Panel (Windows)

MoviePilot v3 one-click management panel built on **.NET Framework 4.8**: system tray icon + visual interface, one-click startup/stop/restart of all services (nginx frontend + Python backend), automatically downloads portable runtime environment on first use, no manual command line configuration required.
> For detailed content including runtime requirements, source code compilation, configuration instructions (config\app.ini), command line usage, patch package instructions, upgrade mechanisms and configuration protection, FAQs, etc., see [README-advanced.md](https://github.com/developer-wlj/Windows-MoviePilot/blob/HEAD/README-advanced.md)

## Features

- **Fool-proof Visualization**: All operations require only button clicks, no command line knowledge needed
- **Zero Manual Environment Configuration**: nginx / Git / Python / uv portable versions automatically downloaded and installed, isolated from system environment
- **Automatic Media Component Downloads**: Automatically detects system fpcalc (audio fingerprint) and FFmpeg, automatically downloads portable versions if missing, uses system version if already installed
-…
