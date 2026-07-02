---
repo: "RDCN-Community-Developers/RhythmBase"
name: "RhythmBase"
description: "A high-performance, dependency-free development library for parsing and editing Rhythm Doctor and Adofai levels."
url: "https://github.com/RDCN-Community-Developers/RhythmBase"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["rhythm-doctor", "csharp", "multiplatform", "a-dance-of-fire-and-ice", "rizline", "adofai", "beatblock"]
stars: 12
forks: 2
openIssues: 0
closedIssues: 6
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2024-02-13T12:04:44Z"
lastCommitAt: "2026-07-02T06:32:47Z"
lastReleaseAt: "2025-10-20T15:13:00Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 99
undervaluedScore: 70
maintainers: ["OLDRedstone"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa78e103422468fde1b2ec28a1c99df7da1b3fd7333f8db0d2e88e98f9f442b6/RDCN-Community-Developers/RhythmBase"
fundingLinks: ["KO_FI:https://ko-fi.com/obugs", "CUSTOM:https://afdian.com/a/obugs"]
---

</p>

> If you find this project helpful, consider supporting via [Afdian (China)](https://afdian.com/a/obugs) or
> [Ko-fi (International)](https://ko-fi.com/obugs)!

# RhythmBase

#### \[ English | [中文](./README.zh-cn.md) \]

A high-performance, systematic, and intuitive level editing proxy development library for rhythm game developers, independent of any game engine.

Development progress is tracked [here](./TODO.md).

Examples can be found [here](/RhythmBase.Test/Tutorial.cs).

## Architecture Overview

```
RhythmBase                         ← Core library (NuGet package)
├── Global/                        ← Public interfaces, types, serialization infrastructure
│   ├── Components/                ← Color, EnumCollection, TickTime interface, Level interface...
│   ├── Events/                    ← IEvent, IDurationEvent, IFileEvent, IForwardEvent...
│   ├── Converters/                ← MetadataJsonConverter, MemberConverter, TypeConverterRegistry...
│   └── Extensions/                ← LINQ queries, event navigation...

RhythmBase.Generator              ← Source generator (Roslyn Incremental SourceGenerator)
└── Auto-generates: TickTime / TickTimeRange / Calculator /…
