---
repo: "ASCOMInitiative/ConformU"
name: "ConformU"
description: "ConformU is a cross-platform tool to validate that Alpaca Devices and ASCOM Drivers conform to the ASCOM interface specification. It supersedes the original Windows based Conform application."
readmeQualityOk: true
url: "https://github.com/ASCOMInitiative/ConformU"
language: "C#"
languages: ["C#"]
languagePcts: [88]
topics: ["conform", "ascom"]
stars: 20
forks: 5
openIssues: 10
closedIssues: 29
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2021-08-04T09:07:06Z"
lastCommitAt: "2026-10-30T10:23:13Z"
lastReleaseAt: "2022-11-27T20:19:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 57
maintainers: ["Peter-Simpson"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad3e066f46690f1aa6eeca124a01b9133993da08a8eddfa259e76bb11c2eb927/ASCOMInitiative/ConformU"
---

# Conform Universal
Conform Universal (ConformU) is a cross-platform tool to validate that Alpaca Devices and ASCOM Drivers conform to the ASCOM interface specification, and that Alpaca devices conform to the Alpaca Protocol specification. ConformU runs natively on Linux, Arm, MacOS and Windows and will supersede the original Windows Forms based Conform application.

# Features
* Tests Alpaca devices on all Platforms and COM Drivers on the Windows platform.
  * Alpaca devices that support the Alpaca discovery protocol will automatically be presented for selection.
  * An Alpaca device URL, port number and device number can be set manually to target devices that don't support discovery.
  * When running on Windows, COM Drivers will be presented for testing as well as Alpaca devices.
* Tests Alpaca device conformance with the Alpaca API protocol.
* Tests Alpaca device conformance with the Alpaca Discovery protocol.
* Tests Alpaca devices for conformance with the Alpaca protocol.
* The application can run:
  * in the user's default browser as a Blazor single page application.
  * as a command line utility without any graphical UI.
* Test outcomes are reported:
  * in the browser UI…
