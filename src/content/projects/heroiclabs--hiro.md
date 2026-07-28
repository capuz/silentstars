---
repo: "heroiclabs/hiro"
name: "hiro"
description: "The server interface for the Hiro game framework."
readmeQualityOk: true
url: "https://github.com/heroiclabs/hiro"
homepage: "https://heroiclabs.com/hiro/"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 58
forks: 13
openIssues: 1
closedIssues: 1
watchers: 8
contributors: 29
recentReleases: 0
createdAt: "2023-05-12T14:46:57Z"
lastCommitAt: "2026-07-28T14:57:25Z"
lastReleaseAt: "2023-10-04T22:36:34Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 44
maintainers: ["Calm0", "andresfelipemendez", "novabyte"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a93ad6388bbb3b8a7336d99897d83c7aaaa18206d23f3ebe48e3ca75ba4166a/heroiclabs/hiro"
---

Hiro
===

> The server interface for the Hiro game framework.

[Hiro](https://heroiclabs.com/hiro/) is a client and server framework built on top of [Nakama server](https://heroiclabs.com/nakama/) to rapidly build high performance, flexible, and composable gameplay systems like Achievements, Energies, Event Leaderboards, and much more.

The code is divided into a Go package of interfaces and a client package for one of these supported languages and game engines:

- A C# DLL which is packaged with utilities (such as UnityPurchasing, Unity Mobile Notifications, etc) for Unity Engine,
- An Unreal plugin, as well as CPP support for other engines,
- TypeScript-based JavaScript package for web games,
- And a Godot asset written in GDScript.

This repository maintains the public interfaces which make it easy to use the library from inside a Nakama game server project to extend and build additional gameplay systems. You can explore the features with an [API client](https://www.usebruno.com/) when you import the "hiro-openapi.yml" collection.

To learn more about Hiro and integrate it into your game project, have a look at these resources:

-…
