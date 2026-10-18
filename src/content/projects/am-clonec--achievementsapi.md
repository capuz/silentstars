---
repo: "am-clonec/AchievementsAPI"
name: "AchievementsAPI"
description: "An among us API for adding achievements."
readmeQualityOk: true
url: "https://github.com/am-clonec/AchievementsAPI"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-05-31T18:47:01Z"
lastCommitAt: "2026-10-18T08:16:35Z"
lastReleaseAt: "2026-07-07T07:36:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 52
maintainers: ["rewalo", "AtonyGit", "am-clonec"]
openGraphImageUrl: "https://opengraph.githubassets.com/370c16ca1ce232194935c873dedd42cad3e777bb5239c1ad6de1be7d00459031/am-clonec/AchievementsAPI"
---

# Achievements API

An Among Us API for registering mod achievements, tracking progress, and displaying in-game achievement menus and toast notifications.

## Features

- Property-based or runtime achievement registration
- Progress counters with persistent state
- Hidden achievements, rarity tiers, and Skeld Points
- Achievement tags for filtering and searching (e.g. by role or modifier)
- In-game menu with categories, filters, details, and toast settings
- Animated toast notifications with sound and swipe-to-dismiss
- Mouse, keyboard, and controller support
- Encrypted, signed save data

## Screenshots

## Quick start

Reference `AchievementsAPI` from your mod and subclass `AchievementsTab`. Achievements are declared as properties and discovered automatically when your plugin loads:

```csharp
using Reactor.Localization.Utilities;

[BepInAutoPlugin]
[BepInDependency(AchievementsAPIPlugin.Id)]
public class MyPlugin : BasePlugin
{
    public override void Load() { }
}

public class MyTab : AchievementsTab
{
    private static readonly StringNames TabName = CustomStringName.CreateAndRegister("My Mod");

    public override StringNames Name => TabName;
    public override string…
