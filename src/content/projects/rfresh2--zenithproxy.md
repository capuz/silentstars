---
repo: "rfresh2/ZenithProxy"
name: "ZenithProxy"
description: "2b2t minecraft proxy / bot"
readmeQualityOk: true
url: "https://github.com/rfresh2/ZenithProxy"
homepage: "https://wiki.2b2t.vc/"
language: "Java"
languages: ["Java"]
languagePcts: [97]
stars: 437
forks: 98
openIssues: 0
closedIssues: 55
watchers: 3
contributors: 25
recentReleases: 0
createdAt: "2022-04-10T05:56:37Z"
lastCommitAt: "2026-09-19T01:37:16Z"
lastReleaseAt: "2023-08-21T07:15:43Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 39
maintainers: ["rfresh2", "dependabot[bot]", "Lukiblokck"]
openGraphImageUrl: "https://opengraph.githubassets.com/1be93de9d5acd9e62890107807cc60fe3ef20c1678e16d4f757feba4962778fb/rfresh2/ZenithProxy"
---

# ZenithProxy

  </a>
</p>

</p>

ZenithProxy is a Minecraft bot that players can also log into and control ingame

You can have accounts always online and securely shared with friends

The bot can be controlled remotely through a Discord bot, a terminal, or ingame

It's designed for use on [2b2t.org](https://www.2b2t.org/) but works on any MC server

This project is also used by the [2b2t.vc API](https://api.2b2t.vc) and [Discord Bot](https://bot.2b2t.vc).

<details>
    <summary>What is a proxy?</summary>

    There are four main components:
    1. A Player's Minecraft Client ("Player Client")
    2. The Proxy's Minecraft Server ("Proxy Server")
    3. The Proxy's Minecraft Client ("Proxy Client")
    4. The destination Minecraft Server ("MC Server")

    Player MC Client <-> Proxy Server <-> Proxy Client <-> MC Server

    Players use a Minecraft client to connect to the Proxy Server just like a normal MC server.
    The Proxy Client connects to a destination MC server (i.e. 2b2t.org).
    The Player's packets to the Proxy Server get forwarded to the Proxy Client which
    forwards them to the destination MC server.

    When no Player Client is connected the Proxy Client will…
