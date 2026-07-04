---
repo: "BUTR/Bannerlord.UIExtenderEx"
name: "Bannerlord.UIExtenderEx"
description: "A library that enables multiple mods to alter standard game interface."
readmeQualityOk: true
url: "https://github.com/BUTR/Bannerlord.UIExtenderEx"
homepage: "https://www.nexusmods.com/mountandblade2bannerlord/mods/2102"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["bannerlord", "mount-and-blade-bannerlord", "library", "bannerlord-mod", "mod"]
stars: 24
forks: 8
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2020-05-29T13:27:51Z"
lastCommitAt: "2026-07-04T23:13:39Z"
lastReleaseAt: "2021-02-07T12:14:25Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 75
undervaluedScore: 43
maintainers: ["Aragas", "weblate"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2f6b175dabb8971693a72946194b3d437045139c2516eed4ec4e06f30234924/BUTR/Bannerlord.UIExtenderEx"
---

# Bannerlord.UIExtenderEx
  </a>
  <br/>
  </a>
  </a>
  </a>
  </a>
  </a>
  <br/>
  </a>
  </a>
  <br/>
  </a>
  <br/>
  </a>
  </a>
  </a>
  </a>
  </a>
  <br/>
  </a>
  </a>
  </a>
  </a>
  </a>
  <br/>
</p>

A library that enables multiple mods to alter standard game interface.  
Previously, a fork of [UIExtenderLib](https://github.com/shdwp/UIExtenderLib) that was de-forked.

## Installation
This module should be one of the highest in loading order. Ideally, it should be loaded after ``Bannerlord.Harmony`` or ``Bannerlord.ButterLib``.

## For Players
This mod is a dependency mod that does not provide anything by itself. You need to additionally install mods that use it.

## Usage
Check the [``Articles``](https://butr.github.io/Bannerlord.UIExtenderEx/articles/v2/Overview.html) section of our documentation!

## Current State of AutoGens
The game uses two Prefab systems - static (pre-compiled XML) C# prefabs and dynamically serialized XML prefabs.  
The XML prefabs were introduced with the Early Access.  
The C# prefabs were introduced in the middle of Early Access. Most likely for Console releases, since they use the `Mono` runtime.  

We call AutoGens the XML prefabs that…
