---
repo: "chickensoft-games/GodotNodeInterfaces"
name: "GodotNodeInterfaces"
description: "Make it possible to fully test Godot nodes and scenes with the appropriate adapters and interfaces."
readmeQualityOk: true
url: "https://github.com/chickensoft-games/GodotNodeInterfaces"
homepage: "https://www.nuget.org/packages/Chickensoft.GodotNodeInterfaces/"
language: "C#"
languages: ["C#"]
languagePcts: [98]
stars: 39
forks: 4
openIssues: 1
closedIssues: 2
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2023-10-15T14:13:24Z"
lastCommitAt: "2026-07-16T05:58:53Z"
lastReleaseAt: "2023-10-17T04:56:19Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 38
maintainers: ["renovate[bot]", "blewis-web", "wlsnmrk"]
openGraphImageUrl: "https://opengraph.githubassets.com/49d13f238515adcf0bb11d86cdf046db81e7eba59d5bd3be03ffe4ff98d01fd8/chickensoft-games/GodotNodeInterfaces"
---

# GodotNodeInterfaces

Godot node interfaces and adapters.

---

</p>

## 🤔 What...why?

In a perfect world, there are cases where mocking Godot nodes for testing makes a lot of sense:

- You are a TDD cultist.
- You want to unit-test a Godot node script.
- You don't want to instantiate the corresponding scene for a node script. Why? Because instantiating a scene also instantiates any children and their scripts, and so on. Just instantiating scripts and adding them to the scene causes test coverage to be collected, and it ends up covering far more of the app than the actual system-under-test (the node script you were trying to test), which makes it hard to tell which scripts are still un-tested.

GodotSharp doesn't expose interfaces for Godot nodes, making it [very expensive][expensive-toys] to mock them using proprietary enterprise-grade mocking solutions.

If you're still confused, this probably isn't for you. It's one of those "you'll know if you ever want/need this" type of things. This is really just for those completionists who like writing tests and getting 100% code coverage.

## 🧐 I don't see anything here

That's because the interfaces and adapters are generated at…
