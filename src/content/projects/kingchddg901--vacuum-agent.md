---
repo: "kingchddg901/Vacuum_Agent"
name: "Vacuum_Agent"
description: "Eufy, Roborock & Dreame vacuums in Home Assistant — room-by-room cleaning, live map, learning ETAs, saved zones and a custom card"
readmeQualityOk: true
url: "https://github.com/kingchddg901/Vacuum_Agent"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [68, 32]
topics: ["custom-integration", "eufy", "hacs", "home-assistant", "home-automation", "lovelace", "vacuum", "eufy-vacuum", "roborock", "dreame"]
stars: 15
forks: 7
openIssues: 2
closedIssues: 40
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-05-01T00:31:35Z"
lastCommitAt: "2026-11-06T02:14:49Z"
lastReleaseAt: "2026-05-31T01:26:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 53
maintainers: ["kingchddg901", "Nebr88", "louisa-uno"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa2c7ed19a1339d8d971c0b2a7c349fcf4bc0075fca1800b8d7aac5e0bc63382/kingchddg901/Vacuum_Agent"
discussionCount: 5
---

# Vacuum Agent

A custom Home Assistant integration that adds a whole control-and-intelligence layer on top of your robot vacuum — **room-level cleaning, a live map you can actually drive from, a learning/ETA system, saved zones, battery-health tracking, a themeable dashboard, eighteen languages, and automation events** — for **Eufy**, **Roborock** *and* **Dreame**. It uses an adapter pattern, so more brands can follow.

*Every room painted with its real floor material — wood, marble, granite, tile, carpet — rendered live over your robot's actual map.*

It doesn't replace your vacuum integration, it builds on it: for **Eufy** that's [eufy-clean by jeppesens](https://github.com/jeppesens/eufy-clean); for **Roborock**, Home Assistant's built-in Roborock integration; for **Dreame**, [dreame-vacuum by Tasshack](https://github.com/Tasshack/dreame-vacuum). Vacuum Agent consumes whatever they already expose and adds everything the stock integrations don't.

---

## The map is the centerpiece

Put your robot's live map on the dashboard, then actually work from it:

- **Tap a room** to queue it.
- **Draw a box** to clean just that spot — no rooms to set up first — and **save those boxes as…
