---
repo: "MarkBovee/vaillant-ebus"
name: "vaillant-ebus"
description: "Home Assistant integration for Vaillant heat pumps via direct ebusd TCP — no MQTT, no cloud"
readmeQualityOk: true
url: "https://github.com/MarkBovee/vaillant-ebus"
homepage: "https://github.com/MarkBovee/vaillant-ebus"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 22
forks: 3
openIssues: 6
closedIssues: 42
watchers: 3
contributors: 2
recentReleases: 10
createdAt: "2026-07-02T07:24:45Z"
lastCommitAt: "2026-09-19T08:15:22Z"
lastReleaseAt: "2026-07-28T16:27:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 52
maintainers: ["MarkBovee", "Alokin90"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1286884821/03932376-7ca1-44be-ad9a-7ac304b4ceac"
discussionCount: 7
---

</p>

  </a>
</p>

> **Disclaimer:** This project is an independent third-party integration and is **not affiliated with, endorsed by, or connected to Vaillant GmbH** in any way. All trademarks belong to their respective owners.

# Vaillant eBUS

Home Assistant integration for Vaillant heat pumps via **direct ebusd TCP** — no MQTT, no cloud.

Reads & writes 350+ eBUS registers from your heat pump, heating controller, and DHW system. Fully local, no internet required.

A **1-on-1 replacement for the mypyllant API integration** — climate entities (quick veto, away mode via calendar), water_heater entities (DHW boost, temp control), room humidity, and all sensors, fully local without cloud dependency.

## Architecture

```mermaid
graph LR
    HP[Vaillant Heat Pump eBUS two-wire]
    C6[C6 eBUS Adapter TCP enhanced mode 192.168.x.x:9999]
    E[ebusd Addon :8888]
    I[Vaillant eBUS Integration in Home Assistant]

    HP --- C6
    C6 -- eBUS data over TCP --> E
    E -- localhost:8888 --> I
```

The C6 adapter converts the eBUS two-wire signal to TCP. ebusd runs as a Home Assistant addon and decodes the eBUS data. The integration connects to ebusd (inside Home Assistant, port 8888) —…
