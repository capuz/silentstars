---
repo: "yschimke/homeassistant-remotecompose"
name: "homeassistant-remotecompose"
description: "Terrazzo: Home Assistant dashboards rendered natively with Remote Compose — Android, Wear OS and an in-Home-Assistant wall-panel integration."
readmeQualityOk: true
url: "https://github.com/yschimke/homeassistant-remotecompose"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [83]
topics: ["hacs", "home-assistant", "home-assistant-integration", "homeassistant", "jetpack-compose", "kotlin-multiplatform", "lovelace", "remote-compose", "wear-os"]
stars: 11
forks: 1
openIssues: 11
closedIssues: 65
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-20T18:51:42Z"
lastCommitAt: "2026-11-14T21:46:50Z"
lastReleaseAt: "2026-05-09T18:00:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 51
maintainers: ["renovate[bot]", "yschimke", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae43c6374e27bd5cdae0f7eac1a613f8da18bc04b7349628dd4dab31225e0ae2/yschimke/homeassistant-remotecompose"
---

# homeassistant-remotecompose

Kotlin Multiplatform library that converts Home Assistant Lovelace dashboard
cards into [RemoteCompose](https://developer.android.com/jetpack/androidx/releases/compose-remote)
documents. Android and iOS app targets are included. The SwiftUI app under [`ios/`](https://github.com/yschimke/homeassistant-remotecompose/blob/HEAD/ios/) uses the
pure Swift/UIKit player from `yschimke/rc-players`; shared Kotlin data/client layers remain KMP.

## Home Assistant integration

**Terrazzo Remote Compose** brings the same renderer into Home Assistant 2026.11 or newer. It adds
a sidebar panel at `/terrazzo` that shows your Lovelace dashboards, suited to wall panels and
tablets, behind Home Assistant's own sign-in. It also adds a **Remote Compose** card to the card
picker, and an MCP server so AI assistants can read your home and propose dashboard edits for you
to apply. It is a custom integration, not an app, so it works on Home Assistant OS, Container and
Core. Setup, wall-panel options, updates and rollback are in
[the integration guide](https://github.com/yschimke/homeassistant-remotecompose/blob/main/docs/HOME_ASSISTANT.md).

Or in Home Assistant, go to…
