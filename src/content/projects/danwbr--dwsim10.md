---
repo: "DanWBR/dwsim10"
name: "dwsim10"
description: "DWSIM - Open Source Process Simulator (.NET 10)"
readmeQualityOk: true
url: "https://github.com/DanWBR/dwsim10"
homepage: "https://dwsim.org"
language: "Visual Basic .NET"
languages: ["Visual Basic .NET", "C#"]
languagePcts: [54, 45]
topics: ["chemical-engineering", "chemical-kinetics", "chemical-reactions", "chemicals", "process", "simulation", "thermodynamic-models", "thermodynamic-properties", "thermodynamics", "thermodynamics-ai"]
stars: 51
forks: 15
openIssues: 7
closedIssues: 99
watchers: 3
contributors: 6
recentReleases: 10
createdAt: "2022-04-30T22:27:22Z"
lastCommitAt: "2026-11-06T12:47:42Z"
lastReleaseAt: "2026-09-10T11:43:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 98
undervaluedScore: 63
maintainers: ["DanWBR"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/487394225/883cbd7d-ebbc-459e-b11c-87156639aa1f"
fundingLinks: ["GITHUB:https://github.com/DanWBR", "PATREON:https://patreon.com/dwsim", "CUSTOM:https://www.buymeacoffee.com/dwsim"]
discussionCount: 18
---

## DWSIM - Open Source Process Simulator
Copyright 2008-2026 Daniel Wagner Oliveira de Medeiros and contributors

DWSIM is a software for modeling, simulating, and optimizing steady-state and dynamic chemical processes.

### License

DWSIM is licensed under the GNU General Public License (GPL) Version 3.

See COPYING for more information.

### Supported Operating Systems

- Windows (x64/arm64)
- Linux (x64/arm64)
- macOS (x64/arm64)

## Building

```
git clone --recursive https://github.com/DanWBR/dwsim10
```

```
dotnet build DWSIM.slnx
```

```
dotnet run --project ui/DWSIM.UI.Desktop.Avalonia
```

A flowsheet path on the command line opens as the first document.

## Layout

| Folder | What is in it |
|---|---|
| `engine/` | The simulator: interfaces, thermodynamics, unit operations, the flowsheet and its solver, the automation and fluent APIs |
| `ui/` | The desktop application, written in Avalonia |
| `external/` | Third-party source, as submodules |
| `lib/` | Managed assemblies that are not on NuGet, with a note on each |
| `tests/` | The test suites and the sample flowsheets they run |
| `packaging/` | The scripts that turn a publish into a `.deb`, an `.app` and a DMG |
|…
