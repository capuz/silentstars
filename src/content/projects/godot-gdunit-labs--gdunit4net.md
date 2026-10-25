---
repo: "godot-gdunit-labs/gdUnit4Net"
name: "gdUnit4Net"
description: "Official C# implementation of GDUnit4 - a comprehensive unit testing framework for Godot 4. Features VS/Rider test adapter integration, parameterized tests, scene runners, and extensive assertion methods."
readmeQualityOk: true
url: "https://github.com/godot-gdunit-labs/gdUnit4Net"
homepage: "https://godot-gdunit-labs.github.io/gdUnit4/latest/csharp_project_setup/csharp-setup/"
language: "C#"
languages: ["C#"]
languagePcts: [99]
topics: ["testing", "testing-tools", "vstest", "testing-framework", "csharp", "game-development", "gdunit4", "godot4", "unit-testing", "dotnet"]
stars: 192
forks: 23
openIssues: 23
closedIssues: 175
watchers: 1
contributors: 13
recentReleases: 0
createdAt: "2023-01-10T18:50:11Z"
lastCommitAt: "2026-10-25T09:01:31Z"
lastReleaseAt: "2025-06-21T09:07:56Z"
status: "thriving"
tags: ["solo_builder", "funded", "community_hub"]
healthScore: 87
undervaluedScore: 43
maintainers: ["MikeSchulze", "dependabot[bot]", "Tayrtahn"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/587438210/fdef551e-b725-4043-b4b4-24ab448ea6c0"
fundingLinks: ["PATREON:https://patreon.com/GodotGdUnitLabs", "CUSTOM:https://www.paypal.com/paypalme/GdUnit3"]
discussionCount: 22
---

The analyzers need the compiler of the named .NET SDK.
  The .NET SDK 9.0.300 ships with Visual Studio 17.14, the .NET SDK 8.0.100 with Visual Studio 17.8.<br/>
  With an older compiler, the build reports the warning <code>CS9057</code> and the analyzers do not run.

## What is gdUnit4Net

GdUnit4Net is a **feature-complete unit testing framework** for Godot C# projects that is **fully compatible with the VSTest standard**. It provides an API and VS test adapter to
run your Godot C# tests seamlessly in Visual Studio (Code), JetBrains Rider, and any VSTest-compatible environment.

### Key Highlights

🚀 **High Performance**: Up to 10x faster test execution for logic-only tests  
🎯 **VSTest Compatible**: Full integration with Visual Studio Test Platform  
⚡ **Smart Runtime**: Tests run without Godot runtime by default, with opt-in Godot features  
🔧 **Feature Complete**: All standard testing features you expect from modern frameworks

### Main Features

* **Writing, executing and debugging tests** with full IDE integration
* **Wide range of assertion methods** for verifying the behavior and output of your code
* **Parameterized Tests (Test Cases and DataPoints)** for testing…
