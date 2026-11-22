---
repo: "GabrielGoldsteinAnidea/HA-Websocket-Stripper"
name: "HA-Websocket-Stripper"
description: "Strip noisy websockets from dashboards"
readmeQualityOk: true
url: "https://github.com/GabrielGoldsteinAnidea/HA-Websocket-Stripper"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["addon", "dashboard", "hassio-addon", "home-assistant", "home-assistant-addon", "homeassistant", "kiosk", "lovelace", "performance", "reverse-proxy"]
stars: 48
forks: 4
openIssues: 3
closedIssues: 7
watchers: 2
contributors: 5
recentReleases: 3
createdAt: "2026-06-18T01:12:12Z"
lastCommitAt: "2026-11-22T02:11:33Z"
lastReleaseAt: "2026-11-22T02:11:36Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 73
undervaluedScore: 33
maintainers: ["GabrielGoldsteinAnidea", "davidcoulson", "ajguerre1"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c50de330d5413c1aa024935e4996803f6186e105139227261396fcc23b1d25d/GabrielGoldsteinAnidea/HA-Websocket-Stripper"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/gabrielgoldstein"]
discussionCount: 0
---

# HA WebSocket Stripper — make slow Home Assistant dashboards load fast

> **Speed up slow-loading Home Assistant dashboards on large instances.** A lightweight
> reverse-proxy add-on that serves your *real* Lovelace dashboards but strips the entity
> WebSocket down to only what each dashboard uses — so kiosks, wall panels, tablets, and
> Fully Kiosk Browser displays load in a fraction of the time, with zero loss of fidelity.

**Keywords:** Home Assistant slow dashboard, Lovelace performance, kiosk / wall-panel
load time, large instance with thousands of entities, `subscribe_entities` / `get_states`
firehose, WebSocket optimization, fast HA dashboard, Mushroom & custom-card kiosk.

A reverse proxy that serves your **real** Home Assistant dashboards (real frontend,
real cards — Mushroom, button-card, everything) but **strips the entity websocket** so a
kiosk page only subscribes to the entities that dashboard actually uses. On a big
instance (thousands of entities) this cuts the startup `get_states` / `subscribe_entities`
firehose down to a few dozen entities, so dashboards load fast — with **zero visual
approximation**, because it *is* the real frontend.
