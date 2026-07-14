---
repo: "SysAdminDoc/OpenTasker"
name: "OpenTasker"
description: "A fully open-source, FOSS alternative to Tasker for Android."
readmeQualityOk: true
url: "https://github.com/SysAdminDoc/OpenTasker"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [96]
topics: ["android", "kotlin"]
stars: 19
forks: 2
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 8
createdAt: "2026-05-04T00:28:14Z"
lastCommitAt: "2026-07-14T05:54:07Z"
lastReleaseAt: "2026-06-15T06:37:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 45
maintainers: ["SysAdminDoc"]
openGraphImageUrl: "https://opengraph.githubassets.com/4841b921003357c1555526b5d398742d7c190028fd613680834391155f5f4d13/SysAdminDoc/OpenTasker"
discussionCount: 1
---

# OpenTasker

**OpenTasker** is a fully open-source, on-device, FOSS alternative to [Tasker](https://tasker.joaoapps.com/) for Android.

---

## Features

### Automation engine

- **Profiles, contexts, tasks, actions** — a complete Room-backed automation pipeline with a Compose UI
- **7 context families** — Application, Time, Day, Location, State, Event, and Plugin (Locale/Tasker condition)
- **49 built-in actions** plus engine-handled flow control (`task.run`, `if`/`else`/`end if`, `for each`/`end for`, `stop`)
- **Template expressions** — bounded `{{ ... }}` expansion with scoped variables, arrays, JSON paths, string/math/date functions, traces, and strict regex policy
- **Automation modes** — per-profile single, restart, queued, and parallel re-trigger behavior
- **Profile groups** — organize profiles into named groups with filter chips

### Triggers (contexts)

- Time/day schedules with presets, aliases, and ranges
- Device state (battery, charging, headphones, screen, airplane, power save, Wi-Fi SSID)
- App foreground detection via UsageStats
- Wi-Fi and data/internet connectivity via NetworkCallback
- Notification listener with package/title/body filters
- NFC tag scans with…
