---
repo: "DisaWdcba/OpenEverything"
name: "OpenEverything"
description: "Open-source replica of Everything"
originalDescription: "Everything 的开源复刻版本"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/DisaWdcba/OpenEverything"
language: "C"
languages: ["C"]
languagePcts: [97]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 9
createdAt: "2026-07-08T04:07:25Z"
lastCommitAt: "2026-07-28T14:54:30Z"
lastReleaseAt: "2026-07-28T14:57:45Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 78
undervaluedScore: 23
maintainers: ["DisaWdcba"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b14aa62d2130ab307216a750143fd39ac936caff60db4ad0add20a1c01347d5/DisaWdcba/OpenEverything"
---

# OpenEverything v0.2.1

Open-source replica of Everything.

## Principle

OpenEverything uses NTFS MFT/USN Journal to create a local file index and provides a fast file search experience through the Win32 native interface. The first run will create the index and write to local cache, subsequent starts will prioritize reading from the cache.

## Build

Requires Windows, Visual Studio Build Tools/MSVC.

```bat
build.bat
```

Build output:

- `build/OpenEverything.exe`: Win32 graphical interface, also supports CLI and MCP modes
- `build/OpenEverythingCLI.exe`: Command line client and MCP server
- `build/OpenEverythingService.exe`: Background NTFS/USN indexing service
- `build/OpenEverythingSetup.exe`: Single-file installer with embedded GUI, CLI, and service

Additional parameters: `--debug`, `--release`, `--clean`, and `--tests`.

## CLI

`OpenEverything.exe` and `OpenEverythingCLI.exe` provide the same CLI/MCP commands. The former enters GUI mode when started without parameters, while the latter remains a standalone pure command line version. Command mode will prioritize connecting to `OpenEverythingService` and reading the service-maintained…
