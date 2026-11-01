---
repo: "glacier-modding/NavKit"
name: "NavKit"
description: "A tool to generate NAVP and AIRG files for Hitman: World of Assassination Scenes in the Glacier 2 Engine"
readmeQualityOk: true
url: "https://github.com/glacier-modding/NavKit"
language: "C++"
languages: ["C++"]
languagePcts: [91]
stars: 9
forks: 2
openIssues: 28
closedIssues: 56
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2024-06-30T08:34:24Z"
lastCommitAt: "2026-11-01T10:45:01Z"
lastReleaseAt: "2024-09-26T07:31:35Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 70
maintainers: ["dbierek", "github-actions[bot]", "RDIL"]
openGraphImageUrl: "https://opengraph.githubassets.com/85d898966c67165e8d373736d7bead645c4e16a43b7b72c71d404497f5baaf88/glacier-modding/NavKit"
---

# NavKit
*A tool to generate Navp and Airg files for Hitman: World of Assassination Scenes in the Glacier 2 Engine*
# How to Use
The [NavKit Guide](https://glaciermodding.org/docs/modding/hitman/guides/customcampaigns/using_navkit) is available on the [Glacier Modding Wiki](https://glaciermodding.org/) and provides more detailed step-by-step instructions on how to use NavKit.

You can run NavKit by opening `NavKit.exe`. To use the **Scene Extraction** feature, you will need ZHMModSdk installed. For the **Build Obj** and **Build Blend file** feature, you will also need to have Blender installed.

You will also need to install the latest Visual C++ Redistributable from https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-140. Make sure you get the X64 version.

Functions available are loading and saving Navp and Navp.json, loading Airg and Airg.json, loading and saving Obj, scene extraction, building Obj, building blend files, building Navp, and building Airg.  

# Full generation of Navp and Airg (Scene Extraction, Navp generation, Airg generation)
1. Download the latest release of NavKit (https://github.com/glacier-modding/NavKit/releases/latest) and…
