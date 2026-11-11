---
repo: "mbonny95/live_dashboard"
name: "live_dashboard"
description: "A light HTML | JS Home Assistant dashboard built from your areas. No need to type entity IDs to get started; optional modules for energy, irrigation, and cameras."
readmeQualityOk: true
url: "https://github.com/mbonny95/live_dashboard"
language: "HTML"
languages: ["HTML"]
languagePcts: [82]
topics: ["dashboard", "domotica", "home-assistant", "home-automation", "homeassistant", "html", "javascript", "neumorphism", "smart-home"]
stars: 23
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-12T18:30:31Z"
lastCommitAt: "2026-11-11T19:48:06Z"
lastReleaseAt: "2026-08-16T06:03:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 64
undervaluedScore: 29
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/719f82bef96441e2ea2c5b05e1ceeda93d22b3ef3e0df436ccce3e83c7b19869/mbonny95/live_dashboard"
---

# Live Dashboard

### Support this project

If you find Live Dashboard for Home Assistant useful, you can support my work on Ko-fi:

       alt="Support me on Ko-fi" />

*[Leggi in italiano](https://github.com/mbonny95/live_dashboard/blob/HEAD/README.it.md)*

A hand-written, single-page Home Assistant dashboard for a wall-mounted
tablet: rooms, alarm, weather and quick actions on one screen, with optional
Energy and Irrigation views. No Lovelace cards, no YAML dashboard config — it
discovers your rooms and entities from Home Assistant's own registries and
draws itself.

**Try it without installing anything:** clone this repo and open
`public/dash_neumo.html?demo` in a browser — works straight from `file://`,
no Home Assistant required. It shows invented data and a `DEMO` badge; see
[Demo mode](#demo-mode) below.

## What this is, and isn't

- A single page that lives in its own `panel_custom` panel, not a Lovelace
  dashboard and not a card. It doesn't try to be either.
- Built for a **tablet mounted on a wall, in landscape**, at a fixed
  1200×800-ish size — that constraint is deliberate (see "Kiosk mode" below),
  not a bug. Individual columns (rooms, cameras) size their tiles…
