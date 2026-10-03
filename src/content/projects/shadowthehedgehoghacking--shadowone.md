---
repo: "ShadowTheHedgehogHacking/ShadowONE"
name: "ShadowONE"
description: "ShadowONE is a cross-platform successor to the HeroesONE and HeroesONE-Reloaded ONE file editors"
readmeQualityOk: true
url: "https://github.com/ShadowTheHedgehogHacking/ShadowONE"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-01-22T06:01:57Z"
lastCommitAt: "2026-10-03T22:05:06Z"
lastReleaseAt: "2026-07-23T05:10:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 45
maintainers: ["dreamsyntax"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d818cc000db7c91b7d0ad9d34f2e364d58ea6d8a641db9869a6b5a8b499dcf0/ShadowTheHedgehogHacking/ShadowONE"
---

### About 

ShadowONE is a successor to the HeroesONE and HeroesONE-Reloaded ONE file editors.

* Full linux support including auto .desktop integration on run
* Auto reg/file association for Windows
* Search/filter content in a .ONE for fast searching
* Internal file move action -> Shift+S (Shift Down) and Shift+W (Shift Up) or Drag within the .one to deal with pesky parser restrictions
* Show compression/decompression metadata

### Drag & Drop / Double Click

You can drag & drop files to the editor.

Dragging from the editor to the same editor will allow you to move entries

Dragging to the editor from your file system...
* If a single .one is dropped, it will be opened, discarding the currently loaded data.
* If a file dropped matches the name of an item already in the loaded data, it will replace/update the loaded data.
* If a file dropped does not match the name of an item already in the loaded data, it is inserted at the position after the currently selected item. If no item is selected it is appended to the end of the items.

Dragging from the editor to your file system...
* Will allow you to copy single files directly (equivalent to extract feature)
* Will allow you to…
