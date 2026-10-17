---
repo: "johnnyh1975/ha_roomba_plus"
name: "ha_roomba_plus"
description: "Platinum-quality Home Assistant custom integration for iRobot Roomba & Braava — local MQTT, no cloud required, 100+ entities"
readmeQualityOk: true
url: "https://github.com/johnnyh1975/ha_roomba_plus"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["braava", "custom-component", "hacs", "hacs-integration", "home-assistant", "home-assistant-integration", "home-automation", "irobot", "roomba", "smart-home"]
stars: 52
forks: 7
openIssues: 8
closedIssues: 112
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2026-05-17T06:03:46Z"
lastCommitAt: "2026-10-17T07:59:49Z"
lastReleaseAt: "2026-05-22T11:03:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 37
maintainers: ["johnnyh1975", "mdarocha", "JoshHobbs"]
openGraphImageUrl: "https://opengraph.githubassets.com/df6e493b91f971be76fff94070507b3631571aae0164250f1b5bb94e0854dbe2/johnnyh1975/ha_roomba_plus"
discussionCount: 17
---

# Roomba+ — Enhanced iRobot Integration for Home Assistant

Roomba+ is a Platinum-quality Home Assistant custom integration for iRobot Roomba and Braava robots. It connects directly over local Wi-Fi MQTT — no cloud account required, no polling, no subscription — and exposes far more sensors, intelligence, and controls than the built-in HA integration.

## Which version do I need?

| Your robot | Install | Why |
|---|---|---|
| **Any supported robot** | **v4.4.4** (stable) — the default in HACS | One line for both generations, and one iRobot login for all the robots of an account. No beta channel needed. |
| **Roomba Max · Combo/Plus 400-series** and other newer cloud robots | **v4.4.4** | Lines before 4.0 **cannot connect to your robot at all** |
| Still on the 4.1 or 4.2 line | **v4.4.4** | Everything fixed through 4.2.22 is in it. 4.2.22 was the last 4.2 release; that line has ended, as has 4.1 |
| Not sure | Check your model number against the [supported hardware](#supported-hardware--capability-matrix) table below | |

> ⚠️ If HACS shows you only `main` and downloading it hangs, see
> [Troubleshooting →…
