---
repo: "jonahsnider/doglog"
name: "doglog"
description: "DogLog is a simple, unopinionated logging library for FRC teams"
readmeQualityOk: true
url: "https://github.com/jonahsnider/doglog"
homepage: "https://doglog.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["frc", "frc-java", "frc-library", "logging"]
stars: 17
forks: 4
openIssues: 14
closedIssues: 39
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2024-04-26T18:28:52Z"
lastCommitAt: "2026-11-18T11:07:21Z"
lastReleaseAt: "2024-07-22T07:25:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 94
undervaluedScore: 69
maintainers: ["jonahsnider", "jonahsnider[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/810692198c2d3434243d6817d48318e5f77c282bc77e80a763799a7321e07154/jonahsnider/doglog"
fundingLinks: ["PATREON:https://patreon.com/jonahsnider", "KO_FI:https://ko-fi.com/jonahsnider"]
discussionCount: 2
---

# DogLog

DogLog is a logging library for FRC teams, created for use on [Team 581](https://github.com/team581).

See [**the documentation site**](https://doglog.dev) for more information.

## Installation

**Please see the [installation guide](https://doglog.dev/getting-started/installation/) for more information.**

### Installing via WPILib VS Code extension

DogLog is available to install through the WPILib VS Code extension.

### Vendordep URL

```text
https://doglog.dev/vendordep.json
```

## Usage

**Please see the [usage guide](https://doglog.dev/getting-started/usage/) for more information.**

First, import the library from the dev.doglog namespace:

```java
import dev.doglog.DogLog;
```

And then you can use Doglog.log() to log values like so:

```java
DogLog.log("Arm/Position", motor.getPosition().getValue());
```

You can include these log statements in your periodic methods, or anywhere else you want to log data.
