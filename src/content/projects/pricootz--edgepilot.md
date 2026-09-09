---
repo: "pricootz/edgepilot"
name: "edgepilot"
description: "A compact screen-edge system monitor for Windows and Linux, built with Avalonia and .NET."
readmeQualityOk: true
url: "https://github.com/pricootz/edgepilot"
language: "C#"
languages: ["C#"]
languagePcts: [95]
topics: ["avalonia", "csharp", "desktop", "dotnet", "linux", "system-monitor", "windows"]
stars: 16
forks: 2
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-09-07T06:46:44Z"
lastCommitAt: "2026-09-09T08:18:30Z"
lastReleaseAt: "2026-09-07T17:43:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 41
maintainers: ["pricootz", "ArnieGA", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/42007fcd62d9bbcae79d63c220b479ddfdd044e20a985201f5e977df1c0c9c6c/pricootz/edgepilot"
---

</p>

<h1 align="center">EdgePilot</h1>

**v0.2 preview.** EdgePilot lives at the edge of the desktop and stays out of the way until it is useful. The current System module surfaces live local machine activity; the project is evolving toward contextual signals and actions that appear only when they matter.

No account, server or telemetry uploader is required. The interface ships in **Italian, English, French and Spanish**, follows the system language automatically, and can be extended with additional locale files.

</p>

## v0.2 at a glance

- Redesigned responsive Settings experience with dedicated **General, Edge, Monitor, Behavior, Startup and About** sections.
- General page for interface language and Settings appearance (`System`, `Light`, `Dark`).
- Interactive metric cards and contextual options: disabling Disk also hides its volume selector.
- IT / EN / FR / ES localization across Settings, tray, tooltips, installer messages and persisted preferences.
- Translator-friendly locale architecture under `Assets/Locales`: new languages are contributed as JSON files instead of C# catalog edits.
- Safe locale fallback and backward-compatible migration from the first v0.2 language…
