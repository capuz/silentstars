---
repo: "muhlba91/onyx-homeassistant-integration"
name: "onyx-homeassistant-integration"
description: "Home Assistant (HACS) integration for Hella's ONYX.CENTER"
readmeQualityOk: true
url: "https://github.com/muhlba91/onyx-homeassistant-integration"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["onyx", "hella", "homeassistant", "hacs", "homeassistant-integration"]
stars: 13
forks: 7
openIssues: 2
closedIssues: 27
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2021-02-09T11:50:16Z"
lastCommitAt: "2026-11-16T11:52:33Z"
lastReleaseAt: "2022-07-08T08:01:19Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 95
undervaluedScore: 75
maintainers: ["renovate[bot]", "muhlba91", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0518d824f420066073ba563140681bcbe74d9577be873321b8e2109e97178438/muhlba91/onyx-homeassistant-integration"
fundingLinks: ["GITHUB:https://github.com/muhlba91", "BUY_ME_A_COFFEE:https://buymeacoffee.com/muhlba91"]
discussionCount: 0
---

# Hella ONYX.CENTER Custom Component for Home Assistant

This component creates an integration that provides the following entities to control [Hella's ONYX.CENTER](https://www.hella.info/) via Home Assistant:

- **raffstore/shutter/screen** entities
- **(dimmable/RGBW) light** entities
- **weather station** sensor entities
- **tag** (ONYX.TAG sun / temperature) sensor entities
- **input** (rain sensor / alarm contact) binary sensor entities
- **software update** entity of the ONYX.CENTER
- **automation** switch entities of the ONYX.CENTER

---

## Limitations

This integration is under development and based on personal needs and Hella's API design and Home Assistant's
interpretation of values diverges in a few aspects.

Therefore, a few limitations are imposed on/by this integration:

| Limitation | Description | Bound By |
| --- | --- | --- |
| Shutter Position | Home Assistant takes the position 0 as closed and 100 as open, Hella the opposite. | Home Assistant |
| Tilt Position | Home Assistant takes the position 0 as closed and 100 as open, Hella's values range between 0-90 and 0-180. | Home Assistant / Hella |
| Light Brightness | Home Assistant takes the dim value 0 as off…
