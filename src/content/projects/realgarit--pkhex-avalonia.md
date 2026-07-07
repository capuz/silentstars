---
repo: "realgarit/PKHeX-Avalonia"
name: "PKHeX-Avalonia"
description: "A cross-platform fork of the Pokémon save file editor \"PKHeX\" built with .NET 10 and Avalonia."
readmeQualityOk: true
url: "https://github.com/realgarit/PKHeX-Avalonia"
homepage: "https://github.com/realgarit/PKHeX-Avalonia/releases"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["avalonia", "csharp", "dotnet", "pkhex", "pokemon"]
stars: 21
forks: 2
openIssues: 14
closedIssues: 59
watchers: 2
contributors: 191
recentReleases: 0
createdAt: "2026-01-10T12:47:27Z"
lastCommitAt: "2026-07-07T06:37:13Z"
lastReleaseAt: "2026-03-24T21:06:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 45
maintainers: ["realgarit", "davidbitterlich"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd0f41068fe13641aded2df3f0c206b29a49f7a60315bd2a9c7d7c7ed5506e29/realgarit/PKHeX-Avalonia"
---

# PKHeX Avalonia

PKHeX Avalonia is a cross-platform port of [PKHeX](https://github.com/kwsch/PKHeX). It's the classic Pokémon save editor, built with Avalonia so it runs on **Windows**, **macOS**, and **Linux**.

## Download

Get the latest build for your platform from the [Releases](https://github.com/realgarit/PKHeX-Avalonia/releases/latest) page:

| Platform | File |
|----------|------|
| Windows (x64) | `PKHeX-Avalonia-win-x64.zip` |
| Linux (x64) | `PKHeX-Avalonia-linux-x64.zip` |
| macOS Apple Silicon | `PKHeX-Avalonia-osx-arm64.zip` |
| macOS Intel | `PKHeX-Avalonia-osx-x64.zip` |

Every build is self-contained, so you don't need to install .NET.

**macOS note:** the app is ad-hoc signed but not notarized. So on first launch macOS warns about an "unidentified developer". To open it:
1. Right-click the app, pick **Open**, then click **Open** in the dialog.
2. Or run `xattr -d com.apple.quarantine ~/Downloads/PKHeX.Avalonia.app` in Terminal.

## Project Structure

The code is split into layers so the UI stays separate from the PKHeX logic:

| Project | What it does | Uses |
|---------|--------------|------|
| **PKHeX.Core** | Save, entity, and legality logic. Kept 1:1 with…
