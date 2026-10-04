---
repo: "takuma-komatsu/dn2cpp"
name: "dn2cpp"
description: "An AOT .NET-to-C++ transpiler — where NativeAOT meets IL2CPP — with a native drop-in for Godot's Mono module"
readmeQualityOk: true
url: "https://github.com/takuma-komatsu/dn2cpp"
language: "C#"
languages: ["C#", "C"]
languagePcts: [48, 22]
stars: 33
forks: 4
openIssues: 1
closedIssues: 23
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-07-21T04:02:30Z"
lastCommitAt: "2026-10-04T10:01:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 41
maintainers: ["takuma-komatsu"]
openGraphImageUrl: "https://opengraph.githubassets.com/b790bc732bc6c5fed1d29d913d7678256dd4146ee39999d71dea6dee594e439c/takuma-komatsu/dn2cpp"
---

# dn2cpp

> [!WARNING]
> **Pre-1.0.** dn2cpp is actively developed and not yet a stability
> promise for shipping products. APIs, CLI flags, generated C++, and the
> runtime ABI can change between commits without deprecation, and a
> handful of IL/BCL corners stay fenced (see Non-goals below).

**dn2cpp is an ahead-of-time compiler from .NET IL to C++, plus the C++
runtime it targets.** The core is pure .NET and knows nothing about any
game engine: it takes an IL assembly and produces a native executable —
`dotnet publish` a console app straight to a native binary, the same job
NativeAOT does, reached by a different route that goes through C++.

Godot's primary route is `--dotnet-module`: a stock `Godot.NET.Sdk`
project — the real `GodotSharp`, the real source generators,
`res://Player.cs` attached to a node in the scene — transpiles whole and
drops into the engine's `modules/mono` load path in place of the C# game,
the same move IL2CPP makes on Unity's mono. The [forked editor][fork]
packages that mono-module drop-in as a one-click export; it does not use
GDExtension. The separate `--gdextension` lane emits a library that a
stock engine with no .NET support can load. Godot is an…
