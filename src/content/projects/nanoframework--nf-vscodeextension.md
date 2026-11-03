---
repo: "nanoframework/nf-VSCodeExtension"
name: "nf-VSCodeExtension"
description: "🧰 Visual Studio Code extension for .NET nanoFramework and cross platform tools to build and deploy"
readmeQualityOk: true
url: "https://github.com/nanoframework/nf-VSCodeExtension"
homepage: "https://www.nanoframework.net"
language: "TypeScript"
languages: ["TypeScript", "C#"]
languagePcts: [54, 44]
topics: ["esp32", "stm32", "mcu", "visual-studio-code", "hacktoberfest", "i-am-a-nano-tool"]
stars: 14
forks: 12
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 18
recentReleases: 0
createdAt: "2021-09-28T07:27:42Z"
lastCommitAt: "2026-11-03T10:52:11Z"
lastReleaseAt: "2021-12-07T11:39:20Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded", "fork_magnet"]
healthScore: 87
undervaluedScore: 74
maintainers: ["dependabot[bot]", "Ellerbach", "josesimoes"]
openGraphImageUrl: "https://opengraph.githubassets.com/672c2c3a8bd6b784f8e44fa36df37e78c4c73461b62e048218ea1e1e6fe9a450/nanoframework/nf-VSCodeExtension"
fundingLinks: ["GITHUB:https://github.com/nanoframework", "OPEN_COLLECTIVE:https://opencollective.com/nanoframework"]
---

-----

# .NET nanoFramework VS Code Extension

This extension allows you to use VS Code to flash, build and deploy your C# code for .NET nanoFramework on your device regardless of the platform you're using. This has been tested on Mac, Linux (64 bits) and Windows (64 bits).

## Features

This .NET nanoFramework VS Code extension allow you to flash, build and deploy your C# .NET nanoFramework application on an ESP32 or STM32 MCU.

### GitHub Copilot agent

The extension includes a **.NET nanoFramework Agent** for GitHub Copilot Chat. After installing the extension, select the agent from the agents dropdown in Chat to get nanoFramework-specific guidance for API compatibility, embedded coding constraints, builds, and testing. No workspace-specific agent file is required.

### Flashing the device

Select `nanoFramework: Flash device` and follow the steps.

Based on the target you will select, the menus will automatically adjust to help you finding the correct version, DFU or Serial Port.

Once all options has been selected, you'll see the flashing happening:

### Building your code

Select `nanoFramework: Build Project` and follow the steps.

If you have multiple solutions in the open…
