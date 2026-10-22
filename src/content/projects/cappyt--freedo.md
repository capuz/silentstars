---
repo: "CappyT/freedo"
name: "freedo"
description: "Local coordinator for tado V3+ heating devices, with a Home Assistant integration and add-on"
readmeQualityOk: true
url: "https://github.com/CappyT/freedo"
language: "Go"
languages: ["Go"]
languagePcts: [69]
topics: ["golang", "hacs", "heating", "home-assistant", "home-assistant-addon", "smart-home", "tado"]
stars: 10
forks: 1
openIssues: 12
closedIssues: 15
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-11T17:50:22Z"
lastCommitAt: "2026-10-22T08:48:19Z"
lastReleaseAt: "2026-10-13T10:51:41Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 90
undervaluedScore: 52
maintainers: ["CappyT", "wzd8888"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1414617422/7b2d3b55-384c-4df5-b31e-8e101fc887ec"
---

# freedo

A local coordinator for tado V3+ 868 MHz heating devices, with a Home Assistant integration.

This is heavily AI-assisted work. The code and the documentation were written largely with AI assistance, under the direction of the project owner. Behavior was checked with automated tests, and on a real plant only where the [Status](#status) section says so.

## Contents

- [What it is](#what-it-is)
- [Status](#status)
- [Scope and limits](#scope-and-limits)
  - [Supported devices](#supported-devices)
- [Requirements](#requirements)
- [Install](#install)
  - [Home Assistant: add-on and integration](#home-assistant-add-on-and-integration)
  - [Container](#container)
- [First setup](#first-setup)
- [Dashboard](#dashboard)
- [Features](#features)
- [Safety](#safety)
- [Community](#community)
- [Documentation](#documentation)
- [Development](#development)
- [Licence](#licence)

## What it is

freedo replaces the tado internet bridge for the radiator valves and wall thermostats that it
coordinates. The coordinator is a Go daemon. It talks over a serial link to an ESP32 with a CC1101
radio, and it serves a local HTTP API. A Home Assistant integration uses that API. The daemon
keeps…
