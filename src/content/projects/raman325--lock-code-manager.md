---
repo: "raman325/lock_code_manager"
name: "lock_code_manager"
description: "Lock code manager for locks integrated with Home Assistant"
readmeQualityOk: true
url: "https://github.com/raman325/lock_code_manager"
language: "Python"
languages: ["Python"]
languagePcts: [85]
topics: ["hacs", "home-assistant", "homeassistant", "zwave", "zwave-js"]
stars: 112
forks: 20
openIssues: 6
closedIssues: 144
watchers: 4
contributors: 10
recentReleases: 0
createdAt: "2023-07-13T13:32:43Z"
lastCommitAt: "2026-10-26T03:03:34Z"
lastReleaseAt: "2024-03-18T10:32:39Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 99
undervaluedScore: 47
maintainers: ["raman325", "dependabot[bot]", "acdown87"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1e434aa1116e93fc49c3f21ec84041f562e543ccfd514f4046e9975e8c726ec/raman325/lock_code_manager"
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
- Automatic sync — codes are set and cleared as needed, and every write is
  read back from the lock to confirm it, with retries and drift detection
- Never touches codes it didn't create: new users go only in free slots, a
  lock that already holds codes in the configuration's slots is refused until
  you clear them, clearing or removing a user never deletes a lock user
  without Lock Code Manager's tag, and on Matter…
