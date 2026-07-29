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
stars: 45
forks: 35
openIssues: 4
closedIssues: 7
watchers: 7
contributors: 23
recentReleases: 0
createdAt: "2023-08-31T00:53:31Z"
lastCommitAt: "2026-07-29T06:15:08Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 83
undervaluedScore: 60
maintainers: ["Hydraheads", "14Kacper773549", "DOGamedev5"]
openGraphImageUrl: "https://opengraph.githubassets.com/7525475184a4163f33332ab260e4ab024f388753f3acda32b2356e87cf92f678/Hydraheads/RoundaboutMod"
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
