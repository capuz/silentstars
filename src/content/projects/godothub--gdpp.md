---
repo: "godothub/gdpp"
name: "gdpp"
description: "Godot GDScript AOT & Extension"
readmeQualityOk: true
url: "https://github.com/godothub/gdpp"
homepage: "https://godothub.com"
language: "C++"
languages: ["C++"]
languagePcts: [82]
stars: 22
forks: 2
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-29T13:16:34Z"
lastCommitAt: "2026-10-25T09:01:07Z"
lastReleaseAt: "2026-10-09T07:32:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 77
undervaluedScore: 48
maintainers: ["moluopro"]
openGraphImageUrl: "https://opengraph.githubassets.com/58ba66ce872806053647a6a32d7eb87ed4a1d26b82255d5db1cba75fff867085/godothub/gdpp"
---

# Godot GDScript AOT & Extension

**GDPP** compiles GDScript into binaries:

- High performance: compiles to native code and binaries
- Cross-platform: supports desktop, mobile, and Web platforms
- Easy to use: one-click export after enabling the plugin
- Syntax extensions: a more powerful GDScript language

## Performance Results

| Workload | GDScript | GDPP AOT | Relative performance |
| --- | ---: | ---: | ---: |
| Matrix multiplication | 3.064 s | 30.397 ms | 10,080.53% |
| 2D test case | 17.776 μs/frame | 0.140 μs/frame | 12,697.14% |

> Note: These results were measured on a Mac mini with a 10-core M4 and 16 GB of memory, running macOS 26.6.2 with the official Godot 4.7.2 editor and export templates.

## Quick Start

1. Extract the plugin to `addons/gdpp`, then enable it.
2. Make sure a C++ compiler is installed locally, such as MSVC on Windows.
3. Export the project and wait for the compilation progress bar to complete.

## Syntax Extensions

GDPP targets compatibility with official GDScript and plans to support additional syntax. If you encounter compatibility issues or have suggestions for future GDScript syntax enhancements, please share them through an…
