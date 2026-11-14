---
repo: "willbeeching/ha-jlr-incontrol"
name: "ha-jlr-incontrol"
description: "Unofficial Home Assistant integration for Jaguar Land Rover InControl — live vehicle status and location, pushed over JLR's own telemetry socket. Read-only."
readmeQualityOk: true
url: "https://github.com/willbeeching/ha-jlr-incontrol"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["custom-integration", "hacs", "home-assistant", "homeassistant-integration", "incontrol", "jaguar", "jlr", "land-rover"]
stars: 34
forks: 5
openIssues: 2
closedIssues: 21
watchers: 8
contributors: 5
recentReleases: 0
createdAt: "2026-07-09T10:22:30Z"
lastCommitAt: "2026-11-14T10:43:26Z"
lastReleaseAt: "2026-07-10T07:54:31Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 39
maintainers: ["willbeeching", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/451cdc6eb1d3b8b13180b09a02e9399daff2b588f1167941a0687a7eb25a1400/willbeeching/ha-jlr-incontrol"
---

# Jaguar Land Rover InControl for Home Assistant

Get your Jaguar or Land Rover into Home Assistant: fuel, doors, locks, windows, tyre pressures,
warnings, timers and where you parked it.

There are two ways in, and the integration offers both when you add it:

- **The JLR Data Hub**, JLR's official API for owners, and not limited to the UK and EU. No
  InControl password, nothing reverse-engineered. New in 2.0, and still being tested on
  more cars.
- **The InControl sign-in**, the connection JLR's own app uses, for owners the Data Hub does not
  reach. It needs your InControl email and password.

Both give the same entities. There's no third-party cloud in the middle and nothing to plug into
the car: the integration talks to JLR's own services from your Home Assistant, so it runs anywhere
Home Assistant does. It is read-only: it reads the car and never sends it a command.

> [!NOTE]
> **Upgrading from 1.3.x or earlier on the InControl sign-in?** Sign in again once: **Settings →
> Devices & Services → Jaguar Land Rover InControl → ⋮ on the entry → Reconfigure**. Location and
> vehicle names need a sign-in those versions never captured. Your entities, history and
> automations are…
