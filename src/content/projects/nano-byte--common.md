---
repo: "nano-byte/common"
name: "common"
description: "Utility classes, interfaces, controls, etc. with an emphasis on cross-platform development, OS integration and task progress UIs"
readmeQualityOk: true
url: "https://github.com/nano-byte/common"
homepage: "https://common.nano-byte.net"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 12
forks: 8
openIssues: 0
closedIssues: 6
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2014-04-09T10:03:31Z"
lastCommitAt: "2026-09-09T08:17:21Z"
lastReleaseAt: "2021-03-09T13:51:00Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 81
maintainers: ["bastianeicher", "renovate[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/694dc1202ed5eff228025668ed39ee0f0e4949e1ae7197f5cf6c5d77c83818a7/nano-byte/common"
---

# NanoByte.Common

**NanoByte.Common** provides various utility classes and data structures with an emphasis on:

- integration with native Windows and Linux features,
- network and disk IO,
- advanced collections and
- undo/redo logic.

**NanoByte.Common.AnsiCli** adds ANSI console output. Powered by [Spectre.Console](https://github.com/spectresystems/spectre.console).

**NanoByte.Common.WinForms** adds various Windows Forms controls with an emphasis on:

- progress reporting and
- data binding.

**NanoByte.Common.EtoForms** adds cross-platform GUI controls powered by [Eto.Forms](https://github.com/picoe/Eto).

## Building

The source code is in [`src/`](https://github.com/nano-byte/common/blob/HEAD/src/), config for building the API documentation is in [`doc/`](https://github.com/nano-byte/common/blob/HEAD/doc/) and generated build artifacts are placed in `artifacts/`. The source code does not contain version numbers. Instead the version is determined during CI using [GitVersion](https://gitversion.net/).

To build on Windows install [Visual Studio 2026 v18.0 or newer](https://www.visualstudio.com/downloads/) and run `.\build.ps1`.  
To build on Linux or macOS run `./build.sh`.…
