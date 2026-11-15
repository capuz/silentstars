---
repo: "nickknissen/hass-aula"
name: "hass-aula"
description: "Home Assistant Aula Integration - Schedules, Messages & Tasks via Aula API as HA sensors & calendars"
readmeQualityOk: true
url: "https://github.com/nickknissen/hass-aula"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["hacs", "hacs-integration", "home-assistant", "homeassistant"]
stars: 7
forks: 4
openIssues: 4
closedIssues: 4
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-23T21:11:40Z"
lastCommitAt: "2026-11-15T08:26:15Z"
lastReleaseAt: "2026-03-03T19:56:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 64
maintainers: ["nickknissen", "dependabot[bot]", "jeggy"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d5310a2f4f6a735e4dcbe23ea656c539796d606023d08f52bda4625a33825d0/nickknissen/hass-aula"
---

# Aula for Home Assistant


A Home Assistant integration for [Aula](https://www.aula.dk) — the Danish school communication platform. Track your children's school presence and school calendar directly in Home Assistant.

> **Note:** Aula is a Danish platform. Authentication requires a Danish **MitID** account.

---

## Features

- **Presence tracking** — Know whether your child is present, sick, absent, on a field trip, or checked out, with check-in/out times, entry/exit times, location, and registered naps as attributes
- **School calendar** — Upcoming events including teacher, substitute, and location info
- **Notifications** — Fires a Home Assistant event for each new Aula notification, enabling automations to push alerts to your phone
- **Set pick-up times** — The `hass_aula.update_presence` action writes planned drop-off/pick-up times back to Aula for one or more children at once
- **Multi-child support** — Each child gets their own device with a full set of entities
- **Automatic re-authentication** — Prompts for re-login when your session expires

---

## Why a separate integration?

[scaarup/aula](https://github.com/scaarup/aula) came first, is in the…
