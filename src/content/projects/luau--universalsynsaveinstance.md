---
repo: "luau/UniversalSynSaveInstance"
name: "UniversalSynSaveInstance"
description: "Shortly USSI. A universal saveinstance revival. This can also be edited and used as a Roblox-Format-File writer."
url: "https://github.com/luau/UniversalSynSaveInstance"
homepage: "https://luau.github.io/UniversalSynSaveInstance/"
language: "Luau"
languages: ["Luau", "Lua"]
languagePcts: [48, 41]
topics: ["lua", "lua-u", "luau", "save", "savemap", "roblox", "saveinstance", "decompile", "savegame", "saveplace"]
stars: 397
forks: 164
openIssues: 2
closedIssues: 89
watchers: 9
contributors: 3
recentReleases: 0
createdAt: "2023-09-12T23:24:40Z"
lastCommitAt: "2026-06-25T01:32:08Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 84
undervaluedScore: 33
maintainers: ["phoriah"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/690806548/b62c1428-0be6-403d-8d6d-ca9728e7ffc6"
fundingLinks: ["PATREON:https://patreon.com/drainchurch", "KO_FI:https://ko-fi.com/drainchurch"]
discussionCount: 10
---

</p>

# Loadstring

```lua
local Params = {
 RepoURL = "https://raw.githubusercontent.com/luau/UniversalSynSaveInstance/main/",
 SSI = "saveinstance",
}
local synsaveinstance = loadstring(game:HttpGet(Params.RepoURL .. Params.SSI .. ".luau", true), Params.SSI)()
local Options = {} -- Documentation here https://luau.github.io/UniversalSynSaveInstance/api/SynSaveInstance
synsaveinstance(Options)
```

# Universal Syn Save Instance

Or shortly USSI, a project aimed at resurrecting saveinstance function from Synapse X.<br />
Reason: Many tools fail miserably at providing good user experience when it comes to tinkering with saving instances.

> [!WARNING]
> As stated under the Section 7 (b) in the LICENSE:
> - You **MUST** always include the following Credit string: `UniversalSynSaveInstance https://discord.gg/wx4ThpAsmw`
> - You are **NOT** allowed to claim authorship of the source code provided in this repository
> - You **MUST** always include the following [License](https://github.com/luau/UniversalSynSaveInstance/blob/main/LICENSE)

## Disclaimer

This project is provided for development, debugging, archival, and research purposes within the Roblox platform.

It is not intended for…
