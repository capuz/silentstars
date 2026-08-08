---
repo: "esphome/device-builder"
name: "device-builder"
description: "ESPHome Device Builder Dashboard"
readmeQualityOk: true
url: "https://github.com/esphome/device-builder"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 83
forks: 25
openIssues: 0
closedIssues: 566
watchers: 1
contributors: 32
recentReleases: 0
createdAt: "2026-03-12T13:33:20Z"
lastCommitAt: "2026-08-08T04:33:15Z"
lastReleaseAt: "2026-05-04T07:05:35Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 36
maintainers: ["bdraco", "esphome[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8e8c00bfe549243e5b23024fa50354ceaedf65fa1fdbab403f3da9ffa42d848/esphome/device-builder"
fundingLinks: ["CUSTOM:https://www.openhomefoundation.org"]
---

# ESPHome Device Builder Dashboard

> **Status:** stable. The dashboard reached its 1.0 release and ships
> as the default builder in the official ESPHome add-on (as of ESPHome
> 2026.6.0). Issues
> and feedback welcome — please check existing issues / the
> [project board](https://github.com/orgs/esphome/projects/7/views/1?filterQuery=project%3A%22device-builder%22)
> first, and join the [Discord channel](https://discord.gg/Rf2jWGVjaK)
> for live discussion.

A new dashboard for [ESPHome](https://github.com/esphome/esphome) — a guided
interface for composing device configs, exploring components and boards,
managing automations, and pushing firmware updates.

## Try it

> Running it behind a reverse proxy?
> Skip ahead to [Behind a reverse proxy](#behind-a-reverse-proxy)
> for the nginx / `--trusted-domains` setup.

The dashboard runs **by default** in the official Home Assistant add-on
(as of ESPHome 2026.6.0) and ships as an **opt-in backend** in
[ESPHome Desktop](https://github.com/esphome/esphome-desktop).
Pick the path that matches how you run ESPHome today:

### Home Assistant add-on

As of ESPHome 2026.6.0, the ESPHome add-on (Stable, Beta, or Dev) runs
the Device Builder…
