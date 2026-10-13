---
repo: "raman325/lock_code_manager"
name: "lock_code_manager"
description: "Lock code manager for locks integrated with Home Assistant"
readmeQualityOk: true
url: "https://github.com/raman325/lock_code_manager"
language: "Python"
languages: ["Python"]
languagePcts: [83]
topics: ["hacs", "home-assistant", "homeassistant", "zwave", "zwave-js"]
stars: 108
forks: 18
openIssues: 5
closedIssues: 135
watchers: 4
contributors: 9
recentReleases: 0
createdAt: "2023-07-13T13:32:43Z"
lastCommitAt: "2026-10-13T10:57:58Z"
lastReleaseAt: "2024-03-18T10:32:39Z"
status: "thriving"
tags: ["funded"]
healthScore: 99
undervaluedScore: 47
maintainers: ["dependabot[bot]", "raman325", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d5eb508778487a232d0d5c2dd5e9d1c50f5005907fb687feabe585057539751/raman325/lock_code_manager"
fundingLinks: ["GITHUB:https://github.com/raman325", "BUY_ME_A_COFFEE:https://buymeacoffee.com/raman325"]
---

# Lock Code Manager

**Lock Code Manager scales down to a simple UI for managing your lock's PIN
codes — and scales up to a programmable, multi-lock, multi-provider PIN
platform with scheduled access, condition-driven activation, and
automation-ready services.** Define your codes once and LCM handles setting,
clearing, and monitoring them on every lock, across providers (Z-Wave, ZHA,
Matter, and more) without you wiring up the differences.

Whether you just want a clean dashboard for your front door or you're rotating
PINs across an Airbnb fleet on a nightly schedule, LCM has you covered.

Features:

- Give each person a name and a PIN; Lock Code Manager works out which slot
  on which lock they land in
- Synchronize PIN codes across multiple locks and providers
- Automatic sync — codes are set and cleared as needed, with retry and
  drift detection
- Condition entities control when a code is active:
  - `calendar` — active during events
  - `binary_sensor` / `switch` / `input_boolean` — active when on
  - `schedule` — active during scheduled times
- [Services and actions](https://github.com/raman325/lock_code_manager/wiki/Services-and-Actions)
  for adding and removing users,…
