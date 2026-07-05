---
repo: "maxlyth/ha-paneld"
name: "ha-paneld"
description: "Android agent for Home Assistant wall panels — TTS, brightness, LEDs, buttons via HTTP + MQTT auto-discovery + mDNS"
readmeQualityOk: true
url: "https://github.com/maxlyth/ha-paneld"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [80]
topics: ["android", "home-assistant", "kiosk", "mqtt", "mqtt-discovery", "nspanel", "rockchip", "smart-home", "tts", "wall-panel"]
stars: 13
forks: 0
openIssues: 4
closedIssues: 8
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-06-03T12:59:11Z"
lastCommitAt: "2026-07-05T20:33:16Z"
lastReleaseAt: "2026-06-05T18:21:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 50
maintainers: ["maxlyth", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3a82f59cbefe0371ae1c347dde08f7cbe599f4c85c39878bc41737ae7652bb0/maxlyth/ha-paneld"
discussionCount: 9
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="app/src/main/res/drawable-night-nodpi/wordmark.png">
</picture>

**ha-paneld is free, open-source, and exists to fix what's wrong with Home Assistant wall panels** — the per-vendor fragmentation, the sluggish dashboards, and the clunky manufacturer software you're otherwise stuck with. It gives one consistent, Home-Assistant-first way to run a panel: full control of its hardware — screen, LEDs, buttons, sensors, relays and audio — across panels from *different* makers; a built-in admin launcher and on-screen navigation bar so a key-less panel behaves like an appliance; and the tooling to make a dashboard actually feel fast on cheap hardware. It's growing from a single-panel agent toward managing a whole fleet, with zero-touch remote provisioning.

It's a small Android agent that exposes panel-side hardware to Home Assistant over HTTP + MQTT
auto-discovery + mDNS, so a panel pairs itself with HA when you sideload the APK — no per-device YAML.

It is built for panel-class Android — with explicit device profiles for Sonoff NSPanel Pro, Tuya
TPA10, Electron WF1589T, ZHICAI SMT1019, Smatek S9E, and (preliminary) the…
