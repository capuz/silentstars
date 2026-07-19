---
repo: "tautcony/ChapterTool"
name: "ChapterTool"
description: "A simple tool for video chapter extract & process"
readmeQualityOk: true
url: "https://github.com/tautcony/ChapterTool"
language: "C#"
languages: ["C#"]
languagePcts: [96]
topics: ["dvd", "blu-ray", "video", "chapter", "extract", "bluray"]
stars: 109
forks: 12
openIssues: 2
closedIssues: 7
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2016-03-09T01:10:00Z"
lastCommitAt: "2026-07-19T06:11:14Z"
lastReleaseAt: "2017-05-04T08:57:13Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 94
undervaluedScore: 44
maintainers: ["tautcony"]
openGraphImageUrl: "https://opengraph.githubassets.com/fff4f91726c02ef25a95867b5eb3d2069b8c8602a3321cb3cc8d315a2d55572f/tautcony/ChapterTool"
---

# ChapterTool

ChapterTool is a cross-platform Avalonia desktop chapter editor for importing, adjusting, combining, and exporting chapter lists from text, disc playlist, and media container sources.

## Features

- Import chapter data from text files, disc playlist formats, BDMV folders, and media containers.
- Edit chapter names and timestamps in a cross-platform Avalonia UI.
- Apply time adjustments with a Lua expression/script editor that supports diagnostics, completion, and syntax highlighting.
- Calculate frame information from chapter times and frame rate settings.
- Combine supported multi-segment sources such as MPLS and IFO.
- Export chapters as `.txt`, `.xml`, `.qpf`, `.TimeCodes.txt`, `.TsMuxeR_Meta.txt`, `.cue`, `.json`, `.vtt`, and Celltimes output.
- Use the CLI to list supported formats, inspect selectable chapter groups, and convert chapter sources without launching the desktop UI.

## NuGet Package

The reusable chapter parsing and transformation library is published as [`ChapterTool.Core`](https://www.nuget.org/packages/ChapterTool.Core/) for .NET 8, .NET 9, and .NET 10 applications, including browser WebAssembly hosts.

Install it from NuGet.org:

```bash…
