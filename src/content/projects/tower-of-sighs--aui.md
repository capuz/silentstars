---
repo: "Tower-of-Sighs/AUI"
name: "AUI"
description: "Web UI for Minecraft"
originalDescription: "Web UI for Minecraft"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Tower-of-Sighs/AUI"
homepage: "https://doc.sighs.cc/ApricityUI/intro"
language: "Java"
languages: ["Java"]
languagePcts: [91]
stars: 23
forks: 16
openIssues: 5
closedIssues: 70
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2026-02-22T10:28:59Z"
lastCommitAt: "2026-10-25T08:40:19Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 60
maintainers: ["MerrySnow404", "QiHuang02", "IAFEnvoy"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa1b44792a672d67def1893661073223805dedcaaf8821ce4e48504e7970dccc/Tower-of-Sighs/AUI"
---

# ApricityUI

Design UI with HTML, CSS, and maybe JavaScript along.

Build Minecraft UIs with the classic H5 trio (HTML / CSS / JS).

## Project Structure

This project uses a `common + targets/<loader>-<minecraft-version>` multi-loader framework structure:

- `common/`: Shared source tree (Java, tests, loader-independent resources). It can be **compiled and tested on its own** (`gradlew -p common test`, see `common/build.gradle`) and does not reference any target-side classes. Loader-specific capabilities are registered through `com.sighs.apricityui.spi.AuiServices` and implemented on the target side (`ApricityUIForge` is the @Mod entry point, and `AuiServicesBootstrap` is responsible for registering services).
- `targets/forge-1.20.1/`: Forge 1.20.1 target, an independent Gradle project (with its own wrapper and configuration). Loader metadata (`META-INF/mods.toml`), mixin classes and their registration, and the @Mod entry point remain in the target.

Shared resources go in `common/src/main/resources/` and are merged into the final jar when the target is built. Any `*.jar` files in the target's own `libs/` directory are automatically added as `implementation` dependencies.

##…
