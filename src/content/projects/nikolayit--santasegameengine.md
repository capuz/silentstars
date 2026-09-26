---
repo: "NikolayIT/SantaseGameEngine"
name: "SantaseGameEngine"
description: "Santase card game engine"
readmeQualityOk: true
url: "https://github.com/NikolayIT/SantaseGameEngine"
homepage: "https://play.google.com/store/apps/details?id=com.nksolutions.santase"
language: "C#"
languages: ["C#"]
languagePcts: [99]
topics: ["santase", "card-game", "csharp"]
stars: 48
forks: 14
openIssues: 5
closedIssues: 9
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2015-03-31T13:02:08Z"
lastCommitAt: "2026-09-26T08:47:39Z"
lastReleaseAt: "2018-10-16T08:07:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 88
undervaluedScore: 51
maintainers: ["NikolayIT"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6f24f51a9f0518753df832d104ae746bdfb6463f6446d4ebed6c4bca75d8947/NikolayIT/SantaseGameEngine"
fundingLinks: ["GITHUB:https://github.com/NikolayIT"]
---

# Santase Game Engine

**Santase** (also known as **66**, Сантасе, **Sixty-six** or **Sechsundsechzig**) is a
well-known card game in Bulgaria, also played in Germany and Austria (as **Schnapsen**).

It is a fast **6-card game** for **2 players**, played with a 24-card deck consisting of
the _Ace_, _Ten_, _King_, _Queen_, _Jack_ and _Nine_ of each suit.

The core engine in `src/Santase.Logic` is published as the
[**SantaseGameEngine**](https://www.nuget.org/packages/SantaseGameEngine) NuGet package
(MIT, currently version `3.0.0`, targeting **.NET 10**). Everything else in the repository
is AI players, UIs and a benchmarking simulator built on top of that engine.

## Screenshot

The cross-platform .NET MAUI app (`src/UI/Santase.UI`), playing against the Smart Player:

## Rules of the game

The full rules **as implemented by this engine** are documented in [RULES.md](https://github.com/NikolayIT/SantaseGameEngine/blob/HEAD/RULES.md).

External references (these describe different variants and do not match this engine
exactly):

- Wikipedia (EN): <https://en.wikipedia.org/wiki/Sixty-six_(card_game)>
- Wikipedia (BG):…
