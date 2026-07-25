---
repo: "CatPoweredPlugins/CommandlessRedeem"
name: "CommandlessRedeem"
description: "Plugin for ASF to re-implement key redeeming without command"
readmeQualityOk: true
url: "https://github.com/CatPoweredPlugins/CommandlessRedeem"
language: "C#"
languages: ["C#", "Batchfile"]
languagePcts: [71, 29]
topics: ["asf", "plugin", "archisteamfarm", "asf-plugin"]
stars: 19
forks: 4
openIssues: 0
closedIssues: 8
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2019-01-12T22:33:56Z"
lastCommitAt: "2026-07-25T06:01:55Z"
lastReleaseAt: "2024-09-16T20:43:02Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 95
undervaluedScore: 57
maintainers: ["renovate[bot]", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/c19c035ca65c0ba4ec4046a23472299cbaf583890a693b4eb9d87256c8c760ec/CatPoweredPlugins/CommandlessRedeem"
fundingLinks: ["KO_FI:https://ko-fi.com/rudokhvist", "CUSTOM:https://www.paypal.com/donate/?business=SX99L4RVR8ZKS&no_recurring=0&item_name=Your+donations+help+me+to+keep+working+on+existing+and+future+plugins+for+ASF.+I+really+appreciate+this%21&currency_code=USD", "CUSTOM:https://www.blockchain.com/explorer/addresses/btc/bc1q8f3zcss5j6gq7hpvum0nzxvfgnm5f8mtxflfxh", "CUSTOM:https://litecoinblockexplorer.net/address/LRFrKDFhyEgv7PKb2vFrdYBP7ibUg898Vk", "CUSTOM:https://steamcommunity.com/tradeoffer/new/?partner=95843925&token=NTWfCz_R"]
---

# ASF Commandless Redeem Plugin
This plugin for [ASF](https://github.com/JustArchiNET/ArchiSteamFarm/) allows key redeeming without `!r` (or `!redeem`) command, by simply sending them to ASF via steam chat. Works only with ASF v4.0+ (make sure to check actual required version in release notes). 

**Warning:** This plugin also works for IPC, but be extremely careful when using it this way - make sure to set [Default bot](https://github.com/JustArchiNET/ArchiSteamFarm/wiki/Configuration#defaultbot) before that, or keys will be redeemed on random bot.

To use:
- download .zip file from [latest release](https://github.com/CatPoweredPlugins/Commandless-Redeem/releases/latest), in most cases you need `Commandless-Redeem.zip`, but if you use ASF-generic-netf.zip (you really need a strong reason to do that) download `Commandless-Redeem-netf.zip`.
- unpack downloaded .zip file to separate folder (for example `ComandlessRedeem`) inside of `plugins` folder of your ASF setup.
- (re)start ASF, you should get a message indicating that plugin loaded successfully.
