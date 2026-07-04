---
repo: "kingchddg901/Vacuum_Agent"
name: "Vacuum_Agent"
description: "Full-featured Home Assistant integration for robot vacuums (Eufy + Roborock) — room-level control, a learning/ETA system, automation hooks, and a localizable custom card"
readmeQualityOk: true
url: "https://github.com/kingchddg901/Vacuum_Agent"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [61, 39]
topics: ["custom-integration", "eufy", "hacs", "home-assistant", "home-automation", "lovelace", "vacuum", "eufy-vacuum", "roborock"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-05-01T00:31:35Z"
lastCommitAt: "2026-07-04T22:52:50Z"
lastReleaseAt: "2026-05-31T01:26:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 65
maintainers: ["kingchddg901"]
openGraphImageUrl: "https://opengraph.githubassets.com/45bf3623f20436bdacae6bee3bfb7391d9fd652b3d5d58917036c2e4b44fd23b/kingchddg901/Vacuum_Agent"
discussionCount: 3
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
