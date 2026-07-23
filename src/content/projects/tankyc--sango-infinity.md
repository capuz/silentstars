---
repo: "tankyc/sango_infinity"
name: "sango_infinity"
description: "Infinite Three Kingdoms"
originalDescription: "无限三国"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/tankyc/sango_infinity"
language: "C#"
languages: ["C#"]
languagePcts: [97]
stars: 16
forks: 7
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-09-16T06:29:16Z"
lastCommitAt: "2026-07-23T06:15:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 57
maintainers: ["tankyc"]
openGraphImageUrl: "https://opengraph.githubassets.com/317a7eec2b2f9f23616e97d57fd5223ce71900850636036c1766d43fff3e3dd0/tankyc/sango_infinity"
---

# Infinite Three Kingdoms
A reset project based on Romance of the Three Kingdoms 11  

## Unity3D Version and Dependencies
You need to use **Unity3D 2021.3.40f1** or higher to open the Project folder. You need to import the **2DSprite**, **Universal RP**, and **Burst** packages.  

Added support for HybridCLR  
## Install HybridCLR reference [https://www.hybridclr.cn/docs/basic/install](https://www.hybridclr.cn/docs/basic/install)  

## First Launch
The initial launch will have a pop-up window that requires you to select the Build folder. The package will be generated directly in the Build folder. If you do not select it at that time, the game will report an error saying it cannot find the Mods folder. You can reselect the Build folder through the menu <Sango-> Tools -> Reset Project Folder>.  

Before packaging, you need to select the menu Sango-> Mod -> Resource Package Export, which will generate the resource package under Build/Package.  

After generating the resource package for Android packaging, you need to go to Sango-> Package -> Compress Resource Package to StreamingAssets.  

## Resource Related
Some resources are exported from the Romance of the Three Kingdoms 11…
