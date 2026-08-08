---
repo: "customrealms/bukkit-runtime"
name: "bukkit-runtime"
description: "A JavaScript runtime for Minecraft server plugins"
readmeQualityOk: true
url: "https://github.com/customrealms/bukkit-runtime"
homepage: "https://customrealms.io"
language: "Java"
languages: ["Java"]
languagePcts: [96]
topics: ["minecraft", "javascript", "bukkit", "server", "gaming"]
stars: 24
forks: 6
openIssues: 1
closedIssues: 7
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2021-11-10T06:19:11Z"
lastCommitAt: "2026-08-08T04:35:33Z"
lastReleaseAt: "2024-06-20T01:05:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 48
maintainers: ["connerdouglass"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3cb81f3a2e7106450f516027105267aa6c516f7a3040f5d60b986827b031a0b/customrealms/bukkit-runtime"
---

# bukkit-runtime

This is a Bukkit plugin, written in Java, that can execute CustomRealms plugins that are written in JavaScript.

This project implements a JavaScript runtime for running CustomRealms plugins on a Minecraft server. If you're just trying to build a Minecraft plugin using JavaScript, check out [github.com/customrealms/core](https://github.com/customrealms/core).

## How it works

When this plugin is run on a Bukkit-compatible Minecraft server, the plugin launches a V8 JavaScript runtime. Then, it fills that runtime with several globals that allow the JavaScript code to interact with the Minecraft game. Then, finally, it executes the JavaScript code for the CustomRealms plugin.

## JavaScript runtime globals

The JavaScript runtime is populated with several globals. The most basic are `console.log`, `setTimeout`, and a few other related ones. However, the most interesting are related to Minecraft itself.

A few notable globals that are specific to CustomRealms are `Java.resolve`, `BukkitEvents`, and `BukkitCommands`.

The full declaration file for JavaScript globals in CustomRealms is [found here](https://github.com/customrealms/core/blob/master/src/globals.ts).

##…
