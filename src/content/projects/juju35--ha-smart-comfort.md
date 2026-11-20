---
repo: "juju35/ha-smart-comfort"
name: "ha-smart-comfort"
description: "Home Assistant integration for smarter home comfort: room alerts (heat, cold, CO₂, humidity, noise, outdoor air) without notification spam, automatic control of air conditioners, fans and purifiers, adaptive lighting and lights on presence, all set up from a sidebar panel with auto-discovery, plus an activity log and card."
readmeQualityOk: true
url: "https://github.com/juju35/ha-smart-comfort"
homepage: "https://juju35.github.io/homeassistant-projects/projects/ha-smart-comfort/"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [55, 45]
topics: ["air-conditioner", "air-purifier", "air-quality", "co2", "comfort", "hacs", "hacs-integration", "home-assistant", "home-automation", "humidity"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-10-29T01:10:12Z"
lastCommitAt: "2026-11-20T12:00:11Z"
lastReleaseAt: "2026-10-30T08:28:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 75
maintainers: ["juju35", "FredM67", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/db2861d1aef541dc1a7c702625aa616a972420790781f96e403f2aab7440af6b/juju35/ha-smart-comfort"
---

# ha-smart-comfort

Home Assistant integration for **fewer, smarter comfort alerts** — temperature, CO₂, humidity, windows to open or close — and **automatic control of air conditioners, fans and air purifiers**, room by room.

Comfort automations built with a cooldown keep notifying every couple of hours as long as a room stays warm, flap around a threshold, and pile up one notification per sensor. Smart Comfort tracks each problem as an **episode**: notified once when it starts, again only if it gets worse (or after a reminder delay, if you want one), grouped with the others into a single notification that replaces the previous one, held during quiet hours, and cleared from the phones when everything is back to normal.
