---
repo: "revolutionxk/roblox-modloader"
name: "roblox-modloader"
description: "A powerful mod loader that revolutionizes Roblox Studio development with native C++ mods and internal Luau scripting capabilities."
url: "https://github.com/revolutionxk/roblox-modloader"
homepage: "https://robloxmodloader.com"
language: "C#"
languages: ["C#"]
languagePcts: [84]
topics: ["mod", "modloader", "roblox", "roblox-studio"]
stars: 29
forks: 1
openIssues: 17
closedIssues: 18
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2024-12-13T15:03:29Z"
lastCommitAt: "2026-06-27T06:22:06Z"
lastReleaseAt: "2026-06-27T03:08:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 84
undervaluedScore: 54
maintainers: ["revolutionxk"]
openGraphImageUrl: "https://opengraph.githubassets.com/4010586a0d50d75fcbb500c4b9178611aff1b12cf8bffa5cbfb68cd7e8ecabc1/revolutionxk/roblox-modloader"
discussionCount: 1
---

</p>
  <h1 align="center"><b>Roblox ModLoader</b></h1>
    A modding framework for Roblox Studio, enabling native, C#, and internal Luau script mods.
  </p>
</p>

</div>

> [!NOTE]
> This project is still in development and may contain bugs or incomplete features.

> [!WARNING]
> Roblox changed (shuffled) the internal layout of Luau’s structs a few months ago, so the in-memory structures we relied on no longer line up. Because of that I’m building a static-analysis [dumper](https://github.com/revolutionxk/roblox-modloader/tree/develop/dumper) to reconstruct the correct structs and offsets so scripting support can work again. Luau/internal scripting is temporarily disabled while I finish that—native C++/C# mods keep working normally. I’ll re-enable scripting once the [dumper](https://github.com/revolutionxk/roblox-modloader/tree/develop/dumper) produces a stable, reliable mapping.

## Cross-Platform Support

- [x] Windows
- [x] Linux Vinegar
- [ ] macOS (planned)

## Quick Start

### Installation

RML targets your local Roblox **Studio** installation (typically under
`%LOCALAPPDATA%\Roblox\Versions\<version>\`).

### Using the launcher (Not finished yet)

The launcher handles…
