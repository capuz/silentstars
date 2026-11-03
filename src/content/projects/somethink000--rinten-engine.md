---
repo: "somethink000/Rinten-Engine"
name: "Rinten-Engine"
description: "Rinten Engine - game engine"
readmeQualityOk: true
url: "https://github.com/somethink000/Rinten-Engine"
language: "C#"
languages: ["C#"]
languagePcts: [92]
stars: 33
forks: 3
openIssues: 1
closedIssues: 8
watchers: 1
contributors: 3
recentReleases: 6
createdAt: "2026-10-09T13:16:40Z"
lastCommitAt: "2026-11-03T10:51:56Z"
lastReleaseAt: "2026-10-30T16:49:26Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 88
undervaluedScore: 45
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/2c183b78886dfd80196d3c353a3e87d8af94bbbaf272b80b6222104fa7c26990/somethink000/Rinten-Engine"
---

## Get it

Download the editor from [Releases](https://github.com/somethink000/Rinten-Engine/blob/HEAD/../../releases). Its launcher installs, switches and removes engine versions after that.

## Build it

You need the .NET 10 SDK. On Linux also cmake, ninja, clang and the X11/Wayland headers.

```
./Bootstrap.sh      # Linux
Bootstrap.bat       # Windows
```

The editor lands in `game/`. After the first build, `./build.sh` rebuilds without starting over.

## Inside

- `engine/` - the engine, the editor and the build tools, in C#
- `engine/Core/` - a small native core: physics, audio, model import
- `game/addons/` - the editor's tools and the base library games are written against, also C#

## License

MIT, see [LICENSE.md](https://github.com/somethink000/Rinten-Engine/blob/HEAD/LICENSE.md). Third-party parts keep their own licences, listed in `game/thirdpartylegalnotices`.
