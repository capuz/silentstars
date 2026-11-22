---
repo: "RenierM26/ha-ezviz"
name: "ha-ezviz"
description: "Custom EZVIZ Cloud integration for Home Assistant: cameras, device controls, snapshots, optional push updates and local RTSP sources."
readmeQualityOk: true
url: "https://github.com/RenierM26/ha-ezviz"
homepage: "https://github.com/RenierM26/ha-ezviz#readme"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ezviz", "camera", "hacs", "home-assistant", "homeassistant-custom-component", "iot", "rtsp"]
stars: 69
forks: 25
openIssues: 20
closedIssues: 130
watchers: 5
contributors: 8
recentReleases: 0
createdAt: "2020-12-21T15:32:12Z"
lastCommitAt: "2026-11-22T11:45:56Z"
lastReleaseAt: "2020-12-24T06:31:18Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 88
undervaluedScore: 53
maintainers: ["RenierM26", "dependabot[bot]", "ottes"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd96f3011d4eb75a2e0ca8fb6c26dc773e75e021622f8de4010a35229f435d3e/RenierM26/ha-ezviz"
---

# EZVIZ Cloud for Home Assistant — Ezviz(Beta)

**Multi-lens SDK requirement:** this branch requires published SDK 2.6.0.
See [multi-lens support](https://github.com/RenierM26/ha-ezviz/blob/HEAD/docs/multi-lens.md).

A custom Home Assistant integration using [pyEzvizApi](https://github.com/RenierM26/pyEzvizApi)
for cloud inventory, optional channel-99 push, camera images and local RTSP sources.
The HA integration is named **Ezviz(Beta)**; its domain is `ezviz_cloud`.
It is separate from Home Assistant's built-in **EZVIZ** integration.

## Release status

This documentation describes **0.3.0**, the shared-inventory and reliability
overhaul. For the published version and downloads, use
[GitHub Releases](https://github.com/RenierM26/ha-ezviz/releases).
Read the [0.3.0 change notes](https://github.com/RenierM26/ha-ezviz/blob/HEAD/CHANGELOG.md#030) and
[upgrade/rollback guide](https://github.com/RenierM26/ha-ezviz/blob/HEAD/docs/upgrading.md) before updating from `0.2.0.25`.
The older tag does not contain these changes; a merge into `main` alone does not
publish a HACS update. Development branches and draft PRs are not release contents.
