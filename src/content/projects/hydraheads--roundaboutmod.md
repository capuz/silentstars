---
repo: "Hydraheads/RoundaboutMod"
name: "RoundaboutMod"
description: "A Jojo Mod for Minecraft with survival, PVP, and building elements!"
readmeQualityOk: true
url: "https://github.com/Hydraheads/RoundaboutMod"
homepage: "https://www.curseforge.com/minecraft/mc-mods/roundabout-the-jojo-mod"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["jojo", "minecraft", "mod", "java"]
stars: 50
forks: 35
openIssues: 4
closedIssues: 7
watchers: 7
contributors: 27
recentReleases: 0
createdAt: "2023-08-31T00:53:31Z"
lastCommitAt: "2026-08-22T04:07:28Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 86
undervaluedScore: 58
maintainers: ["Hydraheads", "DOGamedev5", "LloydGamer10"]
openGraphImageUrl: "https://opengraph.githubassets.com/237d33c94d720a46a84fb0826602c8e8661f86259c9b0ee4d488d888d2ea6b6f/Hydraheads/RoundaboutMod"
---

</p>

---

# What is it?
Roundabout is a *Jojo's Bizarre Adventure* mod for Minecraft designed to be vanilla inspired, 
attempting to imagine how abilities from the franchise would interact with the world of the game.

> [!NOTE]
> Permission is granted to create addons or contribute freely to the project. The official release will
> only accept contributions which fit the intended vision of the mod. Check the license for details<br>
> (it's pretty unrestrictive)<br>

> [!IMPORTANT]  
> We are not liable for any problems this mod may cause.<br>
> But if you have any problems feel free to report them, and I'll do my best to fix bugs and other issues. :)<br>

> [!TIP]
> Check the [wiki](https://github.com/Hydraheads/RoundaboutMod/wiki) to learn how to use the mod.

The primary code for stand users lies in the StandUserEntity mixin for living entities, which has standPowers attached. To add a stand, we basically make a standpowers class, override any standpowers templates we want to use, and attach the standpower to a standdisc item. The stand is stored in the player as a standdisc item, and generates the stand from the attached standdisc's standpower, that's where all of the…
