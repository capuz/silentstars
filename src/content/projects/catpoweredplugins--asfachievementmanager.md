---
repo: "CatPoweredPlugins/ASFAchievementManager"
name: "ASFAchievementManager"
description: "Achievement Manager for ASF"
readmeQualityOk: true
url: "https://github.com/CatPoweredPlugins/ASFAchievementManager"
language: "C#"
languages: ["C#"]
languagePcts: [94]
topics: ["asf", "archisteamfarm", "plugin", "asf-plugin", "hacktoberfest"]
stars: 158
forks: 13
openIssues: 2
closedIssues: 23
watchers: 4
contributors: 7
recentReleases: 0
createdAt: "2019-07-01T12:27:42Z"
lastCommitAt: "2026-07-24T06:08:14Z"
lastReleaseAt: "2022-08-04T12:57:18Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 93
undervaluedScore: 38
maintainers: ["renovate[bot]", "actions-user", "Rudokhvist"]
openGraphImageUrl: "https://opengraph.githubassets.com/2cfce60e4098070453dc9e557999ea979f91d97901b3fff8bed62e2ff7489798/CatPoweredPlugins/ASFAchievementManager"
fundingLinks: ["KO_FI:https://ko-fi.com/rudokhvist", "CUSTOM:https://www.paypal.com/donate/?business=SX99L4RVR8ZKS&no_recurring=0&item_name=Your+donations+help+me+to+keep+working+on+existing+and+future+plugins+for+ASF.+I+really+appreciate+this%21&currency_code=USD", "CUSTOM:https://www.blockchain.com/explorer/addresses/btc/bc1q8f3zcss5j6gq7hpvum0nzxvfgnm5f8mtxflfxh", "CUSTOM:https://litecoinblockexplorer.net/address/LRFrKDFhyEgv7PKb2vFrdYBP7ibUg898Vk", "CUSTOM:https://steamcommunity.com/tradeoffer/new/?partner=95843925&token=NTWfCz_R"]
---

# ASF Achievement Manager

# DISCLAIMER
This plugin is provided on AS-IS basis, without any guarantee at all. Author is not responsible for any harm, direct or indirect, that may be caused by using this plugin. You use this plugin at your own risk.

## Introduction 
This plugin for [ASF](https://github.com/JustArchiNET/ArchiSteamFarm/) allows you to view, set and reset achievements in steam games, similar to [SAM](https://github.com/gibbed/SteamAchievementManager). Works only with ASF v4.0+ (make sure to check actual required version in release notes). 

## Installation
- download `ASFAchievementManager.zip` file from [latest release](https://github.com/CatPoweredPlugins/ASF-Achievement-Manager/releases/latest).
- create new folder (for example, `ASFAchievementManager`) in the `plugins` folder of your ASF installation
- unpack downloaded .zip file to the folder you just created.
- optionally, configure plugin properties in ASF.json file (see below).
- (re)start ASF, you should get a message indicating that plugin loaded successfully. 

## Usage
After installation, you can use those commands (only for accounts with Master+ permissions):

### `alist <bots> <appids>`
Displays current…
