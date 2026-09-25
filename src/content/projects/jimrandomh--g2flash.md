---
repo: "jimrandomh/g2flash"
name: "g2flash"
description: "Script for applying custom firmware to Even Realities G2 smart glasses"
readmeQualityOk: true
url: "https://github.com/jimrandomh/g2flash"
language: "C"
languages: ["C", "Python"]
languagePcts: [70, 28]
stars: 33
forks: 5
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-23T17:31:32Z"
lastCommitAt: "2026-09-25T09:01:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 35
maintainers: ["jimrandomh", "kalanihelekunihi"]
openGraphImageUrl: "https://opengraph.githubassets.com/28f309e7eefbdb1f50f7ce05a670c148068349f3f18c3fd143cbe9f34415f52a/jimrandomh/g2flash"
---

# g2flash

`g2flash` is a utility for installing firmware on Even Realities G2 smart
glasses, as well as a collection of firmware modifications that add features and
fix limitations of the glasses. The modifications themselves are made with
[Faceclaw](https://github.com/jimrandomh/faceclaw) in mind, but can be used by
any software that communicates with the G2 glasses using their BLE protocol. If
you are using this with Faceclaw, you can either use this tool to apply the
firmware mods, or use the flashing tool built in to Faceclaw's onboarding
process (both versions install the same firmware image). Installing using
Faceclaw is a bit more user friendly than installing using g2flash.

This repository contains patches applied to firmware, but does not contain the
Even Realities firmware itself. The `build_cfw.sh` script will download the base
firmware from Even's CDN, apply patches, and verify that the resulting firmware
has the expected hash for you.

Flashing a custom firmware will void your warranty. This tool will require you
to acknowledge that you are voiding your warranty when you run it.

DEVELOPING YOUR OWN FIRMWARE MODS IS MUCH RISKIER THAN INSTALLING FIRMWARE THAT
HAS…
