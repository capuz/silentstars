---
repo: "ButterscotchRunner/Butterscotch"
name: "Butterscotch"
description: "🥧 An open source re-implementation of GameMaker: Studio's runner (YoYo Runner)"
readmeQualityOk: true
url: "https://github.com/ButterscotchRunner/Butterscotch"
language: "C"
languages: ["C"]
languagePcts: [89]
topics: ["c", "gamemaker", "gamemaker-studio", "playstation", "playstation-2", "ps2sdk", "gskit", "deltarune", "undertale", "homebrew"]
stars: 403
forks: 132
openIssues: 11
closedIssues: 83
watchers: 12
contributors: 33
recentReleases: 0
createdAt: "2026-03-06T04:57:56Z"
lastCommitAt: "2026-10-31T15:58:07Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 29
maintainers: ["MrPowerGamerBR", "casrielasriel", "cobaltgit"]
openGraphImageUrl: "https://opengraph.githubassets.com/328a6a4f5fc490a6fb7858d87ddfe4e06b7aed8dac3931c7d4410a28ed4cdd29/ButterscotchRunner/Butterscotch"
---

> [!IMPORTANT]
> Butterscotch may have quirks that the original GameMaker: Studio runner may not have!

When you create a game in GameMaker: Studio and export it, GameMaker: Studio exports the game code as bytecode instead of native compiled code, and that bytecode is compatible with any other GameMaker: Studio runner (also known as YoYo runner), as long as they have matching GameMaker: Studio versions. This is similar to how Java applications work.

This is how projects such as [Droidtale](https://mrpowergamerbr.com/projects/droidtale) (which was also made by yours truly) can exist. We exploit that GameMaker: Studio games compile to bytecode, which means they can be ran on *any* platform that has an official runner for it!

Ever since I created Droidtale 10+ years ago, I had that lingering thought in my mind... If GameMaker games use bytecode, what prevents us from creating our *own* runner? And if we can write our *own* runner, what prevents us from porting GameMaker: Studio games to other platforms?

And that's where Butterscotch comes in! Butterscotch is an open source re-implementation of GameMaker: Studio's runner in C.

## Game Compatibility

Butterscotch's goal is to be…
