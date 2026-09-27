---
repo: "ernetas/junghome"
name: "junghome"
description: "Jung Home integration for Home Assistant"
readmeQualityOk: true
url: "https://github.com/ernetas/junghome"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["hacs", "home-assistant", "homeassistant", "integration", "junghome"]
stars: 10
forks: 1
openIssues: 3
closedIssues: 4
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-12-29T23:41:47Z"
lastCommitAt: "2026-09-27T09:27:57Z"
lastReleaseAt: "2026-06-14T21:47:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 55
maintainers: ["ernetas", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/19410e46fe7b450ae2bd990cf421be920a97bcc157c550e3331d8c5bb20407a0/ernetas/junghome"
---

# JUNG HOME integration for Home Assistant

A custom integration for **JUNG HOME** devices. It talks to the JUNG HOME
Gateway entirely locally — live state and commands over a WebSocket, with a
REST poll as backstop (and for scene recall). No cloud, no account; a gateway
is required.

> **Unofficial project.** Not affiliated with, authorized by, or endorsed by
> Albrecht JUNG GmbH & Co. KG. "JUNG" and "JUNG HOME" are trademarks of their
> owner, used here only to identify compatible hardware. See
> [Disclaimer & legal](#disclaimer--legal).

## What works

- **Lights** — on/off switch actuators (e.g. BT S1 B2 U) and dimmers
  (DALI, etc.) with brightness and colour *temperature* (tunable white,
  within the fixture's own range as the gateway reads it — 2000–6000 K until
  that is known). Full RGB colour is not exposed by the gateway.
- **Sockets** — on/off plus their live meter readings (input power,
  load-side power, output current) and, on gateway firmware 2.1.x+, the
  socket's **cumulative energy counter** as a `total_increasing` sensor —
  add it to the Energy Dashboard directly. It is shown in kWh when first
  added (a counter set up by an earlier version keeps showing Wh —…
