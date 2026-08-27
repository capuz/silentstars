---
repo: "AzureDoom/Hytale-Gradle-Plugin"
name: "Hytale-Gradle-Plugin"
description: "Gradle plugin for AzureDooms Hytale mods"
readmeQualityOk: true
url: "https://github.com/AzureDoom/Hytale-Gradle-Plugin"
homepage: "https://azuredoom.com/"
language: "Groovy"
languages: ["Groovy"]
languagePcts: [100]
topics: ["gradle-plugin", "hytale", "hytale-modding", "hytale-plugin"]
stars: 15
forks: 2
openIssues: 0
closedIssues: 16
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-22T04:29:15Z"
lastCommitAt: "2026-08-27T14:28:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 47
maintainers: ["AzureDoom"]
openGraphImageUrl: "https://opengraph.githubassets.com/100848c85cf6d4bb0cb93186bde6db8ca2b7d2af0d5682a8dcbb7bf7af6f5b11/AzureDoom/Hytale-Gradle-Plugin"
---

# Hytale Gradle Plugin

A Gradle plugin for Hytale mod development. It handles manifest generation and validation, local server runs, asset resolution, dependency staging, IDE source attachment, workspace orchestration, and optional Hytale Javadoc injection.

## Quickstart

Need a new project? Start with the [template generator](https://template.azuredoom.com/).

```gradle
plugins {
    id 'java'
    id 'com.azuredoom.hytale-tools' version '1.0.50'
}

hytaleTools {
    hytaleVersion = '0.+'
    patchline = 'release'
    manifestGroup = 'com.example.mods'
    modId = 'examplemod'
    mainClass = 'com.example.mods.ExampleMod'
    modCredits = 'yourname'
}
```

Then run:

```bash
./gradlew setupHytaleDev
./gradlew runServer
```

For debugging and hot swap:

```bash
./gradlew runServer -Ddebug=true -Dhotswap=true
```

## What it provides

- Generated and validated `manifest.json`
- Authenticated Hytale asset resolution
- Local Hytale server launch tasks
- Runtime plugin and library staging
- Decompiled source attachment for IDEs
- Hosted Hytale Javadocs in generated sources
- Multi-project workspace support
- VS Code run, task, and debug configuration
- Diagnostics and cleanup tasks…
