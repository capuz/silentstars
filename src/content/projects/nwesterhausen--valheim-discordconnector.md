---
repo: "nwesterhausen/valheim-discordconnector"
name: "valheim-discordconnector"
description: "A plugin to connect a Valheim server to a discord webhook."
readmeQualityOk: true
url: "https://github.com/nwesterhausen/valheim-discordconnector"
homepage: "https://discord-connector.valheim.games.nwest.one/"
language: "C#"
languages: ["C#"]
languagePcts: [97]
topics: ["valheim", "modding-games", "discord", "plugin"]
stars: 41
forks: 28
openIssues: 49
closedIssues: 97
watchers: 6
contributors: 8
recentReleases: 0
createdAt: "2021-09-29T16:09:15Z"
lastCommitAt: "2026-11-03T19:05:36Z"
lastReleaseAt: "2021-10-06T02:41:00Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 81
undervaluedScore: 55
maintainers: ["Yibbzz", "nwesterhausen", "Salvidrim"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c179ebe69bed2f63353f66265a144934566978216d142c437b9ddfb75d7799b/nwesterhausen/valheim-discordconnector"
---

# Discord Connector

&color=darkviolet&labelColor=%2332393F)
&color=darkviolet&labelColor=%2332393F)

Connect your Valheim server to Discord. ([See website for installation or configuration instructions](https://discord-connector.valheim.games.nwest.one/)). This plugin is largely based on [valheim-discord-notifier](https://github.com/aequasi/valheim-discord-notifier), but this plugin supports randomized messages, muting players, and Discord message embeds.

## Plugin Details

See [the README](https://github.com/nwesterhausen/valheim-discordconnector/blob/HEAD/Metadata/README.md) for the plugin.

## Changelog

See [the changelog](https://github.com/nwesterhausen/valheim-discordconnector/blob/HEAD/docs/changelog.md).

## Building

To build, first get the path to your Valheim installation and also use the publicize tool to create a publicized version of the game. I'm not sure without that, if it will fail to build or not.

Then, run the following command to build the project:

```shell
dotnet build \
   -c Release \
   /p:GamePath="C:\Program Files (x86)\Steam\steamapps\common\Valheim" \
   DiscordConnector.sln
```

Post build, the compiled library and its dependencies get copied…
