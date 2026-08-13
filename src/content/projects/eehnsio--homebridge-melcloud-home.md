---
repo: "eehnsio/homebridge-melcloud-home"
name: "homebridge-melcloud-home"
description: "Homebridge plugin for Mitsubishi Electric Air Conditioners using the MELCloud Home platform"
readmeQualityOk: true
url: "https://github.com/eehnsio/homebridge-melcloud-home"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [68]
stars: 9
forks: 0
openIssues: 1
closedIssues: 10
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-10-19T18:07:14Z"
lastCommitAt: "2026-08-13T05:13:19Z"
lastReleaseAt: "2025-10-28T08:32:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 91
undervaluedScore: 47
maintainers: ["eehnsio", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c094fb28f5f9c04e7a00a866f30d373e46123c7d44e50a6e19762bf0516a7a8a/eehnsio/homebridge-melcloud-home"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/eehnsio"]
---

# Homebridge MELCloud Home

Homebridge plugin for Mitsubishi Electric Air Conditioners using the **MELCloud Home** platform (melcloudhome.com).

## Background

I needed a way to control my Mitsubishi AC units through HomeKit, but the existing MELCloud plugins only worked with the old MELCloud platform (app.melcloud.com). My units use the newer MELCloud Home platform (melcloudhome.com), which has a completely different API.

So I created this plugin with the help of [Claude Code](https://claude.com/claude-code).

## Support This Project

☕ [Buy Me a Coffee](https://buymeacoffee.com/eehnsio)

## Credits

Thanks to [homebridge-melcloud-control](https://github.com/grzegorz914/homebridge-melcloud-control) for inspiration on the Homebridge integration patterns.

## Features

- Power, temperature (0.5° steps) and mode (Heat, Cool, Auto)
- Fan speed (Auto + 5 levels)
- Automatic device discovery
- Temperature sensor per unit, for automations (optional)
- Fan speed and swing as separate switches (optional)
- Stays signed in when MELCloud drops the login (optional)
- Homebridge v1 & v2 compatible

## Important: MELCloud vs MELCloud Home

This plugin is **only** for MELCloud Home…
