---
repo: "Sgt-Imalas/Sgt_Imalas-Oni-Mods"
name: "Sgt_Imalas-Oni-Mods"
description: "All the ONI mods made by Sgt_Imalas"
readmeQualityOk: true
url: "https://github.com/Sgt-Imalas/Sgt_Imalas-Oni-Mods"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["harmony-mod", "modding", "oxygen-not-included", "oxygen-not-included-mods"]
stars: 80
forks: 29
openIssues: 12
closedIssues: 298
watchers: 3
contributors: 14
recentReleases: 0
createdAt: "2022-01-20T11:59:05Z"
lastCommitAt: "2026-09-14T09:12:46Z"
lastReleaseAt: "2025-03-09T01:47:54Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 52
maintainers: ["Sgt-Imalas", "wuguo13842"]
openGraphImageUrl: "https://opengraph.githubassets.com/548f3367d065aadfe01de16ec556b61058f2a36238636a69ef33481a63615c76/Sgt-Imalas/Sgt_Imalas-Oni-Mods"
fundingLinks: ["GITHUB:https://github.com/Sgt-Imalas", "PATREON:https://patreon.com/Sgt_Imalas", "KO_FI:https://ko-fi.com/sgtimalas"]
---

## Sgt_Imalas-Oni-Mods
Mods for Oxygen Not Included and ONI - Spaced Out.
 (The List of mods is probably not up to date)

## How to build this Repository
1. clone/download repository and open it in visual studio
2. make a copy of the `Directory.Build.props.default` file and name it `Directory.Build.props.user`, then adjust the variables "ModFolder" and "GameLibsFolder" inside of the copy to reference your local dev folder and your game folder. This will relink all references to the game assemblies.
3. if you don't know what "refasmer" is, next to RefasmerInstalled, change the 1 to a 0
4. run `dotnet tool restore` to install the required dotnet tools (publiciser and refasmer) for building the mods. (if you are on linux, you need dotnet 6 for the publicizer, using the install script by ms thats: `sudo ./dotnet-install.sh --channel 6.0 --install-dir /usr/share/dotnet`)
5. Done. All mods should now be able to compile properly and be copied to the dev-folder on completion. If you want to make a new mod and use this repository as a base, make sure to allow "Unsafe Code" in the new mods project settings as this is required for using publiciser (Update; this should now happen…
