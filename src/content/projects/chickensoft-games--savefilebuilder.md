---
repo: "chickensoft-games/SaveFileBuilder"
name: "SaveFileBuilder"
description: "Compose chunks of save data into a single data type by creating loosely coupled save chunks at various points in the scene tree."
readmeQualityOk: true
url: "https://github.com/chickensoft-games/SaveFileBuilder"
homepage: "https://www.nuget.org/packages/Chickensoft.SaveFileBuilder"
language: "C#"
languages: ["C#"]
languagePcts: [81]
topics: ["chickensoft", "csharp", "godot", "save", "serialization"]
stars: 30
forks: 5
openIssues: 4
closedIssues: 0
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2024-06-10T03:17:51Z"
lastCommitAt: "2026-07-16T06:00:05Z"
lastReleaseAt: "2025-06-07T17:58:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 33
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/812860196/8c7aa0b4-eeb9-47aa-ab8a-37f13548068d"
---

# 👽 SaveFileBuilder

Compose chunks of save data into a single data type by creating loosely coupled save chunks at various points in the scene tree.

---

</p>

## 🥚 Getting Started

Find the latest version of [`Chickensoft.SaveFileBuilder`][nuget] on nuget.

```sh
dotnet add package Chickensoft.SaveFileBuilder
```

## 📄 SaveFile and Root SaveChunk

Find the highest node in your scene tree that needs to be concerned with save data to use as the root of your save file. Use [AutoInject] to provide the root save chunk to all its descendant nodes.

> [!TIP]
> Check out the Chickensoft [Game Demo] for a complete, working example of using SaveFileBuilder to save composed states of everything that needs to be persisted in a game.

```csharp
using Chickensoft.Introspection;
using Chickensoft.AutoInject;
using Chickensoft.SaveFileBuilder;
using Godot;

[Meta(typeof(IAutoNode))]
public partial class Game : Node3D
{
  public SaveFile<GameData> SaveFile { get; set; } = default!;

  // Provide the root save chunk to all descendant nodes.
  ISaveChunk<GameData> IProvide<ISaveChunk<GameData>>.Value() => SaveFile.Root;

  public void Setup()
  {
    SaveFile = new SaveFile<GameData>(…
