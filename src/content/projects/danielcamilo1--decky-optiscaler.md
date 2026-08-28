---
repo: "danielcamilo1/decky-optiscaler"
name: "decky-optiscaler"
description: "Decky Loader plugin to install, configure and monitor OptiScaler per game from the Game Mode on SteamOS/Bazzite/Etc. With live in-game frame generation and upscaler control."
readmeQualityOk: true
url: "https://github.com/danielcamilo1/decky-optiscaler"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [48, 41]
topics: ["decky", "decky-loader", "decky-plugin", "dlss", "frame-generation", "fsr", "optiscaler", "proton", "steam-deck", "steamos"]
stars: 19
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-08-20T18:11:26Z"
lastCommitAt: "2026-08-28T14:34:40Z"
lastReleaseAt: "2026-08-23T15:11:04Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 26
maintainers: ["danielcamilo1"]
openGraphImageUrl: "https://opengraph.githubassets.com/792f082f9d3c1ca5b7f445b426b44f15c81bd85b1ad07ba16923e5565bfd9da7/danielcamilo1/decky-optiscaler"
---

# Decky OptiScaler

A [Decky Loader](https://github.com/SteamDeckHomebrew/decky-loader) plugin that installs and
configures [OptiScaler](https://github.com/optiscaler/OptiScaler) per game from Game Mode
(SteamOS, Bazzite, whatever you run). Frame generation, upscaler overrides and the rest of
OptiScaler's settings, with a gamepad. The ones OptiScaler can change on the fly apply to the
running game; the rest say plainly that they take effect on the next launch.

OptiScaler v0.9.4 is bundled, so installing works offline and every game gets the same build.

> **Unofficial.** I am an independent developer with no connection to the OptiScaler project.
> This plugin is not made, endorsed or supported by them — it bundles their release and drives
> it from the Steam Deck UI. Please report problems with the plugin
> [here](https://github.com/danielcamilo1/decky-optiscaler/issues), not to the OptiScaler
> maintainers.

## What it does

- **Finds your games and the folder to install into.** Steam libraries from
  `libraryfolders.vdf` including the SD card, non-Steam shortcuts, and any folder you add as a
  custom library. OptiScaler has to sit next to the executable that creates the D3D…
