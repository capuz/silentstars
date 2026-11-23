---
repo: "chenkai2/dsh-daemon"
name: "dsh-daemon"
description: "dsh daemon: register the DeepSeek Harness web server (dsh web) as an auto-start, self-healing background service (LaunchAgent / systemd / cron + watchdog)"
originalDescription: "dsh daemon: register the DeepSeek Harness web server (dsh web) as an auto-start, self-healing background service (LaunchAgent / systemd / cron + watchdog)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/chenkai2/dsh-daemon"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [98]
topics: ["dsh-plugin", "cordis", "daemon", "deepseek-harness", "dsh", "watchdog"]
stars: 10
forks: 1
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-17T07:39:27Z"
lastCommitAt: "2026-11-23T10:19:06Z"
lastReleaseAt: "2026-11-19T04:09:11Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 55
maintainers: ["chenkai2", "orochi114", "QiE2035"]
openGraphImageUrl: "https://opengraph.githubassets.com/46f900de77d37f0ea34747d6adee40e283db8a45fac62bbc25a1d1f25d446e52/chenkai2/dsh-daemon"
---

## Version mapping (dsh-daemon ↔ dsh)

| dsh-daemon | Supported dsh | Notes |
|---|---|---|
| 0.1.35 | **0.1.x and 0.2.x** | Adds **uptime** to the health line of `status` / `dsh_daemon_status`: `Web server: ✅ healthy on 127.0.0.1:3080 (PID 90078) · up 2h 15m`. It is taken from this generation's `WEB_STARTED` (reset on every launch and adoption, so its age equals the process age). If the file is missing (early installs), it is not shown and no number is made up. Both places share the same `formatUptime()` and show two levels, chosen from `d`/`h`/`m`/`s` |
