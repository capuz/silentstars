---
repo: "nupp-lang/nupp"
name: "nupp"
description: "A typed programming language for LuaJIT with an optimizing compiler, AOT, SIMD, GPU, blocking style async, comptime, and built-in tooling"
readmeQualityOk: true
url: "https://github.com/nupp-lang/nupp"
homepage: "https://nupp.org"
language: "Lua"
languages: ["Lua"]
languagePcts: [69]
topics: ["compiler", "comptime", "ffi", "luajit"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 48
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-07T01:25:13Z"
lastCommitAt: "2026-09-20T08:46:02Z"
lastReleaseAt: "2026-09-19T23:47:47Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 71
maintainers: ["mtdowling"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ca75647d195784c8c8e75ea6f311b056a8396cdb8c8dcc94e2bbc85369046c4/nupp-lang/nupp"
discussionCount: 0
---

# Nupp

Nupp is LuaJIT with checked types, resource contracts, concurrency, and native
compilation. It keeps ordinary Lua modules and control flow while adding the
information needed to check, optimize, and package a program.

```nupp
local record Point
    x: number
    y: number
end

local function scale(point: Point, factor: number): Point
    return new Point(x = point.x * factor, y = point.y * factor)
end

print(scale(new Point(x = 3, y = 4), 2).x)
```

## Install

On Apple-silicon macOS:

```bash
brew install nupp-lang/tap/nupp
```

On 64-bit Windows:

```powershell
scoop bucket add nupp https://github.com/nupp-lang/scoop-bucket
scoop install nupp
```

Linux archives and manual installation options are in the
[installation guide](https://github.com/nupp-lang/nupp/blob/HEAD/docs/getting-started/installation.md).

## Start a project

The built-in application template includes a manifest, a checked module, a
test, and the tasks that run them:

```bash
nupp init app hello
cd hello
nupp check
nupp test
nupp task start
```

See [Getting started](https://github.com/nupp-lang/nupp/blob/HEAD/docs/getting-started/index.md) for the daily loop
and the browser, library, SIMD, and LÖVE…
