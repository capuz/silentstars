---
repo: "cedricziel/ha-matter-binding-helper"
name: "ha-matter-binding-helper"
description: "A binding helper for matter"
readmeQualityOk: true
url: "https://github.com/cedricziel/ha-matter-binding-helper"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [49, 46]
topics: ["homeassistant", "homeassistant-custom-component", "homeassistant-integration", "matter"]
stars: 62
forks: 1
openIssues: 10
closedIssues: 11
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-21T20:24:07Z"
lastCommitAt: "2026-07-05T06:31:41Z"
lastReleaseAt: "2025-12-01T08:56:56Z"
status: "thriving"
tags: ["funded"]
healthScore: 89
undervaluedScore: 33
maintainers: ["dependabot[bot]", "cedricziel"]
openGraphImageUrl: "https://opengraph.githubassets.com/55b16b45536dce4a72c8d243f92303d25f930f5865794100c779a7533fe1e386/cedricziel/ha-matter-binding-helper"
fundingLinks: ["GITHUB:https://github.com/cedricziel"]
---

# Matter Binding Helper for Home Assistant

A Home Assistant custom integration that provides a user interface for managing Matter device bindings through the official Matter server.

## Features

- **View Bindings**: List all existing Matter bindings between devices with cluster details
- **Create Bindings**: Set up new bindings with smart recommendations and compatibility checking
- **Delete Bindings**: Remove existing bindings
- **Binding Recommendations**: Automatic suggestions for compatible device bindings
- **Automation Templates**: Pre-built automation templates for common scenarios (switches, buttons, etc.)
- **Telemetry**: Optional anonymous device telemetry to improve Matter ecosystem understanding

## What are Matter Bindings?

Matter bindings allow devices to communicate directly with each other without going through a central controller. For example, you can bind a Matter switch to a Matter light, allowing the switch to control the light directly - even if your Home Assistant server is offline.

## Requirements

- Home Assistant 2024.1.0 or newer
- Matter integration configured and running
- At least two Matter devices (for creating bindings)

## Installation

###…
