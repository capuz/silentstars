---
repo: "cdsap/daemonitor"
name: "daemonitor"
description: "Desktop Activity Monitor for your Gradle daemons — live process insight + build history with AI-agent attribution."
readmeQualityOk: true
url: "https://github.com/cdsap/daemonitor"
homepage: "https://cdsap.github.io/daemonitor/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [94]
stars: 7
forks: 1
openIssues: 2
closedIssues: 45
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2026-06-25T23:25:31Z"
lastCommitAt: "2026-08-25T04:09:12Z"
lastReleaseAt: "2026-08-14T03:24:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 67
maintainers: ["cdsap", "SimonMarquis"]
openGraphImageUrl: "https://opengraph.githubassets.com/7126eca29c9c336556f8dc23ba86289fc6834f48eace63a552d0c1c65b20d40c/cdsap/daemonitor"
---

</p>

# Daemonitor

> Activity Monitor for your Gradle daemons — see what's building right now, and what built recently.

Daemonitor is a local desktop app that shows the Gradle activity happening on your machine: which
daemons, wrappers, and test workers are running, how much memory and CPU they're using, the latest
daemon-log lines, and a searchable history of past builds — including **which AI coding agent
triggered each build**. It's built for the agentic-workflow era, where multiple IDEs, terminals, and
agents can all be driving Gradle at once.

Everything stays on your machine. No telemetry; command lines and logs are best-effort redacted
before they're ever stored. Outbound network use is limited to GitHub Releases update checks at
startup or from Settings, plus installer downloads that you explicitly approve.

**Website:** [https://cdsap.github.io/daemonitor/](https://cdsap.github.io/daemonitor/)

---

## Features

### Live Monitor

*Live monitor with concurrent Gradle activity and the selected daemon inspector.*

- Every running Gradle-related JVM, classified by type with an at-a-glance icon:
  - 🐘 **Gradle daemon** · 🐘+🔧 **Gradle wrapper** · the **Kotlin** mark for…
