---
repo: "Jozwiaczek/iphone-alarms-sync"
name: "iphone-alarms-sync"
description: "Sync Apple alarms from iPhone, iPad and Mac to Home Assistant with the Shortcuts app"
readmeQualityOk: true
url: "https://github.com/Jozwiaczek/iphone-alarms-sync"
language: "Python"
languages: ["Python"]
languagePcts: [90]
topics: ["hacs", "home-assistant", "integration", "alarms", "ios", "iphone", "apple", "home-assistant-integration", "shortcuts"]
stars: 15
forks: 1
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-12-28T19:27:32Z"
lastCommitAt: "2026-11-16T11:16:35Z"
lastReleaseAt: "2026-01-04T14:41:29Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 92
undervaluedScore: 58
maintainers: ["Jozwiaczek", "semantic-release-bot", "sammyke007"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1124312009/a1cdaaf2-b788-4600-aa66-a8249c03fb2e"
fundingLinks: ["GITHUB:https://github.com/Jozwiaczek", "BUY_ME_A_COFFEE:https://buymeacoffee.com/jozwiaczek"]
discussionCount: 0
---

Sync iPhone/iPad alarms to Home Assistant using predefined Apple Shortcuts. This is a **one-way synchronization** from Apple iPhone or iPad to Home Assistant, enabling alarm-based automations like turning on lights, brewing coffee, or opening blinds when your alarm goes off.

## ✨ Features

### Alarm Synchronization
- **Sync on closing the Clock app** - an iOS automation sends all alarms to Home Assistant when you close the Clock app
- **Changes and deletions** - each sync updates times, repeat days and the enabled state; alarms deleted on the phone are removed with their device
- **One device per alarm** - every alarm gets its own device and entities
- **Wake-Up alarm** - dedicated tracking of the iOS Wake-Up (Sleep schedule) alarm

### Event Tracking
- **Alarm events** - goes off, snoozed and stopped, per alarm or for any alarm
- **Sleep events** - bedtime starts, wind down starts, waking up
- **Timestamps** - the last time of each event type
- **Missed event warning** - a sensor turns on when an alarm rang but its event never reached Home Assistant

### Smart Home Integration
- **Alarm triggers** for one or more alarms, device triggers and an event for automations
- **Sensors**…
