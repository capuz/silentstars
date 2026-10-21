---
repo: "firstof9/ha-gasbuddy"
name: "ha-gasbuddy"
description: "Component to integrate with GasBuddy fuel price tracker."
readmeQualityOk: true
url: "https://github.com/firstof9/ha-gasbuddy"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["hacktoberfest", "home-assistant", "home-automation", "integration"]
stars: 68
forks: 12
openIssues: 0
closedIssues: 73
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2023-12-07T20:53:03Z"
lastCommitAt: "2026-10-21T17:31:59Z"
lastReleaseAt: "2024-09-06T16:29:13Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 52
maintainers: ["dependabot[bot]", "firstof9", "secondof9"]
openGraphImageUrl: "https://opengraph.githubassets.com/cff6c4313675cd02a4b6a8127884c0b6f0e9a54a33f87303704b593a1fccba15/firstof9/ha-gasbuddy"
fundingLinks: ["GITHUB:https://github.com/firstof9", "BUY_ME_A_COFFEE:https://buymeacoffee.com/firstof9"]
discussionCount: 8
---

# GasBuddy

_Integration to track fuel prices from [GasBuddy][GasBuddy]._

Looking for a custom Lovelace card? Check out the [GasBuddy Card][gasbuddy-card].

**This integration will set up the following platforms.**

Platform | Description
-- | --
`sensor` | Show info, prices, and EV charging details from a GasBuddy listed station.

## Installation via HACS (recommended)

1. Follow the link [here](https://hacs.xyz/docs/faq/custom_repositories/)
2. Use the custom repo link [https://github.com/firstof9/ha-gasbuddy][ha-gasbuddy]
3. Select the category type `integration`
4. Then once it's there (still in HACS) click the INSTALL button
5. Restart Home Assistant
6. Once restarted, in the HA UI go to `Settings` (the ⚙️ on the sidebar) -> `Devices & Services`, click `+ Add Integration` and search for `GasBuddy`

## Manual (non-HACS)

You probably do not want to do this! Use the HACS method above unless you know what you are doing and have a good reason as to why you are installing manually

1. Using the tool of choice open the directory (folder) for your HA configuration (where you find `configuration.yaml`).
2. If you do not have a `custom_components` directory (folder) there, you need…
