---
repo: "SysAdminDoc/OpenTasker"
name: "OpenTasker"
description: "A fully open-source, FOSS alternative to Tasker for Android."
readmeQualityOk: true
url: "https://github.com/SysAdminDoc/OpenTasker"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [98]
topics: ["android", "kotlin"]
stars: 40
forks: 4
openIssues: 0
closedIssues: 8
watchers: 2
contributors: 2
recentReleases: 5
createdAt: "2026-05-04T00:28:14Z"
lastCommitAt: "2026-08-25T04:06:07Z"
lastReleaseAt: "2026-05-04T01:19:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 45
maintainers: ["SysAdminDoc"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6afa5c5ad276a37042f52d57b2329026cc5d6ae59ee04f5725a7dbd0ee32a14/SysAdminDoc/OpenTasker"
discussionCount: 4
---

# OpenTasker

**OpenTasker** is a fully open-source, on-device, FOSS alternative to [Tasker](https://tasker.joaoapps.com/) for Android.

---

## Features

### Automation engine

- **Encrypted automation database**. SQLCipher encrypts the complete Room file at rest with a random key wrapped by Android Keystore; existing plaintext databases migrate once before Room opens, and wrong-key opens fail closed

- **Profiles, contexts, tasks, actions**. a complete Room-backed automation pipeline with a Compose UI
- **Companion presence triggers**. user-confirmed CompanionDeviceManager associations emit low-power present/absent events without a scanning loop, with setup-time revocation
- **7 context families**. Application, Time, Day, Location, State, Event, and Plugin (Locale/Tasker condition)
- **77 built-in actions** plus engine-handled flow control (`task.run`, `if`/`else`/`end if`, `for each`/`end for`, `try`/`catch`/`end try`, `stop`)
- **USB device contexts**. attach/detach event pulses expose bounded device, vendor, product, and class fields for local input-device automations
- **Template expressions**. bounded `{{ ... }}` expansion with scoped variables, arrays, JSON paths,…
