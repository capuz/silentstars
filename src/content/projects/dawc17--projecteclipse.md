---
repo: "dawc17/ProjectEclipse"
name: "ProjectEclipse"
description: "a unity project :)"
readmeQualityOk: true
url: "https://github.com/dawc17/ProjectEclipse"
language: "C#"
languages: ["C#"]
languagePcts: [81]
stars: 14
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 1
createdAt: "2026-08-27T07:13:48Z"
lastCommitAt: "2026-10-04T10:00:41Z"
lastReleaseAt: "2026-09-05T13:18:10Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 48
maintainers: ["dawc17", "dawcza17", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/77c4579942765f97af47406756f9534b4d9b57c28532d386e309b7cc7c8e1570/dawc17/ProjectEclipse"
---

# Project Eclipse

Project Eclipse is a mod engine for Shadow Fight 2. Think of this as the SF2 equivalent of Forge for Minecraft. </br>
It targets **Unity 6.6**.

**The project is not meant to be played on it's own without mods, even if it is possible** </br>
It is intentionally bare, and it is strongly recommended to play with mods. (when that time comes lol)

Definitive Edition 128 will be bundled as a mod, and enabled by default on the first stable public release. </br>
This will be the """vanilla""" Project Eclipse experience, but modders will always have the option to disable DE128 for their modding purposes. </br>

The base project is intentionally not Definitive Edition. Project-owned
engine, compatibility, desktop, presentation, and future modding code lives under
`Assets/Scripts/Eclipse/`. </br>

## Layout

- `Assets/` - recovered game code, assets, resources, and editor tools.
- `Assets/Resources/SF2Content/Art/` - native runtime art and its catalog; no research folder is required to run a build.
- `Assets/Scripts/Eclipse/` - Eclipse-owned reconstruction and platform code.
- `Assets/vanillaXml/` - canonical vanilla 2.41.9 gameplay/configuration XML.
- `Assets/DExml/` -…
