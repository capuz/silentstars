---
repo: "zpalmtree/dave"
name: "dave"
description: "Dave is a discord bot with a ton of features, such as AI art, chat generation, timers, web+image+youtube searches, quote storage, and much much more"
readmeQualityOk: true
url: "https://github.com/zpalmtree/dave"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 9
forks: 12
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2019-04-02T03:17:50Z"
lastCommitAt: "2026-08-20T04:08:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 91
undervaluedScore: 88
maintainers: ["zpalmtree", "donuts-are-good"]
openGraphImageUrl: "https://opengraph.githubassets.com/71020e9c8de37294442316464fe6a6f01f43f1647a5a6fba27c5d51ee017c517/zpalmtree/dave"
---

# Dave

Dave is a chat bot. It runs on Discord and Uproar (uproar.chat) at the same time; the Uproar side is optional and stays off until you configure it (see [Uproar](#uproar-uproarchat) below).

## Prerequisites

* yarn
* node

## Setup

* Go [here](https://discordapp.com/developers/applications/me#top) to make a bot.
* Give your bot a name, and then click `Create Application`.
* Scroll down to `Create a Bot User` and click that.
* Note down the `Client ID` for later.
* Now you can get your bot token by clicking `click to reveal` in the bot user section.
* Copy the file `src/Config.ts.example` to `src/Config.ts` (`cp src/Config.ts.example src/Config.ts`)
* Enter your token in `Config.ts`.
* **Don't reveal this token to anyone!**
* Next you need to get the Channel ID you want the bot to run in.
* In Discord, follow these steps-

   1. Click on `User Settings`(small gear icon to right of name in the bottom left)

   2. Click on `Appearance`

   3. Enable `Developer Mode`.

* Edit this link, replacing the string of numbers after `client_id=` with the Client ID you noted down earlier.…
