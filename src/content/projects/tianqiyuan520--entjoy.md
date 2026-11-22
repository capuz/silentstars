---
repo: "tianqiyuan520/EntJoy"
name: "EntJoy"
description: "A technology stack written in C#, C++ & ISPC that imitates Unity DOTS"
originalDescription: "一个由C#&C++&ISPC编写的仿照Unity DOTS的技术栈"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/tianqiyuan520/EntJoy"
language: "C#"
languages: ["C#", "C++"]
languagePcts: [73, 23]
topics: ["ecs", "godot", "burst", "dots", "ispc", "unity", "cpp", "entjoy"]
stars: 16
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-05-10T11:39:31Z"
lastCommitAt: "2026-11-22T02:02:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 61
maintainers: ["tianqiyuan520"]
openGraphImageUrl: "https://opengraph.githubassets.com/b663e64f72b6ff3362b46de0cfde234f97e0d964f6f53440534e2536ea17e0c4/tianqiyuan520/EntJoy"
---

# EntJoy

**Chinese** · [English](https://github.com/tianqiyuan520/EntJoy/blob/HEAD/README.en.md)

Write data and tasks in C#, and execute them with C#, C++, or ISPC. EntJoy is a game framework that does not include a renderer. It can be connected to a rendering layer provided by Godot, Unity, or a custom engine.

[Usage Guide](https://github.com/tianqiyuan520/EntJoy/blob/HEAD/docs/public/Native-Jobs-Guide.md) · [Runtime Contracts](https://github.com/tianqiyuan520/EntJoy/blob/HEAD/docs/public/Runtime-Contracts-and-Known-Limitations.md) · [Sample](#sample-导航) · [Tests and Tools](#tests-与-tools) · [DeepWiki](https://deepwiki.com/tianqiyuan520/EntJoy)

## Project Design

Data, scheduling, and execution are separated into layers. ECS stores components contiguously by Archetype / Chunk. JobSystem manages task dependencies and parallel execution. NativeTranspiler translates supported C# Jobs into C++ / ISPC at build time.
