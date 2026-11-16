---
repo: "iantrich/restriction-card"
name: "restriction-card"
description: "🔒 Apply restrictions to Lovelace cards"
readmeQualityOk: true
url: "https://github.com/iantrich/restriction-card"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["lovelace", "home-assistant", "security", "custom-card"]
stars: 328
forks: 28
openIssues: 5
closedIssues: 105
watchers: 8
contributors: 10
recentReleases: 0
createdAt: "2019-10-16T19:59:16Z"
lastCommitAt: "2026-11-16T04:22:27Z"
lastReleaseAt: "2019-10-22T02:53:36Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 73
undervaluedScore: 25
maintainers: ["iantrich", "ildar170975", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/30cafa4f8261bf899870eabbc621cb7763ec7d6b7ed92d6b83db83f2061af679/iantrich/restriction-card"
fundingLinks: ["GITHUB:https://github.com/iantrich"]
discussionCount: 16
---

# 🔒 Restriction Card

A card to provide restrictions on Lovelace cards defined within.

## Disclaimer

This card is not to be used as a means to truly protect an instance. Someone with the means and knowledge will be able to bypass the restrictions presented by this card should they choose to.

## Minimum Home Assistant version

Home Assistant version 2026.2.3 or higher is required as of release 2.0.0 of restriction-card

## Installation

Use [HACS](https://hacs.xyz) or follow this [guide](https://github.com/thomasloven/hass-config/wiki/Lovelace-Plugins)

## Options

| Name          | Type    | Requirement  | Description                                                                                     |
| ------------- | ------- | ------------ | ----------------------------------------------------------------------------------------------- |
| type          | string  | **Required** | `custom:restriction-card`                                                                       |
| card          | map     | **Required** | Card to render within `restriction-card`                                                        |
| restrictions  | map     | **Optional** | Additional…
