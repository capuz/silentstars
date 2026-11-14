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
openIssues: 61
closedIssues: 89
watchers: 5
contributors: 7
recentReleases: 0
createdAt: "2020-12-21T15:32:12Z"
lastCommitAt: "2026-11-14T10:45:53Z"
lastReleaseAt: "2020-12-24T06:31:18Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 41
maintainers: ["RenierM26", "dependabot[bot]", "ottes"]
openGraphImageUrl: "https://opengraph.githubassets.com/450a646a8a43ac6e7c17c5698380dbee24e415673c25c56203a87142bb4cada4/RenierM26/ha-ezviz"
---

# EZVIZ Cloud for Home Assistant — Ezviz(Beta)

A custom Home Assistant integration using [pyEzvizApi](https://github.com/RenierM26/pyEzvizApi)
for cloud inventory, optional channel-99 push, camera images and local RTSP sources.
The HA integration is named **Ezviz(Beta)**; its domain is `ezviz_cloud`.
It is separate from Home Assistant's built-in **EZVIZ** integration.

## Release status

**This README describes unreleased `main`.** The latest published integration
release checked on 2026-11-14 is `0.2.0.25`; `main` still carries that manifest
version but includes subsequent, untagged changes. Installing that published tag
does **not** install the overhaul described here. Use the selected release's own
documentation for its behavior. A new manifest version/tag and explicit release
approval are still required; no release is implied by merging these PRs.

For this development line:

| Requirement | Qualified baseline |
| --- | --- |
| Home Assistant | 2026.10.4 minimum; native CI also tests 2026.11.0 |
| Python | 3.14.2+; HA manages Python on OS/Container installations |
| SDK | Published `pyezvizapi>=2.2.0`; CI qualifies exactly 2.2.0 |
| Built-in/custom coexistence | **Not…
