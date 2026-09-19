---
repo: "lucavb/homebridge-http-motion-sensor"
name: "homebridge-http-motion-sensor"
description: "Network based motion sensor plugin for homebridge"
readmeQualityOk: true
url: "https://github.com/lucavb/homebridge-http-motion-sensor"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [78]
stars: 19
forks: 4
openIssues: 2
closedIssues: 9
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2017-03-09T20:38:26Z"
lastCommitAt: "2026-09-18T21:06:54Z"
lastReleaseAt: "2026-06-19T14:14:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 88
undervaluedScore: 65
maintainers: ["renovate[bot]", "lucavb"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e628f9d003fd2ea72310a6f0934793caf83cd110a530e18ab7c5e093471724b/lucavb/homebridge-http-motion-sensor"
---

# homebridge-http-motion-sensor

  <br>
  <em>HTTP-triggered motion sensor for your smart home</em>
</div>

> **⚠️ BREAKING CHANGE NOTICE**  
> **Version 2.0.0+ requires configuration migration!**
>
> This plugin has been converted from an **accessory plugin** to a **platform plugin**. If you're upgrading from v1.x, you **MUST** update your Homebridge configuration. See the [Migration Guide](#migration-from-v1x) below.
>
> **Old**: Configured in `"accessories"` array  
> **New**: Configured in `"platforms"` array

This plugin offers you a motion sensor that can be triggered via an HTTP request. This can be used in conjunction with an ESP8266 for instance or an Arduino with an ethernet shield. See the [ESP8266 example](https://github.com/lucavb/homebridge-http-motion-sensor/blob/HEAD/esp8266/sensor.ino) in this repository.

## What's New in v4.1.0

- **Optional inbound authentication**: Per-sensor HTTP protection with Bearer token, Basic auth, or custom header
- **Fully opt-in**: Existing configurations and unauthenticated HTTP triggers work unchanged
- **Homebridge UI**: Security section in the config UI for each sensor

## What's New in v4.0.0

- **Dynamic platform plugin**:…
