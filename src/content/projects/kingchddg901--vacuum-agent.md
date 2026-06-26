---
repo: "kingchddg901/Vacuum_Agent"
name: "Vacuum_Agent"
description: "Full-featured Home Assistant integration for Eufy robot vacuums — room-level control, learning system, automation hooks, and custom card"
url: "https://github.com/kingchddg901/Vacuum_Agent"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [66, 34]
topics: ["custom-integration", "eufy", "hacs", "home-assistant", "home-automation", "lovelace", "vacuum", "eufy-vacuum"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-05-01T00:31:35Z"
lastCommitAt: "2026-06-26T23:40:45Z"
lastReleaseAt: "2026-05-31T01:26:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 67
maintainers: ["kingchddg901", "Nebr88"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d53fb2678d4ed4de8d5c792d663f1883a4e4ef065e97e183dabed8d5514de6a/kingchddg901/Vacuum_Agent"
discussionCount: 2
---

# Vacuum Agent

A custom Home Assistant integration that adds room-level control, queue management, a learning/ETA system, automation events, and a built-in Lovelace panel card to your robot vacuum. It uses an adapter pattern to support multiple brands — **Eufy** and **Roborock** today, extensible to others — and adds capabilities the stock vacuum integrations don't expose.

*Each room remembers its own profile, learned timing, and floor type. Save the whole layout as a Run Profile and reapply it later from the UI or an automation.*

## What it does

A stock vacuum integration exposes basic start/stop/pause and a few entity states — for Eufy that's [eufy-clean by jeppesens](https://github.com/jeppesens/eufy-clean); for Roborock, Home Assistant's built-in Roborock integration. Vacuum Agent goes further:

- **Room-level control** — select individual rooms by name and send targeted clean jobs, rather than cleaning the whole floor.
- **Queue management** — build, inspect, and reorder a cleaning queue before the job starts.
- **Run profiles and room profiles** — save vacuum settings (suction, mop, passes) per-room or as named run profiles you can trigger from automations or the UI.
-…
