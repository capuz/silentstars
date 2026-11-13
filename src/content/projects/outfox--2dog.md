---
repo: "outfox/2dog"
name: "2dog"
description: "2dog is Godot in .NET 🦴"
readmeQualityOk: true
url: "https://github.com/outfox/2dog"
homepage: "https://2dog.dev/"
language: "C#"
languages: ["C#"]
languagePcts: [80]
topics: ["csharp", "dotnet", "godot", "godot-engine", "libgodot", "godot4", "godotengine", "gamedev", "html5", "wasm"]
stars: 238
forks: 16
openIssues: 0
closedIssues: 37
watchers: 4
contributors: 7
recentReleases: 0
createdAt: "2026-01-10T11:45:20Z"
lastCommitAt: "2026-11-13T18:34:09Z"
lastReleaseAt: "2026-07-12T12:27:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 37
maintainers: ["thygrrr", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1131628177/b172698c-5609-4a7a-beb3-f370bf88041f"
---

# 🦴 2dog is Godot... just backward!

### Godot normally loads .NET, now .NET loads Godot.

**2dog** is available fully precompiled from [NuGet.org](https://www.nuget.org/packages/2dog/) and as [GitHub Releases](https://github.com/outfox/2dog/releases). *(no need to clone this repo)*

**2dog** packages Godot as a library (a slightly modified [`libgodot`](https://github.com/godotengine/godot/pull/110863))
that your .NET application hosts. Keep your Godot project exactly as it is, and run it on the desktop, in the
browser, inside a .NET UI, or under **xUnit and NUnit with a real Godot engine**, all with `dotnet` and your IDE.

📖 End-user documentation: **[2dog.dev](https://2dog.dev)**

## Build and develop locally

Poe is the build entry point; tasks live in [pyproject.toml](https://github.com/outfox/2dog/blob/HEAD/pyproject.toml).
`uv run --locked` installs the Python tools from `uv.lock`; [global.json](https://github.com/outfox/2dog/blob/HEAD/global.json)
pins the .NET SDK and optional workload set. Install **uv**, **Git LFS**, that .NET SDK,
and your platform's [Godot build dependencies](https://docs.godotengine.org/en/stable/engine_details/development/compiling/index.html).…
